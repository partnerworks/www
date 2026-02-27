import React from 'react';
import { XCircle } from 'lucide-react';

const WhatWeDontDo: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-bgBlue mb-8 sm:mb-10 text-center">What We Don't Do</h2>
          
          <div className="bg-white p-6 sm:p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100">
            <ul className="grid md:grid-cols-2 gap-x-8 gap-y-4 mb-6 sm:mb-8">
              {[
                "Mass-market distribution or blasting widely",
                "High-pressure processes by default",
                "Approaching staff, customers, suppliers",
                "Legal, tax, regulated investment advice",
                "Banker-grade Information Memoranda as standard unless separately agreed"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-gray-700 text-sm sm:text-base">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="text-center pt-6 sm:pt-8 border-t border-gray-100">
              <p className="text-base sm:text-lg font-medium text-brand-bgBlue">
                We run a controlled, confidential process and stay closely involved from first outreach through to completion.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDontDo;
