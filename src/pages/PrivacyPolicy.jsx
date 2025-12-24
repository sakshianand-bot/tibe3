import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

const PrivacyPolicy = () => {
  useEffect(() => {
    // Set the document title
    document.title = 'Privacy Policy | Tiberius Strategies';
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
      <div className="max-w-4xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-md">
        <div className="mb-6 sm:mb-8 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">Privacy Policy</h1>
          <p className="text-sm sm:text-base text-gray-600">Effective Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </div>

        <div className="prose prose-sm sm:prose max-w-none text-gray-700 space-y-4">
          <p className="leading-relaxed">
            Tiberius Strategies ("we," "our," or "us") respects your privacy and is committed to protecting it through this Privacy Policy. 
            This policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
            <a href="https://tiberiusstrategies.netlify.app/" 
               className="text-blue-600 hover:underline break-all sm:break-normal">
              https://tiberiusstrategies.netlify.app/
            </a>.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">Information We Collect</h2>
          <p className="mb-3 sm:mb-4">We may collect the following types of information:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-5 sm:mb-6">
            <li className="leading-relaxed"><strong>Personal Information:</strong> Name, email address, phone number, or other details you voluntarily provide through contact forms or inquiries.</li>
            <li className="leading-relaxed"><strong>Non-Personal Information:</strong> Browser type, IP address, pages visited, time spent on pages, and other analytical data.</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">How We Use Your Information</h2>
          <p className="mb-3 sm:mb-4">We use the information collected to:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-5 sm:mb-6">
            <li className="leading-relaxed">Respond to inquiries and provide requested services</li>
            <li className="leading-relaxed">Improve our website and service offerings</li>
            <li className="leading-relaxed">Communicate updates, insights, or business information (if opted in)</li>
            <li className="leading-relaxed">Maintain website security and performance</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">Cookies and Tracking Technologies</h2>
          <p className="leading-relaxed mb-5 sm:mb-6">
            Our website may use cookies or similar technologies to enhance user experience and analyze website traffic. 
            You can control cookies through your browser settings.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">Sharing of Information</h2>
          <p className="mb-3 sm:mb-4">We do not sell, rent, or trade your personal information. Information may be shared only:</p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-5 sm:mb-6">
            <li className="leading-relaxed">To comply with legal obligations</li>
            <li className="leading-relaxed">With service providers who assist in website operations (under confidentiality agreements)</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">Data Security</h2>
          <p className="leading-relaxed mb-5 sm:mb-6">
            We implement reasonable administrative and technical safeguards to protect your information. 
            However, no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">Third-Party Links</h2>
          <p className="leading-relaxed mb-5 sm:mb-6">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices of those sites.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">Your Rights</h2>
          <p className="leading-relaxed mb-5 sm:mb-6">You may request access, correction, or deletion of your personal data by contacting us.</p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">Contact Us</h2>
          <p className="mb-2">If you have questions about this Privacy Policy, contact us at:</p>
          <p className="mb-5 sm:mb-6">
            <a href="mailto:support@tiberiusstrategies.com" 
               className="text-blue-600 hover:underline break-all">
              support@tiberiusstrategies.com
            </a>
          </p>
        </div>

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
  );
};

export default PrivacyPolicy;
