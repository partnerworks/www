
import React from 'react';
import { Target, TrendingUp, Search, Wallet, UserCheck, Cpu } from 'lucide-react';

interface ServicesDetailProps {
    onCtaClick: () => void;
}

const ServicesDetail: React.FC<ServicesDetailProps> = ({ onCtaClick }) => {
  const capabilities = [
    {
      icon: <TrendingUp className="h-6 w-6 text-brand-blue" />,
      title: "Value Creation and Exit or M&A Readiness",
      description: "We work with founders to identify and strengthen the drivers of enterprise value that matter to buyers, investors and successors. This includes addressing owner dependency, improving governance and ensuring the business is prepared for the scrutiny of due diligence, even where no transaction is imminent.",
      outcome: "A business that is option-ready, with improved valuation resilience and smoother execution when a transaction is pursued."
    },
    {
      icon: <Target className="h-6 w-6 text-brand-orange" />,
      title: "Strategic Clarity and Commercial Focus",
      description: "We help leadership teams step back from day-to-day operations to focus on the decisions that genuinely move long-term value. Through focused working sessions, we clarify strategic priorities, refine the commercial model and ensure growth plans are coherent, credible and aligned at board level.",
      outcome: "Clear direction, stronger execution and a more scalable foundation for sustainable growth."
    },
    {
      icon: <Search className="h-6 w-6 text-brand-pink" />,
      title: "M&A Preparation, Buyer and Target Strategy",
      description: "For businesses considering acquisition or a future exit, we provide selective, discreet support focused on quality rather than volume. This includes clarifying strategic fit, improving deal readiness and identifying, vetting and engaging suitable buyers or acquisition targets at the right time.",
      outcome: "Higher-quality deal opportunities, improved counterparties and reduced execution risk."
    },
    {
      icon: <Wallet className="h-6 w-6 text-green-600" />,
      title: "Funding and Investor Positioning",
      description: "We support businesses in articulating a clear and credible investment narrative. This includes preparing management materials, aligning growth plans with investor expectations and ensuring the business is positioned to engage with the right capital partners on appropriate terms.",
      outcome: "Improved investor confidence, stronger positioning and better outcomes in funding or recapitalisation processes."
    },
    {
      icon: <UserCheck className="h-6 w-6 text-purple-600" />,
      title: "Succession and Founder Transition",
      description: "Founder transition is a critical phase for any business. We help owners prepare for reduced involvement by strengthening leadership structures, governance and decision-making capability, protecting value while ensuring continuity and stability.",
      outcome: "A more resilient business capable of operating independently of its founder."
    },
    {
      icon: <Cpu className="h-6 w-6 text-brand-black" />,
      title: "Pragmatic AI and Business Modernisation",
      description: "We help businesses identify where technology, data and automation can genuinely improve efficiency, insight and margins. Our focus is on practical, controlled implementation that supports value creation, rather than experimentation or technology for its own sake.",
      outcome: "A modernised operating model with improved efficiency and more defensible margins."
    }
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-gray-50 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-brand-orange/10 text-brand-orange text-sm font-bold tracking-wide uppercase mb-4">
            Specialist Capabilities
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
            Strategic Value <br/>
            <span className="text-gray-400">Creation & Advisory</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Independent, board-level guidance for SME owners. We provide the expertise required to convert successful operations into premium assets.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((item, idx) => (
            <div key={idx} className="bg-gray-50 hover:bg-white p-8 rounded-2xl transition-all duration-300 hover:shadow-xl border border-transparent hover:border-brand-blue/20 group h-full flex flex-col">
              <div className="bg-white w-14 h-14 rounded-xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-brand-black mb-3 group-hover:text-brand-blue transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm flex-grow">
                {item.description}
              </p>
              <div className="pt-6 border-t border-gray-200">
                <p className="text-xs font-bold text-brand-orange uppercase tracking-widest mb-2">The Outcome</p>
                <p className="text-sm font-semibold text-brand-black">{item.outcome}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesDetail;
