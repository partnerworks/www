import React from 'react';
import { Search, PenTool, Hammer, Repeat } from 'lucide-react';

const ProcessTimeline: React.FC = () => {
  const steps = [
      {
          icon: <Search className="w-8 h-8 text-brand-blue" />,
          title: "Discover & Baseline",
          desc: "Board interviews, cyber posture snapshot, gap analysis, and regulatory requirement mapping."
      },
      {
          icon: <PenTool className="w-8 h-8 text-brand-orange" />,
          title: "Design & Align",
          desc: "Define target baseline (ISO 27001), establish governance model, and create prioritised roadmap."
      },
      {
          icon: <Hammer className="w-8 h-8 text-gray-700" />,
          title: "Implement & Support",
          desc: "Work with IT/MSPs to close gaps, build policies, conduct readiness assessments, and support certification."
      },
      {
          icon: <Repeat className="w-8 h-8 text-green-600" />,
          title: "Ongoing Support",
          desc: "Regular board attendance, strategic reviews, continuous oversight, and scaled support as needs evolve."
      }
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Process Steps */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Engagement Model</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
                We follow a structured, phased approach that takes you from initial assessment through to ongoing fractional support, ensuring sustainable cyber governance.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 relative">
             {/* Connector Line (Desktop) */}
             <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-gray-100 -z-10"></div>

            {steps.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                    <div className="w-20 h-20 bg-white border-2 border-gray-100 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-blue transition-colors relative z-10">
                        {step.icon}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-gray-600 px-2 leading-relaxed">{step.desc}</p>
                </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ProcessTimeline;