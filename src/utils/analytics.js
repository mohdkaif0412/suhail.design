// Google Analytics and SEO tracking utilities

// Initialize Google Tag Manager
export const initGTM = (gtmId) => {
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || [];
  
  // Add GTM script
  const script = document.createElement('script');
  script.innerHTML = `
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');
  `;
  document.head.appendChild(script);
  
  // Add noscript fallback
  const noscript = document.createElement('noscript');
  const iframe = document.createElement('iframe');
  iframe.src = `https://www.googletagmanager.com/ns.html?id=${gtmId}`;
  iframe.height = '0';
  iframe.width = '0';
  iframe.style.display = 'none';
  iframe.style.visibility = 'hidden';
  noscript.appendChild(iframe);
  document.body.insertBefore(noscript, document.body.firstChild);
};

// Initialize Google Analytics 4
export const initGA4 = (measurementId) => {
  // Load gtag script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag('js', new Date());
  gtag('config', measurementId, {
    // Enhanced measurement for better SEO insights
    send_page_view: true,
    allow_google_signals: true,
    allow_ad_personalization_signals: false,
  });

  window.gtag = gtag;
};

// Track page views (for SPA navigation)
export const trackPageView = (pagePath, pageTitle) => {
  if (window.gtag) {
    window.gtag('config', 'GA_MEASUREMENT_ID', {
      page_path: pagePath,
      page_title: pageTitle,
    });
  }
  
  // Also push to dataLayer for GTM
  if (window.dataLayer) {
    window.dataLayer.push({
      event: 'page_view',
      page_path: pagePath,
      page_title: pageTitle
    });
  }
};

// Track user interactions
export const trackEvent = (eventName, eventParams = {}) => {
  if (window.gtag) {
    window.gtag('event', eventName, eventParams);
  }
  
  // Also push to dataLayer for GTM
  if (window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...eventParams
    });
  }
};

// Track contact form submissions
export const trackContactForm = () => {
  const eventData = {
    event: 'contact_form_submit',
    event_category: 'engagement',
    event_label: 'contact_form',
  };
  
  if (window.gtag) {
    window.gtag('event', 'contact_form_submit', {
      event_category: 'engagement',
      event_label: 'contact_form',
    });
  }
  
  if (window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

// Track project link clicks
export const trackProjectClick = (projectName) => {
  const eventData = {
    event: 'project_click',
    event_category: 'engagement',
    event_label: projectName,
  };
  
  if (window.gtag) {
    window.gtag('event', 'project_click', {
      event_category: 'engagement',
      event_label: projectName,
    });
  }
  
  if (window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

// Track resume downloads
export const trackResumeDownload = () => {
  const eventData = {
    event: 'resume_download',
    event_category: 'engagement',
    event_label: 'resume_pdf',
  };
  
  if (window.gtag) {
    window.gtag('event', 'resume_download', {
      event_category: 'engagement',
      event_label: 'resume_pdf',
    });
  }
  
  if (window.dataLayer) {
    window.dataLayer.push(eventData);
  }
};

// Initialize analytics (replace with your actual measurement IDs)
let isAnalyticsInitialized = false;

export const initializeAnalytics = () => {
  if (isAnalyticsInitialized) {
    return; // Prevent duplicate initialization
  }

  isAnalyticsInitialized = true;

  // Only initialize in production
  if (process.env.NODE_ENV === 'production') {
    // Initialize Google Tag Manager
    initGTM('GTM-K84FZC5M');
    
    // Uncomment and add your Google Analytics 4 Measurement ID if needed
    // initGA4('G-XXXXXXXXXX');

    console.log('Analytics initialized with GTM. Add your GA4 measurement ID to enable additional tracking.');
  } else {
    console.log('Analytics disabled in development mode');
  }
};
