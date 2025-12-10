import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AudienceSection from './components/AudienceSection';
import WhyMatters from './components/WhyMatters';
import ProcessTimeline from './components/ProcessTimeline';
import ServicesDetail from './components/ServicesDetail';
import ContactFooter from './components/ContactFooter';
import PortfolioGovernance from './components/PortfolioGovernance';
import NEDSection from './components/NEDSection';

const App: React.FC = () => {
  const openCalendly = () => {
    window.open('https://calendly.com/chrishyatt/30min?month=2025-11', '_blank');
  };

  return (
    <div className="min-h-screen bg-white text-brand-black font-sans selection:bg-brand-blue selection:text-brand-black">
      <Navbar 
        onContactClick={openCalendly} 
      />
      
      <main>
        <Hero onCtaClick={openCalendly} />
        <AudienceSection />
        <WhyMatters />
        <ServicesDetail 
            onCtaClick={openCalendly} 
        />
        <NEDSection />
        <PortfolioGovernance />
        <ProcessTimeline />
      </main>

      <ContactFooter onContactClick={openCalendly} />
    </div>
  );
};

export default App;