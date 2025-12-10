import React from 'react';
import { Award, CheckSquare } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section id="certifications" className="py-20 bg-brand-blue/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Why Certifications Matter</h2>
          <p className="text-gray-600">Prove your security posture to clients, insurers, and stakeholders.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* CE+ Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-brand-blue">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-brand-blue p-3 rounded-full text-white">
                <CheckSquare className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">Cyber Essentials Plus</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-brand-blue font-bold mr-2">•</span>
                Includes technical vulnerability testing
              </li>
              <li className="flex items-start">
                <span className="text-brand-blue font-bold mr-2">•</span>
                Comes with <span className="font-semibold text-black mx-1">£25K cyber insurance</span> included
              </li>
              <li className="flex items-start">
                <span className="text-brand-blue font-bold mr-2">•</span>
                Includes a <span className="font-semibold text-black mx-1">24/7 incident support helpline</span>
              </li>
              <li className="flex items-start">
                <span className="text-brand-blue font-bold mr-2">•</span>
                Required by many government and supply chain contracts
              </li>
            </ul>
          </div>

          {/* ISO 27001 Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 border-t-4 border-brand-orange">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-brand-orange p-3 rounded-full text-white">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-2xl font-bold">ISO 27001</h3>
            </div>
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start">
                <span className="text-brand-orange font-bold mr-2">•</span>
                The international <span className="font-semibold text-black mx-1">gold standard</span> for information security
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange font-bold mr-2">•</span>
                Builds immense trust with enterprise clients
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange font-bold mr-2">•</span>
                Helps win bigger, more lucrative contracts
              </li>
              <li className="flex items-start">
                <span className="text-brand-orange font-bold mr-2">•</span>
                Sets you apart from competitors
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;