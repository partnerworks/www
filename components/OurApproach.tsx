
import React from 'react';
import { Search, Map, MessageCircle, Filter, Handshake, Repeat } from 'lucide-react';

const OurApproach: React.FC = () => {
  const processSteps = [
    {
      icon: <Search className="w-8 h-8 text-brand-blue" />,
      title: "1. Thesis Definition",
      points: [
        "Confirm investment criteria and constraints",
        "Define target size, geography and sector",
        "Agree on key value creation levers"
      ]
    },
    {
      icon: <Map className="w-8 h-8 text-brand-orange" />,
      title: "2. Market Mapping",
      points: [
        "AI-assisted sector scanning",
        "Build proprietary target long-list",
        "Prioritise targets based on strategic fit"
      ]
    },
    {
      icon: <MessageCircle className="w-8 h-8 text-brand-pink" />,
      title: "3. Direct Engagement",
      points: [
        "Develop personalised outreach angles",
        "Director-led engagement with founders",
        "Build rapport and trust discreetly"
      ]
    },
    {
      icon: <Filter className="w-8 h-8 text-brand-blue" />,
      title: "4. Qualification",
      points: [
        "Assess valuation expectations",
        "Confirm timing and deal appetite",
        "Gather initial financial and operational context"
      ]
    },
    {
      icon: <Handshake className="w-8 h-8 text-brand-orange" />,
      title: "5. Controlled Introduction",
      points: [
        "Present opportunity summary",
        "Facilitate first meeting with investment team",
        "Provide briefing notes and context"
      ]
    },
    {
      icon: <Repeat className="w-8 h-8 text-brand-pink" />,
      title: "6. Feedback Loop",
      points: [
        "Debrief with both fund and founder",
        "Refine thesis based on market reality",
        "Maintain relationship if timing is future-dated"
      ]
    }
  ];

  return (
    <section id="approach" className="py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-brand-bgBlue">The Origination Process</h2>
          <p className="text-xl text-gray-600">
            A disciplined, methodical approach to unlocking off-market opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, idx) => (
            <div key={idx} className="p-10 rounded-3xl bg-gray-50 border border-gray-100 flex flex-col hover:shadow-lg transition-all group">
              <div className="mb-8 group-hover:scale-110 transition-transform duration-300">{step.icon}</div>
              <h3 className="text-2xl font-bold mb-8 text-brand-bgBlue">{step.title}</h3>
              <ul className="space-y-5 pt-8 border-t border-gray-200">
                {step.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-orange mt-2.5 shrink-0"></span>
                    <span className="text-gray-700 text-base leading-relaxed">{point}</span>
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
