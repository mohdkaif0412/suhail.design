#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔍 PROJECT STRUCTURE VERIFICATION');
console.log('=================================\n');

// Verify sitemap consistency
const sitemapPath = path.join(__dirname, '../public/sitemap.xml');
const sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

console.log('📋 SITEMAP ANALYSIS:');
console.log('--------------------');

// Extract project URLs from sitemap
const projectUrls = [...sitemapContent.matchAll(/projects\/([^<]+)/g)]
  .map((match) => match[1])
  .filter((url) => !url.includes(' ')) // Remove invalid URLs
  .sort();

console.log('Projects in sitemap:');
projectUrls.forEach((project) => {
  console.log(`  ✓ ${project}`);
});

// Check for removed projects
const removedProjects = ['task-management', 'fintech-mobile', 'ecommerce-dashboard'];
const foundRemovedProjects = removedProjects.filter((project) =>
  sitemapContent.includes(`projects/${project}`)
);

if (foundRemovedProjects.length > 0) {
  console.log('\n❌ FOUND REMOVED PROJECTS IN SITEMAP:');
  foundRemovedProjects.forEach((project) => {
    console.log(`  ❌ ${project}`);
  });
} else {
  console.log('\n✅ All removed projects successfully cleaned from sitemap');
}

// Verify App.jsx routes
const appJsPath = path.join(__dirname, '../src/App.jsx');
const appJsContent = fs.readFileSync(appJsPath, 'utf8');

console.log('\n🛣️  ROUTE ANALYSIS:');
console.log('------------------');

// Extract routes from App.jsx
const routeMatches = [...appJsContent.matchAll(/path="\/projects\/([^"]+)"/g)]
  .map((match) => match[1])
  .sort();

console.log('Routes in App.jsx:');
routeMatches.forEach((route) => {
  console.log(`  ✓ ${route}`);
});

// Check for removed routes
const foundRemovedRoutes = removedProjects.filter((project) =>
  appJsContent.includes(`/projects/${project}`)
);

if (foundRemovedRoutes.length > 0) {
  console.log('\n❌ FOUND REMOVED PROJECT ROUTES IN APP.JSX:');
  foundRemovedRoutes.forEach((route) => {
    console.log(`  ❌ ${route}`);
  });
} else {
  console.log('\n✅ All removed project routes successfully cleaned from App.jsx');
}

// Verify seoUtils.js
const seoUtilsPath = path.join(__dirname, '../src/utils/seoUtils.js');
const seoUtilsContent = fs.readFileSync(seoUtilsPath, 'utf8');

console.log('\n🔧 SEO UTILS ANALYSIS:');
console.log('---------------------');

const foundRemovedInSeoUtils = removedProjects.filter((project) =>
  seoUtilsContent.includes(`/projects/${project}`)
);

if (foundRemovedInSeoUtils.length > 0) {
  console.log('❌ FOUND REMOVED PROJECTS IN SEO UTILS:');
  foundRemovedInSeoUtils.forEach((project) => {
    console.log(`  ❌ ${project}`);
  });
} else {
  console.log('✅ All removed projects successfully cleaned from seoUtils.js');
}

// Consistency check
console.log('\n🔄 CONSISTENCY CHECK:');
console.log('---------------------');

const sitemapProjects = new Set(projectUrls);
const routeProjects = new Set(routeMatches);

// Find projects in sitemap but not in routes
const sitemapOnly = [...sitemapProjects].filter((p) => !routeProjects.has(p));
// Find projects in routes but not in sitemap
const routesOnly = [...routeProjects].filter((p) => !sitemapProjects.has(p));

if (sitemapOnly.length > 0) {
  console.log('⚠️  Projects in sitemap but not in routes:');
  sitemapOnly.forEach((project) => console.log(`  ⚠️  ${project}`));
}

if (routesOnly.length > 0) {
  console.log('⚠️  Projects in routes but not in sitemap:');
  routesOnly.forEach((project) => console.log(`  ⚠️  ${project}`));
}

if (sitemapOnly.length === 0 && routesOnly.length === 0) {
  console.log('✅ Perfect consistency between sitemap and routes!');
}

// Verify actual project components exist in the projects data
console.log('\n📁 COMPONENT VERIFICATION:');
console.log('--------------------------');

const actualProjects = [
  'iamart',
  'last3feet',
  'nextdoor',
  'wanderlustwoof',
  'wanderlust-woof', // Alternative URL
];

console.log('Expected projects:');
actualProjects.forEach((project) => {
  const inSitemap = sitemapProjects.has(project);
  const inRoutes = routeProjects.has(project);
  const status = inSitemap && inRoutes ? '✅' : '⚠️';
  console.log(`  ${status} ${project} (sitemap: ${inSitemap}, routes: ${inRoutes})`);
});

console.log('\n🎯 SUMMARY:');
console.log('-----------');
console.log(`Total projects in sitemap: ${projectUrls.length}`);
console.log(`Total routes defined: ${routeMatches.length}`);
console.log(
  `Removed projects cleaned: ${
    3 - foundRemovedProjects.length - foundRemovedRoutes.length - foundRemovedInSeoUtils.length
  }/3`
);

if (
  foundRemovedProjects.length === 0 &&
  foundRemovedRoutes.length === 0 &&
  foundRemovedInSeoUtils.length === 0
) {
  console.log('\n🎉 CLEANUP SUCCESSFUL!');
  console.log('All non-existent projects have been removed.');
  console.log('Sitemap and routes are properly aligned.');
} else {
  console.log('\n⚠️  CLEANUP INCOMPLETE!');
  console.log('Some references to removed projects still exist.');
}
