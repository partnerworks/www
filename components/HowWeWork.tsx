import React from 'react';
import { Clock, Lock, UserCheck, RefreshCw } from 'lucide-react';

const HowWeWork: React.FC = () => {
  return (
    <section className="py-12 sm:py-20 bg-brand-bgBlue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-12 text-center">How We Work</h2>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex gap-4">
              <div className="p-2 sm:p-3 bg-white/10 rounded-xl h-fit shrink-0">
                <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-2">Retained Basis</h3>
                <p className="text-brand-textPara text-sm sm:text-base leading-relaxed">
                  We work on a retained basis. Initial engagements are typically structured over six months.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 sm:p-3 bg-white/10 rounded-xl h-fit shrink-0">
                <RefreshCw className="w-5 h-5 sm:w-6 sm:h-6 text-brand-blue" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-2">Commitment to Outcome</h3>
                <p className="text-brand-textPara text-sm sm:text-base leading-relaxed">
                  Where a process runs longer, support continues on a retained basis until a clear outcome is reached.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 sm:p-3 bg-white/10 rounded-xl h-fit shrink-0">
                <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-pink" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-2">Owner Control</h3>
                <p className="text-brand-textPara text-sm sm:text-base leading-relaxed">
                  You maintain control of the pace and next steps at every stage of the process.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="p-2 sm:p-3 bg-white/10 rounded-xl h-fit shrink-0">
                <Lock className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />
              </div>
              <div>
                <h3 className="font-bold text-lg sm:text-xl mb-2">Confidentiality & Support</h3>
                <p className="text-brand-textPara text-sm sm:text-base leading-relaxed">
                  We run a controlled, confidential process and stay closely involved through offers, diligence, and completion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
