import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

export default function TermsAndConditions() {
  useEffect(() => {
    // Set the document title
    document.title = 'Terms and Conditions | Tiberius Strategies';
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Terms and Conditions</h1>
          <p className="text-sm sm:text-base text-gray-600">Effective Date: December 22, 2025</p>
        </div>

        <div className="prose prose-sm sm:prose max-w-none">
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Welcome to Tiberius Strategies. By accessing or using our website 
              <a href="https://tiberiusstrategies.netlify.app/" 
                 className="text-blue-600 hover:underline break-all sm:break-normal">
                https://tiberiusstrategies.netlify.app/
              </a>, you agree to comply with and be bound by these Terms and Conditions.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. Use of Website</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              You agree to use this website for lawful purposes only and in a way that does not infringe the rights of others or restrict their use of the website.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">2. Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              All content on this website, including text, graphics, logos, and materials, is the property of Tiberius Strategies and may not be copied, reproduced, or distributed without written permission.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">3. Services Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Information provided on this website is for general informational purposes only and does not constitute professional, legal, or financial advice. Any engagement for consulting services will be governed by a separate written agreement.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">4. Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Tiberius Strategies shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use or inability to use this website.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">5. Third-Party Links</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We are not responsible for the content or practices of third-party websites linked from our site.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">6. Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We reserve the right to modify these Terms and Conditions at any time. Continued use of the website constitutes acceptance of the updated terms.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4">7. Governing Law</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              These Terms shall be governed and interpreted under the laws of the United States.
            </p>

            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-gray-200">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-3 sm:mb-4">
                If you have any questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="text-gray-700 space-y-2">
                <p className="break-all">
                  <span className="font-medium">Email:</span>{' '}
                  <a href="mailto:info@tiberiusstrategies.com" className="text-blue-600 hover:underline">
                    info@tiberiusstrategies.com
                  </a>
                </p>
                <p><span className="font-medium">Phone:</span> (555) 123-4567</p>
                <p><span className="font-medium">Address:</span> 600 1st Ave STE 102, Seattle, WA 98104</p>
              </div>
              
              <div className="mt-6 text-center sm:text-left">
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
    </div>
  );
}
