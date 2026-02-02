
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import ServicesDetail from './components/ServicesDetail';
import OurApproach from './components/OurApproach';
import WhoWeWorkWith from './components/WhoWeWorkWith';
import WhyPartnerworks from './components/WhyPartnerworks';
import Sectors from './components/Sectors';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/chrishyatt/30min?month=2025-11', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-brand-black font-sans selection:bg-brand-blue selection:text-brand-black">
      <Navbar onContactClick={openCalendly} />
      
      <main>
        <Hero onCtaClick={openCalendly} />
        <WhatWeDo />
        <ServicesDetail onCtaClick={openCalendly} />
        <WhoWeWorkWith />
        <OurApproach />
        <WhyPartnerworks />
        <Sectors />
      </main>

      <ContactFooter onContactClick={openCalendly} />
    </div>
  );
};

export default App;
