import React from 'react';
import { ArrowRight, Shield, CheckCircle, Lock } from 'lucide-react';

interface HeroProps {
  onCtaClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  
  const scrollToProcess = () => {
    document.getElementById('process')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative bg-white pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-brand-blue/10 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl opacity-70 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">
          
          {/* Content Column */}
          <div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
             {/* Trust Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-sm font-semibold mb-8 shadow-sm">
              <span className="flex h-2 w-2 rounded-full bg-brand-orange animate-pulse"></span>
              Strategic Cyber Leadership
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-brand-black leading-[1.1] mb-6 tracking-tight">
              <span className="text-brand-orange relative whitespace-nowrap">
                Fractional CISO
                <svg className="absolute w-full h-3 -bottom-2 left-0 text-brand-orange/20" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" />
                </svg>
              </span> & <br className="hidden lg:block"/>
              Cyber-Focused NED Services.
            </h1>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Board-level cyber leadership for funds, complex groups, and growing organisations - without the cost of a full-time CISO. We provide senior, strategic cyber security guidance tailored to the unique challenges of private equity portfolios, holding groups, and scaling businesses.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10">
              <button 
                onClick={onCtaClick}
                className="w-full sm:w-auto px-8 py-4 bg-brand-black text-white rounded-xl font-bold text-lg hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                Let's Talk
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={scrollToProcess}
                className="w-full sm:w-auto px-8 py-4 bg-white text-brand-black border-2 border-gray-200 rounded-xl font-bold text-lg hover:border-brand-blue hover:bg-brand-blue/5 transition-all flex items-center justify-center"
              >
                Our Engagement Model
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-8 gap-y-3 text-sm font-medium text-gray-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-blue" />
                <span>Board-Ready Expertise</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-brand-blue" />
                <span>Commercial Focus</span>
              </div>
            </div>
          </div>

          {/* Visual Column */}
          <div className="lg:col-span-6 relative perspective-1000">
            <div className="relative mx-auto w-full max-w-[500px] lg:max-w-none aspect-square lg:h-[600px] lg:aspect-auto flex items-center justify-center">
                
                {/* Main Visual Layer */}
                <div className="relative w-full h-[400px] lg:h-[500px] bg-gray-100 rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1632&q=80" 
                        alt="Board meeting cyber strategy" 
                        className="w-full h-full object-cover"
                    />
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"></div>
                </div>

                {/* Floating Card: Certifications (Top Right) */}
                <div className="absolute -right-2 lg:-right-8 top-8 lg:top-16 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 z-20 max-w-[240px] transform rotate-3 hover:rotate-0 transition-transform duration-300">
                    <div className="flex items-center gap-3 mb-3">
                        <div className="p-2.5 bg-brand-orange/10 rounded-xl">
                            <Shield className="w-6 h-6 text-brand-orange" />
                        </div>
                        <div>
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-wider">Governance</p>
                            <p className="text-base font-bold text-brand-black">Board Reported</p>
                        </div>
                    </div>
                    <div className="space-y-2">
                        <div className="flex justify-between text-[10px] font-semibold text-gray-400">
                            <span>Risk Appetite</span>
                            <span className="text-brand-orange">Defined</span>
                        </div>
                        <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                            <div className="bg-brand-orange w-full h-full rounded-full"></div>
                        </div>
                    </div>
                </div>

                {/* Floating Card: CE+ (Bottom Left) */}
                <div className="absolute -left-2 lg:-left-8 bottom-20 lg:bottom-32 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300">
                    <div className="p-3 bg-brand-blue/20 rounded-full">
                        <Lock className="w-6 h-6 text-brand-blue" />
                    </div>
                    <div>
                        <p className="text-sm font-bold text-gray-900 leading-tight">ISO 27001 Aligned</p>
                        <div className="flex items-center gap-1 mt-1">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <p className="text-xs text-gray-500 font-medium">Controls Active</p>
                        </div>
                    </div>
                </div>

                {/* Decorative dots */}
                <div className="absolute -bottom-6 -right-6 lg:right-0 grid grid-cols-3 gap-2 opacity-30">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="w-2 h-2 bg-brand-black rounded-full"></div>
                  ))}
                </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;