
import React from 'react';
import { Briefcase, Globe, ShieldCheck } from 'lucide-react';

const WhyPartnerworks: React.FC = () => {
  return (
    <section id="about" className="py-12 sm:py-24 bg-brand-bgBlue overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: About Partnerworks */}
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-textWhite mb-6 sm:mb-10 tracking-tight">About Partnerworks</h2>
            <p className="text-base sm:text-2xl text-brand-textPara leading-relaxed mb-8 sm:mb-12 font-light">
              We provide the "safe pair of hands" required for sensitive commercial conversations. We are founder-led and understand the weight of an exit decision.
            </p>
            <div className="space-y-6 sm:space-y-10">
              <div className="flex gap-4 sm:gap-6">
                <div className="icon-bg-orange p-3 sm:p-4 rounded-2xl h-fit shrink-0">
                  <Briefcase className="w-5 h-5 sm:w-7 sm:h-7 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-xl text-brand-textWhite mb-1 sm:mb-2">Operational DNA</h3>
                  <p className="text-brand-textPara text-sm sm:text-base">Former technology CEO with exit experience. We speak the language of founders, not just finance.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="icon-bg-blue p-3 sm:p-4 rounded-2xl h-fit shrink-0">
                  <Globe className="w-5 h-5 sm:w-7 sm:h-7 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-xl text-brand-textWhite mb-1 sm:mb-2">UK & Middle East</h3>
                  <p className="text-brand-textPara text-sm sm:text-base">Experience in the UK and Middle East markets.</p>
                </div>
              </div>
              <div className="flex gap-4 sm:gap-6">
                <div className="icon-bg-pink p-3 sm:p-4 rounded-2xl h-fit shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-7 sm:h-7 text-brand-pink" />
                </div>
                <div>
                  <h3 className="font-bold text-base sm:text-xl text-brand-textWhite mb-1 sm:mb-2">Discretion First</h3>
                  <p className="text-brand-textPara text-sm sm:text-base">Senior-led, discreet, practical approach. Trusted relationships and strong capital network.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Note for Founders */}
          <div className="mt-12 lg:mt-0">
            <div className="card-bg border border-brand-orange/20 p-6 sm:p-12 rounded-[24px] sm:rounded-[40px] shadow-2xl backdrop-blur-md relative z-10">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-[10px] sm:text-xs mb-3 sm:mb-6 block">Our Philosophy</span>
              <h3 className="text-xl sm:text-3xl font-bold text-brand-textWhite mb-4 sm:mb-6">Senior-led and Discreet</h3>
              
              <div className="space-y-3 sm:space-y-6 text-brand-textPara leading-relaxed text-sm sm:text-lg">
                <p>
                  We are not a mass-market broker and do not run high-pressure processes by default.
                </p>
                <p>
                  We maintain an active capital network including private equity, family offices, long-term holders, plus credit and debt restructuring partners.
                </p>
                <p>
                  We run a controlled, confidential process and stay closely involved from first outreach through to completion.
                </p>
              </div>

              <div className="mt-6 sm:mt-10 pt-6 sm:pt-10 border-t border-white/10 flex items-center gap-4 sm:gap-6">
                <div className="w-10 h-10 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-brand-orange shadow-lg flex items-center justify-center text-white font-bold text-base sm:text-2xl shrink-0">CH</div>
                <div>
                  <p className="font-bold text-base sm:text-xl text-brand-textWhite">Chris Hyatt</p>
                  <p className="text-xs sm:text-base text-brand-textSubtle">Founder, Partnerworks</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyPartnerworks;
