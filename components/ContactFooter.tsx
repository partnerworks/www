
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactFooterProps {
  onContactClick: () => void;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ onContactClick }) => {
  return (
    <footer>
      {/* Top Section: Establish a Mandate (Light Background) */}
      <div className="bg-white border-t border-gray-100 py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-brand-bgBlue mb-8">Establish a Mandate</h2>
          <p className="text-xl text-gray-600 mb-12">
            We limit our concurrent mandates to ensure quality and focus. To discuss reserving origination capacity, please provide your thesis focus and ticket size preferences.
          </p>
          <button 
            onClick={onContactClick} 
            className="inline-flex items-center px-10 py-5 bg-brand-orange text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl"
          >
            Arrange a call <ArrowRight className="w-5 h-5 ml-3" />
          </button>
        </div>
      </div>

      {/* Bottom Section: Logo & Contact (Dark Background) */}
      <div className="bg-brand-bgBlue border-t border-white/5 pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
            <div>
              <span className="text-2xl font-bold text-brand-textWhite tracking-tight block mb-2">
                Partnerworks<span className="text-brand-pink">.</span>
              </span>
              <p className="text-brand-textSubtle text-sm max-w-xs leading-relaxed">
                Proprietary deal origination for private equity and family offices.
              </p>
            </div>
            
            <div className="text-right">
              <p className="text-brand-textWhite font-bold mb-2 text-sm uppercase tracking-wider">Contact</p>
              <a href="tel:+442081634295" className="text-brand-textPara hover:text-brand-textWhite block mb-1 text-sm transition-colors">+44 020 8163 4295</a>
              <p className="text-brand-textSubtle text-sm">Windsor, SL4 3HU, UK</p>
            </div>
          </div>
          
          <div className="mt-12 flex justify-between items-center text-brand-textSubtle text-xs border-t border-white/5 pt-8">
            <p>&copy; 2026 Partnerworks Ltd. All rights reserved.</p>
            <div className="flex gap-6">
              <span>UK</span>
              <span>UAE</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
