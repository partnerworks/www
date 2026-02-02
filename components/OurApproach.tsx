
import React from 'react';
import { Search, TrendingUp, ShieldCheck, Target, Compass, Zap, CheckCircle2 } from 'lucide-react';

const OurApproach: React.FC = () => {
  const frameworkStages = [
    {
      icon: <Search className="w-8 h-8 text-brand-blue" />,
      title: "1. Context and Reality Check",
      points: [
        "Separate signal from operational noise",
        "Identify constraints, assumptions and hidden risks",
        "Understand how the business truly operates today"
      ]
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-orange" />,
      title: "2. Value Driver Identification",
      points: [
        "Identify where value is created across revenue, margin, IP, contracts and people",
        "Assess durability, defensibility and transferability",
        "Highlight value leakage and concentration risk"
      ]
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-brand-pink" />,
      title: "3. Dependency and Risk Reduction",
      points: [
        "Address founder, customer and supplier dependency",
        "Reduce key-person and decision-making risk",
        "Improve resilience without bureaucracy"
      ]
    },
    {
      icon: <Target className="w-8 h-8 text-green-600" />,
      title: "4. Strategic Narrative and Direction",
      points: [
        "Clarify strategic intent and ambition",
        "Align growth priorities with value creation",
        "Create a narrative that stands up to scrutiny"
      ]
    },
    {
      icon: <Compass className="w-8 h-8 text-purple-600" />,
      title: "5. Optionality Planning",
      points: [
        "Assess readiness for growth, acquisition, funding or exit",
        "Identify no-regret actions that improve all outcomes",
        "Build leverage and choice over timing"
      ]
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-black" />,
      title: "6. Execution Focus and Momentum",
      points: [
        "Prioritise actions that move value in the next 90 days",
        "Maintain momentum through focused working sessions",
        "Avoid unnecessary complexity or distraction"
      ]
    }
  ];

  return (
    <section id="approach" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-orange font-bold uppercase tracking-widest text-sm mb-4 block">Our Methodology</span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 italic">Our proprietary framework</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A structured, board-level approach to identifying and unlocking latent enterprise value in owner-led businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {frameworkStages.map((stage, idx) => (
            <div key={idx} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-brand-blue/30 transition-all group flex flex-col">
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">{stage.icon}</div>
              <h3 className="text-xl font-bold mb-6 text-brand-black">{stage.title}</h3>
              <ul className="space-y-4 pt-6 border-t border-gray-200">
                {stage.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-gray-400 mt-1 shrink-0" />
                    <span className="text-gray-600 text-sm leading-relaxed">{point}</span>
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
