
import React from 'react';
import { Briefcase, Building2, CheckCircle2 } from 'lucide-react';

const WhoWeWorkWith: React.FC = () => {
  return (
    <section className="py-24 bg-brand-black text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Strategic Partnerships</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Connecting capital with quality SME opportunities and supporting management teams through transition.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Column 1 */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-orange/20 rounded-2xl">
                <Briefcase className="w-8 h-8 text-brand-orange" />
              </div>
              <h3 className="text-2xl font-bold">Investors & PE Firms</h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We support investors seeking quality deal flow and portfolio value creation. We provide independent assessment of management teams and operational scalability that standard due diligence often overlooks.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <span>Improving deal quality and exit outcomes through preparation.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <span>Expert operational insight for UK and UAE market entries.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-orange shrink-0 mt-1" />
                <span>Strategic alignment between fund mandates and business reality.</span>
              </li>
            </ul>
          </div>

          {/* Column 2 */}
          <div className="bg-white/5 border border-white/10 p-10 rounded-3xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-4 bg-brand-blue/20 rounded-2xl">
                <Building2 className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-2xl font-bold">Founder-Led SMEs</h3>
            </div>
            <p className="text-gray-300 mb-8 leading-relaxed">
              We partner with owner-operators ready to scale, transition, or exit. We provide the blueprint for professionalising governance and refining the commercial focus required to attract premium valuations.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                <span>Strategic clarity for owners considering succession or exit.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                <span>Navigating the shift from operator to board-level leadership.</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-blue shrink-0 mt-1" />
                <span>Investor readiness and strategic funding positioning.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeWorkWith;
