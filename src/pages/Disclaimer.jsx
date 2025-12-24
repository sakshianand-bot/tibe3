import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

export default function Disclaimer() {
  useEffect(() => {
    // Set the document title
    document.title = 'Disclaimer | Tiberius Strategies';
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">⚠️ Disclaimer</h1>
          <p className="text-sm sm:text-base text-gray-600">Effective Date: December 22, 2025</p>
        </div>

        <div className="prose prose-sm sm:prose max-w-none">
          <div className="space-y-5 sm:space-y-6">
            <p className="text-gray-700 leading-relaxed">
              The information provided on{' '}
              <a 
                href="https://tiberiusstrategies.netlify.app/" 
                className="text-blue-600 hover:underline break-all sm:break-normal"
              >
                https://tiberiusstrategies.netlify.app/
              </a>{' '}
              is for general informational purposes only.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Tiberius Strategies makes no guarantees regarding the accuracy, completeness, or reliability of any information presented. All strategies, recommendations, and insights are provided without warranty of any kind.
            </p>
            
            <p className="text-gray-700 leading-relaxed">
              Any reliance you place on information from this website is strictly at your own risk. Business results may vary depending on individual circumstances.
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
