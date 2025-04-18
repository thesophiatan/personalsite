import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/projects', label: 'Projects' },
    { path: '/notes', label: 'Notes' },
    { path: '/now', label: 'Now' },
  ];

  // Handle scroll to change nav background
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Prevent body scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  return (
    <>
      {/* Regular Navigation */}
      <nav className={`fixed w-full z-40 transition-all duration-300 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-2xl font-serif text-text hover:text-primary transition-colors duration-300 relative group flex items-center"
            >
              <span className="relative z-10 bg-gradient-to-r from-primary to-accent-alt bg-clip-text text-transparent">Sophia Tan</span>
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-accent scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-text/80 hover:text-primary transition-colors duration-300 relative group ${
                    location.pathname === item.path ? 'text-primary' : ''
                  }`}
                >
                  <span className="relative z-10">{item.label}</span>
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    location.pathname === item.path ? 'scale-x-100' : ''
                  }`}></span>
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-text hover:text-primary transition-colors duration-300 z-50"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 z-50 md:hidden"
          style={{ backgroundColor: '#FDFAFC' }}
        >
          <div className="min-h-screen flex flex-col">
            {/* Header with Close Button */}
            <div className="px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <Link 
                  to="/" 
                  className="text-2xl font-serif text-text hover:text-primary transition-colors duration-300 relative group flex items-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className="relative z-10 bg-gradient-to-r from-primary to-accent-alt bg-clip-text text-transparent">Sophia Tan</span>
                </Link>

                {/* Close Button */}
                <button
                  className="text-text hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Navigation Items */}
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 p-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-2xl font-serif text-text hover:text-primary transition-colors duration-300 ${
                    location.pathname === item.path ? 'text-primary' : ''
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation; 