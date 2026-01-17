
import React from 'react';

const Philosophy: React.FC = () => {
  const orbits = [
    { name: "Payments", desc: "Securing the transaction flow." },
    { name: "Customers", desc: "Protecting PII and accounts." },
    { name: "Data", desc: "End-to-end data integrity." },
    { name: "Infrastructure", desc: "Cloud & server hardening." },
    { name: "Integrations", desc: "API and 3rd-party trust." },
    { name: "Compliance", desc: "PCI, GDPR, and SOC2." },
    { name: "Marketing", desc: "Secure tracking & pixels." },
    { name: "Operations", desc: "Internal tool safety." },
    { name: "Risk", desc: "Fraud and breach response." }
  ];

  return (
    <section id="philosophy" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          <div className="lg:w-1/2">
            <h2 className="text-indigo-400 font-bold uppercase tracking-widest text-sm mb-4">Philosophy</h2>
            <h3 className="text-4xl md:text-5xl font-bold font-display mb-8">Nine Orbits of Commerce</h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We believe eCommerce security isn't just a firewall—it's a comprehensive coverage of the nine critical areas where trust can be broken. If one orbit is compromised, the entire system is at risk.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
              {orbits.map((orbit, i) => (
                <div key={i} className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-full border border-indigo-500/30 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/10 transition-colors">
                    <span className="text-xs font-bold text-indigo-400">{i + 1}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-white group-hover:text-indigo-400 transition-colors">{orbit.name}</h4>
                    <p className="text-xs text-slate-500">{orbit.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative flex justify-center">
             {/* Visual representation of 9 Orbits */}
             <div className="relative w-72 h-72 md:w-[450px] md:h-[450px]">
                <div className="absolute inset-0 rounded-full border border-indigo-500/10 animate-[pulse_4s_infinite]" />
                <div className="absolute inset-8 rounded-full border border-indigo-500/20" />
                <div className="absolute inset-16 rounded-full border border-indigo-500/30" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-indigo-600/20 blur-2xl animate-pulse" />
                  <div className="relative z-10 text-center">
                    <div className="text-3xl font-bold font-display">9</div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-indigo-400">Orbits</div>
                  </div>
                </div>
                
                {/* Floating Orbit Points */}
                {[...Array(9)].map((_, i) => (
                  <div 
                    key={i}
                    className="absolute w-4 h-4 bg-indigo-400 rounded-full shadow-[0_0_15px_#6366f1]"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `rotate(${i * 40}deg) translate(${200}px) rotate(-${i * 40}deg)`,
                      margin: '-8px 0 0 -8px'
                    }}
                  />
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
