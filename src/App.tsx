import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AudienceSwitcher } from './components/AudienceSwitcher';
import { WebsureShowcase } from './components/WebsureShowcase';
import { PortfolioCalculator } from './components/PortfolioCalculator';
import { PartnersGrid } from './components/PartnersGrid';
import { NewsSection } from './components/NewsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] transition-colors duration-300">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <AudienceSwitcher />
        <WebsureShowcase />
        <PortfolioCalculator />
        <PartnersGrid />
        <NewsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
