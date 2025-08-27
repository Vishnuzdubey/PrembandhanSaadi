import React, { useState } from 'react';
import { Heart, Menu, X, Phone, Mail, MapPin, User, Users } from 'lucide-react';
import { Button } from './ui/button';
import AuthModal from './AuthModal';

interface HeaderProps {
  onNavigateToProfiles: () => void;
  onNavigateHome: () => void;
  currentPage: string;
}

const Header: React.FC<HeaderProps> = ({ onNavigateToProfiles, onNavigateHome, currentPage }) => {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRegister = () => {
    setIsAuthModalOpen(true);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    if (sectionId === 'profiles') {
      onNavigateToProfiles();
    } else if (sectionId === 'home') {
      onNavigateHome();
    } else {
      // For other sections, scroll to them if we're on the home page
      if (currentPage === 'home') {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        // If not on home page, navigate to home first
        onNavigateHome();
        // Then scroll after a short delay
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    }
    closeMobileMenu();
  };

  return (
    <>
      <header className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
        {/* Top Bar - Hidden on mobile */}
        <div className="bg-gradient-to-r from-rose-50 to-pink-50 border-b border-rose-100 hidden lg:block">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-2 text-sm">
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4 text-rose-500" />
                  <span className="font-medium">+91 98765 43210</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4 text-rose-500" />
                  <span className="font-medium">info@prembandhan.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4 text-rose-500" />
                  <span className="font-medium">Gorakhpur, UP</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Users className="h-4 w-4 text-rose-500" />
                  <span className="font-medium">50,000+ Happy Couples</span>
                </div>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={handleRegister}
                  className="bg-white border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
                >
                  <User className="h-4 w-4 mr-1" />
                  Register Free
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-3 lg:py-4">
              {/* Logo */}
              <button onClick={() => handleNavClick('home')} className="flex items-center space-x-3 hover:opacity-80 transition-opacity duration-300">
                <div className="bg-gradient-to-br from-rose-500 to-pink-600 p-2 lg:p-3 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300">
                  <Heart className="h-6 w-6 lg:h-8 lg:w-8 text-white fill-current" />
                </div>
                <div>
                  <h1 className="text-xl lg:text-2xl xl:text-3xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent">
                    PremBandhan
                  </h1>
                  <p className="text-xs lg:text-sm text-gray-500 font-medium hidden sm:block">
                    Where Hearts Unite
                  </p>
                </div>
              </button>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <button 
                  onClick={() => handleNavClick('home')}
                  className={`font-medium transition-colors duration-300 relative group ${
                    currentPage === 'home' ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
                  }`}
                >
                  Home
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-rose-600 transition-all duration-300 ${
                    currentPage === 'home' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
                <button 
                  onClick={() => handleNavClick('profiles')}
                  className={`font-medium transition-colors duration-300 relative group ${
                    currentPage === 'profiles' || currentPage === 'profile' ? 'text-rose-600' : 'text-gray-700 hover:text-rose-600'
                  }`}
                >
                  Browse Profiles
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-rose-600 transition-all duration-300 ${
                    currentPage === 'profiles' || currentPage === 'profile' ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </button>
                <button 
                  onClick={() => handleNavClick('how-it-works')}
                  className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-300 relative group"
                >
                  How It Works
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button 
                  onClick={() => handleNavClick('success-stories')}
                  className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-300 relative group"
                >
                  Success Stories
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
                </button>
                <button 
                  onClick={() => handleNavClick('contact')}
                  className="text-gray-700 hover:text-rose-600 font-medium transition-colors duration-300 relative group"
                >
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-rose-600 group-hover:w-full transition-all duration-300"></span>
                </button>
              </nav>

              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                <Button 
                  variant="outline" 
                  onClick={handleRegister}
                  className="border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
                >
                  Login
                </Button>
                <Button 
                  onClick={handleRegister}
                  className="bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="h-4 w-4 mr-2 fill-current" />
                  Join Now
                </Button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden flex items-center space-x-3">
                {/* Mobile Register Button */}
                <Button 
                  size="sm"
                  onClick={handleRegister}
                  className="bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-md text-xs px-3 py-2"
                >
                  <Heart className="h-3 w-3 mr-1 fill-current" />
                  Join
                </Button>
                
                {/* Hamburger Menu */}
                <button
                  onClick={toggleMobileMenu}
                  className="text-gray-700 hover:text-rose-600 transition-colors duration-300 p-2"
                  aria-label="Toggle mobile menu"
                >
                  {isMobileMenuOpen ? (
                    <X className="h-6 w-6" />
                  ) : (
                    <Menu className="h-6 w-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="py-4 space-y-4">
                {/* Contact Info - Mobile */}
                <div className="bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg p-4 space-y-3">
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Phone className="h-4 w-4 text-rose-500" />
                    <span className="font-medium">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <Mail className="h-4 w-4 text-rose-500" />
                    <span className="font-medium">info@prembandhan.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm text-gray-600">
                    <MapPin className="h-4 w-4 text-rose-500" />
                    <span className="font-medium">Gorakhpur, UP</span>
                  </div>
                </div>

                {/* Navigation Links */}
                <nav className="space-y-3">
                  <button 
                    onClick={() => handleNavClick('home')}
                    className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === 'home' 
                        ? 'text-rose-600 bg-rose-50' 
                        : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                    }`}
                  >
                    Home
                  </button>
                  <button 
                    onClick={() => handleNavClick('profiles')}
                    className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      currentPage === 'profiles' || currentPage === 'profile'
                        ? 'text-rose-600 bg-rose-50' 
                        : 'text-gray-700 hover:text-rose-600 hover:bg-rose-50'
                    }`}
                  >
                    Browse Profiles
                  </button>
                  <button 
                    onClick={() => handleNavClick('how-it-works')}
                    className="block w-full text-left py-3 px-4 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg font-medium transition-all duration-300"
                  >
                    How It Works
                  </button>
                  <button 
                    onClick={() => handleNavClick('success-stories')}
                    className="block w-full text-left py-3 px-4 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg font-medium transition-all duration-300"
                  >
                    Success Stories
                  </button>
                  <button 
                    onClick={() => handleNavClick('contact')}
                    className="block w-full text-left py-3 px-4 text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-lg font-medium transition-all duration-300"
                  >
                    Contact
                  </button>
                </nav>

                {/* Mobile Action Buttons */}
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <Button 
                    variant="outline" 
                    onClick={() => {
                      handleRegister();
                      closeMobileMenu();
                    }}
                    className="w-full border-rose-200 text-rose-600 hover:bg-rose-50 hover:border-rose-300 transition-all duration-300"
                  >
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button 
                    onClick={() => {
                      handleRegister();
                      closeMobileMenu();
                    }}
                    className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white hover:from-rose-600 hover:to-pink-700 shadow-lg"
                  >
                    <Heart className="h-4 w-4 mr-2 fill-current" />
                    Create Profile - Free
                  </Button>
                  
                  {/* Trust Indicator - Mobile */}
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600 bg-gradient-to-r from-rose-50 to-pink-50 rounded-lg py-3">
                    <Users className="h-4 w-4 text-rose-500" />
                    <span className="font-medium">50,000+ Happy Couples</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      <AuthModal 
        isOpen={isAuthModalOpen} 
        onClose={() => setIsAuthModalOpen(false)} 
      />
    </>
  );
};

export default Header;