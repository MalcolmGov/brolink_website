import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, Calculator, Cpu, Award, Activity, Users, Building } from 'lucide-react';
import { RiskProfilerTrigger } from './RiskProfiler';

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
              <ShieldCheck style={{ width: 16, height: 16, color: 'var(--accent)' }} />
              <span>Brolink 2030 Strategy • Websure™ NextGen Admin</span>
            </div>

            {/* Headline */}
            <h1 className="hero-title">
              Your Trusted Insurance &amp; <span className="text-gradient">Portfolio Connection.</span>
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
                    <span style={{ fontSize: '10px', fontWeight: 800, padding: '2px 8px', borderRadius: '4px', background: 'rgba(32, 163, 182, 0.2)', color: 'var(--accent)', textTransform: 'uppercase' }}>
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
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#websure" className="btn-primary">
                <Cpu style={{ width: 16, height: 16 }} />
                <span>Explore Websure™ Platform</span>
                <ArrowRight style={{ width: 16, height: 16 }} />
              </a>

              <a href="#calculator" className="btn-secondary">
                <Calculator style={{ width: 16, height: 16 }} />
                <span>Calculate ROI</span>
              </a>

              <RiskProfilerTrigger />
            </div>

          </div>

          {/* Right Column — dashboard screenshot card */}
          <div style={{
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
            paddingTop: '8px',
          }}>
            {/* Glow halo behind card */}
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              right: '5%',
              bottom: '10%',
              background: 'radial-gradient(ellipse at center, rgba(0,229,255,0.18) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 0,
            }} />

            {/* Card wrapper */}
            <div style={{
              position: 'relative',
              zIndex: 1,
              borderRadius: '24px',
              overflow: 'hidden',
              border: '1px solid rgba(0, 229, 255, 0.28)',
              boxShadow: '0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(0,229,255,0.06)',
              background: '#070d18',
            }}>
              {/* Top chrome bar */}
              <div style={{
                padding: '10px 16px',
                background: '#0a192f',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}>
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ef4444', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#f59e0b', display: 'inline-block' }} />
                <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#10b981', display: 'inline-block' }} />
                <span style={{ flex: 1, textAlign: 'center', fontSize: '11px', fontFamily: 'monospace', color: '#475569' }}>
                  websure.brolink.co.za/dashboard
                </span>
                <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontSize: '10px', fontWeight: 700, color: '#34d399' }}>
                  <Activity style={{ width: 12, height: 12 }} />
                  <span>LIVE</span>
                </div>
              </div>

              {/* Dashboard screenshot */}
              <div style={{ position: 'relative' }}>
                <img
                  src="/assets/hero_dashboard.jpg"
                  alt="Brolink Websure Executive Dashboard"
                  style={{
                    width: '100%',
                    height: 'auto',
                    display: 'block',
                    maxHeight: '340px',
                    objectFit: 'cover',
                    objectPosition: 'left top',
                  }}
                />

                {/* Floating badge — top right of image */}
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: 'rgba(7,13,24,0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(0,229,255,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
                }}>
                  <Activity style={{ width: 14, height: 14, color: '#00e5ff' }} />
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>Websure Engine</div>
                    <div style={{ fontSize: '10px', color: '#00e5ff', marginTop: '1px' }}>99.98% Uptime</div>
                  </div>
                </div>

                {/* Floating badge — bottom left of image */}
                <div style={{
                  position: 'absolute',
                  bottom: '12px',
                  left: '12px',
                  padding: '8px 14px',
                  borderRadius: '12px',
                  background: 'rgba(7,13,24,0.92)',
                  backdropFilter: 'blur(12px)',
                  border: '1px solid rgba(52,211,153,0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '7px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.5)',
                }}>
                  <ShieldCheck style={{ width: 14, height: 14, color: '#34d399' }} />
                  <div>
                    <div style={{ fontSize: '11px', fontWeight: 800, color: '#fff', lineHeight: 1.2 }}>FSCA &amp; Binder Audit</div>
                    <div style={{ fontSize: '10px', color: '#34d399', marginTop: '1px' }}>100% Compliant</div>
                  </div>
                </div>
              </div>

              {/* Bottom stats strip */}
              <div style={{
                padding: '14px 20px',
                background: '#0a192f',
                borderTop: '1px solid rgba(255,255,255,0.07)',
                display: 'flex',
                justifyContent: 'space-around',
                gap: '12px',
              }}>
                {[
                  { label: 'Premiums Administered', value: 'R15.4B+' },
                  { label: 'Active Policyholders', value: '550K+' },
                  { label: 'Broker Partners', value: '1,200+' },
                ].map(s => (
                  <div key={s.label} style={{ textAlign: 'center' }}>
                    <div style={{ fontSize: '14px', fontWeight: 800, color: '#00e5ff', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.value}</div>
                    <div style={{ fontSize: '10px', color: '#64748b', marginTop: '2px', whiteSpace: 'nowrap' }}>{s.label}</div>
                  </div>
                ))}
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
