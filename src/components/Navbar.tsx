
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'py-3 bg-white/80 backdrop-blur-md border-b border-gray-200/50 shadow-subtle' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-bold"
        >
          <span className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-white text-lg">
            S
          </span>
          <span className="transition-all duration-300">Sign Scribe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/' 
                ? 'text-accent' 
                : 'text-foreground/80 hover:text-accent'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/learn" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/learn' 
                ? 'text-accent' 
                : 'text-foreground/80 hover:text-accent'
            }`}
          >
            Learn
          </Link>
          <Link 
            to="/translate" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/translate' 
                ? 'text-accent' 
                : 'text-foreground/80 hover:text-accent'
            }`}
          >
            Translate
          </Link>
          <Link 
            to="/about" 
            className={`text-sm font-medium transition-colors ${
              location.pathname === '/about' 
                ? 'text-accent' 
                : 'text-foreground/80 hover:text-accent'
            }`}
          >
            About
          </Link>
          <div className="flex items-center space-x-3">
            <Button to="/signin" variant="outline" size="sm">
              Sign In
            </Button>
            <Button to="/signup" size="sm">
              Sign Up
            </Button>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-gray-100 focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor" 
            className="w-6 h-6"
          >
            {isMobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-200 animate-fadeIn">
          <div className="container mx-auto px-6 py-4 space-y-3">
            <Link 
              to="/" 
              className={`block py-2 text-sm font-medium ${
                location.pathname === '/' 
                  ? 'text-accent' 
                  : 'text-foreground/80'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/learn" 
              className={`block py-2 text-sm font-medium ${
                location.pathname === '/learn' 
                  ? 'text-accent' 
                  : 'text-foreground/80'
              }`}
            >
              Learn
            </Link>
            <Link 
              to="/translate" 
              className={`block py-2 text-sm font-medium ${
                location.pathname === '/translate' 
                  ? 'text-accent' 
                  : 'text-foreground/80'
              }`}
            >
              Translate
            </Link>
            <Link 
              to="/about" 
              className={`block py-2 text-sm font-medium ${
                location.pathname === '/about' 
                  ? 'text-accent' 
                  : 'text-foreground/80'
              }`}
            >
              About
            </Link>
            <div className="pt-3 flex flex-col space-y-2">
              <Button to="/signin" variant="outline" className="w-full">
                Sign In
              </Button>
              <Button to="/signup" className="w-full">
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
