import React from 'react';
import { AlertCircle, CheckCircle2, TrendingUp, Search, FileX } from 'lucide-react';

const TheProblem: React.FC = () => {
  return (
    <section className="py-12 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-bgBlue mb-4 sm:mb-6">The Exit Paradox</h2>
          <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
            There is significant capital available, but buyers are disciplined and selective. Businesses that fail to prepare often face a difficult reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {/* Gap 1 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-bgBlue mb-2 sm:mb-3">Valuation Gap</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Unclear valuation expectations versus market reality often lead to stalled processes and disappointment.
            </p>
          </div>

          {/* Gap 2 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <FileX className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-bgBlue mb-2 sm:mb-3">Information Gap</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Financials and growth stories that are not presented in a buyer-ready format increase diligence risk.
            </p>
          </div>

          {/* Gap 3 */}
          <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-red-50 rounded-xl flex items-center justify-center mb-4 sm:mb-6">
              <Search className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-brand-bgBlue mb-2 sm:mb-3">Focus Gap</h3>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Running a process distracts from running the business. Performance dips just when it needs to shine.
            </p>
          </div>
        </div>

        {/* The Solution / Insight */}
        <div className="bg-brand-bgBlue rounded-3xl p-6 sm:p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-blue opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10 flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 flex items-center gap-3">
                <CheckCircle2 className="text-brand-orange w-6 h-6 sm:w-8 sm:h-8" />
                The Partnerworks Difference
              </h3>
              <p className="text-brand-textPara text-base sm:text-lg leading-relaxed">
                We provide an early, practical valuation benchmark and market barometer. We do the heavy lifting on preparation, ensuring you engage the market with a clear story, clean information, and reduced diligence risk.
              </p>
            </div>
            <div className="hidden md:block w-px h-24 bg-white/10"></div>
            <div className="flex-1">
               <p className="text-white font-medium text-base sm:text-lg italic opacity-90">
                "Businesses that attract attention have a clear story, clean information, and reduced diligence risk."
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TheProblem;
