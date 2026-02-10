// /**
//  * IndexNow Integration for Mohd Suhail Portfolio
//  * Automatically submits URLs to search engines for faster indexing
//  */

// class IndexNowService {
//   constructor() {
//     this.apiKey = 'f96a2bb9354643a0897f33b9ec52275c';
//     this.host = 'www.Suhail.in';
//     this.keyLocation = `https://${this.host}/${this.apiKey}.txt`;
//     this.indexNowEndpoint = 'https://api.indexnow.org/indexnow';

//     // Track submitted URLs to avoid duplicates
//     this.submittedUrls = new Set();

//     // Initialize submission tracking
//     this.initializeTracking();
//   }

//   /**
//    * Initialize tracking for submitted URLs
//    */
//   initializeTracking() {
//     // Load previously submitted URLs from localStorage
//     const stored = localStorage.getItem('indexnow_submitted_urls');
//     if (stored) {
//       try {
//         const urls = JSON.parse(stored);
//         this.submittedUrls = new Set(urls);
//       } catch (e) {
//         console.warn('Failed to load IndexNow tracking data:', e);
//       }
//     }
//   }

//   /**
//    * Save tracking data to localStorage
//    */
//   saveTracking() {
//     try {
//       localStorage.setItem('indexnow_submitted_urls', JSON.stringify([...this.submittedUrls]));
//     } catch (e) {
//       console.warn('Failed to save IndexNow tracking data:', e);
//     }
//   }

//   /**
//    * Submit a single URL to IndexNow
//    * @param {string} url - The URL to submit
//    * @returns {Promise<boolean>} - Success status
//    */
//   async submitUrl(url) {
//     if (!url || this.submittedUrls.has(url)) {
//       return false; // Already submitted or invalid URL
//     }

//     try {
//       const response = await fetch(
//         `${this.indexNowEndpoint}?url=${encodeURIComponent(url)}&key=${
//           this.apiKey
//         }&keyLocation=${encodeURIComponent(this.keyLocation)}`,
//         {
//           method: 'GET',
//           headers: {
//             'User-Agent': 'IndexNow-Suhail-Portfolio/1.0',
//           },
//         }
//       );

//       if (response.ok) {
//         this.submittedUrls.add(url);
//         this.saveTracking();
//         console.log(`✅ IndexNow: Successfully submitted ${url}`);
//         return true;
//       } else {
//         console.warn(`⚠️ IndexNow: Failed to submit ${url} - Status: ${response.status}`);
//         return false;
//       }
//     } catch (error) {
//       console.error('❌ IndexNow: Submission error:', error);
//       return false;
//     }
//   }

//   /**
//    * Submit multiple URLs in bulk
//    * @param {string[]} urls - Array of URLs to submit
//    * @returns {Promise<boolean>} - Success status
//    */
//   async submitBulkUrls(urls) {
//     if (!urls || !Array.isArray(urls) || urls.length === 0) {
//       return false;
//     }

//     // Filter out already submitted URLs
//     const newUrls = urls.filter((url) => !this.submittedUrls.has(url));

//     if (newUrls.length === 0) {
//       console.log('IndexNow: All URLs already submitted');
//       return true;
//     }

//     const payload = {
//       host: this.host,
//       key: this.apiKey,
//       keyLocation: this.keyLocation,
//       urlList: newUrls,
//     };

//     try {
//       const response = await fetch(this.indexNowEndpoint, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json; charset=utf-8',
//           'User-Agent': 'IndexNow-Suhail-Portfolio/1.0',
//         },
//         body: JSON.stringify(payload),
//       });

//       if (response.ok) {
//         // Mark all URLs as submitted
//         newUrls.forEach((url) => this.submittedUrls.add(url));
//         this.saveTracking();
//         console.log(`✅ IndexNow: Successfully submitted ${newUrls.length} URLs in bulk`);
//         return true;
//       } else {
//         console.warn(`⚠️ IndexNow: Bulk submission failed - Status: ${response.status}`);
//         return false;
//       }
//     } catch (error) {
//       console.error('❌ IndexNow: Bulk submission error:', error);
//       return false;
//     }
//   }

//   /**
//    * Submit current page URL
//    */
//   async submitCurrentPage() {
//     const currentUrl = window.location.href;
//     return await this.submitUrl(currentUrl);
//   }

//   /**
//    * Submit all important portfolio pages
//    */
//   async submitPortfolioPages() {
//     const portfolioUrls = [
//       `https://${this.host}/`,
//       `https://${this.host}/about`,
//       `https://${this.host}/projects`,
//       `https://${this.host}/contact`,
//       `https://${this.host}/articles`,
//       `https://${this.host}/articles/react-development-2025`,
//       `https://${this.host}/projects/iamart`,
//       `https://${this.host}/projects/last3feet`,
//       `https://${this.host}/projects/ecommerce-dashboard`,
//       `https://${this.host}/projects/task-management`,
//       `https://${this.host}/projects/wanderlustwoof`,
//       `https://${this.host}/projects/fintech-mobile`,
//     ];

//     return await this.submitBulkUrls(portfolioUrls);
//   }

//   /**
//    * Get submission statistics
//    */
//   getStats() {
//     return {
//       totalSubmitted: this.submittedUrls.size,
//       submittedUrls: [...this.submittedUrls],
//     };
//   }

//   /**
//    * Clear submission tracking (for testing purposes)
//    */
//   clearTracking() {
//     this.submittedUrls.clear();
//     localStorage.removeItem('indexnow_submitted_urls');
//   }
// }

// // Initialize IndexNow service
// const indexNowService = new IndexNowService();

// // Auto-submit current page when loaded
// if (typeof window !== 'undefined') {
//   // Submit current page after a short delay
//   setTimeout(() => {
//     indexNowService.submitCurrentPage();
//   }, 2000);

//   // Submit all portfolio pages on homepage load
//   if (window.location.pathname === '/' || window.location.pathname === '') {
//     setTimeout(() => {
//       indexNowService.submitPortfolioPages();
//     }, 5000);
//   }

//   // Expose service to global scope for manual usage
//   window.indexNowService = indexNowService;
// }

// export default indexNowService;
