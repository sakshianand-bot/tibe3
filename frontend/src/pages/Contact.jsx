import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, MessageCircle, X, CheckCircle, AlertCircle, Loader2, ArrowRight, ExternalLink } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-sky-50 font-sans">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT SIDE: Content & Contact Info */}
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
                {/* Item 1: Email */}
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

{/* RIGHT SIDE: Phone Contact Card */ }
          <div className="lg:col-span-7">
            <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-sky-100 p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-sky-600 w-12 h-12 rounded-xl flex items-center justify-center text-white shadow-lg shadow-sky-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <span className="text-xs font-semibold uppercase tracking-widest text-sky-600">Give us a call</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-3">Need help right now?</h2>
              <p className="text-gray-600 mb-6">Our team is available Monday through Friday from 8am to 3pm. Pick the best number below and speak with us directly.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <a href="tel:+12068752651" className="block rounded-3xl border border-sky-100 bg-sky-50 px-5 py-5 text-sky-700 font-semibold hover:border-sky-200 hover:bg-sky-100 transition">
                  +1 (206) 875-2651
                </a>
                <a href="tel:+14256202417" className="block rounded-3xl border border-sky-100 bg-sky-50 px-5 py-5 text-sky-700 font-semibold hover:border-sky-200 hover:bg-sky-100 transition">
                  +1 (425) 620-2417
                </a>
                <a href="tel:+12535444781" className="block rounded-3xl border border-sky-100 bg-sky-50 px-5 py-5 text-sky-700 font-semibold hover:border-sky-200 hover:bg-sky-100 transition">
                  +1 (253) 544-4781
                </a>
                <a href="tel:+15092673083" className="block rounded-3xl border border-sky-100 bg-sky-50 px-5 py-5 text-sky-700 font-semibold hover:border-sky-200 hover:bg-sky-100 transition">
                  +1 (509) 267-3083
                </a>
                <a href="tel:+13605836776" className="block rounded-3xl border border-sky-100 bg-sky-50 px-5 py-5 text-sky-700 font-semibold hover:border-sky-200 hover:bg-sky-100 transition col-span-full">
                  +1 (360) 583-6776
                </a>
              </div>
            </div>
          </div>
      </div>
      </div>

      {/* Floating Helper Popup */}
      {showPopup && (
        <div className="fixed bottom-6 right-6 z-50 animate-fade-in-up">
          <div className="relative bg-white rounded-3xl p-4 shadow-2xl border border-slate-200 max-w-xs">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 rounded-full bg-slate-100 p-2 text-slate-600 hover:bg-slate-200"
              aria-label="Close help popup"
            >
              <X className="h-4 w-4" />
            </button>
            <div className="text-sm text-gray-700">
              Need help? Our chat widget is available on every page now — just click the chat icon to start.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;