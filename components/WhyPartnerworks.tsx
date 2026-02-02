
import React from 'react';
import { Award, Zap, Globe, ShieldCheck } from 'lucide-react';

const WhyPartnerworks: React.FC = () => {
  const differentiators = [
    {
      title: "CEO & Exit Experience",
      icon: <Zap className="w-6 h-6 text-brand-orange" />,
      desc: "Our advice is grounded in real-world leadership. Our founder successfully exited a high-growth business in 2023, providing firsthand understanding of the scaling and exit process."
    },
    {
      title: "Independent & Outcome-Driven",
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
      desc: "As an independent consultancy, we are focused solely on your commercial outcomes. We provide objective challenge and strategic clarity required at the board level."
    },
    {
      title: "UK & UAE Market Exposure",
      icon: <Globe className="w-6 h-6 text-brand-pink" />,
      desc: "Extensive experience navigating the commercial landscapes of both the UK and UAE, supporting cross-border expansion and global value creation."
    },
    {
      title: "Board-Level Governance",
      icon: <Award className="w-6 h-6 text-green-600" />,
      desc: "Extensive experience in managing complex P&L structures and making high-stakes capital allocation decisions that define the terminal value of a business."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Why Partnerworks?</h2>
          <p className="text-xl text-gray-600">
            Independent, owner-led advice grounded in real operating and exit experience. We are value creation specialists for the SME sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {differentiators.map((item, idx) => (
            <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-gray-50 rounded-xl">{item.icon}</div>
                <h3 className="text-2xl font-bold">{item.title}</h3>
              </div>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyPartnerworks;
