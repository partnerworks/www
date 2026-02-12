
import React from 'react';
import { Target, Search, Users, Clock, Briefcase, BarChart3 } from 'lucide-react';

interface ServicesDetailProps {
    onCtaClick: () => void;
}

const ServicesDetail: React.FC<ServicesDetailProps> = ({ onCtaClick }) => {
  const capabilities = [
    {
      icon: <Target className="h-6 w-6 text-brand-blue" />,
      bgIcon: "icon-bg-blue",
      title: "Thesis Alignment",
      description: "We begin by deeply understanding your investment criteria, preferred sub-sectors and value creation levers. We do not operate a scattergun approach; every target is selected based on its strategic fit with your specific mandate."
    },
    {
      icon: <Search className="h-6 w-6 text-brand-orange" />,
      bgIcon: "icon-bg-orange",
      title: "AI-Enabled Research",
      description: "We utilise modern AI tools to automate data enrichment, sector mapping and signal tracking. This technology scales our ability to identify targets, but we never automate the relationship. The outreach remains 100% human and personalised."
    },
    {
      icon: <Users className="h-6 w-6 text-brand-pink" />,
      bgIcon: "icon-bg-pink",
      title: "Director-Led Outreach",
      description: "Founders respond to credibility, not sales scripts. Our outreach is conducted by senior partners who understand the nuances of running and exiting businesses. We build trust early, positioning your fund as the partner of choice."
    },
    {
      icon: <Clock className="h-6 w-6 text-brand-blue" />,
      bgIcon: "icon-bg-blue",
      title: "First-Look Allocation",
      description: "We operate a strict allocation model. When we unlock an opportunity relevant to your thesis, you are granted a first-look period (typically 2 to 4 weeks) to assess the opportunity exclusively before it is offered elsewhere."
    },
    {
      icon: <Briefcase className="h-6 w-6 text-brand-orange" />,
      bgIcon: "icon-bg-orange",
      title: "Commercial Structure",
      description: "Our model aligns incentives. We charge an agreed monthly retainer to reserve origination capacity, plus a success fee (0.75% - 1.25% of Enterprise Value) upon completion. Typical engagement terms run from 6 to 12 months."
    },
    {
      icon: <BarChart3 className="h-6 w-6 text-brand-pink" />,
      bgIcon: "icon-bg-pink",
      title: "Pipeline Governance",
      description: "We act as a disciplined extension of your team. You receive regular reporting on the pipeline, market feedback and outreach metrics. We maintain a limited number of concurrent mandates to ensure focus and quality."
    }
  ];

  return (
    <section id="services" className="py-24 bg-brand-bgBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl font-bold text-brand-textWhite mb-6">Engagement Model</h2>
          <p className="text-xl text-brand-textPara">We act as your dedicated origination partner, delivering off-market deal flow through a structured and transparent process.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => (
            <div key={idx} className="card-bg p-8 rounded-2xl shadow-card border border-white/5 h-full flex flex-col group hover:border-white/10 transition-all hover:translate-y-[-4px]">
              <div className={`${item.bgIcon} w-14 h-14 rounded-2xl flex items-center justify-center mb-8`}>
                {item.icon}
              </div>
              <h3 className="text-2xl font-bold text-brand-textWhite mb-5 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-brand-textSubtle leading-relaxed mb-4 text-base flex-grow">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
