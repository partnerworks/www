
import React from 'react';
import { XCircle, CheckCircle2 } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-brand-bgBlue mb-10 text-center">The Origination Gap</h2>
          
          <div className="space-y-10 text-xl text-gray-700 leading-relaxed text-center md:text-left">
            <p>
              Investment teams face a bandwidth paradox. You need proprietary deal flow to avoid competitive auctions, but running a consistent, high-quality direct outreach programme requires time and persistence that live deal execution often displaces.
            </p>
            
            <div className="bg-brand-bgBlue p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange"></div>
              <p className="font-medium relative z-10 mb-6">
                Partnerworks solves this by reserving origination capacity for your specific thesis. We combine AI-enabled research with director-led engagement to deliver qualified, first-look opportunities.
              </p>
              <p className="text-brand-textPara text-lg relative z-10">
                We are not a lead database or a volume broker. We are a strategic partner that initiates and nurtures the high-trust founder relationships required for off-market transactions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-brand-bgBlue mb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-green-600 w-5 h-5" />
                  What We Do
                </h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li>• Thesis-led target mapping</li>
                  <li>• Direct, human-led founder outreach</li>
                  <li>• Qualification of appetite and fit</li>
                  <li>• Controlled first-look introductions</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-8 rounded-2xl border border-gray-200">
                <h3 className="font-bold text-brand-bgBlue mb-4 flex items-center gap-2">
                  <XCircle className="text-red-500 w-5 h-5" />
                  What We Do Not Do
                </h3>
                <ul className="space-y-3 text-base text-gray-600">
                  <li>• Run formal auctions or sale processes</li>
                  <li>• Produce full Information Memoranda</li>
                  <li>• Distribute opportunities widely</li>
                  <li>• Sell bulk data or lead lists</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
