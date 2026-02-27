import React from 'react';
import { PoundSterling, Building, Landmark } from 'lucide-react';

const CapitalNetwork: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-bgBlue mb-4 sm:mb-6 text-center">Our Capital Network</h2>
          <p className="text-lg sm:text-xl text-gray-600 text-center mb-8 sm:mb-12 max-w-2xl mx-auto">
            We maintain an active network of capital partners to match the right funding to your specific situation.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
            <div className="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-blue/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <PoundSterling className="w-5 h-5 sm:w-6 sm:h-6 text-brand-bgBlue" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-brand-bgBlue mb-2 sm:mb-3">Private Equity</h3>
              <p className="text-sm sm:text-base text-gray-600">Lower mid-market and mid-market funds.</p>
            </div>

            <div className="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Building className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-brand-bgBlue mb-2 sm:mb-3">Family Offices</h3>
              <p className="text-sm sm:text-base text-gray-600">Family offices and long-term holders.</p>
            </div>

            <div className="p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-brand-pink/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Landmark className="w-5 h-5 sm:w-6 sm:h-6 text-brand-pink" />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-brand-bgBlue mb-2 sm:mb-3">Credit & Debt</h3>
              <p className="text-sm sm:text-base text-gray-600">Credit providers and debt restructuring specialists.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapitalNetwork;
