
import React from 'react';
import { Target, TrendingUp, Users, Layout, ShieldCheck, Globe } from 'lucide-react';

const Sectors: React.FC = () => {
  const focusAreas = [
    { name: "SME Value Creation", icon: <TrendingUp className="w-6 h-6" />, desc: "Professionalising owner-operated businesses to drive enterprise value." },
    { name: "Exit Readiness", icon: <Target className="w-6 h-6" />, desc: "Ensuring the business is structurally and commercially prepared for sale." },
    { name: "M&A Preparation", icon: <ShieldCheck className="w-6 h-6" />, desc: "Selective strategic support for identifying and assessing targets." },
    { name: "Founder Succession", icon: <Users className="w-6 h-6" />, desc: "Navigating the transition from founder-led to board-managed operations." },
    { name: "Investor Positioning", icon: <Layout className="w-6 h-6" />, desc: "Articulating the growth story for institutional and private capital." },
    { name: "Global Modernisation", icon: <Globe className="w-6 h-6" />, desc: "Practical AI and modernisation across UK and UAE markets." }
  ];

  return (
    <section id="sectors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Strategic Advisory</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Strategic Areas of Focus</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {focusAreas.map((area, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {area.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{area.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-black text-white p-12 rounded-3xl">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Our Focus on Quality Outcomes</h3>
              <p className="text-gray-400 mb-6">Successful outcomes are about preparation and optionality. We help SME owners build businesses that are not only successful today but attractive to the best partners and buyers tomorrow.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                <span className="font-medium text-sm">Focus on improving deal quality and valuation, not transaction speed.</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="font-medium text-sm">Pragmatic modernization grounded in measurable commercial returns.</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                <span className="font-medium text-sm">Independent advisory focused solely on the business owner's goals.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
