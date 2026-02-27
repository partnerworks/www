
import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative pt-32 pb-16 lg:pt-36 lg:pb-32 bg-brand-bgBlue overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-blue/10 rounded-[100%] blur-3xl pointer-events-none"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile Separator Line */}
        <div className="sm:hidden w-full h-px bg-white/20 mb-10"></div>

        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="hidden sm:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-orange text-xs sm:text-sm font-semibold tracking-wide uppercase mb-6 sm:mb-8 backdrop-blur-sm">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-brand-orange"></span>
            Exit Readiness and Buyer Engagement
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 sm:mb-8 tracking-tight">
            Prepare for your exit with <span className="text-brand-blue">confidence.</span>
          </h1>

          {/* Subhead */}
          <p className="text-lg sm:text-xl md:text-2xl text-brand-textPara mb-8 sm:mb-12 leading-relaxed max-w-2xl font-light">
            We help business owners and leadership teams become sale-ready, shape their story, and run controlled buyer outreach.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12 sm:mb-20">
            <button 
              onClick={onCtaClick}
              className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-brand-orange text-white rounded-xl font-bold text-base sm:text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1"
            >
              Arrange a call
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <a 
              href="#who-we-help" 
              className="inline-flex items-center justify-center px-6 py-3.5 sm:px-8 sm:py-4 bg-white/5 text-white rounded-xl font-medium text-base sm:text-lg hover:bg-white/10 transition-all border border-white/10"
            >
              Who we help
            </a>
          </div>

          {/* Feature Strip */}
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8 w-full border-t border-white/10 pt-8 sm:pt-12 text-left">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-brand-blue/10 rounded-lg shrink-0">
                <CheckCircle2 className="w-5 h-5 text-brand-blue" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">Market Readiness</h3>
                <p className="text-brand-textSubtle text-sm mt-1">Valuation clarity and prepared financials.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-brand-orange/10 rounded-lg shrink-0">
                <CheckCircle2 className="w-5 h-5 text-brand-orange" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">Controlled Process</h3>
                <p className="text-brand-textSubtle text-sm mt-1">Discreet engagement with qualified buyers.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 bg-brand-pink/10 rounded-lg shrink-0">
                <CheckCircle2 className="w-5 h-5 text-brand-pink" />
              </div>
              <div>
                <h3 className="text-white font-bold text-base sm:text-lg">Founder Focused</h3>
                <p className="text-brand-textSubtle text-sm mt-1">Your pace, your objectives, your outcome.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
