
import React from 'react';
import { ShieldCheck, Server, TrendingUp, UserCheck, CheckCircle2 } from 'lucide-react';

const Products: React.FC = () => {
  const products = [
    {
      tag: "Security",
      title: "NineOrbits Secure™",
      icon: <ShieldCheck className="w-10 h-10 text-indigo-500" />,
      desc: "Continuous threat monitoring and active vulnerability testing for your commerce frontend and checkout.",
      features: ["eCommerce VAPT", "Payment Path Encryption", "API Pentesting", "24/7 Threat Hunting"]
    },
    {
      tag: "Compliance",
      title: "NineOrbits Shield™",
      icon: <UserCheck className="w-10 h-10 text-cyan-500" />,
      desc: "Comprehensive risk assessments and compliance automation to maintain enterprise trust and regulatory standing.",
      features: ["PCI-DSS Level 1 Readiness", "SOC2 Automation", "Risk Assessment", "Breach Simulation"]
    },
    {
      tag: "Scale",
      title: "NineOrbits Scale™",
      icon: <Server className="w-10 h-10 text-indigo-500" />,
      desc: "Optimized, secure architecture for brands migrating to Headless or upgrading from SME platforms.",
      features: ["Secure Cloud Migration", "DevSecOps Integration", "WAF Optimization", "Performance Audits"]
    },
    {
      tag: "Trust",
      title: "NineOrbits Trust™",
      icon: <TrendingUp className="w-10 h-10 text-cyan-500" />,
      desc: "Building brand equity through transparent security and fraud-aware growth strategies.",
      features: ["Fraud Prevention", "Identity Protection", "Customer Trust Badges", "Secure Analytics"]
    }
  ];

  return (
    <section id="products" className="py-24 bg-slate-900/20">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Our Suite</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display mb-6">Built for Enterprise Scale</h3>
          <p className="text-slate-400 text-lg">
            Specialized products designed to cover every vulnerability point in your commerce ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {products.map((p, i) => (
            <div key={i} className="relative overflow-hidden group rounded-[2.5rem] bg-gradient-to-br from-slate-900 to-slate-950 p-1">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              <div className="relative bg-slate-950 rounded-[2.4rem] p-10 h-full flex flex-col md:flex-row gap-8">
                <div className="md:w-1/2">
                  <div className="mb-6">{p.icon}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2">{p.tag}</div>
                  <h4 className="text-3xl font-bold font-display mb-4">{p.title}</h4>
                  <p className="text-slate-400 mb-8 leading-relaxed">
                    {p.desc}
                  </p>
                  <button className="flex items-center gap-2 text-white font-bold group/btn">
                    Explore Product
                    <div className="w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center group-hover/btn:bg-indigo-600 transition-colors">
                      <TrendingUp className="w-3 h-3" />
                    </div>
                  </button>
                </div>
                <div className="md:w-1/2 flex flex-col justify-center">
                  <ul className="space-y-4">
                    {p.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle2 className="w-5 h-5 text-indigo-500 shrink-0" />
                        <span className="text-sm font-medium">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
