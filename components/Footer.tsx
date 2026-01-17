
import React from 'react';
import { Shield, Github, Twitter, Linkedin, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-24 pb-12 border-t border-slate-900">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                <Shield className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold font-display uppercase tracking-tight">
                Nine<span className="text-indigo-400">Orbits</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm max-w-xs leading-relaxed mb-8">
              The world's first security-first eCommerce infrastructure provider. Protecting every orbit of your online business with native commerce intelligence.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-indigo-400 transition-colors"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-indigo-400 transition-colors"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-indigo-400 transition-colors"><Github className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-slate-900 rounded-lg text-slate-400 hover:text-indigo-400 transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold mb-6">Solutions</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">NineOrbits Secure™</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">NineOrbits Shield™</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">NineOrbits Scale™</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">NineOrbits Trust™</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Philosophy</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6">Resources</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Security Blog</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Commerce Labs</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Incident Status</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500 uppercase tracking-widest font-bold">
          <p>© 2024 NineOrbits Security Inc. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">PCI-DSS Status</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
