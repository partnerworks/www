
import React from 'react';
import { Award, Zap, Globe, Users, ShieldCheck } from 'lucide-react';

const WhyPartnerworks: React.FC = () => {
  const differentiators = [
    {
      title: "Founder Experience",
      icon: <Zap className="w-6 h-6 text-brand-orange" />,
      desc: "We've built and exited a technology business. We understand the challenges of scaling, the pressures of growth, and what creates lasting value. We know where value lies because we've been in the founder's seat."
    },
    {
      title: "Technical Expertise",
      icon: <ShieldCheck className="w-6 h-6 text-brand-blue" />,
      desc: "With deep expertise in technology and security, we assess technical risk and capability with authority. We identify value-creation opportunities that others often miss, providing investors with unique confidence in high-tech assets."
    },
    {
      title: "Global Reach",
      icon: <Globe className="w-6 h-6 text-brand-pink" />,
      desc: "International experience across UK, Europe, and Asia. We understand different markets, cultures, and what it takes to expand globally and unlock borderless terminal value."
    },
    {
      title: "Partnership Focus",
      icon: <Users className="w-6 h-6 text-green-600" />,
      desc: "We prioritise effective, lasting partnerships over quick transactions. We focus on alignment, trust, and sustainable growth to ensure management and investors are perfectly aligned post-deal."
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">Why Partnerworks?</h2>
          <p className="text-xl text-gray-600">
            What makes us effective dealmakers and value creation specialists is the combination of operational experience and technical authority.
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
