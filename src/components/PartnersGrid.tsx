import React from 'react';
import { Building2, ShieldCheck } from 'lucide-react';

/* ─── Authentic inline SVG logos ─────────────────────────────────────────── */

const AbsaLogo = () => (
  <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 96, height: 38 }}>
    <circle cx="24" cy="24" r="20" stroke="#DC0032" strokeWidth="3" fill="none"/>
    <text x="24" y="29" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="12" fill="#DC0032">absa</text>
    <text x="72" y="20" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="18" fill="#DC0032">ABSA</text>
    <text x="72" y="34" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="9" fill="#6b7280">INSURANCE</text>
  </svg>
);

const HollardLogo = () => (
  <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 110, height: 36 }}>
    <text x="0" y="30" fontFamily="Georgia, serif" fontWeight="700" fontSize="26" fill="#2d2d6e">Hollard</text>
    <circle cx="117" cy="20" r="6" fill="#E8001C"/>
  </svg>
);

const OldMutualLogo = () => (
  <svg viewBox="0 0 140 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 120, height: 42 }}>
    {/* OM leaf icon */}
    <circle cx="18" cy="24" r="14" fill="#00843D"/>
    <path d="M11 24 Q18 12 25 24 Q18 36 11 24Z" fill="#FFD700"/>
    <text x="36" y="20" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="11" fill="#00843D">OLD MUTUAL</text>
    <text x="36" y="34" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="10" fill="#00843D">INSURE</text>
  </svg>
);

const SantamLogo = () => (
  <svg viewBox="0 0 130 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 110, height: 36 }}>
    {/* Santam arc */}
    <path d="M8 28 Q30 8 52 28" stroke="#009FDB" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <text x="0" y="38" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="22" fill="#003087">santam</text>
  </svg>
);

const NedbankLogo = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
    <rect width="48" height="48" rx="8" fill="#007B3E"/>
    <text x="24" y="32" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="22" fill="white">N</text>
  </svg>
);

const AonLogo = () => (
  <svg viewBox="0 0 100 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 36 }}>
    <text x="0" y="34" fontFamily="Arial, sans-serif" fontWeight="900" fontSize="36" fill="#E4002B" letterSpacing="-1">Aon</text>
  </svg>
);

const CtrlLogo = () => (
  <svg viewBox="0 0 110 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 90, height: 38 }}>
    <rect x="0" y="4" width="36" height="36" rx="8" fill="none" stroke="#0066CC" strokeWidth="2.5"/>
    <text x="18" y="28" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="13" fill="#0066CC">ctrl.</text>
    <text x="44" y="30" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="18" fill="#0f172a">ctrl.</text>
  </svg>
);

const IndweLogo = () => (
  <svg viewBox="0 0 140 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 120, height: 38 }}>
    <text x="0" y="26" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="18" fill="#1e3a5f">INDWE</text>
    <text x="0" y="40" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="10" fill="#6b7280" letterSpacing="1">RISK SERVICES</text>
  </svg>
);

const PpsLogo = () => (
  <svg viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 64, height: 56 }}>
    <circle cx="50" cy="28" r="26" stroke="#1e3a5f" strokeWidth="2.5" fill="none"/>
    <circle cx="50" cy="28" r="20" stroke="#1e3a5f" strokeWidth="1.5" fill="none"/>
    <text x="50" y="33" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="13" fill="#1e3a5f">PPS</text>
    <text x="50" y="56" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="500" fontSize="7" fill="#6b7280">FOR PROFESSIONALS</text>
  </svg>
);

const BryteLogo = () => (
  <svg viewBox="0 0 130 44" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 110, height: 38 }}>
    {/* Bryte asterisk/snowflake icon */}
    <g transform="translate(14,22)">
      {[0,60,120,180,240,300].map(angle => (
        <line key={angle}
          x1="0" y1="0"
          x2={Math.cos(angle * Math.PI / 180) * 11}
          y2={Math.sin(angle * Math.PI / 180) * 11}
          stroke="#FF6B00" strokeWidth="2.5" strokeLinecap="round"
        />
      ))}
      <circle cx="0" cy="0" r="3" fill="#FF6B00"/>
    </g>
    <text x="32" y="30" fontFamily="Arial, sans-serif" fontWeight="800" fontSize="22" fill="#1e3a5f">Bryte</text>
  </svg>
);

/* ─── Partner data ────────────────────────────────────────────────────────── */
const partners = [
  {
    name: 'ABSA Insurance',
    category: 'insurer',
    badge: 'Bank Insurer',
    Logo: AbsaLogo,
    bgLight: 'rgba(220,0,50,0.06)',
    borderLight: 'rgba(220,0,50,0.15)',
  },
  {
    name: 'Hollard',
    category: 'insurer',
    badge: 'Binder Partner',
    Logo: HollardLogo,
    bgLight: 'rgba(45,45,110,0.06)',
    borderLight: 'rgba(45,45,110,0.15)',
  },
  {
    name: 'Old Mutual Insure',
    category: 'insurer',
    badge: 'Binder Partner',
    Logo: OldMutualLogo,
    bgLight: 'rgba(0,132,61,0.06)',
    borderLight: 'rgba(0,132,61,0.15)',
  },
  {
    name: 'Santam',
    category: 'insurer',
    badge: 'Primary Insurer',
    Logo: SantamLogo,
    bgLight: 'rgba(0,48,135,0.06)',
    borderLight: 'rgba(0,48,135,0.15)',
  },
  {
    name: 'Nedbank Insurance',
    category: 'insurer',
    badge: 'Bank Partner',
    Logo: NedbankLogo,
    bgLight: 'rgba(0,123,62,0.06)',
    borderLight: 'rgba(0,123,62,0.15)',
  },
  {
    name: 'AON South Africa',
    category: 'broker',
    badge: 'Enterprise Brokerage',
    Logo: AonLogo,
    bgLight: 'rgba(228,0,43,0.06)',
    borderLight: 'rgba(228,0,43,0.15)',
  },
  {
    name: 'CTRL Digital Insurance',
    category: 'broker',
    badge: 'InsurTech Partner',
    Logo: CtrlLogo,
    bgLight: 'rgba(0,102,204,0.06)',
    borderLight: 'rgba(0,102,204,0.15)',
  },
  {
    name: 'Indwe Risk Services',
    category: 'broker',
    badge: 'Major Broker Group',
    Logo: IndweLogo,
    bgLight: 'rgba(30,58,95,0.06)',
    borderLight: 'rgba(30,58,95,0.15)',
  },
  {
    name: 'PPS Short-Term',
    category: 'insurer',
    badge: 'Graduate Specialist',
    Logo: PpsLogo,
    bgLight: 'rgba(30,58,95,0.06)',
    borderLight: 'rgba(30,58,95,0.15)',
  },
  {
    name: 'Bryte Insurance',
    category: 'insurer',
    badge: 'Specialist Underwriter',
    Logo: BryteLogo,
    bgLight: 'rgba(255,107,0,0.06)',
    borderLight: 'rgba(255,107,0,0.15)',
  },
];

/* ─── Component ──────────────────────────────────────────────────────────── */
export const PartnersGrid: React.FC = () => {
  const [filter, setFilter] = React.useState<'all' | 'insurer' | 'broker'>('all');
  const filtered = filter === 'all' ? partners : partners.filter(p => p.category === filter);

  return (
    <section id="partners" style={{ padding: '100px 0', background: 'var(--bg-primary)' }}>
      <div className="container">

        {/* Section header */}
        <div className="section-header">
          <div className="badge-pill">
            <Building2 style={{ width: 16, height: 16, color: '#20a3b6' }} />
            <span>Trusted Industry Ecosystem</span>
          </div>
          <h2 className="section-title">
            Our Valued <span className="text-gradient">Insurers &amp; Partners</span>
          </h2>
          <p className="section-subtitle">
            Brolink works seamlessly with South Africa's most respected short-term insurers,
            financial institutions, and broker advisory networks — all integrated into Websure™.
          </p>
        </div>

        {/* Filter tabs */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '56px', flexWrap: 'wrap' }}>
          {(['all', 'insurer', 'broker'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 28px',
                borderRadius: '9999px',
                fontSize: '0.9rem',
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                cursor: 'pointer',
                border: '1px solid',
                borderColor: filter === cat ? 'transparent' : 'var(--border-color)',
                background: filter === cat
                  ? 'linear-gradient(135deg, #20a3b6 0%, #0077b6 100%)'
                  : 'var(--bg-surface)',
                color: filter === cat ? '#ffffff' : 'var(--text-secondary)',
                boxShadow: filter === cat ? '0 6px 20px rgba(32,163,182,0.4)' : 'none',
                transition: 'all 0.25s ease',
              }}
            >
              {cat === 'all' ? 'All Partners' : cat === 'insurer' ? 'Insurers' : 'Brokerages & Tech'}
            </button>
          ))}
        </div>

        {/* Logo grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '20px',
        }}>
          {filtered.map((partner) => {
            const { Logo } = partner;
            return (
              <div
                key={partner.name}
                style={{
                  position: 'relative',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '16px',
                  padding: '32px 24px 24px',
                  borderRadius: '20px',
                  background: 'var(--bg-surface)',
                  border: '1px solid var(--border-color)',
                  cursor: 'default',
                  transition: 'all 0.3s ease',
                  minHeight: '140px',
                  overflow: 'hidden',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'var(--border-glow)';
                  el.style.background = 'var(--bg-card)';
                  el.style.transform = 'translateY(-4px)';
                  el.style.boxShadow = '0 16px 40px rgba(0,0,0,0.25)';
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = 'var(--border-color)';
                  el.style.background = 'var(--bg-surface)';
                  el.style.transform = 'translateY(0)';
                  el.style.boxShadow = 'none';
                }}
              >
                {/* Category badge — top right */}
                <span style={{
                  position: 'absolute',
                  top: '12px',
                  right: '12px',
                  fontSize: '9px',
                  fontWeight: 800,
                  padding: '3px 8px',
                  borderRadius: '4px',
                  background: 'var(--badge-bg)',
                  color: 'var(--accent)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  whiteSpace: 'nowrap',
                }}>
                  {partner.badge}
                </span>

                {/* Logo */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flex: 1,
                  width: '100%',
                }}>
                  <Logo />
                </div>

                {/* Name + verified */}
                <div style={{
                  width: '100%',
                  paddingTop: '12px',
                  borderTop: '1px solid var(--border-color)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}>
                  <span style={{
                    fontSize: '11px',
                    fontWeight: 700,
                    color: 'var(--text-secondary)',
                  }}>
                    {partner.name}
                  </span>
                  <ShieldCheck style={{ width: 13, height: 13, color: '#34d399', flexShrink: 0 }} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom trust bar */}
        <div style={{
          marginTop: '64px',
          padding: '28px 40px',
          borderRadius: '20px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '24px',
        }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '1rem', color: 'var(--text-primary)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
              All partners are Websure™ integrated &amp; FSCA compliant
            </div>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', marginTop: '4px' }}>
              Direct API connectivity — quote, bind &amp; manage across all partners from a single portal
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            {[
              { val: '10+', label: 'Integrated Partners' },
              { val: '100%', label: 'FSCA Compliant' },
              { val: '50+', label: 'API Endpoints' },
            ].map(stat => (
              <div key={stat.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 800, color: 'var(--accent)', fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
                  {stat.val}
                </div>
                <div style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: '2px', whiteSpace: 'nowrap' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Responsive grid breakpoints */}
      <style>{`
        @media (max-width: 1024px) {
          #partners .partner-logo-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          #partners .partner-logo-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
};
