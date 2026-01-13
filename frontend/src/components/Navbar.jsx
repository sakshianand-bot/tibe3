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
    { name: 'Testimonials', path: ROUTES.PUBLIC.TESTIMONIALS },
    { name: 'Contact Us', path: ROUTES.PUBLIC.CONTACT }
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
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavigation(link.path)}
                className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 group bg-transparent border-none cursor-pointer"
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
            ))}
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
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="flex items-center px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 hover:pl-6"
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
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;