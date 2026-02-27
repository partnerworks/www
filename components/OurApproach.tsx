
import React from 'react';
import { Search, Map, MessageCircle, Filter, Handshake, Repeat } from 'lucide-react';

const OurApproach: React.FC = () => {
  const processSteps = [
    {
      icon: <Search className="w-8 h-8 text-brand-blue" />,
      title: "1. Assess Optionality",
      points: [
        "Review strategic options and readiness.",
        "Provide valuation benchmark.",
        "Identify key value drivers."
      ]
    },
    {
      icon: <Map className="w-8 h-8 text-brand-orange" />,
      title: "2. Shape and Prepare",
      points: [
        "Develop equity story and positioning.",
        "Prepare core materials (Teaser/IM).",
        "Map and shortlist priority buyers."
      ]
    },
    {
      icon: <Handshake className="w-8 h-8 text-brand-pink" />,
      title: "3. Engage and Execute",
      points: [
        "Run controlled, confidential outreach.",
        "Manage offers and diligence.",
        "Support through to completion."
      ]
    }
  ];

  return (
    <section id="approach" className="py-12 sm:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-brand-bgBlue">Our Approach</h2>
          <p className="text-lg sm:text-xl text-gray-600">
            Preparation first, then controlled buyer engagement, then disciplined execution through to completion.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 sm:gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="p-5 sm:p-10 rounded-2xl sm:rounded-3xl bg-gray-50 border border-gray-100 flex flex-col hover:shadow-lg transition-all group">
              <div className="flex items-center gap-4 mb-4 sm:block sm:mb-8">
                <div className="shrink-0 sm:mb-8 group-hover:scale-110 transition-transform duration-300">
                  {React.cloneElement(step.icon as React.ReactElement, { className: "w-6 h-6 sm:w-8 sm:h-8" })}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold text-brand-bgBlue sm:mb-8">{step.title}</h3>
              </div>
              <ul className="space-y-3 sm:space-y-5 pt-4 sm:pt-8 border-t border-gray-200">
                {step.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 sm:gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-1.5 sm:mt-2.5 shrink-0"></span>
                    <span className="text-gray-700 text-sm sm:text-base leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
