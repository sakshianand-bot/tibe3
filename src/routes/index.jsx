import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { ROUTES } from './routes.config';
import MainLayout from '../layouts/MainLayout';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';
import { ScrollToTop } from '../utils/scrollToTop';

// Lazy load page components
const Home = lazy(() => import('../pages/Home'));
const HowItWorks = lazy(() => import('../pages/HowItWorks'));
const Services = lazy(() => import('../pages/Services'));
const WhyChooseUs = lazy(() => import('../pages/WhyChooseUs'));
const FAQ = lazy(() => import('../pages/FAQ'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
const Resources = lazy(() => import('../pages/Resources'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('../pages/TermsAndConditions'));
const CookiePolicy = lazy(() => import('../pages/CookiePolicy'));
const Disclaimer = lazy(() => import('../pages/Disclaimer'));

// Create a component that wraps the page with Suspense
const LazyPage = ({ Page }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Page />
  </Suspense>
);

// Route configuration
const routes = [
  {
    path: ROUTES.PUBLIC.HOME,
    element: (
      <ErrorBoundary>
        <ScrollToTop />
        <MainLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <LazyPage Page={Home} />
      },
      {
        path: ROUTES.PUBLIC.HOW_IT_WORKS,
        element: <LazyPage Page={HowItWorks} />
      },
      {
        path: ROUTES.PUBLIC.SERVICES,
        element: <LazyPage Page={Services} />
      },
      {
        path: ROUTES.PUBLIC.WHY_CHOOSE_US,
        element: <LazyPage Page={WhyChooseUs} />
      },
      {
        path: ROUTES.PUBLIC.FAQ,
        element: <LazyPage Page={FAQ} />
      },
      {
        path: ROUTES.PUBLIC.TESTIMONIALS,
        element: <LazyPage Page={Testimonials} />
      },
      {
        path: ROUTES.PUBLIC.RESOURCES,
        element: <LazyPage Page={Resources} />
      },
      {
        path: ROUTES.PUBLIC.CONTACT,
        element: <LazyPage Page={Contact} />
      },
      {
        path: ROUTES.PUBLIC.PRIVACY_POLICY,
        element: <LazyPage Page={PrivacyPolicy} />
      },
      {
        path: ROUTES.PUBLIC.TERMS_AND_CONDITIONS,
        element: <LazyPage Page={TermsAndConditions} />
      },
      {
        path: ROUTES.PUBLIC.COOKIE_POLICY,
        element: <LazyPage Page={CookiePolicy} />
      },
      {
        path: ROUTES.PUBLIC.DISCLAIMER,
        element: <LazyPage Page={Disclaimer} />
      }
    ]
  },
  // 404 route (keep this last)
  {
    path: '*',
    element: (
      <ErrorBoundary>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
            <p className="text-xl text-gray-600">Page not found</p>
          </div>
        </div>
      </ErrorBoundary>
    )
  }
];

// Create the router instance
const router = createBrowserRouter(routes);

export default router;
