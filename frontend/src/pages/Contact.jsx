import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Clock, MessageCircle, X, CheckCircle, AlertCircle, Loader2, ArrowRight } from 'lucide-react';
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
    <div className="min-h-screen bg-sky-50 font-sans">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT SIDE: Content & Contact Info (Styled like the timeline/steps in image) */}
          <div className="lg:col-span-5 space-y-12 lg:sticky lg:top-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-white text-sky-700 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide mb-6 shadow-sm border border-sky-100">
                <MessageCircle className="w-3 h-3" />
                Get In Touch
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
                Contact <br />
                <span className="text-sky-600">Our Team</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Have questions about surplus funds? Our team is here to help you with your claim. You are one step closer to getting the help you need.
              </p>
            </div>

            {/* Vertical List / Timeline Style */}
            <div className="relative">
              {/* Vertical connecting line */}
              <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-200 to-transparent"></div>

              <div className="space-y-10 relative">
                {/* Item 1: Phone */}
                <div className="flex gap-6 items-start group">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-sky-100 flex items-center justify-center text-sky-600 shadow-sm group-hover:border-sky-500 group-hover:bg-sky-50 transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Give us a call</h3>
                    <p className="text-gray-500 text-sm mb-1">Mon-Fri from 8am to 3pm.</p>
                    <a href="tel:888-225-6920" className="text-sky-600 font-semibold hover:text-sky-800 transition-colors">
                      (888) 225-6920
                    </a>
                  </div>
                </div>

                {/* Item 2: Email */}
                <div className="flex gap-6 items-start group">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-sky-100 flex items-center justify-center text-sky-600 shadow-sm group-hover:border-sky-500 group-hover:bg-sky-50 transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Send us an email</h3>
                    <p className="text-gray-500 text-sm mb-1">We typically respond within 24 hours.</p>
                    <a href="mailto:Support@tiberiusstrategies.com" className="text-sky-600 font-semibold hover:text-sky-800 transition-colors break-all">
                      Support@tiberiusstrategies.com
                    </a>
                  </div>
                </div>

                {/* Item 3: Visit */}
                <div className="flex gap-6 items-start group">
                  <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full bg-white border-2 border-sky-100 flex items-center justify-center text-sky-600 shadow-sm group-hover:border-sky-500 group-hover:bg-sky-50 transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">Visit our office</h3>
                    <p className="text-gray-600">600 1st Ave STE 102</p>
                    <p className="text-gray-600">Seattle, WA 98104</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: The Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-sky-100">
              
              {/* Header inside card */}
              <div className="bg-sky-50/50 p-8 pb-0">
                <div className="bg-sky-600 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-4 shadow-lg shadow-sky-200">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Send us a message</h2>
                <p className="text-gray-500 mt-2">Write us a few words about your project and we'll prepare a proposal for you within <span className="font-semibold text-gray-900">24 hours</span>.</p>
              </div>

              <div className="p-8">
                {submitStatus.message && (
                  <div className={`p-4 mb-6 rounded-lg flex items-start gap-3 ${submitStatus.success ? 'bg-green-50 text-green-800 border border-green-100' : 'bg-red-50 text-red-800 border border-red-100'}`}>
                    {submitStatus.success ? (
                      <CheckCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    )}
                    <span className="text-sm font-medium">{submitStatus.message}</span>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  
                  {/* Grid for Name/Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-gray-200 border focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all outline-none"
                        placeholder=""
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-gray-200 border focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all outline-none"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-1.5">
                      <label htmlFor="phone" className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-gray-200 border focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all outline-none"
                        placeholder=""
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label htmlFor="address" className="text-sm font-semibold text-gray-700 ml-1">Property Address</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        className="w-full px-4 py-3 bg-gray-50 rounded-xl border-gray-200 border focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all outline-none"
                        placeholder=""
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      rows="4"
                      required
                      className="w-full px-4 py-3 bg-gray-50 rounded-xl border-gray-200 border focus:bg-white focus:ring-2 focus:ring-sky-500/20 focus:border-sky-500 transition-all outline-none resize-none"
                      placeholder=""
                    ></textarea>
                  </div>

                  {/* Consents Section - Full Text Preserved */}
                  <div className="bg-gray-50 p-5 rounded-xl border border-gray-100">
                    <p className="text-sm font-bold text-gray-800 mb-4">Consent to receive text messages:</p>
                    <div className="space-y-4">
                      
                      {/* Marketing Consent */}
                      <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors">
                        <input
                          type="checkbox"
                          checked={marketingConsent}
                          onChange={(e) => setMarketingConsent(e.target.checked)}
                          className="mt-1 w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500 focus:ring-2"
                        />
                        <span className="text-sm text-gray-600">
                          By checking this box, I agree to receive marketing and promotional text messages from Tiberius Strategies. Messages may be sent up to 4 times per month. Message and data rates may apply. Reply STOP to unsubscribe. Reply HELP for help.
                          </span>
                      </label>
                      
                      {/* Non-Marketing Consent */}
                      <label className="flex items-start gap-3 cursor-pointer hover:bg-gray-100 p-2 rounded transition-colors">
                        <input
                          type="checkbox"
                          checked={nonMarketingConsent}
                          onChange={(e) => setNonMarketingConsent(e.target.checked)}
                          className="mt-1 w-4 h-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500 focus:ring-2"
                        />
                        <span className="text-sm text-gray-600">
                          By checking this box, I agree to receive non marketing text messages from Tiberius Strategies such as appointment reminders, service updates, and account notifications. Messages may be sent as needed based on my activity or account status. Message and data rates may apply. Reply STOP to unsubscribe.Reply HELP for help.
                          </span>
                      </label>

                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col sm:flex-row gap-3 items-center justify-center text-xs text-gray-500">
                    <Link to={ROUTES.PUBLIC.PRIVACY_POLICY} className="hover:text-sky-600 underline decoration-gray-300 hover:decoration-sky-600 transition-all">Privacy Policy</Link>
                    <span className="hidden sm:inline">•</span>
                    <Link to={ROUTES.PUBLIC.TERMS_AND_CONDITIONS} className="hover:text-sky-600 underline decoration-gray-300 hover:decoration-sky-600 transition-all">Terms and Conditions</Link>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting || !marketingConsent || !nonMarketingConsent}
                    className="w-full bg-gradient-to-r from-sky-600 to-sky-500 text-white font-bold py-4 px-6 rounded-xl hover:shadow-lg hover:shadow-sky-200 transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center disabled:opacity-60 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin mr-2 h-5 w-5" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup Image */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
          <div className="relative group">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute -top-3 -right-3 bg-white text-gray-800 rounded-full w-8 h-8 flex items-center justify-center z-10 hover:bg-red-50 hover:text-red-500 transition-colors shadow-lg border border-gray-100"
              aria-label="Close popup"
            >
              <X className="h-4 w-4" />
            </button>
            <img
              src="/images/1000073630-removebg-preview.png"
              alt="Special Offer"
              className="h-40 w-auto object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;