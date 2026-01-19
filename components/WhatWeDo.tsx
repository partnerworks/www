
import React from 'react';
import { BarChart3, Users, Network, Globe2 } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  return (
    <section id="what-we-do" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Strategic Dealmaking & Partnership Facilitation</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Partnerworks operates at the intersection of capital and technology. We connect private equity capital with technology businesses ready to scale, or traditional businesses that can be scaled smarter using AI, automation and integrations, serving as a catalyst for value creation throughout the entire investment lifecycle.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We facilitate high-impact partnerships between investors seeking off-market opportunities and ambitious organisations looking for growth capital. We also consult on technical due diligence for private equity deals already in motion, providing rapid, authoritative assessments during the critical phases of a transaction.
            </p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h3 className="text-xl font-bold mb-6 text-brand-orange">Why We Focus on Quality Over Volume</h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Successful dealmaking is about alignment, not just transactions. We create partnerships where both capital providers and management teams win through sustainable growth.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-brand-black font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                <span>Deep understanding of value creation drivers</span>
              </div>
              <div className="flex items-center gap-3 text-brand-black font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                <span>International reach across UK, Europe, and Asia</span>
              </div>
              <div className="flex items-center gap-3 text-brand-black font-semibold">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-orange"></div>
                <span>Technical authority meets operational experience</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Network className="w-10 h-10 text-brand-blue mb-6" />
            <h4 className="text-xl font-bold mb-3">Connecting Capital</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We identify businesses with proven traction and clear paths to scale, matching them with capital partners who bring more than just funding.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <BarChart3 className="w-10 h-10 text-brand-orange mb-6" />
            <h4 className="text-xl font-bold mb-3">Value Creation</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              We understand the technical and operational levers that drive value in technology businesses, ensuring growth is both aggressive and sustainable.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
            <Globe2 className="w-10 h-10 text-brand-pink mb-6" />
            <h4 className="text-xl font-bold mb-3">International Expansion</h4>
            <p className="text-gray-600 text-sm leading-relaxed">
              Leveraging our network across UK, Europe, and Asia to help organisations navigate the complexities of global expansion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
