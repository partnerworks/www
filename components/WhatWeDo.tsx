
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-12 sm:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-bgBlue mb-8 sm:mb-10 text-center">What We Do</h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8 text-left">
            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-brand-bgBlue mb-4 sm:mb-6 flex items-center gap-2 text-lg sm:text-xl">
                <CheckCircle2 className="text-brand-blue w-5 h-5 sm:w-6 sm:h-6" />
                Preparation & Strategy
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 shrink-0"></span>
                  Sellability and options clarity
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 shrink-0"></span>
                  Valuation benchmark and market barometer
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 shrink-0"></span>
                  Equity story and positioning
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-2.5 shrink-0"></span>
                  Core materials (teaser and information pack or light IM)
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl border border-gray-200">
              <h3 className="font-bold text-brand-bgBlue mb-4 sm:mb-6 flex items-center gap-2 text-lg sm:text-xl">
                <CheckCircle2 className="text-brand-orange w-5 h-5 sm:w-6 sm:h-6" />
                Execution
              </h3>
              <ul className="space-y-3 sm:space-y-4 text-sm sm:text-base text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0"></span>
                  Buyer mapping and prioritised shortlist
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0"></span>
                  Controlled outreach and buyer conversations
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0"></span>
                  Support through offers, diligence, completion
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
