
import React from 'react';
import { ArrowRight, TrendingUp, Globe, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative bg-white pt-20 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold mb-8 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-brand-orange"></span>
            Independent Strategic Advisory
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-brand-black leading-[1.1] mb-8 tracking-tight">
            Strategic value creation for <span className="relative inline-block text-brand-orange">
              SME owners
              <svg className="absolute w-full h-3 -bottom-2 left-0 text-brand-orange" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Specialists in unlocking value in founder-led businesses.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto px-10 py-5 bg-brand-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              Request a Consultation
              <ArrowRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full sm:w-auto px-10 py-5 bg-white text-brand-black border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-brand-blue hover:bg-brand-blue/5 transition-all flex items-center justify-center"
            >
              Core Capabilities
            </button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              <span>Exit Readiness</span>
            </div>
            <div className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              <span>UK & UAE Markets</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" />
              <span>Independent Advice</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
