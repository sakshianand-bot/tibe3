import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

export default function PrivacyPolicy() {
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
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">PRIVACY POLICY</h1>
          <p className="text-sm sm:text-base text-gray-600">Last updated January 2, 2026</p>
        </div>

        <div className="prose prose-sm sm:prose max-w-none text-gray-700 space-y-4">
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
            <p className="font-semibold text-yellow-800">IMPORTANT NOTICE REGARDING TEXT MESSAGING DATA</p>
            <p className="text-yellow-700">
              ("we," "us," or "our") DOES NOT share customer opt-in information, including phone
              numbers and consent records, with any affiliates or third parties for marketing,
              promotional, or any other purposes unrelated to providing our direct services. All text
              messaging originator opt-in data is kept strictly confidential.
            </p>
          </div>

          <p className="leading-relaxed">
            This privacy notice for ("we," "us," or "our"), describes how and why we might
            collect, store, use, and/or share ("process") your information when you use our
            services ("Services"), such as when you:
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-5 sm:mb-6">
            <li className="leading-relaxed">Visit our website at , or any website of ours that links to this privacy policy</li>
            <li className="leading-relaxed">Engage with us in other related ways, including any sales, marketing, or events</li>
          </ul>

          <p className="leading-relaxed">
            Questions or concerns? Reading this privacy policy will help you understand your
            privacy rights and choices. If you do not agree with our policies and practices, please
            do not use our Services. If you still have any questions or concerns, please contact
            us at support@tiberiusstrategies.com
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">SUMMARY OF KEY POINTS</h2>
          <p className="leading-relaxed">
            This summary provides key points from our privacy notice, but you can find out more
            details about any of these topics by clicking the link following each key point or by
            using our table of contents below to find the section you are looking for.
          </p>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-5 sm:mb-6">
            <li className="leading-relaxed"><strong>Do we process any sensitive personal information?</strong> We do not process sensitive personal information.</li>
            <li className="leading-relaxed"><strong>Do we receive any information from third parties?</strong> We do not receive any information from third parties.</li>
            <li className="leading-relaxed"><strong>How do we process your information?</strong> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so.</li>
          </ul>

          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
            <p className="text-blue-700">
              We do not share or disclose your personal information except in very specific, rare
              circumstances, and always with your consent. For instance, if we ever need to share
              data due to a business transfer, merger, or acquisition, we will notify you and ensure
              your privacy is protected.
            </p>
          </div>

          <p className="leading-relaxed">
            No mobile information will be shared with third parties/affiliates for
            marketing/promotional purposes. Information sharing to subcontractors in support
            services, such as customer service is permitted. All other use case categories
            exclude text messaging originator opt-in data and consent; this information will not
            be shared with any third parties.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">1. Information We Collect</h2>
          <p className="leading-relaxed">We collect personal information that you provide to us.</p>
          <p className="leading-relaxed">
            We collect personal information that you voluntarily provide to us when you express an
            interest in obtaining information about us or our products and Services, when you participate
            in activities on the Services, or otherwise when you contact us.
          </p>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Personal Information Provided by You</h3>
          <p className="leading-relaxed">The personal information that we collect depends on the context of your interactions with us and the Services, the choices you make, and the products and features you use. The personal information we collect may include the following:</p>
          
          <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Personal Information:</h4>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4">
            <li className="leading-relaxed">Name, email address, phone number, physical address</li>
            <li className="leading-relaxed">Payment information when you make a purchase or request a quote</li>
            <li className="leading-relaxed">Opt-in records and timestamps for all communication channels (SMS, email, etc.)</li>
          </ul>

          <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Non-Personal Information:</h4>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4">
            <li className="leading-relaxed">IP address, browser type, device information</li>
            <li className="leading-relaxed">Website usage patterns and preferences</li>
            <li className="leading-relaxed">Cookies and similar technologies</li>
          </ul>

          <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Customer Communication:</h4>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4">
            <li className="leading-relaxed">Records of inquiries and service requests</li>
            <li className="leading-relaxed">Appointment details and preferences</li>
            <li className="leading-relaxed">Service history and feedback</li>
          </ul>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">2. How We Use Your Information</h2>
          <p className="leading-relaxed">We process your information to provide, improve, and administer our services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">3. SMS Messaging & Compliance</h2>
          
          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Text Message Platform Terms & Conditions</h3>
          <p className="leading-relaxed">By opting into our SMS messaging services, you agree to receive text messages related to our services, including appointment reminders, customer support, and important updates.</p>

          <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Opt-In Consent:</h4>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4">
            <li className="leading-relaxed">You will only receive messages if you have explicitly opted in</li>
            <li className="leading-relaxed">We maintain timestamped records of all opt-in actions</li>
            <li className="leading-relaxed">We comply with the Telephone Consumer Act (TCPA) and all applicable laws</li>
          </ul>

          <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Opt-Out Instructions:</h4>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4">
            <li className="leading-relaxed">You can cancel SMS notifications at any time by replying "STOP"</li>
            <li className="leading-relaxed">You will receive a final confirmation message, and no further messages will be sent unless you re-opt in</li>
            <li className="leading-relaxed">All opt-out requests are processed within 24 hours</li>
          </ul>

          <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Message Frequency & Content:</h4>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4">
            <li className="leading-relaxed">Message frequency varies based on your interactions with our business</li>
            <li className="leading-relaxed">Messages will be directly related to the services you have requested</li>
            <li className="leading-relaxed">We do not send promotional content without specific consent</li>
          </ul>

          <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Help & Support:</h4>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4">
            <li className="leading-relaxed">Reply "HELP" for assistance or contact us at info@radcreativeventures.co.site</li>
            <li className="leading-relaxed">Customer support is available during regular business hours</li>
          </ul>

          <h4 className="text-md font-semibold text-gray-800 mt-4 mb-2">Carrier Information:</h4>
          <ul className="list-disc pl-5 sm:pl-6 space-y-2 mb-4">
            <li className="leading-relaxed">Standard message and data rates may apply</li>
            <li className="leading-relaxed">Carriers are not liable for delayed or undelivered messages</li>
            <li className="leading-relaxed">Supported carriers include AT&T, T-Mobile, Sprint, Verizon, and most regional carriers</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">SMS Data Protection Statement</h3>
          <p className="leading-relaxed">
            No mobile information will be shared with third parties/affiliates for marketing/promotional
            purposes. Information sharing to subcontractors in support services, such as customer
            service is permitted. All other use case categories exclude text messaging originator opt-in
            data and consent; this information will not be shared with any third parties.
          </p>
          <p className="leading-relaxed">
            We implement strict data protection measures to safeguard your SMS opt-in information and
            consent records.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
          <p className="leading-relaxed">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
          <p className="leading-relaxed">
            We may use cookies and similar tracking technologies (like web beacons and pixels to
            access or store information. Specific information about how we use such technologies and
            how you can refuse certain cookies is set out in our Cookie Notice.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">5. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
          <p className="leading-relaxed">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
          <p className="leading-relaxed">
            We retain your personal information only as long as necessary to provide our services, fulfill transactions, or comply with legal obligations. Once we no longer need to retain your information, we will securely delete or anonymize it.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">6. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
          <p className="leading-relaxed">In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
          <p className="leading-relaxed">
            We have implemented appropriate and reasonable technical and organizational security
            measures designed to protect the security of any personal information we process. However,
            despite our safeguards and efforts to secure your information, no electronic transmission
            over the Internet or information storage technology can be guaranteed to be 100% secure,
            so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third
            parties will not be able to defeat our security and improperly collect, access, steal, or modify your information. Although we will do our best to protect your personal information, transmission of personal information to and from our Services is at your own risk. You should only access the Services within a secure environment.
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">7. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
          <p className="leading-relaxed">In Short: You may review, change, or terminate your account at any time.</p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Withdrawing your consent:</h3>
          <p className="leading-relaxed">
            If we are relying on your consent to process your personal information, which may be
            express and/or implied consent depending on the applicable law, you have the right to
            withdraw your consent at any time. You can withdraw your consent at any time by contacting
            us by using the contact details provided in the section "HOW CAN YOU CONTACT US
            ABOUT THIS NOTICE?" below.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Opting out of marketing and promotional communications:</h3>
          <p className="leading-relaxed">
            You can unsubscribe from our marketing and promotional communications at any time by
            clicking on the unsubscribe link in the emails that we send, replying "STOP" or
            "UNSUBSCRIBE" to the SMS messages that we send, or by contacting us using the details
            provided in the section "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?" below. You
            will then be removed from the marketing lists.
          </p>

          <p className="leading-relaxed">
            You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon
            sending "STOP," we will confirm your unsubscribe status via SMS. Following this
            confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you
            did initially, and we will resume sending SMS messages to you.
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6 mb-3">Cookies and similar technologies:</h3>
          <p className="leading-relaxed">
            Most Web browsers are set to accept cookies by default. If you prefer, you can usually
            choose to set your browser to remove cookies and to reject cookies. If you choose to
            remove cookies or reject cookies, this could affect certain features or services of our
            Services.
          </p>

          <p className="leading-relaxed">
            If you have questions or comments about your privacy rights, you may email us at
            support@tiberiusstrategies.com
          </p>

          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mt-8 mb-3 sm:mb-4">14. CONTACT US</h2>
          <p className="leading-relaxed">If you have questions about this Privacy Policy or how your information is handles, contact us at:</p>
          <p className="leading-relaxed">+1(800)-225-6920 or email us at: support@tiberiusstrategies.com</p>

          <div className="mt-8 p-4 bg-gray-100 rounded-lg">
            <p className="text-sm text-gray-600 text-center">
              By using our website and services, you consent to this privacy policy.
            </p>
          </div>
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
