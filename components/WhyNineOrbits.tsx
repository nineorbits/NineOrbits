
import React from 'react';
import { Target, BarChart3, Lock, Cpu } from 'lucide-react';

const WhyNineOrbits: React.FC = () => {
  const points = [
    {
      icon: <Target className="w-6 h-6 text-indigo-400" />,
      title: "Exclusively eCommerce",
      desc: "Unlike generic security firms, we focus 100% on commerce. We understand how Liquid works, how Magento plugins fail, and where checkout leaks happen."
    },
    {
      icon: <Lock className="w-6 h-6 text-indigo-400" />,
      title: "Revenue-Driven Security",
      desc: "We view security as an ROI engine. By preventing downtime and building buyer trust, we directly protect your LTV and conversion rates."
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-indigo-400" />,
      title: "Compliance-as-Infrastructure",
      desc: "Don't just pass audits; build audit-proof systems. PCI-DSS and GDPR readiness are woven into the very fabric of our architecture."
    },
    {
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
      title: "Deep API Intelligence",
      desc: "Modern commerce is a web of integrations. We secure every ERP, CRM, and 3PL endpoint to ensure zero lateral movement in case of a breach."
    }
  ];

  return (
    <section id="why" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Why NineOrbits</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
            The trust infrastructure for <br /> the future of commerce.
          </h3>
          <p className="text-xl text-slate-400">
            General cybersecurity doesn't speak 'Cart'. We provide native protection for the complex ecosystems that modern brands run on.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, i) => (
            <div key={i} className="p-8 rounded-3xl bg-slate-900/50 border border-slate-800 hover:border-indigo-500/50 transition-all group">
              <div className="mb-6 p-3 rounded-xl bg-slate-800 w-fit group-hover:bg-indigo-500/10 transition-colors">
                {point.icon}
              </div>
              <h4 className="text-xl font-bold mb-4">{point.title}</h4>
              <p className="text-slate-400 leading-relaxed text-sm">
                {point.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNineOrbits;
