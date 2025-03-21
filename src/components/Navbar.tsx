
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Button from './Button';
import { Menu, X } from 'lucide-react';

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

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Learn', path: '/learn' },
    { name: 'Translate', path: '/translate' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled || isMobileMenuOpen
          ? 'py-3 bg-background/95 backdrop-blur-md border-b border-border/50 shadow-subtle' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-xl font-bold z-10"
        >
          <span className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-primary-foreground text-lg">
            S
          </span>
          <span className="transition-all duration-300">Sign Scribe</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-sm font-medium transition-colors ${
                location.pathname === link.path 
                  ? 'text-primary' 
                  : 'text-foreground/80 hover:text-primary'
              }`}
            >
              {link.name}
            </Link>
          ))}
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
          className="md:hidden p-2 rounded-lg transition-colors hover:bg-muted focus:outline-none z-10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-b border-border animate-fadeIn absolute inset-x-0 top-[57px]">
          <div className="container mx-auto px-6 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link 
                key={link.path}
                to={link.path} 
                className={`block py-2 text-sm font-medium ${
                  location.pathname === link.path 
                    ? 'text-primary' 
                    : 'text-foreground/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
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
