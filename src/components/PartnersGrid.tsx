import React from 'react';
import { Building2, CheckCircle2 } from 'lucide-react';

/* ─── Inline SVG logos — designed to render on WHITE backgrounds ─────────── */

const AbsaLogo = () => (
  <svg viewBox="0 0 120 52" xmlns="http://www.w3.org/2000/svg" style={{ width: 100, height: 44 }}>
    <circle cx="26" cy="26" r="22" stroke="#DC0032" strokeWidth="3.5" fill="none"/>
    <text x="26" y="31" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="13" fill="#DC0032">absa</text>
    <text x="58" y="22" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="19" fill="#DC0032">ABSA</text>
    <text x="58" y="36" fontFamily="Arial,sans-serif" fontWeight="500" fontSize="9.5" fill="#9ca3af" letterSpacing="0.5">INSURANCE</text>
  </svg>
);

const HollardLogo = () => (
  <svg viewBox="0 0 130 44" xmlns="http://www.w3.org/2000/svg" style={{ width: 115, height: 40 }}>
    <text x="0" y="34" fontFamily="Georgia,serif" fontWeight="700" fontSize="28" fill="#1e1464">Hollard</text>
    <circle cx="121" cy="22" r="7" fill="#E8001C"/>
  </svg>
);

const OldMutualLogo = () => (
  <svg viewBox="0 0 150 52" xmlns="http://www.w3.org/2000/svg" style={{ width: 130, height: 46 }}>
    <circle cx="20" cy="26" r="16" fill="#00843D"/>
    <ellipse cx="20" cy="26" rx="7" ry="14" fill="#FFD700"/>
    <ellipse cx="20" cy="26" rx="14" ry="7" fill="#00843D" opacity="0.5"/>
    <text x="44" y="22" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="12" fill="#00843D" letterSpacing="0.3">OLD MUTUAL</text>
    <text x="44" y="37" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="12" fill="#00843D" letterSpacing="0.3">INSURE</text>
  </svg>
);

const SantamLogo = () => (
  <svg viewBox="0 0 120 44" xmlns="http://www.w3.org/2000/svg" style={{ width: 110, height: 40 }}>
    <path d="M4 30 Q30 6 56 30" stroke="#009FDB" strokeWidth="5" fill="none" strokeLinecap="round"/>
    <text x="0" y="42" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="22" fill="#003087">santam</text>
  </svg>
);

const NedbankLogo = () => (
  <svg viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg" style={{ width: 105, height: 44 }}>
    <rect x="0" y="4" width="42" height="42" rx="8" fill="#007B3E"/>
    <text x="21" y="33" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="24" fill="white">N</text>
    <text x="50" y="22" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="13" fill="#007B3E">Nedbank</text>
    <text x="50" y="37" fontFamily="Arial,sans-serif" fontWeight="500" fontSize="10" fill="#6b7280">Insurance</text>
  </svg>
);

const AonLogo = () => (
  <svg viewBox="0 0 90 44" xmlns="http://www.w3.org/2000/svg" style={{ width: 80, height: 40 }}>
    <text x="0" y="38" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="40" fill="#E4002B" letterSpacing="-1">Aon</text>
  </svg>
);

const CtrlLogo = () => (
  <svg viewBox="0 0 120 50" xmlns="http://www.w3.org/2000/svg" style={{ width: 105, height: 44 }}>
    <rect x="1" y="6" width="38" height="38" rx="10" fill="none" stroke="#0066CC" strokeWidth="3"/>
    <text x="20" y="31" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="12" fill="#0066CC">ctrl.</text>
    <text x="48" y="34" fontFamily="Arial,sans-serif" fontWeight="700" fontSize="22" fill="#0066CC">ctrl.</text>
  </svg>
);

const IndweLogo = () => (
  <svg viewBox="0 0 140 48" xmlns="http://www.w3.org/2000/svg" style={{ width: 120, height: 42 }}>
    <text x="0" y="28" fontFamily="Arial,sans-serif" fontWeight="900" fontSize="20" fill="#1e3a5f" letterSpacing="1">INDWE</text>
    <text x="2" y="43" fontFamily="Arial,sans-serif" fontWeight="500" fontSize="10" fill="#6b7280" letterSpacing="2">RISK SERVICES</text>
  </svg>
);

const PpsLogo = () => (
  <svg viewBox="0 0 110 60" xmlns="http://www.w3.org/2000/svg" style={{ width: 90, height: 52 }}>
    <circle cx="55" cy="26" r="24" stroke="#1e3a5f" strokeWidth="2.5" fill="none"/>
    <circle cx="55" cy="26" r="16" stroke="#1e3a5f" strokeWidth="1.5" fill="none"/>
    <text x="55" y="32" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="14" fill="#1e3a5f">PPS</text>
    <text x="55" y="56" textAnchor="middle" fontFamily="Arial,sans-serif" fontWeight="500" fontSize="7.5" fill="#6b7280" letterSpacing="0.5">FOR PROFESSIONALS</text>
  </svg>
);

const BryteLogo = () => (
  <svg viewBox="0 0 120 44" xmlns="http://www.w3.org/2000/svg" style={{ width: 105, height: 40 }}>
    <g transform="translate(14,22)">
      {[0,60,120,180,240,300].map(angle => (
        <line key={angle}
          x1={Math.cos((angle-90)*Math.PI/180)*4}
          y1={Math.sin((angle-90)*Math.PI/180)*4}
          x2={Math.cos((angle-90)*Math.PI/180)*13}
          y2={Math.sin((angle-90)*Math.PI/180)*13}
          stroke="#FF6B00" strokeWidth="3" strokeLinecap="round"
        />
      ))}
      <circle cx="0" cy="0" r="4" fill="#FF6B00"/>
    </g>
    <text x="34" y="31" fontFamily="Arial,sans-serif" fontWeight="800" fontSize="24" fill="#1e3a5f">Bryte</text>
  </svg>
);

/* ─── Partner data ────────────────────────────────────────────────────────── */
const PARTNERS = [
  { name: 'ABSA Insurance',        category: 'insurer', badge: 'Bank Insurer',          Logo: AbsaLogo      },
  { name: 'Hollard',               category: 'insurer', badge: 'Binder Partner',        Logo: HollardLogo   },
  { name: 'Old Mutual Insure',     category: 'insurer', badge: 'Binder Partner',        Logo: OldMutualLogo },
  { name: 'Santam',                category: 'insurer', badge: 'Primary Insurer',       Logo: SantamLogo    },
  { name: 'Nedbank Insurance',     category: 'insurer', badge: 'Bank Partner',          Logo: NedbankLogo   },
  { name: 'AON South Africa',      category: 'broker',  badge: 'Enterprise Brokerage',  Logo: AonLogo       },
  { name: 'CTRL Digital',          category: 'broker',  badge: 'InsurTech Partner',     Logo: CtrlLogo      },
  { name: 'Indwe Risk Services',   category: 'broker',  badge: 'Major Broker Group',    Logo: IndweLogo     },
  { name: 'PPS Short-Term',        category: 'insurer', badge: 'Graduate Specialist',   Logo: PpsLogo       },
  { name: 'Bryte Insurance',       category: 'insurer', badge: 'Specialist Underwriter',Logo: BryteLogo     },
];

export const PartnersGrid: React.FC = () => {
  const [filter, setFilter] = React.useState<'all'|'insurer'|'broker'>('all');
  const filtered = filter === 'all' ? PARTNERS : PARTNERS.filter(p => p.category === filter);

  return (
    <section id="partners" style={{ padding: '100px 0' }}>
      <div className="container">

        {/* Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Building2 style={{ width: 16, height: 16, color: '#20a3b6' }} />
            <span>Trusted Industry Ecosystem</span>
          </div>
          <h2 className="section-title">
            Our Valued <span className="text-gradient">Insurers &amp; Partners</span>
          </h2>
          <p className="section-subtitle">
            Brolink works with South Africa's most respected insurers, financial institutions,
            and broker networks — all Websure™ integrated.
          </p>
        </div>

        {/* Filter pills */}
        <div style={{ display:'flex', justifyContent:'center', gap:'12px', marginBottom:'52px', flexWrap:'wrap' }}>
          {(['all','insurer','broker'] as const).map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '10px 26px',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: 700,
                fontFamily: "'Plus Jakarta Sans',sans-serif",
                cursor: 'pointer',
                border: '1px solid',
                borderColor: filter === cat ? 'transparent' : 'var(--border-color)',
                background: filter === cat ? 'linear-gradient(135deg,#20a3b6 0%,#0077b6 100%)' : 'var(--bg-surface)',
                color: filter === cat ? '#ffffff' : 'var(--text-secondary)',
                boxShadow: filter === cat ? '0 6px 20px rgba(32,163,182,0.35)' : 'none',
                transition: 'all 0.2s ease',
              }}
            >
              {cat === 'all' ? 'All Partners' : cat === 'insurer' ? 'Insurers' : 'Brokerages & Tech'}
            </button>
          ))}
        </div>

        {/* Logo cards — white bg so all brand colours pop */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gap: '16px',
        }}>
          {filtered.map(({ name, badge, Logo }) => (
            <div
              key={name}
              style={{
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '20px 16px 14px',
                borderRadius: '16px',
                /* White card — logos always readable */
                background: '#ffffff',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
                transition: 'all 0.25s ease',
                minHeight: '110px',
                overflow: 'hidden',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(-4px)';
                el.style.boxShadow = '0 12px 32px rgba(0,0,0,0.14)';
                el.style.borderColor = '#20a3b6';
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement;
                el.style.transform = 'translateY(0)';
                el.style.boxShadow = '0 2px 8px rgba(0,0,0,0.06)';
                el.style.borderColor = '#e2e8f0';
              }}
            >
              {/* Category badge */}
              <span style={{
                position: 'absolute',
                top: '10px',
                right: '10px',
                fontSize: '8px',
                fontWeight: 800,
                padding: '2px 7px',
                borderRadius: '4px',
                background: 'rgba(32,163,182,0.1)',
                color: '#0e7490',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}>
                {badge}
              </span>

              {/* Logo — centred, on white */}
              <div style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '8px 0',
                width: '100%',
              }}>
                <Logo />
              </div>

              {/* Partner name + verified tick */}
              <div style={{
                width: '100%',
                paddingTop: '10px',
                borderTop: '1px solid #f1f5f9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
                <span style={{ fontSize: '10.5px', fontWeight: 700, color: '#475569' }}>
                  {name}
                </span>
                <CheckCircle2 style={{ width: 13, height: 13, color: '#10b981', flexShrink: 0 }} />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom trust strip */}
        <div style={{
          marginTop: '52px',
          padding: '24px 36px',
          borderRadius: '18px',
          background: 'var(--bg-surface)',
          border: '1px solid var(--border-color)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
        }}>
          <div>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: 'var(--text-primary)', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              All partners are Websure™ integrated &amp; FSCA compliant
            </div>
            <div style={{ fontSize: '0.825rem', color: 'var(--text-secondary)', marginTop: '3px' }}>
              Quote, bind &amp; manage across all partners from a single portal
            </div>
          </div>
          <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
            {[
              { val: '10+',  label: 'Integrated Partners' },
              { val: '100%', label: 'FSCA Compliant'      },
              { val: '50+',  label: 'API Endpoints'       },
            ].map(s => (
              <div key={s.label} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '1.2rem', fontWeight: 800, color: 'var(--accent)', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>{s.val}</div>
                <div style={{ fontSize: '10px', color: 'var(--text-muted)', marginTop: '2px', whiteSpace: 'nowrap' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Responsive overrides */}
      <style>{`
        @media (max-width: 1100px) {
          #partners > div > div:nth-child(3) { grid-template-columns: repeat(3,1fr) !important; }
        }
        @media (max-width: 680px) {
          #partners > div > div:nth-child(3) { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </section>
  );
};
