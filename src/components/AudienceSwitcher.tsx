import React, { useState } from 'react';
import { Building2, UserCheck, HeartHandshake, CheckCircle2, ArrowRight, ShieldCheck, Cpu, FileText, Headphones } from 'lucide-react';

export const AudienceSwitcher: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'insurer' | 'broker' | 'policyholder'>('insurer');

  return (
    <section id="services">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <ShieldCheck style={{ width: 16, height: 16, color: '#20a3b6' }} />
            <span>How Do We Help You?</span>
          </div>
          <h2 className="section-title">
            Tailored Insurance Solutions For <br />
            <span className="text-gradient">Every Stakeholder</span>
          </h2>
          <p className="section-subtitle">
            Brolink’s core competencies center on providing exceptional short-term insurance administration to South Africa's insurers, brokers, and policyholders through engaged staff and cutting-edge technology.
          </p>
        </div>

        {/* Audience Tab Bar */}
        <div className="audience-tabs-wrapper">
          <button
            onClick={() => setActiveTab('insurer')}
            className={`audience-tab-btn ${activeTab === 'insurer' ? 'active' : ''}`}
          >
            <Building2 style={{ width: 20, height: 20 }} />
            <span>An Insurer</span>
          </button>

          <button
            onClick={() => setActiveTab('broker')}
            className={`audience-tab-btn ${activeTab === 'broker' ? 'active' : ''}`}
          >
            <UserCheck style={{ width: 20, height: 20 }} />
            <span>A Broker</span>
          </button>

          <button
            onClick={() => setActiveTab('policyholder')}
            className={`audience-tab-btn ${activeTab === 'policyholder' ? 'active' : ''}`}
          >
            <HeartHandshake style={{ width: 20, height: 20 }} />
            <span>A Policyholder</span>
          </button>
        </div>

        {/* Tab Content Display Card */}
        <div className="audience-main-card">
          {activeTab === 'insurer' && (
            <div className="audience-card-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '6px', background: 'rgba(32, 163, 182, 0.15)', color: '#00e5ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Binder Services & Regulatory Compliance
                  </span>
                </div>
                
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
                  Independent Non-Mandated Intermediary for Leading SA Insurers
                </h3>
                
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Brolink is an independent non-mandated intermediary offering binder services to a number of the largest short-term insurers in South Africa. Our proprietary Websure system offers insurers an alternative digital distribution channel while remaining 100% compliant with all regulatory laws.
                </p>

                {/* 2x2 Feature Checkmarks Grid */}
                <div className="feature-cards-grid">
                  <div className="feature-item-card">
                    <CheckCircle2 style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Binder & Portfolio Admin</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Seamless end-to-end binder fulfillment & audit compliance.</div>
                    </div>
                  </div>

                  <div className="feature-item-card">
                    <CheckCircle2 style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Websure Tech Distribution</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Direct API integration & automated policy issuance.</div>
                    </div>
                  </div>

                  <div className="feature-item-card">
                    <CheckCircle2 style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>FSCA Governance</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Rigorous risk mitigation and regulatory filing accuracy.</div>
                    </div>
                  </div>

                  <div className="feature-item-card">
                    <CheckCircle2 style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Scale & Performance</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Handling multi-billion Rand premium portfolios with ease.</div>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '12px' }}>
                  <a href="#contact" className="btn-primary">
                    <span>Inquire About Insurer Binder Services</span>
                    <ArrowRight style={{ width: 16, height: 16 }} />
                  </a>
                </div>
              </div>

              {/* Right Metrics Box */}
              <div className="metrics-sidebar-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--border-color)', paddingBottom: '16px' }}>
                  <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>Insurer Value Metrics</div>
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '4px 12px', borderRadius: '9999px', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399' }}>Verified</span>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div className="metrics-progress-item">
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Regulatory Compliance Accuracy</span>
                      <span style={{ color: '#00e5ff' }}>99.9%</span>
                    </div>
                    <div className="metrics-progress-bar">
                      <div className="metrics-progress-fill" style={{ width: '99.9%' }} />
                    </div>
                  </div>

                  <div className="metrics-progress-item">
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Binder Audit Pass Rate</span>
                      <span style={{ color: '#00e5ff' }}>100%</span>
                    </div>
                    <div className="metrics-progress-bar">
                      <div className="metrics-progress-fill" style={{ width: '100%' }} />
                    </div>
                  </div>

                  <div className="metrics-progress-item">
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', fontWeight: 700 }}>
                      <span style={{ color: 'var(--text-secondary)' }}>Operational Cost Efficiency</span>
                      <span style={{ color: '#00e5ff' }}>+35% Saved</span>
                    </div>
                    <div className="metrics-progress-bar">
                      <div className="metrics-progress-fill" style={{ width: '85%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'broker' && (
            <div className="audience-card-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '6px', background: 'rgba(32, 163, 182, 0.15)', color: '#00e5ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Broker Productivity & Back-Office Support
                  </span>
                </div>
                
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
                  Focus on Client Advice — We Handle the Admin Burden
                </h3>
                
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Brolink’s focus has always been on ensuring that brokers spend their time doing what they do best: providing great service and expert advice to policyholders. We enable this through our Websure system and comprehensive administrative back-office support.
                </p>

                <div className="feature-cards-grid">
                  <div className="feature-item-card">
                    <Cpu style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Websure™ Broker Portal</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Instant quotes, policy changes, and automated renewals.</div>
                    </div>
                  </div>

                  <div className="feature-item-card">
                    <FileText style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Commission Management</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Automated statement generation & direct payout tracking.</div>
                    </div>
                  </div>

                  <div className="feature-item-card">
                    <ShieldCheck style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Multi-Insurer Access</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Quote across top South African insurers on one screen.</div>
                    </div>
                  </div>

                  <div className="feature-item-card">
                    <Headphones style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Dedicated Broker Connect</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Personalized account managers and priority desk.</div>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '12px' }}>
                  <a href="#contact" className="btn-primary">
                    <span>Connect Your Brokerage With Brolink</span>
                    <ArrowRight style={{ width: 16, height: 16 }} />
                  </a>
                </div>
              </div>

              <div className="metrics-sidebar-card" style={{ textAlign: 'center', alignItems: 'center' }}>
                <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'linear-gradient(135deg, #00e5ff, #20a3b6)', color: '#070d18', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800 }}>
                  <UserCheck style={{ width: 32, height: 32 }} />
                </div>
                <h4 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>1,200+ Active SA Brokers</h4>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6, fontStyle: 'italic' }}>
                  "Websure has cut our office administrative work by over 60%, allowing our advisors to double client meeting capacity."
                </p>
                <div style={{ fontSize: '0.75rem', fontWeight: 800, color: '#00e5ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                  — Top SA Commercial Broker Network
                </div>
              </div>
            </div>
          )}

          {activeTab === 'policyholder' && (
            <div className="audience-card-grid">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <span style={{ fontSize: '11px', fontWeight: 800, padding: '4px 12px', borderRadius: '6px', background: 'rgba(32, 163, 182, 0.15)', color: '#00e5ff', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    Policyholder Care & Claims Resolution
                  </span>
                </div>
                
                <h3 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--text-primary)', lineHeight: 1.25 }}>
                  Fantastic Service When You Need It Most
                </h3>
                
                <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  Brolink is committed to ensuring that all policyholders experience exceptional service during the claims process and policy amendments. Our empathetic teams are fully aligned with your insurer to ensure fair and professional treatment at all times.
                </p>

                <div className="feature-cards-grid">
                  <div className="feature-item-card">
                    <CheckCircle2 style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Fast Claims Processing</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Rapid triage and transparent settlement updates.</div>
                    </div>
                  </div>

                  <div className="feature-item-card">
                    <CheckCircle2 style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>24/7 Roadside & Home Assist</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Immediate emergency dispatch anywhere in SA.</div>
                    </div>
                  </div>

                  <div className="feature-item-card">
                    <CheckCircle2 style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Frictionless Policy Updates</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Add vehicles, items, or change coverage instantly.</div>
                    </div>
                  </div>

                  <div className="feature-item-card">
                    <CheckCircle2 style={{ width: 20, height: 20, color: '#00e5ff', flexShrink: 0, marginTop: 2 }} />
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Treating Customers Fairly (TCF)</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 4, lineHeight: 1.5 }}>Strict adherence to ethical consumer protection standards.</div>
                    </div>
                  </div>
                </div>

                <div style={{ paddingTop: '12px' }}>
                  <a href="#contact" className="btn-primary">
                    <span>Submit A Claim or Inquiry</span>
                    <ArrowRight style={{ width: 16, height: 16 }} />
                  </a>
                </div>
              </div>

              <div className="metrics-sidebar-card">
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(32, 163, 182, 0.2)', color: '#00e5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem' }}>
                    HP
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)' }}>HelloPeter Verified</div>
                    <div style={{ fontSize: '0.75rem', fontWeight: 700, color: '#00e5ff' }}>Top Rated Short-Term Administrator</div>
                  </div>
                </div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  5-star policyholder rating for swift claims turnaround and compassionate service desk response across South Africa.
                </p>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
