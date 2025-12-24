import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

export default function CookiePolicy() {
  useEffect(() => {
    // Set the document title
    document.title = 'Cookie Policy | Tiberius Strategies';
    // Ensure viewport is set correctly
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      const meta = document.createElement('meta');
      meta.name = 'viewport';
      meta.content = 'width=device-width, initial-scale=1.0';
      document.head.appendChild(meta);
    }
    // Scroll to top
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
        <div className="text-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Cookie Policy</h1>
          <p className="text-sm sm:text-base text-gray-600">Effective Date: December 22, 2025</p>
        </div>

        <div className="prose prose-sm sm:prose max-w-none">
          <div className="space-y-5 sm:space-y-6">
            <p className="text-gray-700 leading-relaxed">
              Tiberius Strategies uses cookies to improve user experience and analyze website performance.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">How Cookies Help Us</h2>
            <p className="text-gray-700">
              Cookies help us:
            </p>
            <ul className="list-disc pl-5 sm:pl-6 space-y-2 text-gray-700 mb-5 sm:mb-6">
              <li className="leading-relaxed">Understand website usage</li>
              <li className="leading-relaxed">Improve functionality</li>
              <li className="leading-relaxed">Optimize content</li>
            </ul>

            <p className="text-gray-700 leading-relaxed">
              You can disable cookies through your browser settings. Continued use of the website implies consent to our cookie usage.
            </p>

            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-gray-200 text-center">
              <Link 
                to={ROUTES.PUBLIC.HOME} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 text-sm sm:text-base px-4 py-2 rounded-md hover:bg-blue-50 transition-colors duration-200"
                aria-label="Back to Home"
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
