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
          <p className="text-sm sm:text-base text-gray-600">Welcome to TIBERIUS STRATEGIES!</p>
        </div>

        <div className="prose prose-sm sm:prose max-w-none">
          <div className="mb-6 sm:mb-8">
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              These terms and conditions outline the rules and regulations for the use of TIBERIUS STRATEGIES's Website, located at TIBERIUS STRATEGIES: https://wwwtiberiusstrategies.com/
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              By accessing this website we assume you accept these terms and conditions. Do not continue to use TIBERIUS STRATEGIES if you do not agree to take all of the terms and conditions stated on this page.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">SMS Messaging Terms & Conditions</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              These terms and conditions outline the rules and regulations for the use of TIBERIUS STRATEGIES's Website, located at TIBERIUS STRATEGIES: https://wwwtiberiusstrategies.com/
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              By accessing this website we assume you accept these terms and conditions. Do not continue to use TIBERIUS STRATEGIES if you do not agree to take all of the terms and conditions stated on this page.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company's terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client's needs in respect of provision of the Company's stated services, in accordance with and subject to, prevailing law of us. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. SMS, OPT-IN:</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              This messaging platform sends occasional marketing, transactional, and informational messages, including appointment confirmations and reminders, to customers who have booked an appointment with TIBERIUS STRATEGIES either through our website at (company website link) or via our scheduling forms. These messages are sent to those who have explicitly opted in to receive SMS notifications, which is collected via web forms featuring a dedicated checkbox for SMS consent. Additionally, messages may include updates on rescheduling and customer support communications.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              After opting-in, you will receive this SMS:
            </p>
            <div className="bg-gray-100 p-4 rounded-md mb-5 sm:mb-6">
              <p className="text-gray-700 italic">
                "You're now subscribed to SMS updates from TIBERIUS STRATEGIES. Expect occasional promotional and non-promotional texts like property alerts and reminders. Msg & data rates may apply. Reply HELP for help or STOP to unsubscribe."
              </p>
            </div>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. Cancellation Instructions:</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              You can cancel the SMS service at any time. Simply text "STOP" to the shortcode. Upon sending "STOP," we will confirm your unsubscribe status via SMS. Following this confirmation, you will no longer receive SMS messages from us. To rejoin, sign up as you did initially, and we will resume sending SMS messages to you or text the word "START", and we will resume sending SMS messages to you.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. Support Information:</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              If you are experiencing issues with the messaging platform, reply the keyword "HELP" for assistance, or reach out directly to support@tiberiusstrategies.com or call during business hours.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. Carrier Liability:</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Carriers are not liable for delayed or undelivered messages.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. Message & Data Rates:</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Messages and data rates may apply for messages sent to you from us and from you. Message frequency varies based on your service usage and appointment schedule. For questions about your text plan or data plan, contact your wireless provider.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. Supported Carriers:</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Our SMS platform works will all major U.S. wireless carriers, including AT&T, T-Mobile, Sprint, Verizon, and most regional carriers.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. Age Restriction:</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              You must be 18 years or older to participate in our SMS platform.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. Privacy Policy:</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              For privacy-related inquires, please refer to our Privacy Policy at https://wwwtiberiusstrategies.com/
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We comply with all applicable laws and regulation, including the Telephone Consumer Protection Act (TCPA) and CTIA guidelines, regarding the use of SMS communications.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">1. Cookies</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We employ the use of cookies. By accessing TIBERIUS STRATEGIES, you agreed to use cookies in agreement with the TIBERIUS STRATEGIES's Privacy Policy.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">10. License</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Unless otherwise stated, TIBERIUS STRATEGIES and/or its licensors own the intellectual property rights for all material on TIBERIUS STRATEGIES. All intellectual property rights are reserved. You may access this from TIBERIUS STRATEGIES for your own personal use subjected to restrictions set in these terms and conditions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              You must not:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-5 sm:mb-6 space-y-2">
              <li>Republish material from TIBERIUS STRATEGIES, sell, rent or sub-license material from TIBERIUS STRATEGIES</li>
              <li>Reproduce, duplicate or copy material from TIBERIUS STRATEGIES</li>
              <li>Redistribute content from TIBERIUS STRATEGIES.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Parts of this website offers an opportunity for users to post and exchange opinions and information in certain areas of the website. TIBERIUS STRATEGIES does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of TIBERIUS STRATEGIES its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, TIBERIUS STRATEGIES shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              TIBERIUS STRATEGIES reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">12. General Terms</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              This website (the "Site" is owned by ("COMPANY", "we", or "us".) By using this site, you agree to be bound by these Terms of Conditions and the Site in accordance with these Terms and Conditions, our Privacy Policy, and any additional terms and conditions that may apply to specific sections of the Site or to products and services available through the site or from TIBERIUS STRATEGIES
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Accessing this site, in any manner, whether automated or otherwise, constitutes use of the site and your agreement to be bound by these Terms and Conditions.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We reserve the right to change these Terms and Conditions or to impose new conditions on the use of the site from time to time, in which case we will post the revised Terms and Conditions on this website. By continuing to use the site after we post any such changes, you accept the Terms and Conditions, as modified.
            </p>

            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              You are entitled to post the Comments on our website and have all necessary licenses and consents to do so; The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party; The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              You hereby grant TIBERIUS STRATEGIES a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">13. Hyperlinking to our Content</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              The following organizations may link to our Website without prior written approval:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-5 sm:mb-6 space-y-2">
              <li>Government agencies;</li>
              <li>Search engines;</li>
              <li>News organizations;</li>
              <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
              <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We may consider and approve other link requests from the following types of organizations: commonly-known consumer and/or business information sources;http://dot.com community sites; associations or other groups representing charities; online directory distributors; internet portals; accounting, law and consulting firms; and educational institutions and trade associations.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of TIBERIUS STRATEGIES; and (d) the link is in the context of general resource information.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to support@tiberiusstrategies.com. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Approved organizations may hyperlink to our Website as follows:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-5 sm:mb-6 space-y-2">
              <li>By use of our corporate name; or</li>
              <li>By use of the uniform resource locator being linked to; or</li>
              <li>By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party's site.</li>
            </ul>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              No use of TIBERIUS STRATEGIES's logo or other artwork will be allowed for linking absent a trademark license agreement.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">14. iFrames</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">15. Content Liability</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">16. Reservation of Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it's linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">17. Removal of links from our website</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
            </p>

            <h2 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-3 sm:mb-4 mt-8">Disclaimer</h2>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              To the maximum extent permitted by applicable law, we exclude all representations, warrantys and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-5 sm:mb-6 space-y-2">
              <li>limit or exclude our or your liability for death or personal injury;</li>
              <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
              <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
              <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
            </ul>

            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
            </p>
            <p className="text-gray-700 leading-relaxed mb-5 sm:mb-6">
              As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
            </p>

            <div className="mt-8 sm:mt-10 pt-5 sm:pt-6 border-t border-gray-200">
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
