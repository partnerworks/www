
import React from 'react';
import { Target, Users, Search, Rocket, BarChart4, Layout } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Converting Operational Success into Enterprise Value</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Partnerworks is a specialist consultancy helping SME owners convert operational success into long-term enterprise value. We provide independent, owner-led advice grounded in real operating and exit experience.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We focus on the high-leverage activities that define terminal value—strategic clarity, commercial refinement, and preparation for funding or acquisition. We are not brokers or generalists; we are board-level advisors for decision-makers.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-brand-orange">Professional Credibility</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Our approach is practical and outcome-focused. We work with founder-led SMEs (typically £2m–£30m revenue) seeking a clear, professionalised path to scale or exit.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-black font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                <span>Former CEO with successful exit (2023)</span>
              </div>
              <div className="flex items-center gap-3 text-brand-black font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                <span>Active presence in UK and UAE markets</span>
              </div>
              <div className="flex items-center gap-3 text-brand-black font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                <span>Board-level P&L and capital allocation expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
