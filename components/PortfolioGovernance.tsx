import React from 'react';
import { BarChart3, LayoutDashboard, Flag, ShieldCheck, Users } from 'lucide-react';

const PortfolioGovernance: React.FC = () => {
  const features = [
    {
      icon: <BarChart3 className="w-6 h-6 text-brand-blue" />,
      title: "Standardised Assessment",
      desc: "One consistent cyber maturity standard applied across the entire portfolio, enabling like-for-like comparison."
    },
    {
      icon: <LayoutDashboard className="w-6 h-6 text-brand-orange" />,
      title: "Portfolio Dashboard",
      desc: "High-level scoring and traffic-light view per company, showing risk status at a glance for board reporting."
    },
    {
      icon: <Flag className="w-6 h-6 text-brand-pink" />,
      title: "Certification Tracking",
      desc: "Visibility of ISO 27001 implementation progress and certification status across all portfolio entities."
    },
    {
      icon: <Users className="w-6 h-6 text-green-400" />,
      title: "Third-Party Risk",
      desc: "Supplier and third-party risk overview, identifying concentration risk and critical dependencies."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
      title: "Deal Support",
      desc: "Support to deal teams during diligence phases and preparation for exits, ensuring cyber risk is properly understood and priced."
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-gray-900 text-white overflow-hidden relative">
       {/* Background accents */}
       <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
       <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-4xl mx-auto mb-16">
            <span className="text-brand-orange font-bold tracking-wider uppercase text-sm mb-4 block">Consistent Standards</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Portfolio Cyber Governance
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Private equity funds and holding groups face a unique challenge: ensuring consistent cyber maturity across multiple portfolio companies, each with different IT environments and risk profiles.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
                Partnerworks provides portfolio-level cyber governance that gives investment committees and fund managers clear visibility of cyber risk across their holdings.
            </p>
        </div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
                <div key={idx} className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700 hover:bg-gray-800 transition-colors hover:border-brand-blue/30 group">
                    <div className="bg-gray-900 p-4 rounded-xl w-fit mb-6 border border-gray-800 group-hover:scale-110 transition-transform duration-300">
                        {feature.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-white">{feature.title}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        {feature.desc}
                    </p>
                </div>
            ))}
        </div>

      </div>
    </section>
  );
};

export default PortfolioGovernance;