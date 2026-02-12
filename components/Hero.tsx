
import React from 'react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-24 lg:pt-56 lg:pb-48 overflow-hidden bg-brand-bgBlue">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-orange/20 text-brand-orange font-bold text-xs uppercase tracking-widest mb-8 border border-brand-orange/30">
            Proprietary Deal Origination
          </span>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-textWhite leading-[1.1] mb-10 tracking-tight">
            Reserved origination capacity for <span className="text-brand-blue">Private Equity</span>
          </h1>

          <p className="text-xl md:text-2xl text-brand-textPara mb-14 leading-relaxed max-w-3xl mx-auto font-medium">
            We act as an extension of your investment team, delivering qualified, off-market founder conversations aligned to your specific thesis.
          </p>

          <button 
            onClick={onCtaClick}
            className="inline-flex items-center px-12 py-5 bg-brand-orange text-white rounded-xl font-bold text-lg hover:bg-orange-600 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            Arrange a call
            <ArrowRight className="w-5 h-5 ml-3" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
