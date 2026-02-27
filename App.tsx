
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoWeHelp from './components/WhoWeHelp';
import TheProblem from './components/TheProblem';
import OurApproach from './components/OurApproach';
import HowWeWork from './components/HowWeWork';
import WhatWeDo from './components/WhatWeDo';
import WhatWeDontDo from './components/WhatWeDontDo';
import CapitalNetwork from './components/CapitalNetwork';
import TypicalOutcomes from './components/TypicalOutcomes';
import WhyPartnerworks from './components/WhyPartnerworks';
import FAQ from './components/FAQ';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/chrishyatt/30min', '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-bgBlue text-brand-textPara font-sans selection:bg-brand-blue selection:text-black">
      <Navbar onContactClick={openCalendly} />
      
      <main>
        <Hero onCtaClick={openCalendly} />
        <WhoWeHelp />
        <TheProblem />
        <OurApproach />
        <HowWeWork />
        <WhatWeDo />
        <WhatWeDontDo />
        <CapitalNetwork />
        <TypicalOutcomes />
        <WhyPartnerworks />
        <FAQ />
      </main>

      <ContactFooter onContactClick={openCalendly} />
    </div>
  );
};

export default App;
