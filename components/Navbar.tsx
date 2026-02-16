
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
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav 
      className={`fixed w-full z-40 transition-all duration-300 ${
        isScrolled ? 'bg-black/60 backdrop-blur-lg border-b border-white/10 py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center cursor-pointer" onClick={handleLogoClick}>
          <span className="text-2xl font-bold text-brand-textWhite tracking-tight">Partnerworks<span className="text-brand-pink">.</span></span>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <button onClick={() => scrollToSection('what-we-do')} className="text-brand-textPara hover:text-brand-textWhite transition-colors font-medium text-sm">Problem</button>
          <button onClick={() => scrollToSection('services')} className="text-brand-textPara hover:text-brand-textWhite transition-colors font-medium text-sm">How we work</button>
          <button onClick={() => scrollToSection('approach')} className="text-brand-textPara hover:text-brand-textWhite transition-colors font-medium text-sm">Framework</button>
          <button 
            onClick={onContactClick}
            className="bg-brand-orange text-white px-6 py-2.5 rounded-lg hover:bg-orange-600 transition-colors font-bold text-sm shadow-lg"
          >
            Arrange a call
          </button>
        </div>

        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-brand-textWhite p-2">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#2D3748] border-b border-white/10 py-8 flex flex-col items-center space-y-6 shadow-2xl">
          <button onClick={() => scrollToSection('what-we-do')} className="text-brand-textWhite font-medium text-lg">Problem</button>
          <button onClick={() => scrollToSection('services')} className="text-brand-textWhite font-medium text-lg">How we work</button>
          <button onClick={() => scrollToSection('approach')} className="text-brand-textWhite font-medium text-lg">Framework</button>
          <button 
            onClick={onContactClick}
            className="bg-brand-orange text-white px-10 py-4 rounded-lg font-bold w-3/4 shadow-xl"
          >
            Arrange a call
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
