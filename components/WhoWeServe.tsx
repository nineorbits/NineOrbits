
import React from 'react';
import { ShoppingBag, Landmark, Users, Briefcase } from 'lucide-react';

const WhoWeServe: React.FC = () => {
  const segments = [
    {
      icon: <ShoppingBag className="w-8 h-8" />,
      title: "DTC Brands",
      desc: "Fast-growing brands moving from $10M to $100M+ who need to secure their customer trust and scaling infrastructure."
    },
    {
      icon: <Landmark className="w-8 h-8" />,
      title: "Marketplaces",
      desc: "Multi-vendor systems with complex payment distributions and high-risk API environments."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Subscription Commerce",
      desc: "Businesses relying on recurring payments where data security is the ultimate driver of churn reduction."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Enterprise Platforms",
      desc: "Global corporations running high-volume, multi-platform commerce stacks requiring custom security layers."
    }
  ];

  return (
    <section id="customers" className="py-24 bg-slate-900/40">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Who We Serve</h2>
          <h3 className="text-4xl md:text-5xl font-bold font-display mb-6">Securing the next generation of commerce.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {segments.map((s, i) => (
            <div key={i} className="p-10 rounded-3xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row gap-8 items-center md:items-start group hover:bg-slate-900 transition-colors">
              <div className="w-20 h-20 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 shrink-0 group-hover:bg-indigo-500 group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold mb-4">{s.title}</h4>
                <p className="text-slate-400 leading-relaxed italic">"{s.desc}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;
