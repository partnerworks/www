import React from 'react';
import { Check, ArrowLeft, Shield, Zap, Award, PlusCircle } from 'lucide-react';

interface SubscriptionPageProps {
  onCtaClick: () => void;
  onBackClick: () => void;
}

const SubscriptionPage: React.FC<SubscriptionPageProps> = ({ onCtaClick, onBackClick }) => {
  
  const plans = [
    {
      name: "Bronze Plan",
      price: "£650",
      period: "/ month",
      icon: <Shield className="w-6 h-6 text-amber-700" />,
      accentColor: "border-amber-600",
      badgeColor: "bg-amber-50 text-amber-800",
      description: "Your foundational cybersecurity partner.",
      subtext: "A practical entry-level plan for SMEs needing structure, visibility, and hands-on support without the cost or complexity of advanced certification.",
      features: [
        "Monthly cybersecurity health check",
        "Review of IT configurations & basic controls",
        "Light-touch supply-chain screening (up to 5 suppliers)",
        "Core security policies (AUP, Access Control, IR, etc.)",
        "Annual policy refresh",
        "Unlimited email guidance & up to 2 scheduled calls/mo",
        "Liaison with IT provider to resolve issues",
        "Security advice for new tools adoption",
        "Alerts on critical vulnerabilities & threats",
        "Basic staff awareness content (quarterly)",
        "Password & MFA uplift across critical systems",
        "User access review (2x per year)",
        "Cyber Essentials (Basic) preparation & support"
      ],
      idealFor: "SMEs who want structure, clarity, and recurring oversight — essential foundations before moving toward CE+ or ISO 27001."
    },
    {
      name: "Silver Plan",
      price: "£1,500",
      period: "/ month",
      icon: <Zap className="w-6 h-6 text-slate-600" />,
      accentColor: "border-slate-400",
      badgeColor: "bg-slate-100 text-slate-800",
      popular: true,
      description: "Cyber Essentials Plus + ISO 27001 Readiness.",
      subtext: "A comprehensive uplift suitable for growing businesses, supply-chain driven organisations, and those preparing for certifications.",
      features: [
        "Everything in Bronze, plus:",
        "Full support for Cyber Essentials Plus (incl. audit prep)",
        "ISO 27001 readiness programme (Gap analysis, Risk/Asset registers)",
        "Full policy suite (20+ policies) & procedures",
        "Incident response plan + table-top walkthrough",
        "Direct coordination with internal/outsourced IT",
        "Vulnerability assessments (quarterly)",
        "Supplier cyber risk assessments (up to 10 suppliers)",
        "Guidance for CE+ and ISO auditor evidence",
        "Quarterly staff training sessions",
        "Priority response & unlimited advisory calls",
        "Monthly security performance updates"
      ],
      idealFor: "Businesses bidding for larger contracts, working with regulated clients, or needing recognisable security certifications."
    },
    {
      name: "Gold Plan",
      price: "£2,500",
      period: "/ month",
      icon: <Award className="w-6 h-6 text-brand-orange" />,
      accentColor: "border-brand-orange",
      badgeColor: "bg-orange-50 text-orange-800",
      description: "Full cybersecurity leadership — without hiring a CISO.",
      subtext: "Designed for organisations that need consistent, high-level guidance, certification-level maturity, and executive board-level representation.",
      features: [
        "Everything in Silver, plus:",
        "vCISO representation at board/leadership meetings",
        "Strategic reporting & cyber posture scorecards",
        "Annual cyber maturity roadmap (12–24 months)",
        "Security steering committee setup",
        "Formal risk governance & supplier diligence model",
        "Annual incident response simulation + report",
        "Full asset inventory creation & maintenance",
        "Continuous oversight of CE+ and ISO controls",
        "Support for external audits & surveillance visits",
        "Emergency escalation support (no extra cost)",
        "Microsoft 365 & Azure security review (initial & annual)",
        "Unlimited supplier assessments"
      ],
      idealFor: "SMEs needing senior-level security leadership, growing businesses with compliance pressures, and organisations preparing for investment or acquisition."
    }
  ];

  const addOns = [
    "Penetration testing",
    "Phishing campaigns",
    "Cloud configuration hardening",
    "Data mapping for ISO 27701",
    "Backup and recovery audits",
    "Third-party deep-dive supplier audits"
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-8">
          <button 
            onClick={onBackClick}
            className="flex items-center text-gray-600 hover:text-brand-blue transition-colors mb-6 font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </button>
          <div className="text-center max-w-3xl mx-auto mb-16">
             <h1 className="text-4xl md:text-5xl font-bold text-brand-black mb-6">
              Transparent Pricing for Every Stage
            </h1>
            <p className="text-xl text-gray-600">
              Choose the level of support that fits your business needs. No hidden fees, just practical security.
            </p>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid lg:grid-cols-3 gap-8 items-start mb-16">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`bg-white rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden relative flex flex-col h-full border-t-8 ${plan.accentColor}`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-blue text-brand-black text-xs font-bold px-3 py-1 rounded-bl-lg z-10 uppercase tracking-wide">
                  Most Popular
                </div>
              )}

              <div className="p-8 flex-grow">
                <div className="flex items-center justify-between mb-4">
                   <div className={`p-3 rounded-xl ${plan.badgeColor}`}>
                     {plan.icon}
                   </div>
                   <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline">
                    <span className="text-4xl font-bold text-brand-black">{plan.price}</span>
                    <span className="text-gray-500 font-medium ml-2">{plan.period}</span>
                  </div>
                </div>

                <div className="mb-8">
                    <p className="font-bold text-gray-900 mb-2">{plan.description}</p>
                    <p className="text-sm text-gray-600 leading-relaxed">{plan.subtext}</p>
                </div>

                <div className="space-y-4 mb-8 border-t border-gray-100 pt-6">
                  {plan.features.map((feature, fIdx) => (
                    <div key={fIdx} className="flex items-start">
                      <Check className={`w-5 h-5 mt-0.5 mr-3 flex-shrink-0 ${idx === 2 ? 'text-brand-orange' : (idx === 1 ? 'text-slate-500' : 'text-amber-600')}`} />
                      <span className={`text-sm ${feature.startsWith("Everything in") ? "font-bold text-brand-black" : "text-gray-600"}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer of Card */}
              <div className="p-8 bg-gray-50 border-t border-gray-100 mt-auto">
                <div className="mb-6">
                    <p className="text-xs font-bold uppercase text-gray-400 mb-2 tracking-wider">Ideal For</p>
                    <p className="text-sm text-gray-700 font-medium leading-relaxed">
                        {plan.idealFor}
                    </p>
                </div>
                <button 
                    onClick={onCtaClick}
                    className={`w-full py-4 rounded-xl font-bold text-center transition-all transform hover:-translate-y-1 ${
                        idx === 2 
                        ? 'bg-brand-orange text-white hover:bg-orange-600 shadow-lg shadow-orange-200' 
                        : 'bg-brand-black text-white hover:bg-gray-800'
                    }`}
                >
                    Get Started
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Optional Add-ons Section */}
        <div className="mb-20">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-brand-blue/10 rounded-lg">
                        <PlusCircle className="w-6 h-6 text-brand-blue" />
                    </div>
                    <h3 className="text-2xl font-bold text-brand-black">Optional Add-Ons</h3>
                    <span className="text-sm text-gray-500 font-medium ml-auto hidden sm:block">Available with any plan</span>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {addOns.map((addon, idx) => (
                        <div key={idx} className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100">
                            <div className="w-2 h-2 bg-brand-orange rounded-full mr-3"></div>
                            <span className="font-medium text-gray-700">{addon}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        {/* Bottom Contact */}
        <div className="text-center bg-brand-blue/10 rounded-3xl p-12">
            <h3 className="text-2xl font-bold mb-4">Not sure which plan is right for you?</h3>
            <p className="text-gray-600 mb-8">We can help assess your current maturity and recommend the best path forward.</p>
            <button 
                onClick={onCtaClick}
                className="bg-white text-brand-black border border-gray-200 px-8 py-3 rounded-lg font-bold hover:bg-brand-black hover:text-white transition-all"
            >
                Talk to an Expert
            </button>
        </div>

      </div>
    </div>
  );
};

export default SubscriptionPage;