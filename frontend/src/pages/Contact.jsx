import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar, X, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';

const Contact = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 1000); // Show popup after 1 second

    return () => clearTimeout(timer); // Clean up on component unmount
  }, []);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ success: false, message: '' });
  const [marketingConsent, setMarketingConsent] = useState(false);
  const [nonMarketingConsent, setNonMarketingConsent] = useState(false);
  const formRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ success: false, message: '' });

    const formData = new FormData(e.target);
    formData.append('access_key', import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '');
    formData.append('from_name', 'Tiberius Strategies Contact Form');
    formData.append('subject', 'New Contact Form Submission');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus({
          success: true,
          message: 'Thank you for your message! We will get back to you soon.'
        });
        formRef.current.reset();
        // Clear the success message after 2 seconds
        setTimeout(() => {
          setSubmitStatus({ success: false, message: '' });
        }, 2000);
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus({
        success: false,
        message: 'Failed to send message. Please try again later.'
      });
      // Clear the error message after 2 seconds
      setTimeout(() => {
        setSubmitStatus({ success: false, message: '' });
      }, 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-sky-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-100 text-sky-700 px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-sm border border-sky-200">
            <MessageCircle className="w-4 h-4" />
            Get In Touch
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact <span className="bg-gradient-to-r from-sky-500 to-sky-700 bg-clip-text text-transparent">Our Team</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions about surplus funds? Our team is here to help you with your claim.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <a href="tel:888-225-6920" className="text-sky-600 hover:text-sky-700">(888) 225-6920</a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <a href="mailto:Support@tiberiusstrategies.com" className="text-sky-600 hover:text-sky-700">
                      Support@tiberiusstrategies.com
                    </a>
                    <p className="text-sm text-gray-500">We typically respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-700">600 1st Ave STE 102</p>
                    <p className="text-gray-700">Seattle, WA 98104</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-sky-100 p-3 rounded-full text-sky-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-700">Monday - Friday: 8:00 AM - 3:00 PM</p>
                    <p className="text-gray-700">Saturday - Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Free Case Evaluation */}
            <div className="bg-gradient-to-br from-sky-500 to-sky-600 rounded-2xl p-8 text-white shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-6 h-6 text-white" />
                <h2 className="text-2xl font-bold">Free Case Evaluation</h2>
              </div>
              <p className="mb-6 text-sky-100">
                Schedule a free consultation with our team to discuss your surplus funds claim.
              </p>
              <button className="w-full bg-white text-sky-600 font-semibold py-3 px-6 rounded-lg hover:bg-sky-50 transition-all duration-300 shadow-md">
                Schedule Now
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-sky-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
            {submitStatus.message && (
              <div className={`p-4 mb-6 rounded-lg ${submitStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'}`}>
                <div className="flex items-start">
                  {submitStatus.success ? (
                    <CheckCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                  ) : (
                    <AlertCircle className="w-5 h-5 mt-0.5 mr-2 flex-shrink-0" />
                  )}
                  <span>{submitStatus.message}</span>
                </div>
              </div>
            )}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition"
                  placeholder=""
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition"
                    placeholder=""
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition"
                    placeholder=""
                  />
                </div>
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
                  Property Address (if applicable)
                </label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition"
                  placeholder=""
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-sky-500 focus:border-sky-500 focus:outline-none transition"
                  placeholder=""
                ></textarea>
              </div>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm font-medium text-gray-700 mb-3">Consent to receive text messages:</p>
                  
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={marketingConsent}
                        onChange={(e) => setMarketingConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-600">
                        By checking this box, I agree to receive marketing and promotional text messages from Tiberius Strategies. Message frequency varies. Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Privacy Policy
                      </span>
                    </label>
                    
                    <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors">
                      <input
                        type="checkbox"
                        checked={nonMarketingConsent}
                        onChange={(e) => setNonMarketingConsent(e.target.checked)}
                        className="mt-1 w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500 focus:ring-2"
                      />
                      <span className="text-sm text-gray-600">
                        By checking this box, I agree to receive non-marketing text messages from Tiberius Strategies (e.g., appointment reminders, service updates, account notifications). Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help. Privacy Policy
                      </span>
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-2 border-t border-gray-200 items-center justify-center">
                <Link 
                  to={ROUTES.PUBLIC.PRIVACY_POLICY}
                  className="text-sky-600 hover:text-sky-700 text-sm font-medium transition-colors flex items-center justify-center"
                >
                  Privacy Policy
                </Link>
                <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                <Link 
                  to={ROUTES.PUBLIC.TERMS_AND_CONDITIONS}
                  className="text-sky-600 hover:text-sky-700 text-sm font-medium transition-colors flex items-center justify-center"
                >
                  Terms and Conditions
                </Link>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting || !marketingConsent || !nonMarketingConsent}
                  className="w-full bg-gradient-to-r from-sky-500 to-sky-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-sky-600 hover:to-sky-700 transition-all duration-300 shadow-md flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="animate-spin mr-2 h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-16 bg-white rounded-2xl overflow-hidden shadow-lg border border-sky-100">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2689.485308861256!2d-122.33737668436887!3d47.60620567918536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54906ab1f7f5e9e3%3A0x3e9b8c5d5b5e9e9d!2s600%201st%20Ave%20%23102%2C%20Seattle%2C%20WA%2098104%2C%20USA!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Tiberius Strategies Office Location"
          ></iframe>
        </div>
      </div>

      {/* Popup Image */}
      {showPopup && (
        <div className="fixed bottom-4 right-4 z-50 animate-fade-in-up">
          <div className="relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-2 -right-2 bg-white text-navy-900 rounded-full w-6 h-6 flex items-center justify-center z-10 hover:bg-gray-100 transition-colors shadow-md"
              aria-label="Close popup"
            >
              <X className="h-4 w-4 text-navy-900" />
            </button>
            <img
              src="/images/1000073630-removebg-preview.png"
              alt="Special Offer"
              className="h-32 w-auto object-contain drop-shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
