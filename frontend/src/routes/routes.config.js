export const ROUTES = {
  PUBLIC: {
    HOME: '/',
    HOW_IT_WORKS: '/how-it-works',
    SERVICES: '/services',
    WHY_CHOOSE_US: '/why-choose-us',
    FAQ: '/faq',
    BOOKCONSULTATION: '/book-consultation',
    TESTIMONIALS: '/testimonials',
    RESOURCES: '/resources',
    CONTACT: '/contact',
    PRIVACY_POLICY: '/privacy-policy',
    TERMS_AND_CONDITIONS: '/terms-and-conditions',
    COOKIE_POLICY: '/cookie-policy',
    DISCLAIMER: '/disclaimer',
    LOGIN: '/login',
    SIGN_UP: '/sign-up',
    PAYMENT: '/payment',
    THANK_YOU: '/thank-you'
  },
  ADMIN: {
    LOGIN: '/admin/login',
    SIGN_UP: '/admin/sign-up',
    DASHBOARD: '/admin/dashboard',
    USERS: '/admin/users',
    SETTINGS: '/admin/settings'
  },
  AUTH: {
    PROFILE: '/profile',
    SETTINGS: '/settings'
  }
};

export const PUBLIC_ROUTES = Object.values(ROUTES.PUBLIC);
export const ADMIN_ROUTES = Object.values(ROUTES.ADMIN);
export const AUTH_ROUTES = Object.values(ROUTES.AUTH);
