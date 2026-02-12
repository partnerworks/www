
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import ServicesDetail from './components/ServicesDetail';
import OurApproach from './components/OurApproach';
import WhyPartnerworks from './components/WhyPartnerworks';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/chrishyatt/30min', '_blank');
  };

  return (
    <div className="min-h-screen bg-brand-bgBlue text-brand-textPara font-sans selection:bg-brand-blue selection:text-black">
      <Navbar onContactClick={openCalendly} />
      
      <main>
        {/* 1. Hero: PE Positioning */}
        <Hero onCtaClick={openCalendly} />
        
        {/* 2. Problem & What We Do Not Do */}
        <WhatWeDo />
        
        {/* 3. Services, AI & Commercial Model */}
        <ServicesDetail onCtaClick={openCalendly} />
        
        {/* 4. The Origination Process */}
        <OurApproach />
        
        {/* 5. About & For Founders */}
        <WhyPartnerworks />
      </main>

      {/* 6. Contact: Mandate Enquiry */}
      <ContactFooter onContactClick={openCalendly} />
    </div>
  );
};

export default App;
