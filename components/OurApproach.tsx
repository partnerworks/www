
import React from 'react';
import { Target, Link2, TrendingUp, ShieldCheck, Search, Globe } from 'lucide-react';

const OurApproach: React.FC = () => {
  const approaches = [
    {
      icon: <Search className="w-8 h-8 text-brand-blue" />,
      title: "Understanding Requirements",
      desc: "We look beyond the balance sheet to understand investor mandates and business ambitions deeply.",
      value: "Ensures initial alignment and reduces friction during the deal lifecycle."
    },
    {
      icon: <Target className="w-8 h-8 text-brand-orange" />,
      title: "Strategic Matching",
      desc: "Connecting capital with organisations whose culture and growth plans align with the investor's capability.",
      value: "Leads to higher-quality deal flow and more successful long-term outcomes."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-pink" />,
      title: "Value Creation Focus",
      desc: "Identifying specific opportunities to scale, improve operations, and drive market leadership post-investment.",
      value: "Drives returns for investors and sustainable growth for the business."
    },
    {
      icon: <Link2 className="w-8 h-8 text-green-600" />,
      title: "Building Trust",
      desc: "Facilitating genuine partnerships where both sides have clear expectations and shared goals.",
      value: "Reduces execution risk and fosters collaborative management environments."
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-purple-600" />,
      title: "Technical Insight",
      desc: "Providing credible, senior-level assessment of technology, security posture, and technical roadmap potential.",
      value: "Provides investors with deeper technical due diligence and a true view of tech risk."
    },
    {
      icon: <Globe className="w-8 h-8 text-brand-black" />,
      title: "Global Perspective",
      desc: "Leveraging international experience to support cross-border expansion and globalisation strategies.",
      value: "Unlocks new markets and increases the terminal value of the organisation."
    }
  ];

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Methodology</h2>
          <p className="text-xl text-gray-600">
            We've built and grown businesses ourselves. We understand what drives value and how to create partnerships where both sides win.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {approaches.map((item, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue transition-all group">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold mb-4">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-6">{item.desc}</p>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">The Value Created</p>
                <p className="text-sm font-medium text-brand-black">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
