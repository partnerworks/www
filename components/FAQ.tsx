import React from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const faqs = [
    {
      question: "Are you an investment bank or broker?",
      answer: "No. We are a retained partner that helps you become sale-ready, shape the story, and run controlled buyer engagement. Where a formal auction is needed, we can introduce trusted advisers, but we do not default to mass-market processes."
    },
    {
      question: "Do I need to be ready to sell now?",
      answer: "No. Many clients start when they are exploring options, not when they are “in market”. We help you clarify timing, improve readiness, and only engage buyers when it makes sense."
    },
    {
      question: "Who do you introduce us to?",
      answer: "We introduce a small number of relevant capital partners from our active network, including private equity funds and family offices. Where appropriate, we can also involve credit providers or restructuring partners."
    },
    {
      question: "How do you keep this confidential?",
      answer: "We do not share your company name or information without permission. We approach buyers in a controlled way, typically one at a time, and only move beyond high-level discussion once you are comfortable and protections are in place."
    },
    {
      question: "How do you estimate what the business is worth?",
      answer: "We provide an early, practical valuation benchmark based on current market conditions, comparable deals, and buyer appetite. This gives you a realistic barometer and highlights what would improve value."
    },
    {
      question: "What does a typical engagement look like?",
      answer: "We usually start with a readiness and optionality phase, then prepare core materials and buyer positioning, then run controlled outreach and support the process through offers, diligence, and completion."
    },
    {
      question: "How long does the process take?",
      answer: "Initial engagements are typically structured over six months, but transaction timelines vary. Where a process runs longer, support can continue on a retained basis until a clear outcome is reached."
    },
    {
      question: "What materials will you prepare?",
      answer: "Typically a clear equity story, a one-page teaser, an information pack or light IM, a buyer shortlist, and Q&A preparation. We also help you organise what is needed for buyer scrutiny and diligence."
    },
    {
      question: "Do you only work in the UK?",
      answer: "No. We have experience across the UK and the Middle East and work with businesses and capital partners internationally, depending on the opportunity and buyer fit."
    },
    {
      question: "How do we get started?",
      answer: "Start with a discreet introductory call. If there is a fit, we will outline a simple plan for the first 30 days, confirm priorities, and agree the scope and cadence before any outreach begins."
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-brand-bgBlue mb-8 sm:mb-12 text-center">Frequently Asked Questions</h2>
        
        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                className="w-full flex items-center justify-between p-4 sm:p-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-bold text-brand-bgBlue text-sm sm:text-lg pr-4 w-full text-center sm:text-left">{faq.question}</span>
                {openIndex === idx ? (
                  <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                )}
              </button>
              
              {openIndex === idx && (
                <div className="p-4 sm:p-6 bg-white border-t border-gray-100">
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed text-center sm:text-left">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
