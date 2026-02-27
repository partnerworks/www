
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface ContactFooterProps {
  onContactClick: () => void;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ onContactClick }) => {
  return (
    <footer>
      {/* Top Section: Establish a Mandate (Light Background) */}
      <div className="bg-white border-t border-gray-100 py-12 sm:py-24">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl sm:text-4xl font-bold text-brand-bgBlue mb-6 sm:mb-8">Start a Confidential Conversation</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12">
            If you are exploring an exit, investment, or a future transition, we can help you clarify options and next steps. Please schedule a discreet call at your convenience.
          </p>
          <button 
            onClick={onContactClick} 
            className="inline-flex items-center px-8 py-4 sm:px-10 sm:py-5 bg-brand-orange text-white rounded-xl font-bold text-base sm:text-lg hover:bg-orange-600 transition-all shadow-xl"
          >
            Arrange a call <ArrowRight className="w-5 h-5 ml-3" />
          </button>
        </div>
      </div>

      {/* Bottom Section: Logo & Contact (Dark Background) */}
      <div className="bg-brand-bgBlue border-t border-white/5 pt-12 pb-8 sm:pt-16 sm:pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <span className="text-2xl font-bold text-brand-textWhite tracking-tight block mb-2">
                Partnerworks<span className="text-brand-pink">.</span>
              </span>
              <p className="text-brand-textSubtle text-sm max-w-xs leading-relaxed">
                Deal origination for private equity and long-term capital partners.
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <p className="text-brand-textWhite font-bold mb-2 text-sm uppercase tracking-wider">Contact</p>
              <a href="mailto:hello@partnerworks.ai" className="text-brand-textPara hover:text-brand-textWhite block mb-1 text-sm transition-colors">hello@partnerworks.ai</a>
              <a href="tel:+442081634295" className="text-brand-textPara hover:text-brand-textWhite block mb-1 text-sm transition-colors">+44 020 8163 4295</a>
              <p className="text-brand-textSubtle text-sm">Windsor, SL4 3HU, UK</p>
            </div>
          </div>
          
          <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row justify-between items-center text-brand-textSubtle text-xs border-t border-white/5 pt-6 sm:pt-8 gap-4 sm:gap-0">
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
