import React, { useState } from 'react';
import { Sun, Moon, Menu, X, PhoneCall, ChevronRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="brolink-header">
      <div className="container">
        <div className="header-content">
          
          {/* Pure Typographic Brolink Logo (Clean Wordmark, No Box) */}
          <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.5rem', letterSpacing: '0.05em', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span style={{ fontWeight: 600, color: theme === 'dark' ? '#f8fafc' : '#334155' }}>
                    BRO
                  </span>
                  <span style={{ fontWeight: 800, color: theme === 'dark' ? '#00e5ff' : '#0077b6', marginLeft: '1px' }}>
                    LINK
                  </span>
                </span>
                
                <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.08em', padding: '2px 7px', borderRadius: '4px', background: 'rgba(32, 163, 182, 0.2)', color: '#00e5ff', border: '1px solid rgba(0, 229, 255, 0.3)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  FSP 10834
                </span>
              </div>

              <span style={{ fontSize: '10px', fontWeight: 600, color: 'var(--text-secondary)', whiteSpace: 'nowrap', marginTop: '1px' }}>
                Short-Term Insurance Connection
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="desktop-nav-only">
            <ul style={{ display: 'flex', alignItems: 'center', gap: '24px', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><a href="#services" className="nav-link">Services</a></li>
              <li>
                <a href="#websure" className="nav-link" style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Sparkles style={{ width: 14, height: 14, color: '#00e5ff' }} />
                  <span>Websure™</span>
                </a>
              </li>
              <li><a href="#calculator" className="nav-link">ROI Calculator</a></li>
              <li><a href="#partners" className="nav-link">Partners</a></li>
              <li><a href="#news" className="nav-link">News</a></li>
              <li><a href="#contact" className="nav-link">Contact</a></li>
            </ul>
          </nav>

          {/* Right Action Controls */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            
            {/* Desktop Phone & Partner Action Buttons */}
            <div className="desktop-actions-only" style={{ alignItems: 'center', gap: '12px' }}>
              <a href="tel:+27126730000" className="phone-pill">
                <PhoneCall style={{ width: 14, height: 14, color: '#20a3b6' }} />
                <span>012 673 0000</span>
              </a>

              <a href="#contact" className="btn-primary" style={{ padding: '10px 22px', fontSize: '0.85rem' }}>
                <span>Partner With Us</span>
                <ChevronRight style={{ width: 14, height: 14 }} />
              </a>
            </div>

            {/* Theme Toggle Button (Always visible) */}
            <button 
              onClick={toggleTheme}
              aria-label="Toggle Theme"
              className="theme-toggle-btn"
            >
              {theme === 'dark' ? <Sun style={{ width: 16, height: 16, color: '#fbbf24' }} /> : <Moon style={{ width: 16, height: 16, color: '#334155' }} />}
            </button>

            {/* Mobile Hamburger Toggle Button (Mobile/Tablet only) */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="mobile-menu-btn"
              aria-label="Open Menu"
            >
              {mobileMenuOpen ? <X style={{ width: 22, height: 22 }} /> : <Menu style={{ width: 22, height: 22 }} />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{ padding: '24px', background: 'var(--bg-header)', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '16px', width: '100%', position: 'absolute', top: '80px', left: 0, right: 0, boxShadow: 'var(--shadow-lg)' }}>
          <a href="#services" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Services & Solutions
          </a>
          <a href="#websure" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 700, color: '#00e5ff' }}>
            Websure™ Insurance Platform
          </a>
          <a href="#calculator" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Broker Efficiency ROI Calculator
          </a>
          <a href="#partners" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Insurers & Partners
          </a>
          <a href="#news" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            News & Strategy
          </a>
          <a href="#contact" onClick={() => setMobileMenuOpen(false)} style={{ fontSize: '1rem', fontWeight: 700, color: 'var(--text-primary)' }}>
            Contact & Onboarding
          </a>
          
          <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <a href="tel:+27126730000" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', padding: '12px', borderRadius: '12px', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', fontSize: '0.875rem', fontWeight: 700, color: 'var(--text-primary)' }}>
              <PhoneCall style={{ width: 16, height: 16, color: '#20a3b6' }} />
              Call +27 (0)12 673 0000
            </a>
            <a href="#contact" onClick={() => setMobileMenuOpen(false)} className="btn-primary" style={{ textAlign: 'center', width: '100%', justifyContent: 'center' }}>
              <span>Partner With Us</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
