
import React from 'react';
import { Briefcase, Globe, ShieldCheck } from 'lucide-react';

const WhyPartnerworks: React.FC = () => {
  return (
    <section className="py-24 bg-brand-bgBlue overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-20 items-start">
          
          {/* Left Column: About Partnerworks */}
          <div>
            <h2 className="text-5xl font-bold text-brand-textWhite mb-10 tracking-tight">About Partnerworks</h2>
            <p className="text-2xl text-brand-textPara leading-relaxed mb-12 font-light">
              We provide the "safe pair of hands" required for sensitive commercial conversations. We are founder-led and understand the weight of an exit decision.
            </p>
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="icon-bg-orange p-4 rounded-2xl h-fit">
                  <Briefcase className="w-7 h-7 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-textWhite mb-2">Operational DNA</h3>
                  <p className="text-brand-textPara text-base">Founded by a former technology CEO who has navigated the full lifecycle from startup to exit. We speak the language of founders, not just finance.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="icon-bg-blue p-4 rounded-2xl h-fit">
                  <Globe className="w-7 h-7 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-textWhite mb-2">UK & Middle East</h3>
                  <p className="text-brand-textPara text-base">Active networks across the UK and UAE. We are experienced in bridging geographies and navigating complex shareholder structures.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="icon-bg-pink p-4 rounded-2xl h-fit">
                  <ShieldCheck className="w-7 h-7 text-brand-pink" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-brand-textWhite mb-2">Discretion First</h3>
                  <p className="text-brand-textPara text-base">We operate with absolute confidentiality. We understand that for many founders, a conversation about an exit is sensitive and requires careful handling.</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right Column: Note for Founders */}
          <div className="mt-16 lg:mt-0">
            <div className="card-bg border border-brand-orange/20 p-12 rounded-[40px] shadow-2xl backdrop-blur-md relative z-10">
              <span className="text-brand-orange font-bold uppercase tracking-widest text-xs mb-6 block">For Founders</span>
              <h3 className="text-3xl font-bold text-brand-textWhite mb-6">A note on our approach</h3>
              
              <div className="space-y-6 text-brand-textPara leading-relaxed text-lg">
                <p>
                  If we have reached out to you, it is because your business aligns specifically with the investment thesis of a fund we represent.
                </p>
                <p>
                  We are not brokers and we do not sell your data. We do not charge you fees, nor do we require you to sign exclusive mandates or consultancy agreements to speak with us.
                </p>
                <p>
                  Our role is to facilitate a discreet, professional introduction to a long-term capital partner who is genuinely interested in what you have built. You remain in control of the pace and the process at all times.
                </p>
              </div>

              <div className="mt-10 pt-10 border-t border-white/10 flex items-center gap-6">
                <div className="w-16 h-16 rounded-3xl bg-brand-orange shadow-lg flex items-center justify-center text-white font-bold text-2xl">CH</div>
                <div>
                  <p className="font-bold text-xl text-brand-textWhite">Chris Hyatt</p>
                  <p className="text-base text-brand-textSubtle">Founder, Partnerworks</p>
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
