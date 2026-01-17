
import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PlatformLogos from './components/PlatformLogos';
import WhyNineOrbits from './components/WhyNineOrbits';
import Products from './components/Products';
import Philosophy from './components/Philosophy';
import WhoWeServe from './components/WhoWeServe';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const App: React.FC = () => {
  useEffect(() => {
    // Smooth scroll behavior for internal links
    const handleScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const id = target.getAttribute('href')?.slice(1);
        const element = document.getElementById(id || '');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    window.addEventListener('click', handleScroll);
    return () => window.removeEventListener('click', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 selection:bg-cyan-500/30">
      {/* Dynamic Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <Navbar />
      
      <main>
        <Hero />
        <PlatformLogos />
        <WhyNineOrbits />
        <Products />
        <Philosophy />
        <WhoWeServe />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
