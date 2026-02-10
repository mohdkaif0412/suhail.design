import React, { lazy, Suspense } from 'react';
import ErrorBoundary from '../components/ui/ErrorBoundary';
import { LoaderOne } from '../components/ui/loader';

// Lazy load pages for better performance
export const HomePage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../pages/Home'));
    }, 1500);
  });
});

export const ProjectsPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../pages/ProjectsPage'));
    }, 1500);
  });
});

export const ServicesPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../pages/ServicesPage'));
    }, 1500);
  });
});

export const AboutPage = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../pages/AboutPage'));
    }, 1500);
  });
});

export const NotFound = lazy(() => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(import('../components/ui/NotFound'));
    }, 1500);
  });
});

export const withLazyLoading = (Component, fallback = <LoaderOne />) => {
  return React.forwardRef((props, ref) => (
    <ErrorBoundary>
      <Suspense fallback={fallback}>
        <Component {...props} ref={ref} />
      </Suspense>
    </ErrorBoundary>
  ));
};

// Pre-configured lazy components
export const LazyHome = withLazyLoading(HomePage);
export const LazyProjects = withLazyLoading(ProjectsPage);
export const LazyServices = withLazyLoading(ServicesPage);
export const LazyAbout = withLazyLoading(AboutPage);
export const LazyNotFound = withLazyLoading(NotFound);
