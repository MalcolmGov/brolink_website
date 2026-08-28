import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Calculator, Cpu, Award, Activity, Users, Building } from 'lucide-react';

export const Hero: React.FC = () => {
  const [activePersona, setActivePersona] = useState<'insurer' | 'broker' | 'policyholder'>('broker');

  const personaDetails = {
    insurer: {
      title: "For Insurers",
      badge: "Binder Partner",
      text: "Expand your distribution footprint across South Africa with Brolink's non-mandated binder administrative services and compliant Websure infrastructure."
    },
    broker: {
      title: "For Brokers",
      badge: "Back-Office Partner",
      text: "Unburden your brokerage from tedious policy administration. Quote multi-insurer lines and issue policies seamlessly on our Websure platform."
    },
    policyholder: {
      title: "For Policyholders",
      badge: "Claims Resolution",
      text: "Enjoy empathetic, swift claims settlement and emergency assistance backed by top South African short-term insurance partners."
    }
  };

  return (
    <section className="hero-section">
      <div className="container">
        
        <div className="hero-grid">
          
          {/* Left Column Strategy & Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            
            {/* Top Pill Badge */}
            <div className="badge-pill">
              <ShieldCheck style={{ width: 16, height: 16, color: '#00e5ff' }} />
              <span>Brolink 2030 Strategy • Websure™ NextGen Admin</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Your Trusted Insurance & <br />
              <span className="text-gradient">Portfolio Connection.</span>
            </h1>

            {/* Subtitle */}
            <p className="hero-subtitle">
              We are specialists in short-term insurance systems, binder services, and portfolio administration — empowering South Africa’s leading Insurers, Brokers, and Policyholders with motivated people and world-class technology.
            </p>

            {/* Interactive Persona Selector Box */}
            <div className="persona-container" style={{ width: '100%' }}>
              <div className="persona-tabs-row">
                <button
                  onClick={() => setActivePersona('broker')}
                  className={`persona-tab ${activePersona === 'broker' ? 'active' : 'inactive'}`}
                >
                  <Users style={{ width: 16, height: 16 }} />
                  <span>A Broker</span>
                </button>

                <button
                  onClick={() => setActivePersona('insurer')}
                  className={`persona-tab ${activePersona === 'insurer' ? 'active' : 'inactive'}`}
                >
                  <Building style={{ width: 16, height: 16 }} />
                  <span>An Insurer</span>
                </button>

                <button
                  onClick={() => setActivePersona('policyholder')}
                  className={`persona-tab ${activePersona === 'policyholder' ? 'active' : 'inactive'}`}
                >
                  <Award style={{ width: 16, height: 16 }} />
                  <span>A Policyholder</span>
                </button>
              </div>

              {/* Active Persona Details */}
              <div className="persona-card-details">
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontSize: '1.1rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                      {personaDetails[activePersona].title}
                    </span>
                    <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', background: 'rgba(32, 163, 182, 0.2)', color: '#00e5ff', textTransform: 'uppercase' }}>
                      {personaDetails[activePersona].badge}
                    </span>
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {personaDetails[activePersona].text}
                  </p>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <a href="#websure" className="btn-primary">
                <Cpu style={{ width: 16, height: 16 }} />
                <span>Explore Websure™ Platform</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </a>

              <a href="#calculator" className="btn-secondary">
                <Calculator style={{ width: 16, height: 16 }} />
                <span>Calculate ROI</span>
              </a>
            </div>

          </div>

          {/* Right Column Visual Graphic */}
          <div style={{ position: 'relative' }}>
            <div className="glass-panel" style={{ padding: '16px', overflow: 'hidden', borderRadius: '28px', border: '1px solid rgba(0, 229, 255, 0.3)' }}>
              <img 
                src="/assets/hero_dashboard.jpg" 
                alt="Brolink Websure Executive Dashboard"
                style={{ width: '100%', height: 'auto', borderRadius: '20px', display: 'block' }}
              />

              {/* Floating Floating Badges */}
              <div style={{ position: 'absolute', bottom: '32px', left: '32px', padding: '12px 20px', borderRadius: '16px', background: 'rgba(7, 13, 24, 0.95)', border: '1px solid rgba(0, 229, 255, 0.4)', color: '#ffffff', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <ShieldCheck style={{ width: 18, height: 18, color: '#00e5ff' }} />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 800 }}>FSCA & Binder Audit</div>
                  <div style={{ fontSize: '10px', color: '#34d399' }}>100% Compliant</div>
                </div>
              </div>

              <div style={{ position: 'absolute', top: '32px', right: '32px', padding: '12px 20px', borderRadius: '16px', background: 'rgba(7, 13, 24, 0.95)', border: '1px solid rgba(0, 229, 255, 0.4)', color: '#ffffff', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
                <Activity style={{ width: 18, height: 18, color: '#00e5ff' }} />
                <div>
                  <div style={{ color: '#ffffff', fontWeight: 800 }}>Websure Engine</div>
                  <div style={{ fontSize: '10px', color: '#00e5ff' }}>99.98% Uptime</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Stats Row */}
        <div className="stats-bar-container">
          <div>
            <div className="stat-val text-gradient">R15.4B+</div>
            <div className="stat-desc">Premiums Administered</div>
          </div>

          <div>
            <div className="stat-val text-gradient">550,000+</div>
            <div className="stat-desc">Active Policyholders</div>
          </div>

          <div>
            <div className="stat-val text-gradient">1,200+</div>
            <div className="stat-desc">Broker Partners in SA</div>
          </div>

          <div>
            <div className="stat-val text-gradient">30+ Yrs</div>
            <div className="stat-desc">Short-Term Excellence</div>
          </div>
        </div>

      </div>
    </section>
  );
};
