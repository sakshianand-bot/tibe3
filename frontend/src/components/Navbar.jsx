import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '../routes/routes.config';
import Logo from '/images/Tiberius_Logo-removebg-preview.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    // Close mobile menu if open
    setIsOpen(false);
    
    // If we're already on the same page, scroll to top
    if (location.pathname === path) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    } else {
      // Otherwise, navigate to the page
      navigate(path);
    }
  };

  const navLinks = [
    { name: 'Home', path: ROUTES.PUBLIC.HOME },
    { name: 'How It Works', path: ROUTES.PUBLIC.HOW_IT_WORKS },
    { name: 'Services', path: ROUTES.PUBLIC.SERVICES },
    { name: 'Why Choose Us', path: ROUTES.PUBLIC.WHY_CHOOSE_US },
    { name: 'Privacy Policy', path: ROUTES.PUBLIC.PRIVACY_POLICY },
    { name: 'Terms & Conditions', path: ROUTES.PUBLIC.TERMS_AND_CONDITIONS },
    { name: 'FAQ', path: ROUTES.PUBLIC.FAQ },
    { name: 'Book Consultation', path: ROUTES.PUBLIC.BOOKCONSULTATION },
    { name: 'Testimonials', path: ROUTES.PUBLIC.TESTIMONIALS },
    { name: 'Contact', path: ROUTES.PUBLIC.CONTACT }
  ];

  const navStyles = {
    background: 'linear-gradient(135deg, #0a192f 0%, #1a365d 50%, #000000 100%)',
    backdropFilter: 'blur(10px)',
    backgroundColor: 'rgba(10, 25, 47, 0.95)',
    position: 'sticky',
    top: '0',
    zIndex: '50',
    borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
    transition: 'all 0.3s ease',
  };

  const mobileMenuStyles = {
    background: 'linear-gradient(to bottom, rgba(10, 25, 47, 0.98), rgba(26, 54, 93, 0.98))',
    backdropFilter: 'blur(10px)',
    borderTop: '1px solid rgba(255, 255, 255, 0.1)'
  };

  const linkHoverStyles = {
    position: 'relative',
    overflow: 'hidden'
  };

  return (
    <nav style={navStyles}>
      <div className="w-full mx-auto px-2 sm:px-4 py-0">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="flex items-center justify-center">
                <img 
                  src={Logo} 
                  alt="Tiberius Strategies"
                  className="h-12 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <span 
                className="text-xl font-semibold italic hidden sm:inline"
                style={{
                  background: 'linear-gradient(to right, #ffffff, #dbeafe)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                Tiberius Strategies
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-0.5">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="relative group inline-block">
                    <button
                      onClick={() => handleNavigation(link.path)}
                      className="relative px-3 py-2 rounded text-sm font-medium transition-all duration-300 bg-transparent border-none cursor-pointer whitespace-nowrap"
                      style={linkHoverStyles}
                    >
                      <span className="text-white/85 group-hover:text-white transition-colors duration-300 flex items-center gap-1">
                        {link.name}
                        <svg className="w-4 h-4 opacity-70" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </span>
                      <span 
                        className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                        style={{
                          background: 'linear-gradient(to right, #60a5fa, #22d3ee)'
                        }}
                      ></span>
                    </button>
                    <div className="absolute left-0 mt-2 w-64 rounded-xl shadow-2xl py-2 bg-slate-900 border border-slate-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 translate-y-2 group-hover:translate-y-0">
                      <button
                        onClick={() => handleNavigation(ROUTES.PUBLIC.SERVICES)}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400 w-full text-left transition-colors"
                      >
                        All Services
                      </button>
                      <button
                        onClick={() => handleNavigation(ROUTES.PUBLIC.WHOLESALE_REAL_ESTATE)}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400 w-full text-left transition-colors"
                      >
                        Wholesale Real Estate
                      </button>
                      <button
                        onClick={() => handleNavigation(ROUTES.PUBLIC.AI_WEB_DEV)}
                        className="block px-4 py-2.5 text-sm font-medium text-slate-300 hover:bg-slate-800 hover:text-cyan-400 w-full text-left transition-colors"
                      >
                        AI Web Development
                      </button>
                    </div>
                  </div>
                );
              }
              return (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className="relative px-3 py-2 rounded text-sm font-medium transition-all duration-300 group bg-transparent border-none cursor-pointer whitespace-nowrap"
                style={linkHoverStyles}
              >
                <span className="text-white/85 group-hover:text-white transition-colors duration-300">
                  {link.name}
                </span>
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300"
                  style={{
                    background: 'linear-gradient(to right, #60a5fa, #22d3ee)'
                  }}
                ></span>
              </button>
            )})}
            
            {/* Auth Buttons - Hidden */}
            {/* <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-white/20">
              <button
                onClick={() => handleNavigation(ROUTES.PUBLIC.LOGIN)}
                className="px-4 py-2 text-sm font-medium text-white/90 hover:text-white transition-colors duration-300 border border-white/30 rounded-lg hover:border-white/50 hover:bg-white/10"
              >
                Login
              </button>
            </div> */}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg transition-colors duration-300"
              style={{
                color: '#ffffff',
                backgroundColor: isOpen ? 'rgba(255, 255, 255, 0.1)' : 'transparent'
              }}
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden" style={mobileMenuStyles}>
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            {navLinks.map((link) => {
              if (link.name === 'Services') {
                return (
                  <div key={link.name} className="flex flex-col">
                    <Link
                      to={link.path}
                      className="flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:pl-6 group"
                      style={{
                        color: 'rgba(255, 255, 255, 0.9)',
                        backgroundColor: 'transparent'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                        e.currentTarget.style.color = '#ffffff';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = 'transparent';
                        e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                      }}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="ml-2">{link.name}</span>
                      <svg 
                        className="ml-auto h-4 w-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                        style={{ color: '#60a5fa' }}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <div className="pl-6 flex flex-col space-y-1 mt-1 border-l border-white/10 ml-4">
                      <Link
                        to={ROUTES.PUBLIC.WHOLESALE_REAL_ESTATE}
                        className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 hover:pl-6 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        Wholesale Real Estate
                      </Link>
                      <Link
                        to={ROUTES.PUBLIC.AI_WEB_DEV}
                        className="px-4 py-2.5 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 hover:pl-6 transition-all duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        AI Web Development
                      </Link>
                    </div>
                  </div>
                );
              }
              return (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:pl-6 group"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  backgroundColor: 'transparent'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'rgba(255, 255, 255, 0.9)';
                }}
                onClick={() => setIsOpen(false)}
              >
                <span className="ml-2">{link.name}</span>
                <svg 
                  className="ml-auto h-4 w-4 transition-opacity duration-300 opacity-0 group-hover:opacity-100" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                  style={{ color: '#60a5fa' }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            )})}
            
            {/* Mobile Auth Links - Hidden */}
            {/* <div className="pt-4 mt-4 border-t border-white/20 space-y-2">
              <Link
                to={ROUTES.PUBLIC.LOGIN}
                className="flex items-center justify-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 border border-white/30 text-white/90 hover:text-white hover:border-white/50 hover:bg-white/10"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
            </div> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;