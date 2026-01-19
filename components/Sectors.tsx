
import React from 'react';
import { Shield, Brain, Layers, Layout, Server, TrendingUp } from 'lucide-react';

const Sectors: React.FC = () => {
  const sectors = [
    { name: "Cybersecurity & InfoSec", icon: <Shield className="w-6 h-6" />, desc: "Protecting the digital economy in an increasingly hostile landscape." },
    { name: "AI & Machine Learning", icon: <Brain className="w-6 h-6" />, desc: "Leveraging automation and intelligence to drive operational efficiency." },
    { name: "Tech-Enabled Services", icon: <Layout className="w-6 h-6" />, desc: "Transforming traditional business models through software, data, and automation." },
    { name: "GRC & Compliance Tech", icon: <Layers className="w-6 h-6" />, desc: "Navigating the complex global regulatory environment at scale." },
    { name: "Cloud & Infrastructure", icon: <Server className="w-6 h-6" />, desc: "The foundational layer for the next decade of digital growth." },
    { name: "Industry Specific SaaS", icon: <TrendingUp className="w-6 h-6" />, desc: "Specialists in growing ARR and scaling recurring revenue models." }
  ];

  return (
    <section id="sectors" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Sustainable Value</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Sectors & Opportunities</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {sectors.map((sector, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-xl transition-all group">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                {sector.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{sector.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{sector.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-brand-black text-white p-12 rounded-3xl">
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">Where We See Potential</h3>
              <p className="text-gray-400 mb-6">We connect management teams seeking growth capital with partners who can help unlock value through globalisation, market expansion, and operational improvement.</p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-brand-orange rounded-full"></div>
                <span className="font-medium">Traditional Businesses ready to scale with technology and automation unlocking latent value.</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-brand-blue rounded-full"></div>
                <span className="font-medium">Organisations that can accelerate growth through strategic partnerships but don't have the expertise or resources to manage this internally.</span>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-2 h-2 bg-brand-pink rounded-full"></div>
                <span className="font-medium">Tech businesses wanting to capitalise on first mover advantage by scaling quickly with the right investors who have the blueprint for success.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sectors;
