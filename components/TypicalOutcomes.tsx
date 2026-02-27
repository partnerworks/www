import React from 'react';
import { Check } from 'lucide-react';

const TypicalOutcomes: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-brand-bgBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 text-center">Typical Outcomes Over Six Months</h2>
          
          <div className="bg-white/5 p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10">
            <ul className="space-y-4 sm:space-y-6">
              {[
                "A clear view of valuation and market positioning.",
                "Market-ready materials (Teaser and Information Pack).",
                "Validated buyer interest from a prioritised shortlist.",
                "Offers or term sheets (subject to market conditions).",
                "A clear path to completion or a decision to hold."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-brand-orange flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                  </div>
                  <span className="text-base sm:text-lg text-brand-textPara">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TypicalOutcomes;
