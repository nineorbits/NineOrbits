
import React from 'react';
import { ArrowRight, ShieldCheck, Globe, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Orbital Motif Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none opacity-20 hidden lg:block">
        <div className="absolute inset-0 border border-indigo-500/20 rounded-full animate-[spin_60s_linear_infinite]" />
        <div className="absolute inset-[100px] border border-cyan-500/10 rounded-full animate-[spin_45s_linear_infinite_reverse]" />
        <div className="absolute inset-[200px] border border-indigo-500/5 rounded-full animate-[spin_30s_linear_infinite]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-indigo-500 rounded-full blur-[2px] shadow-[0_0_15px_#6366f1]" />
        <div className="absolute bottom-[10%] right-[10%] w-2 h-2 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_10px_#22d3ee]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold tracking-wider uppercase mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse" />
            Security-First eCommerce Infrastructure
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-[1.1] mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            Secure Every Orbit of <br className="hidden md:block" /> Your Online Commerce
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            Enterprise-grade infrastructure for brands that cannot afford breaches, downtime, or trust loss. We protect your revenue by securing your entire digital commerce ecosystem.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-16 duration-1000 delay-300">
            <button className="w-full sm:w-auto bg-white text-slate-950 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-200 transition-all flex items-center justify-center gap-2 group">
              Start Security Assessment
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="w-full sm:w-auto bg-slate-800/50 backdrop-blur-sm text-white px-8 py-4 rounded-full font-bold text-lg border border-slate-700 hover:bg-slate-800 transition-all">
              Watch Platform Overview
            </button>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-5xl mx-auto pt-16 border-t border-slate-800/50 animate-in fade-in duration-1000 delay-500">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <ShieldCheck className="text-indigo-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Commerce Native</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Built specifically for the unique vulnerabilities of Shopify, Magento, and custom stacks.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <Globe className="text-cyan-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Global Scale</h3>
                <p className="text-sm text-slate-400 leading-relaxed">Secure multi-region operations with high-availability infrastructure that scales with your growth.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center shrink-0">
                <Zap className="text-indigo-400 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-white mb-1">Zero Trust Checkout</h3>
                <p className="text-sm text-slate-400 leading-relaxed">End-to-end encryption and fraud-prevention baked into every transaction orbit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
