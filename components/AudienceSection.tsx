import React from 'react';
import { Building2, Briefcase, Layers, CheckCircle2 } from 'lucide-react';

const AudienceSection: React.FC = () => {
  return (
    <section id="audience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Built for Complex Structures</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Partnerworks is designed specifically for organisations with sophisticated governance requirements and multi-layered operational structures.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* PE Firm Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-orange"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-brand-orange/20 rounded-lg">
                <Briefcase className="h-8 w-8 text-brand-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-orange transition-colors">Private Equity & Funds</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Multiple portfolio companies at different stages of maturity</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Mixed security postures requiring standardisation</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Centralised oversight needed for board and IC reporting</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-orange mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Deal team support during diligence and exit preparation</span>
              </li>
            </ul>
          </div>

          {/* Groups & Holdings Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-gray-800"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-gray-100 rounded-lg">
                <Layers className="h-8 w-8 text-brand-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-gray-600 transition-colors">Groups & Holdings</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gray-800 mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Several operating entities with autonomous management</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gray-800 mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Decentralised IT teams and varied provider relationships</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gray-800 mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Need for one consistent security standard across the group</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-gray-800 mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Consolidated risk reporting to holding company boards</span>
              </li>
            </ul>
          </div>

          {/* SME Card */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-blue"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-brand-blue/20 rounded-lg">
                <Building2 className="h-8 w-8 text-brand-black" />
              </div>
            </div>
            <h3 className="text-xl font-bold mb-4 group-hover:text-brand-blue transition-colors">Growing SMEs</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Scaling quickly and facing increased regulatory scrutiny</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Require senior guidance but can't justify full-time CISO cost</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Need to respond to customer security questionnaires</span>
              </li>
               <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-brand-blue mt-0.5 mr-3 shrink-0" />
                <span className="text-gray-700 text-sm">Building foundations for future certification requirements</span>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AudienceSection;