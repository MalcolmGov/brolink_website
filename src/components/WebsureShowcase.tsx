import React, { useState } from 'react';
import { Cpu, Activity, Search, Lock } from 'lucide-react';

export const WebsureShowcase: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [simulatedSearch, setSimulatedSearch] = useState<string>('');
  const [simulatedStatus, setSimulatedStatus] = useState<string>('All');

  const platformModules = [
    {
      id: 0,
      title: "Underwriting & Binder Engine",
      badge: "Core Platform",
      desc: "Flexible short-term underwriting rules engine for personal, commercial, and agricultural lines with instant rating & quote calculation.",
      metrics: "Sub-second Quote Generation"
    },
    {
      id: 1,
      title: "Automated Claims Lifecycle",
      badge: "Workflow Automation",
      desc: "End-to-end digital triage, document capture, assessor routing, and payout verification fully synced with insurer binder guidelines.",
      metrics: "48-Hour Average Settlement"
    },
    {
      id: 2,
      title: "FSCA & Regulatory Safeguards",
      badge: "Governance",
      desc: "Automated audit trail logging, Binder Agreement compliance checks, and real-time POPIA & SAM regulatory reporting.",
      metrics: "100% Audit Readiness"
    },
    {
      id: 3,
      title: "Multi-Insurer API Ecosystem",
      badge: "Integrations",
      desc: "Seamless JSON/REST API connectivity linking major South African insurers, broker CRMs, and third-party valuation services.",
      metrics: "50+ Enterprise Endpoints"
    }
  ];

  const mockPolicies = [
    { id: "WS-88291", holder: "Apex Logistics SA", type: "Fleet & Commercial", premium: "R 24,500", status: "Active" },
    { id: "WS-88292", holder: "Sipho Dlamini", type: "Comprehensive Motor", premium: "R 1,850", status: "Active" },
    { id: "WS-88293", holder: "Centurion Tech Hub", type: "Property & Liability", premium: "R 12,400", status: "Audit Pending" },
    { id: "WS-88294", holder: "Kareem & Partners", type: "Professional Indemnity", premium: "R 8,900", status: "Active" }
  ];

  const filteredMockPolicies = mockPolicies.filter(p => {
    const matchesSearch = p.holder.toLowerCase().includes(simulatedSearch.toLowerCase()) || p.id.toLowerCase().includes(simulatedSearch.toLowerCase());
    const matchesStatus = simulatedStatus === 'All' || p.status === simulatedStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <section id="websure">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Cpu style={{ width: 16, height: 16, color: '#00e5ff' }} />
            <span>Proprietary Technology</span>
          </div>
          <h2 className="section-title">
            Powered By <span className="text-gradient">Websure™</span> Platform
          </h2>
          <p className="section-subtitle">
            Designed specifically for the South African short-term market. Websure™ connects brokers, insurers, and administrators on a single cloud-native infrastructure.
          </p>
        </div>

        {/* Grid Layout: Left Modules / Right Live Simulator */}
        <div className="websure-grid">
          
          {/* Left Modules Stack */}
          <div className="module-cards-stack">
            {platformModules.map((mod) => {
              const isSelected = activeStep === mod.id;
              return (
                <div
                  key={mod.id}
                  onClick={() => setActiveStep(mod.id)}
                  className={`module-card ${isSelected ? 'selected' : ''}`}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 10px', borderRadius: '6px', background: isSelected ? 'rgba(0, 229, 255, 0.2)' : 'var(--bg-primary)', color: isSelected ? '#00e5ff' : 'var(--text-muted)' }}>
                      {mod.badge}
                    </span>
                    <span style={{ fontSize: '12px', fontWeight: 700, color: 'var(--brand-teal)' }}>
                      {mod.metrics}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-primary)', marginBottom: '8px' }}>
                    {mod.title}
                  </h3>
                  <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                    {mod.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Right Live Platform Simulator */}
          <div className="simulator-frame">
            
            {/* Browser Header Bar */}
            <div className="browser-top-bar">
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#ef4444' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#f59e0b' }} />
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#10b981' }} />
                <span style={{ fontSize: '12px', fontFamily: 'monospace', color: '#94a3b8', paddingLeft: '8px' }}>
                  websure.brolink.co.za/portal/v4
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', fontWeight: 700, color: '#00e5ff' }}>
                <Lock style={{ width: 14, height: 14 }} />
                <span>256-Bit Encrypted</span>
              </div>
            </div>

            {/* Interface Screenshot Mockup */}
            <div style={{ position: 'relative', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
              <img 
                src="/assets/websure_mockup.jpg" 
                alt="Websure SaaS Interface" 
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />
              
              <div style={{ position: 'absolute', top: '16px', right: '16px', padding: '8px 16px', borderRadius: '12px', background: 'rgba(7, 13, 24, 0.95)', border: '1px solid rgba(0, 229, 255, 0.4)', color: '#ffffff', fontSize: '12px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Activity style={{ width: 16, height: 16, color: '#00e5ff' }} />
                <span>Module: {platformModules[activeStep].title}</span>
              </div>
            </div>

            {/* Policy Search Simulation Widget */}
            <div className="simulator-search-box">
              <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '12px' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Search style={{ width: 16, height: 16, color: '#20a3b6' }} />
                  <span>Live Policy Search Simulator</span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <button 
                    onClick={() => setSimulatedStatus('All')}
                    style={{ fontSize: '11px', padding: '4px 12px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', border: 'none', background: simulatedStatus === 'All' ? '#20a3b6' : 'var(--bg-primary)', color: simulatedStatus === 'All' ? '#ffffff' : 'var(--text-secondary)' }}
                  >
                    All
                  </button>
                  <button 
                    onClick={() => setSimulatedStatus('Active')}
                    style={{ fontSize: '11px', padding: '4px 12px', borderRadius: '6px', fontWeight: 700, cursor: 'pointer', border: 'none', background: simulatedStatus === 'Active' ? '#20a3b6' : 'var(--bg-primary)', color: simulatedStatus === 'Active' ? '#ffffff' : 'var(--text-secondary)' }}
                  >
                    Active
                  </button>
                </div>
              </div>

              <input 
                type="text"
                placeholder="Type to filter client policyholders (e.g. Apex, Sipho, Tech)..."
                value={simulatedSearch}
                onChange={(e) => setSimulatedSearch(e.target.value)}
                className="policy-search-input"
              />

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {filteredMockPolicies.map((pol) => (
                  <div key={pol.id} className="policy-item-row">
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text-primary)' }}>{pol.holder}</div>
                      <div style={{ fontSize: '11px', color: 'var(--text-secondary)', marginTop: '2px' }}>{pol.id} • {pol.type}</div>
                    </div>
                    <div style={{ textAlign: 'right' }}>
                      <div style={{ fontWeight: 800, color: '#00e5ff' }}>{pol.premium}</div>
                      <span style={{ fontSize: '10px', fontWeight: 700, padding: '2px 8px', borderRadius: '4px', background: pol.status === 'Active' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(245, 158, 11, 0.2)', color: pol.status === 'Active' ? '#34d399' : '#fbbf24', marginTop: '2px', display: 'inline-block' }}>
                        {pol.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
