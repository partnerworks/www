import React from 'react';
import { TrendingUp, Users, DollarSign, Scale, AlertOctagon } from 'lucide-react';

const WhyMatters: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Cyber Leadership Is Hard to Get Right</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
               The mismatch between need and resource creates a dangerous gap in cyber governance.
            </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* The Hiring Challenge */}
          <div className="flex-1 bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-orange/10 rounded-xl">
                    <DollarSign className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Hiring Challenge</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
                Full-time CISOs command salaries exceeding <strong>$250,000 annually</strong> and are increasingly difficult to recruit in a competitive market. 
            </p>
            <p className="text-gray-700 leading-relaxed">
                Many funds and mid-sized organisations simply don't require a five-day-a-week CISO, yet they face the same cyber threats as larger enterprises.
            </p>
          </div>

          {/* The Pressure Mounts */}
          <div className="flex-1 bg-brand-blue/5 rounded-2xl p-8 border border-brand-blue/20">
             <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-brand-blue/20 rounded-xl">
                    <AlertOctagon className="w-6 h-6 text-brand-black" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">The Pressure Mounts</h3>
            </div>
            <p className="text-gray-700 leading-relaxed mb-6">
                Meanwhile, cyber risk continues to escalate. Regulatory scrutiny from the <strong>FSRA, FCA, ICO</strong>, and sector-specific bodies intensifies year on year.
            </p>
            <ul className="space-y-4">
                <li className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Cyber insurance premiums rise sharply, with insurers demanding evidence of robust controls.</span>
                </li>
                 <li className="flex items-start gap-3">
                    <Scale className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm">Boards often lack independent, expert guidance to navigate these challenges, whilst operating companies display uneven maturity levels.</span>
                </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyMatters;