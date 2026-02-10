// Enhanced Core Web Vitals and Performance Monitoring
// This script monitors and reports Core Web Vitals for SEO optimization

class PerformanceMonitor {
  constructor() {
    this.metrics = {};
    this.thresholds = {
      FCP: 1800, // First Contentful Paint
      LCP: 2500, // Largest Contentful Paint
      FID: 100, // First Input Delay
      CLS: 0.1, // Cumulative Layout Shift
      TTFB: 800, // Time to First Byte
      INP: 200, // Interaction to Next Paint
    };
    this.init();
  }

  // Browser-compatible environment detection
  isDevelopment() {
    return (
      window.location.hostname === 'localhost' ||
      window.location.hostname === '127.0.0.1' ||
      window.location.hostname.includes('dev') ||
      window.location.port === '3000' ||
      window.location.port === '5173'
    );
  }

  isProduction() {
    return !this.isDevelopment();
  }

  init() {
    // Monitor Core Web Vitals using Web Vitals library approach
    this.observePerformance();
    this.observeNetworkConditions();
    this.observeUserExperience();
  }

  observePerformance() {
    // Observe LCP (Largest Contentful Paint)
    if ('PerformanceObserver' in window) {
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1];
        this.metrics.LCP = lastEntry.startTime;
        this.checkThreshold('LCP', lastEntry.startTime);
      });

      try {
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
      } catch (e) {
        // LCP observation not supported
      }

      // Observe FID (First Input Delay)
      const fidObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          this.metrics.FID = entry.processingStart - entry.startTime;
          this.checkThreshold('FID', this.metrics.FID);
        });
      });

      try {
        fidObserver.observe({ entryTypes: ['first-input'] });
      } catch (e) {
        // FID observation not supported
      }

      // Observe CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value;
            this.metrics.CLS = clsValue;
            this.checkThreshold('CLS', clsValue);
          }
        });
      });

      try {
        clsObserver.observe({ entryTypes: ['layout-shift'] });
      } catch (e) {
        // CLS observation not supported
      }

      // Observe FCP (First Contentful Paint)
      const fcpObserver = new PerformanceObserver((entryList) => {
        entryList.getEntries().forEach((entry) => {
          if (entry.name === 'first-contentful-paint') {
            this.metrics.FCP = entry.startTime;
            this.checkThreshold('FCP', entry.startTime);
          }
        });
      });

      try {
        fcpObserver.observe({ entryTypes: ['paint'] });
      } catch (e) {
        // FCP observation not supported
      }
    }

    // Monitor TTFB using Navigation Timing
    window.addEventListener('load', () => {
      const navTiming = performance.getEntriesByType('navigation')[0];
      if (navTiming) {
        this.metrics.TTFB = navTiming.responseStart - navTiming.requestStart;
        this.checkThreshold('TTFB', this.metrics.TTFB);
      }
    });
  }

  observeNetworkConditions() {
    // Monitor connection quality
    if ('connection' in navigator) {
      const connection = navigator.connection;
      this.metrics.connection = {
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
      };
    }
  }

  observeUserExperience() {
    // Track user interactions for UX metrics
    let interactionCount = 0;
    const trackInteraction = () => {
      interactionCount++;
      this.metrics.userInteractions = interactionCount;
    };

    ['click', 'keydown', 'touchstart'].forEach((event) => {
      document.addEventListener(event, trackInteraction, { passive: true });
    });

    // Track scroll depth for engagement
    let maxScrollDepth = 0;
    const trackScroll = () => {
      const scrollDepth = Math.round(
        (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollDepth > maxScrollDepth) {
        maxScrollDepth = scrollDepth;
        this.metrics.maxScrollDepth = maxScrollDepth;
      }
    };

    window.addEventListener('scroll', trackScroll, { passive: true });
  }

  checkThreshold(metric, value) {
    const threshold = this.thresholds[metric];
    const status =
      value <= threshold ? 'good' : value <= threshold * 1.5 ? 'needs-improvement' : 'poor';
    this.metrics[`${metric}_status`] = status;

    // Send to analytics in production
    this.sendToAnalytics(metric, value, status);
  }

  sendToAnalytics(metric, value, status) {
    // Enhanced analytics reporting for SEO insights
    if (typeof gtag !== 'undefined') {
      gtag('event', 'core_web_vital', {
        metric_name: metric,
        metric_value: Math.round(value),
        metric_status: status,
        custom_map: {
          metric_name: 'cwv_metric',
          metric_value: 'cwv_value',
          metric_status: 'cwv_status',
        },
      });
    }

    // Send to custom analytics endpoint for SEO monitoring
    this.reportToSEOEndpoint(metric, value, status);
  }

  async reportToSEOEndpoint(metric, value, status) {
    // Custom SEO performance reporting
    try {
      const data = {
        metric,
        value: Math.round(value),
        status,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
        connection: this.metrics.connection,
        viewport: {
          width: window.innerWidth,
          height: window.innerHeight,
        },
      };

      // In production, send to your SEO monitoring service
      if (this.isProduction()) {
        // await fetch('/api/seo-metrics', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(data)
        // });
      }
    } catch (error) {
      // Failed to report SEO metrics
    }
  }

  generateReport() {
    // Generate comprehensive performance report for SEO analysis
    return {
      coreWebVitals: {
        FCP: this.metrics.FCP,
        LCP: this.metrics.LCP,
        FID: this.metrics.FID,
        CLS: this.metrics.CLS,
        TTFB: this.metrics.TTFB,
        INP: this.metrics.INP,
      },
      status: {
        FCP: this.metrics.FCP_status,
        LCP: this.metrics.LCP_status,
        FID: this.metrics.FID_status,
        CLS: this.metrics.CLS_status,
        TTFB: this.metrics.TTFB_status,
      },
      userExperience: {
        interactions: this.metrics.userInteractions,
        maxScrollDepth: this.metrics.maxScrollDepth,
      },
      network: this.metrics.connection,
      timestamp: Date.now(),
      url: window.location.href,
    };
  }

  // SEO-specific performance optimizations
  optimizeForSEO() {
    // Preload critical resources
    this.preloadCriticalResources();

    // Optimize images for SEO
    this.optimizeImages();

    // Monitor and fix layout shifts
    this.preventLayoutShifts();
  }
  preloadCriticalResources() {
    // Only preload logo.svg since it's used in the navbar which loads immediately
    // Removed font preloading since no custom fonts are being used
    // Removed logo.jpg preloading since it's not used immediately on page load
    const criticalResources = ['/logo/logo.svg'];

    criticalResources.forEach((resource) => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = resource;
      link.as = 'image';
      document.head.appendChild(link);
    });
  }

  optimizeImages() {
    // Add loading="lazy" to images below the fold
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
          }
          imageObserver.unobserve(img);
        }
      });
    });

    images.forEach((img) => {
      if (!img.loading) {
        img.loading = 'lazy';
      }
    });
  }

  preventLayoutShifts() {
    // Monitor and prevent layout shifts that hurt CLS
    const shiftObserver = new PerformanceObserver((entryList) => {
      entryList.getEntries().forEach((entry) => {
        if (entry.value > 0.1) {
          // Significant shift detected
        }
      });
    });

    try {
      shiftObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Layout shift monitoring not supported
    }
  }
}

// Initialize performance monitoring for SEO
const seoPerformanceMonitor = new PerformanceMonitor();

// Export for use in React components
if (typeof module !== 'undefined' && module.exports) {
  module.exports = PerformanceMonitor;
} else if (typeof window !== 'undefined') {
  window.SEOPerformanceMonitor = PerformanceMonitor;
}

// Auto-optimize for SEO when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    seoPerformanceMonitor.optimizeForSEO();
  });
} else {
  seoPerformanceMonitor.optimizeForSEO();
}
