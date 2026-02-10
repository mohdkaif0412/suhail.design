// /**
//  * Enhanced Crawl Request Script for Suhail.in
//  * This script helps Google discover and index all important pages faster
//  */

// // Core pages that must be indexed
// const PRIORITY_PAGES = [
//   'https://Suhail.design/',
//   'https://Suhail.design/about',
//   'https://Suhail.design/projects',
//   'https://Suhail.design/contact',
//   'https://Suhail.design/articles',
// ];

// // Project pages for additional crawling
// const PROJECT_PAGES = [
//   'https://Suhail.design/projects/ecommerce-dashboard',
//   'https://Suhail.design/projects/fintech-mobile',
//   'https://Suhail.design/projects/iamart',
//   'https://Suhail.design/projects/last3feet',
//   'https://Suhail.design/projects/task-management',
// ];

// // Article pages
// const ARTICLE_PAGES = ['https://Suhail.design/articles/react-development-2025'];

// // SEO and infrastructure pages
// const SEO_PAGES = [
//   'https://Suhail.design/sitemap.xml',
//   'https://Suhail.design/sitemap.html',
//   'https://Suhail.design/robots.txt',
// ];

// /**
//  * Generate crawl hints for search engines
//  */
// function generateCrawlHints() {
//   const allPages = [...PRIORITY_PAGES, ...PROJECT_PAGES, ...ARTICLE_PAGES];

//   return {
//     '@context': 'https://schema.org',
//     '@type': 'WebSite',
//     name: 'Mohd Suhail - Frontend Developer Portfolio',
//     url: 'https://Suhail.in',
//     potentialAction: {
//       '@type': 'SearchAction',
//       target: 'https://Suhail.design/search?q={search_term_string}',
//       'query-input': 'required name=search_term_string',
//     },
//     mainEntity: allPages.map((url) => ({
//       '@type': 'WebPage',
//       url: url,
//       dateModified: new Date().toISOString(),
//       inLanguage: 'en-US',
//     })),
//   };
// }

// /**
//  * Create internal linking signals
//  */
// function createInternalLinkingSignals() {
//   return PRIORITY_PAGES.map((page) => {
//     const otherPages = PRIORITY_PAGES.filter((p) => p !== page);
//     return {
//       page: page,
//       linksTo: otherPages,
//       importance: page === 'https://Suhail.design/' ? 'high' : 'medium',
//     };
//   });
// }

// /**
//  * Export for debugging in console
//  */
// if (typeof window !== 'undefined') {
//   window.himanshuSEO = {
//     pages: {
//       priority: PRIORITY_PAGES,
//       projects: PROJECT_PAGES,
//       articles: ARTICLE_PAGES,
//       seo: SEO_PAGES,
//     },
//     crawlHints: generateCrawlHints(),
//     linkingSignals: createInternalLinkingSignals(),
//     requestIndexing: function () {
//       console.log('🚀 Pages to manually request indexing in Google Search Console:');
//       PRIORITY_PAGES.forEach((url, index) => {
//         console.log(`${index + 1}. ${url}`);
//       });
//       console.log('\n📝 Instructions:');
//       console.log('1. Go to Google Search Console');
//       console.log('2. Use URL Inspection tool');
//       console.log('3. Enter each URL above');
//       console.log('4. Click "Request Indexing"');
//     },
//   };

//   // Auto-log on page load
//   console.log('🔍 Himanshu Portfolio SEO Debug Tools loaded');
//   console.log('Run himanshuSEO.requestIndexing() for indexing instructions');
// }

// export {
//   PRIORITY_PAGES,
//   PROJECT_PAGES,
//   ARTICLE_PAGES,
//   generateCrawlHints,
//   createInternalLinkingSignals,
// };
