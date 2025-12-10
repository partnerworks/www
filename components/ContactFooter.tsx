import React from 'react';
import { Phone, ArrowRight, Layout, Briefcase } from 'lucide-react';

interface ContactFooterProps {
    onContactClick: () => void;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-brand-black text-white">
      {/* Final CTA Section: Next Steps */}
      <div className="bg-brand-blue py-20 px-4 text-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk About Your Cyber Governance</h2>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto">
                Whether you're a fund seeking portfolio-wide governance, or a growing business requiring senior security leadership, Partnerworks can help.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center font-bold text-lg">1</div>
                    <h3 className="font-bold text-xl">Introduction Call</h3>
                </div>
                <p className="text-gray-600 mb-6">Book a fractional CISO or NED introduction call to discuss your specific requirements and challenges.</p>
                <button onClick={onContactClick} className="flex items-center font-bold hover:text-brand-orange transition-colors">
                    Book Call <ArrowRight className="w-4 h-4 ml-2" />
                </button>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center font-bold text-lg">2</div>
                    <h3 className="font-bold text-xl">Board Briefing</h3>
                </div>
                <p className="text-gray-600 mb-6">Request a board briefing on cyber risk tailored to your organisation's sector and regulatory environment.</p>
                 <button onClick={onContactClick} className="flex items-center font-bold hover:text-brand-orange transition-colors">
                    Request Briefing <ArrowRight className="w-4 h-4 ml-2" />
                </button>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-brand-black text-white flex items-center justify-center font-bold text-lg">3</div>
                    <h3 className="font-bold text-xl">Portfolio Review</h3>
                </div>
                <p className="text-gray-600 mb-6">Explore how to create a consistent cyber baseline across your portfolio with our assessment framework.</p>
                 <button onClick={onContactClick} className="flex items-center font-bold hover:text-brand-orange transition-colors">
                    Discuss Portfolio <ArrowRight className="w-4 h-4 ml-2" />
                </button>
            </div>
          </div>

           <div className="bg-brand-black/5 rounded-xl p-6 text-center max-w-4xl mx-auto border border-brand-black/10">
                <p className="font-medium text-lg">
                    <span className="font-bold">Why Partnerworks?</span> Board-ready and commercially minded, not just technical. Deep GRC and ISO 27001 experience. We drive change, not just write reports.
                </p>
           </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <span className="text-2xl font-bold text-white tracking-tight mb-4 block">
              Partnerworks<span className="text-brand-pink">.</span>
            </span>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Partnerworks makes cybersecurity practical, clear, and achievable. We help organizations build long-term resilience.
            </p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact Us</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="tel:+442081634295" className="hover:text-brand-blue transition-colors">
                  +44 020 8163 4295
                </a>
              </li>
              <li>
                <button onClick={onContactClick} className="hover:text-brand-blue transition-colors text-left">
                    Book a consultation
                </button>
              </li>
            </ul>
          </div>

          {/* Address Column */}
          <div>
            <h4 className="text-white font-bold mb-4">Office</h4>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              Unit 1, 7a Alma Road<br />
              Windsor, SL4 3HU<br />
              United Kingdom
            </address>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; {new Date().getFullYear()} Partnerworks. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;