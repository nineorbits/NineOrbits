
import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/10 blur-[150px] pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-indigo-600 to-indigo-800 rounded-[3rem] p-12 md:p-20 text-center shadow-[0_20px_50px_rgba(79,70,229,0.4)]">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center">
              <Shield className="w-10 h-10 text-white" />
            </div>
          </div>
          <h3 className="text-4xl md:text-6xl font-bold font-display text-white mb-8">
            Protect your commerce <br /> before the next breach.
          </h3>
          <p className="text-indigo-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 opacity-90">
            Join the elite eCommerce brands that trust NineOrbits to secure their revenue, their data, and their future.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-white text-indigo-600 px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-50 transition-all flex items-center gap-2">
              Start Your Security Assessment
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="bg-indigo-700/50 backdrop-blur-sm border border-indigo-400/30 text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-indigo-700 transition-all">
              Contact Sales
            </button>
          </div>
          <p className="mt-8 text-indigo-200/60 text-sm font-medium">
            Zero commitment. Deep technical insights. Comprehensive report.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
