import { createBrowserRouter } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import MainLayout from '../layouts/MainLayout';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorBoundary from '../components/common/ErrorBoundary';

// Lazy load page components
const Home = lazy(() => import('../pages/Homes'));
const HowItWorks = lazy(() => import('../pages/HowItWorks'));
const Services = lazy(() => import('../pages/Services'));
const WhyChooseUs = lazy(() => import('../pages/WhyChooseUs'));
const FAQ = lazy(() => import('../pages/FAQ'));
const BookConsultation = lazy(() => import('../pages/BookConsultation'));
const Testimonials = lazy(() => import('../pages/Testimonials'));
const Resources = lazy(() => import('../pages/Resources'));
const Contact = lazy(() => import('../pages/Contact'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));
const TermsAndConditions = lazy(() => import('../pages/TermsAndConditions'));
const CookiePolicy = lazy(() => import('../pages/CookiePolicy'));
const Disclaimer = lazy(() => import('../pages/Disclaimer'));
const Login = lazy(() => import('../pages/Login'));
const SignUp = lazy(() => import('../pages/SignUp'));
const Payment = lazy(() => import('../pages/Payment'));
const ThankYou = lazy(() => import('../pages/ThankYou'));

const LazyPage = ({ Page }) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Page />
  </Suspense>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <ErrorBoundary>
        <MainLayout />
      </ErrorBoundary>
    ),
    children: [
      {
        index: true,
        element: <LazyPage Page={Home} />,
      },
      {
        path: 'how-it-works',
        element: <LazyPage Page={HowItWorks} />,
      },
      {
        path: 'services',
        element: <LazyPage Page={Services} />,
      },
      {
        path: 'why-choose-us',
        element: <LazyPage Page={WhyChooseUs} />,
      },
      {
        path: 'faq',
        element: <LazyPage Page={FAQ} />,
      },
      {
        path: 'book-consultation',
        element: <LazyPage Page={BookConsultation} />,
      },
      {
        path: 'testimonials',
        element: <LazyPage Page={Testimonials} />,
      },
      {
        path: 'resources',
        element: <LazyPage Page={Resources} />,
      },
      {
        path: 'contact',
        element: <LazyPage Page={Contact} />,
      },
      {
        path: 'privacy-policy',
        element: <LazyPage Page={PrivacyPolicy} />,
      },
      {
        path: 'terms-and-conditions',
        element: <LazyPage Page={TermsAndConditions} />,
      },
      {
        path: 'cookie-policy',
        element: <LazyPage Page={CookiePolicy} />,
      },
      {
        path: 'disclaimer',
        element: <LazyPage Page={Disclaimer} />,
      },
      {
        path: 'login',
        element: <LazyPage Page={Login} />,
      },
      {
        path: 'sign-up',
        element: <LazyPage Page={SignUp} />,
      },
      {
        path: 'payment',
        element: <LazyPage Page={Payment} />,
      },
      {
        path: 'thank-you',
        element: <LazyPage Page={ThankYou} />,
      },
    ],
  },
  {
    path: '*',
    element: (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p>Page not found</p>
        </div>
      </div>
    ),
  },
]);

export default router;