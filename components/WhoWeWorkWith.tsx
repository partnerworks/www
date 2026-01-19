
import React from 'react';
import { Briefcase, Rocket, CheckCircle2 } from 'lucide-react';

const WhoWeWorkWith: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Who We Work With</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Facilitating effective partnerships between providers of capital and builders of technology.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Private Equity Column */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-orange/20 rounded-2xl">
                <Briefcase className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold">Private Equity & Growth Capital</h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We support firms seeking high-quality technology investment opportunities with strong value creation potential. We help identify off-market gems and provide technical insight that standard DD might miss.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <span>Specialised focus on Cybersecurity, AI, and tech-enabled businesses.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <span>Operational value creation partners who understand scaling.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <span>Assistance in driving growth and improving fund returns.</span>
              </li>
            </ul>
          </div>

          {/* Tech Businesses Column */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-blue/20 rounded-2xl">
                <Rocket className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold">Technology Businesses</h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We partner with management teams ready to scale and unlock value. We help you find the right investor who understands your sector and can provide the strategic leverage needed to globalise.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                <span>Connection to growth capital partners who align with your vision.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                <span>Support in navigating scaling challenges and market expansion.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                <span>Strategic advice from people who have built and exited tech firms.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
