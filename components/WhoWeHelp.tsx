import React from 'react';
import { Users, Building2, Briefcase, TrendingUp } from 'lucide-react';

const WhoWeHelp: React.FC = () => {
  const clients = [
    {
      icon: <Users className="w-6 h-6 text-brand-blue" />,
      text: "Founder-led and privately held businesses"
    },
    {
      icon: <Building2 className="w-6 h-6 text-brand-orange" />,
      text: "Second-generation and family-owned firms"
    },
    {
      icon: <Briefcase className="w-6 h-6 text-brand-pink" />,
      text: "Management-run businesses with concentrated ownership"
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-brand-blue" />,
      text: "Private equity-backed businesses considering a secondary or strategic outcome"
    }
  ];

  return (
    <section id="who-we-help" className="py-12 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-bgBlue mb-6 sm:mb-8">Who We Help</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 sm:mb-12 leading-relaxed">
            We work with business owners and leadership teams who are considering an equity event, transition, or exit.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 text-left">
            {clients.map((client, idx) => (
              <div key={idx} className="flex items-center gap-4 p-4 sm:p-6 bg-gray-50 rounded-xl border border-gray-100">
                <div className="p-2 sm:p-3 bg-white rounded-lg shadow-sm shrink-0">
                  {client.icon}
                </div>
                <span className="text-base sm:text-lg font-medium text-gray-800">{client.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeHelp;
