import React from 'react';
import { 
  FaMapMarkerAlt, 
  FaEnvelope, 
  FaPhone, 
  FaChevronRight,
  FaClock
} from 'react-icons/fa';
import { ROUTES } from '../routes/routes.config';
import { Link } from 'react-router-dom';
import Logo from '/images/Tiberius_Logo-removebg-preview.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'How It Works', path: '/how-it-works' },
    { name: 'Services', path: '/services' },
    { name: 'Why Choose Us', path: '/why-choose-us' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Testimonials', path: '/testimonials' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Column 1: Company Info */}
          <div className="space-y-4 -ml-2">
            <div className="flex flex-col">
              <div className="flex items-start">
                <img 
                  src={Logo} 
                  alt="Tiberius Strategies"
                  className="h-24 w-auto object-contain mb-6 -ml-2"
                />
              </div>
              <h2 className="text-xl font-bold">Tiberius Strategies</h2>
              <p className="text-gray-400 text-sm">(DBA Tiberius Management)</p>
            </div>
            
            <p className="text-gray-300 text-sm">
              Empowering businesses with strategic insights and innovative solutions for sustainable growth and market leadership.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-blue-400 transition-colors flex items-center group text-sm"
                  >
                    <FaChevronRight className="mr-2 text-blue-400 text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white border-b border-gray-700 pb-2">
              Contact Us
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <FaMapMarkerAlt className="mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Office</p>
                  <p className="text-gray-300 text-sm">600 1st Ave STE 102, Seattle, WA 98104</p>
                </div>
              </div>
              
              <div className="flex items-start pt-2">
                <FaEnvelope className="mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <p className="text-gray-300 text-sm">Support@tiberiusstrategies.com</p>
                </div>
              </div>

              <div className="flex items-start pt-2">
                <FaPhone className="mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <p className="text-gray-300 text-sm">(888) 225-6920</p>
                </div>
              </div>
              
              <div className="flex items-start pt-2">
                <FaClock className="mr-3 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Business Hours</p>
                  <p className="text-gray-300 text-sm">Monday - Friday: 8:00 AM - 3:00 PM</p>
                  <p className="text-gray-300 text-sm">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-gray-400 text-sm">
                {currentYear} Tiberius Strategies. All rights reserved.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <a 
                href="/privacy-policy" 
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Privacy Policy
              </a>
              <Link 
                to={ROUTES.PUBLIC.TERMS_AND_CONDITIONS}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Terms and Conditions
              </Link>
              <Link 
                to={ROUTES.PUBLIC.COOKIE_POLICY}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Cookie Policy
              </Link>
              <Link 
                to={ROUTES.PUBLIC.DISCLAIMER}
                className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
              >
                Disclaimer
              </Link>
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-4 pt-4 border-t border-gray-800">
            <p className="text-gray-500 text-xs text-center">
              Tiberius Strategies is a registered DBA of Tiberius Management LLC. All trademarks, logos, and brand names are the property of their respective owners. All company, product, and service names used in this website are for identification purposes only.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;