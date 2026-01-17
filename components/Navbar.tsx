
import React, { useState, useEffect } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass-nav py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
            <Shield className="text-white w-6 h-6" />
          </div>
          <span className="text-xl font-bold font-display tracking-tight uppercase">
            Nine<span className="text-indigo-400">Orbits</span>
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-400">
          <a href="#why" className="hover:text-indigo-400 transition-colors">Why NineOrbits</a>
          <a href="#products" className="hover:text-indigo-400 transition-colors">Products</a>
          <a href="#philosophy" className="hover:text-indigo-400 transition-colors">Philosophy</a>
          <a href="#customers" className="hover:text-indigo-400 transition-colors">Customers</a>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <button className="text-sm font-medium hover:text-indigo-400 transition-colors">Login</button>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all shadow-[0_0_15px_rgba(79,70,229,0.3)]">
            Get Security Assessment
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-slate-300" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-slate-900 border-b border-slate-800 p-6 flex flex-col gap-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-200">
          <a href="#why" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300">Why NineOrbits</a>
          <a href="#products" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300">Products</a>
          <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300">Philosophy</a>
          <a href="#customers" onClick={() => setMobileMenuOpen(false)} className="text-lg font-medium text-slate-300">Customers</a>
          <button className="w-full bg-indigo-600 text-white py-3 rounded-xl font-semibold">
            Get Security Assessment
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
