
import React from 'react';
import { ArrowRight, Mail, Phone } from 'lucide-react';

interface ContactFooterProps {
  onContactClick: () => void;
}

const ContactFooter: React.FC<ContactFooterProps> = ({ onContactClick }) => {
  return (
    <footer className="bg-brand-black text-white">
      {/* Final CTA Section */}
      <div className="bg-brand-blue py-24 px-4 text-brand-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's Discuss Your Strategic Objectives</h2>
            <p className="text-xl text-gray-800 max-w-2xl mx-auto">
              Whether you are an investor seeking quality deal flow or a business owner ready to scale or transition, let's explore how we can facilitate your growth.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">For Investors</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Seeking high-quality SME investment opportunities with strong value creation potential? Let's discuss how we can support your deal flow and drive returns.
              </p>
              <button onClick={onContactClick} className="flex items-center font-bold hover:text-brand-orange transition-colors">
                Schedule a Dealflow Call <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow">
              <h3 className="text-2xl font-bold mb-4">For SME Owners</h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Ready to scale, transition management, or find the right growth capital partner to unlock value? Let's explore how we can support your journey.
              </p>
              <button onClick={onContactClick} className="flex items-center font-bold hover:text-brand-orange transition-colors">
                Explore Value Creation <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </div>
          </div>

          <div className="mt-16 text-center text-sm font-medium text-gray-700 max-w-2xl mx-auto">
            <p>Our commitment is to confidentiality, alignment, and value-driven partnerships. Initial discussions are about understanding your needs and identifying potential fit.</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 border-b border-gray-800 pb-16">
          <div className="col-span-1 md:col-span-2">
            <span className="text-3xl font-bold text-white tracking-tight mb-6 block">
              Partnerworks<span className="text-brand-pink">.</span>
            </span>
            <p className="text-gray-400 text-sm max-w-xs leading-relaxed">
              Converting operational success into enterprise value through strategic advisory, effective partnerships, and sustainable growth.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+442081634295" className="hover:text-brand-blue transition-colors">+44 020 8163 4295</a>
              </li>
              <li>
                <button onClick={onContactClick} className="bg-brand-orange text-white px-6 py-2 rounded-lg font-bold hover:bg-white hover:text-brand-black transition-all">
                  Get in Touch
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6">Office</h4>
            <address className="text-gray-400 text-sm not-italic leading-relaxed">
              Unit 1, 7a Alma Road<br />
              Windsor, SL4 3HU<br />
              United Kingdom
            </address>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-xs">
          <p>&copy; 2026 Partnerworks Ltd. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <span>Value Creation</span>
            <span>Exit Readiness</span>
            <span>Strategic Advisory</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;
