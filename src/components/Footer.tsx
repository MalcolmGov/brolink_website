import React from 'react';
import { MapPin, Download, ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer style={{ background: '#070d18', color: '#94a3b8', borderTop: '1px solid rgba(255, 255, 255, 0.1)', paddingTop: '64px', paddingBottom: '48px', position: 'relative', overflow: 'hidden' }}>
      
      <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
        
        {/* Top Footer Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
          
          {/* Brand Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Pure Typographic Brolink Logo */}
            <div style={{ display: 'inline-flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontSize: '1.6rem', letterSpacing: '0.05em', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  <span style={{ fontWeight: 600, color: '#f8fafc' }}>
                    BRO
                  </span>
                  <span style={{ fontWeight: 800, color: 'var(--accent)', marginLeft: '1px' }}>
                    LINK
                  </span>
                </span>
                
                <span style={{ fontSize: '9px', fontWeight: 800, letterSpacing: '0.08em', padding: '2px 7px', borderRadius: '4px', background: 'rgba(32, 163, 182, 0.2)', color: 'var(--accent)', border: '1px solid rgba(0, 229, 255, 0.3)', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
                  FSP 10834
                </span>
              </div>
            </div>

            <p style={{ fontSize: '0.85rem', color: '#94a3b8', lineHeight: 1.7, maxWidth: '380px' }}>
              Brolink is a professional, solutions-orientated, innovative company operating with accountability and integrity. We provide exceptional short-term insurance administration to insurers and brokers through motivated people and world-class technology.
            </p>

            <div style={{ paddingTop: '8px' }}>
              <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 18px', borderRadius: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)', fontSize: '0.825rem', fontWeight: 600, color: 'var(--accent)', textDecoration: 'none' }}>
                <Download style={{ width: 16, height: 16 }} />
                <span>Broker Downloads & Compliance Packs</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.85rem' }}>
              <li>
                <a href="#services" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Services for Insurers & Brokers
                </a>
              </li>
              <li>
                <a href="#websure" style={{ color: '#94a3b8', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span>Websure™ Tech Platform</span>
                  <ArrowUpRight style={{ width: 14, height: 14, color: 'var(--accent)' }} />
                </a>
              </li>
              <li>
                <a href="#calculator" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Broker Efficiency & ROI Calculator
                </a>
              </li>
              <li>
                <a href="#partners" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Partner Ecosystem (Santam, Hollard, Absa)
                </a>
              </li>
              <li>
                <a href="#news" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Brolink 2030 Strategy & News
                </a>
              </li>
              <li>
                <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  Contact & Broker Onboarding
                </a>
              </li>
            </ul>
          </div>

          {/* Office & Legal Disclosures */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <h4 style={{ fontSize: '0.875rem', fontWeight: 800, color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Regulatory & Contact Details
            </h4>
            
            <div style={{ padding: '20px', borderRadius: '16px', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.85rem', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#ffffff', fontWeight: 700 }}>
                <MapPin style={{ width: 16, height: 16, color: '#20a3b6' }} />
                <span>Centurion Head Office</span>
              </div>
              <p style={{ color: '#94a3b8', fontSize: '0.8rem', lineHeight: 1.6 }}>
                Westend Office Park, 254 Hall Street, Centurion, 0157, Gauteng, South Africa
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', paddingTop: '8px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', fontSize: '0.8rem' }}>
                <a href="tel:+27126730000" style={{ color: 'var(--accent)', fontWeight: 700, textDecoration: 'none' }}>
                  +27 (0)12 673 0000
                </a>
                <span style={{ color: '#475569' }}>•</span>
                <a href="mailto:brolink@brolink.co.za" style={{ color: '#94a3b8', textDecoration: 'none' }}>
                  brolink@brolink.co.za
                </a>
              </div>
            </div>

            <p style={{ fontSize: '0.75rem', color: '#64748b', lineHeight: 1.6 }}>
              Brolink (Pty) Ltd is an authorized Financial Services Provider (FSP 10834). Short-term insurance binder administration services offered in compliance with the Financial Advisory and Intermediary Services Act (FAIS) and Insurance Act.
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{ paddingTop: '24px', borderTop: '1px solid rgba(255, 255, 255, 0.08)', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontSize: '0.8rem', color: '#64748b' }}>
          <div>
            © {new Date().getFullYear()} Brolink (Pty) Ltd. All Rights Reserved.
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <a href="https://www.brolink.co.za/privacy-policy/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Privacy Policy & POPIA
            </a>
            <span>•</span>
            <a href="#contact" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Terms & Conditions
            </a>
            <span>•</span>
            <a href="https://www.brolink.co.za/downloads/" target="_blank" rel="noopener noreferrer" style={{ color: '#94a3b8', textDecoration: 'none' }}>
              Downloads
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
