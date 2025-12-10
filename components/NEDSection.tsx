import React from 'react';
import { Mic2, Target, CalendarDays, Globe, TrendingUp, ArrowRight } from 'lucide-react';

const NEDSection: React.FC = () => {
  const nedFeatures = [
    {
      icon: <Mic2 className="w-6 h-6 text-brand-blue" />,
      title: "Independent Voice",
      text: "Brings an objective perspective to the board table, free from operational bias or vendor influence."
    },
    {
      icon: <Target className="w-6 h-6 text-brand-orange" />,
      title: "Strategic Challenge",
      text: "Questions and supports management on cyber risk decisions, ensuring robust scrutiny of security investments."
    },
    {
      icon: <CalendarDays className="w-6 h-6 text-brand-pink" />,
      title: "Standing Agenda Item",
      text: "Ensures cyber security is discussed regularly as a standing board agenda item, not just when incidents occur."
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-600" />,
      title: "External Relations",
      text: "Interfaces with regulators, external auditors, and cyber insurers, providing expert representation where needed."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-green-600" />,
      title: "Investment Alignment",
      text: "Helps align cyber security investment with business strategy, ensuring spending delivers measurable risk reduction."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="max-w-3xl mb-16">
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-3 block">Board-Level Governance</span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6 leading-tight">
              Non-Executive Director <br /> for Cyber & Risk
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
               Providing independent challenge and support at the board level. We ensure cyber risk receives appropriate attention, investment, and governance.
            </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {nedFeatures.map((item, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-brand-black transition-colors duration-300">
                        <div className="group-hover:text-white transition-colors duration-300">
                            {item.icon}
                        </div>
                    </div>
                    <h3 className="text-xl font-bold text-brand-black mb-3">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">
                        {item.text}
                    </p>
                </div>
            ))}
             
             {/* Callout Card / Ideal For */}
            <div className="bg-brand-black text-white p-8 rounded-2xl shadow-lg flex flex-col justify-center relative overflow-hidden group">
                {/* Abstract bg */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-blue/20 rounded-full blur-2xl translate-x-10 -translate-y-10 group-hover:bg-brand-blue/30 transition-all"></div>
                
                <h3 className="text-xl font-bold mb-4 relative z-10">Is this right for you?</h3>
                <p className="text-gray-300 text-sm mb-6 relative z-10 leading-relaxed">
                    Ideal for boards needing to demonstrate robust governance to regulators (FCA, etc.) or investors, bridging the gap between technical IT and strategic risk.
                </p>
                <div className="flex items-center text-brand-blue font-bold text-sm group-hover:translate-x-1 transition-transform cursor-default">
                    Strengthen Governance <ArrowRight className="w-4 h-4 ml-2" />
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default NEDSection;