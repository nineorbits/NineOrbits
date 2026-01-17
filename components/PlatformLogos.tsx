
import React from 'react';

const PlatformLogos: React.FC = () => {
  const platforms = [
    "Shopify Plus", "Magento", "BigCommerce", "Salesforce Commerce", "WooCommerce", "Commercetools"
  ];

  return (
    <div className="py-12 border-y border-slate-800/30 bg-slate-950/50">
      <div className="container mx-auto px-6">
        <p className="text-center text-slate-500 text-sm font-medium uppercase tracking-widest mb-8">
          Securing the world's leading commerce platforms
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
          {platforms.map((p) => (
            <div key={p} className="flex items-center gap-2 group cursor-default">
              <div className="w-8 h-8 rounded bg-slate-800 flex items-center justify-center group-hover:bg-indigo-900 transition-colors">
                 <span className="text-[10px] font-bold text-slate-400 group-hover:text-indigo-300">{p.charAt(0)}</span>
              </div>
              <span className="text-lg font-bold text-slate-300 group-hover:text-white transition-colors">{p}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PlatformLogos;
