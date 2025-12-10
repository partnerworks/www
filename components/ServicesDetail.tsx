import React from 'react';
import { Compass, MessageSquare, AlertTriangle, Scale, FileBarChart, CheckSquare } from 'lucide-react';

interface ServicesDetailProps {
    onCtaClick: () => void;
}

const ServicesDetail: React.FC<ServicesDetailProps> = ({ onCtaClick }) => {
  const supportFeatures = [
    {
      icon: <Compass className="h-6 w-6 text-brand-blue" />,
      title: "Strategic Direction",
      description: "Defines cyber strategy and risk appetite in partnership with the board, ensuring alignment with business objectives and regulatory requirements."
    },
    {
      icon: <MessageSquare className="h-6 w-6 text-brand-blue" />,
      title: "Clear Communication",
      description: "Translates complex technical risk into clear, commercial language that boards and investors can understand and act upon."
    },
    {
      icon: <AlertTriangle className="h-6 w-6 text-brand-blue" />,
      title: "Incident Readiness",
      description: "Oversees incident response planning, ensuring your organisation can detect, respond to, and recover from cyber security events."
    },
    {
      icon: <Scale className="h-6 w-6 text-brand-blue" />,
      title: "Standards Alignment",
      description: "Guides ISO 27001 alignment and certification efforts, building a framework that satisfies regulators, insurers, and customers."
    },
    {
      icon: <FileBarChart className="h-6 w-6 text-brand-blue" />,
      title: "Structured Reporting",
      description: "Provides board papers, risk registers, and compliance updates formatted for boards, investment committees, and regulatory bodies."
    },
    {
      icon: <CheckSquare className="h-6 w-6 text-brand-blue" />,
      title: "Provider Oversight",
      description: "Works directly with IT teams and managed service providers to ensure recommended controls are implemented and maintained effectively."
    }
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
       {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* SECTION 1: WHAT YOU GET */}
        <div>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold tracking-wide uppercase mb-4">
              Core Capabilities
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
              What to Expect With a <br/>
              <span className="text-gray-400">Fractional CISO</span>
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              Senior security guidance without the full-time cost. We bring structure, clarity, and leadership to your cyber governance.
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {supportFeatures.map((feature, idx) => (
              <div key={idx} className="bg-gray-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border border-transparent hover:border-brand-blue/20 group h-full">
                <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ServicesDetail;