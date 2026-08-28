import React, { useState } from 'react';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const PartnersGrid: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState<'all' | 'insurer' | 'broker'>('all');

  const partners = [
    { name: "Santam Insurance", category: "insurer", desc: "Leading South African short-term insurer", badge: "Primary Insurer Partner" },
    { name: "Absa Insurance", category: "insurer", desc: "Enterprise commercial & personal insurance provider", badge: "Bank Insurer Partner" },
    { name: "Hollard", category: "insurer", desc: "South Africa's largest independent insurance group", badge: "Binder Partner" },
    { name: "Old Mutual Insure", category: "insurer", desc: "Short-term insurance pioneer across Southern Africa", badge: "Binder Partner" },
    { name: "Nedbank Insurance", category: "insurer", desc: "Personal and corporate risk solutions", badge: "Bank Partner" },
    { name: "Bryte Insurance", category: "insurer", desc: "Specialist commercial risk and underwriting group", badge: "Specialist Underwriter" },
    { name: "Indwe Risk Services", category: "broker", desc: "Premier advisory and broker distribution network", badge: "Major Broker Group" },
    { name: "AON South Africa", category: "broker", desc: "Global risk manager and brokerage leader", badge: "Enterprise Brokerage" },
    { name: "PPS Short-Term", category: "insurer", desc: "Tailored short-term risk protection for graduate professionals", badge: "Graduate Specialist" },
    { name: "CTRL Digital Insurance", category: "broker", desc: "Digital insurance marketplace platform", badge: "InsurTech Partner" },
  ];

  const filteredPartners = partners.filter(p => filterCategory === 'all' || p.category === filterCategory);

  return (
    <section id="partners">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Building2 style={{ width: 16, height: 16, color: '#20a3b6' }} />
            <span>Trusted Industry Ecosystem</span>
          </div>
          <h2 className="section-title">
            Our Valued <span className="text-gradient">Insurers & Partners</span>
          </h2>
          <p className="section-subtitle">
            Brolink works seamlessly with South Africa’s most respected short-term insurers, financial institutions, and broker advisory networks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="audience-tabs-wrapper">
          <button
            onClick={() => setFilterCategory('all')}
            className={`audience-tab-btn ${filterCategory === 'all' ? 'active' : ''}`}
          >
            All Partners
          </button>
          <button
            onClick={() => setFilterCategory('insurer')}
            className={`audience-tab-btn ${filterCategory === 'insurer' ? 'active' : ''}`}
          >
            Insurers
          </button>
          <button
            onClick={() => setFilterCategory('broker')}
            className={`audience-tab-btn ${filterCategory === 'broker' ? 'active' : ''}`}
          >
            Brokerages & Tech
          </button>
        </div>

        {/* Grid Display */}
        <div className="partners-grid">
          {filteredPartners.map((partner, idx) => (
            <div key={idx} className="partner-card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span className="partner-badge-pill">
                    {partner.badge}
                  </span>
                  <ShieldCheck style={{ width: 16, height: 16, color: '#20a3b6' }} />
                </div>

                <h3 style={{ fontSize: '1.125rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  {partner.name}
                </h3>
                <p style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  {partner.desc}
                </p>
              </div>

              <div style={{ paddingTop: '16px', marginTop: '16px', borderTop: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.75rem', fontWeight: 700, color: '#34d399' }}>
                <CheckCircle2 style={{ width: 14, height: 14 }} />
                <span>Websure Integration Ready</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
