import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <span className="text-3xl font-bold text-brand-black tracking-tight">Partnerworks<span className="text-brand-pink">.</span></span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={() => scrollToSection('audience')} className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Who We Help</button>
          <button onClick={() => scrollToSection('process')} className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Process</button>
          <button onClick={() => scrollToSection('portfolio')} className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Portfolio</button>
          <button 
            onClick={onContactClick}
            className="bg-brand-black text-white px-5 py-2 rounded-lg hover:bg-brand-orange transition-colors font-semibold text-sm"
          >
            Get Started
          </button>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white absolute top-full left-0 w-full border-t border-gray-100 shadow-lg py-4 flex flex-col items-center space-y-4">
           <button onClick={() => scrollToSection('audience')} className="text-gray-800 font-medium">Who We Help</button>
          <button onClick={() => scrollToSection('process')} className="text-gray-800 font-medium">Process</button>
           <button onClick={() => scrollToSection('portfolio')} className="text-gray-800 font-medium">Portfolio</button>
          <button 
            onClick={onContactClick}
            className="bg-brand-orange text-white px-8 py-3 rounded-lg font-bold w-3/4"
          >
            Book Consultation
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;