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
import { ChatBot } from './components/ChatBot';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg-primary)', color: 'var(--text-primary)', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
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
      <ChatBot />
    </div>
  );
};

export default App;
