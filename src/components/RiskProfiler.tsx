import React, { useState, useEffect, useCallback } from 'react';
import {
  Sparkles, X, ArrowRight, ArrowLeft, CheckCircle2,
  Building2, Users, HeartHandshake, BarChart3, ShieldCheck,
  Cpu, TrendingUp, Clock, Award, Zap, ChevronRight,
} from 'lucide-react';

/* ═══════════════════════════════════════════════════════════════
   TYPES
═══════════════════════════════════════════════════════════════ */
type Role = 'broker' | 'insurer' | 'policyholder';
type PortfolioSize = 'small' | 'medium' | 'large' | 'enterprise';
type PainPoint = 'admin' | 'compliance' | 'claims' | 'technology' | 'growth';
type Priority = 'speed' | 'cost' | 'compliance' | 'integration';
type Timeline = 'now' | 'quarter' | 'year' | 'exploring';

interface Answers {
  role?: Role;
  portfolioSize?: PortfolioSize;
  painPoints?: PainPoint[];
  priority?: Priority;
  timeline?: Timeline;
}

interface Recommendation {
  title: string;
  description: string;
  tags: string[];
  cta: string;
  ctaTarget: string;
  icon: React.FC<{ size?: number }>;
  accentColor: string;
  urgencyLabel?: string;
}

/* ═══════════════════════════════════════════════════════════════
   RECOMMENDATION ENGINE
═══════════════════════════════════════════════════════════════ */
function buildRecommendations(answers: Answers): Recommendation[] {
  const recs: Recommendation[] = [];
  const { role, portfolioSize, painPoints = [], priority, timeline } = answers;

  if (role === 'broker') {
    recs.push({
      title: 'Websure™ Broker Portal',
      description: `Based on your ${portfolioSize === 'large' || portfolioSize === 'enterprise' ? 'large portfolio' : 'brokerage profile'}, Websure™ will let you quote across multiple SA insurers simultaneously — cutting admin time by up to 62%. ${painPoints.includes('admin') ? 'This directly addresses your admin overload.' : ''}`,
      tags: ['Multi-Insurer Quoting', 'Policy Issuance', 'Commission Tracking'],
      cta: 'Explore Websure™',
      ctaTarget: '#websure',
      icon: Cpu,
      accentColor: '#00e5ff',
      urgencyLabel: timeline === 'now' ? '⚡ Available Immediately' : undefined,
    });

    if (painPoints.includes('admin') || painPoints.includes('growth')) {
      recs.push({
        title: 'Back-Office Administration',
        description: 'Let Brolink handle renewals, endorsements, and compliance reporting so your advisors spend 100% of their time on client relationships and new business.',
        tags: ['Portfolio Admin', 'Renewals', 'Compliance Reporting'],
        cta: 'See How It Works',
        ctaTarget: '#services',
        icon: BarChart3,
        accentColor: '#20a3b6',
      });
    }

    if (painPoints.includes('compliance') || priority === 'compliance') {
      recs.push({
        title: 'FSCA Binder Compliance',
        description: 'Our FSCA-licensed (FSP 10834) binder framework ensures 100% audit readiness. Automated bordereau reporting and real-time regulatory filing are built into every workflow.',
        tags: ['FSP 10834', 'Binder Audit', 'POPIA'],
        cta: 'Learn About Compliance',
        ctaTarget: '#services',
        icon: ShieldCheck,
        accentColor: '#34d399',
      });
    }

    if (portfolioSize === 'large' || portfolioSize === 'enterprise' || painPoints.includes('technology')) {
      recs.push({
        title: 'ROI Efficiency Calculator',
        description: `For a ${portfolioSize} brokerage, our model shows potential savings of R350,000–R1.2M annually in back-office costs. Run your specific numbers now.`,
        tags: ['Cost Savings', 'Efficiency Metrics', 'Business Case'],
        cta: 'Calculate My ROI',
        ctaTarget: '#calculator',
        icon: TrendingUp,
        accentColor: '#a78bfa',
      });
    }
  }

  if (role === 'insurer') {
    recs.push({
      title: 'Binder & Portfolio Administration',
      description: 'Brolink holds binder agreements with SA\'s leading insurers. Our non-mandated intermediary structure gives you expanded distribution through 1,200+ broker partners — with 100% regulatory compliance.',
      tags: ['Binder Services', 'Distribution', 'FSCA Compliance'],
      cta: 'Insurer Partnership Details',
      ctaTarget: '#services',
      icon: Building2,
      accentColor: '#00e5ff',
      urgencyLabel: timeline === 'now' ? '⚡ Fast Onboarding' : undefined,
    });

    recs.push({
      title: 'Websure™ Digital Distribution',
      description: `Our Websure™ API ecosystem provides direct JSON/REST connectivity to your core system — enabling sub-second quote generation and automated policy issuance across ${portfolioSize === 'enterprise' ? 'enterprise-scale' : 'your'} portfolio.`,
      tags: ['API Integration', 'Digital Channel', 'Automation'],
      cta: 'View Websure™ Platform',
      ctaTarget: '#websure',
      icon: Cpu,
      accentColor: '#20a3b6',
    });

    if (painPoints.includes('compliance') || priority === 'compliance') {
      recs.push({
        title: 'Regulatory Reporting & Audit',
        description: 'Automated audit trail logging, real-time SAM reporting, and POPIA-compliant data handling — with a proven 100% binder audit pass rate across all insurer relationships.',
        tags: ['SAM Reporting', 'POPIA', 'Audit Trail'],
        cta: 'Learn More',
        ctaTarget: '#services',
        icon: ShieldCheck,
        accentColor: '#34d399',
      });
    }
  }

  if (role === 'policyholder') {
    recs.push({
      title: 'Fast Claims Resolution',
      description: `Brolink's average claim settlement is 48 hours — ${painPoints.includes('claims') ? "directly addressing the claims support you're looking for." : 'with transparent status updates at every step.'}  Our empathetic teams are fully aligned with your insurer's binder guidelines.`,
      tags: ['48hr Settlement', 'Transparent Updates', 'TCF Compliant'],
      cta: 'Submit a Claim',
      ctaTarget: '#contact',
      icon: Clock,
      accentColor: '#00e5ff',
      urgencyLabel: timeline === 'now' ? '⚡ Contact Us Now' : undefined,
    });

    recs.push({
      title: '24/7 Roadside & Home Assist',
      description: 'All Brolink-administered policies include emergency dispatch services anywhere in South Africa — vehicle breakdown, home emergency, and medical referral assistance.',
      tags: ['Emergency Assist', 'SA-wide', '24/7 Response'],
      cta: 'Get in Touch',
      ctaTarget: '#contact',
      icon: HeartHandshake,
      accentColor: '#34d399',
    });

    if (priority === 'compliance') {
      recs.push({
        title: 'Treating Customers Fairly (TCF)',
        description: 'Brolink\'s TCF framework guarantees you\'ll always receive clear product information, fair claim treatment, and easy access to policy changes — backed by FSCA oversight.',
        tags: ['TCF Framework', 'Consumer Rights', 'FSCA Regulated'],
        cta: 'Your Rights',
        ctaTarget: '#contact',
        icon: Award,
        accentColor: '#a78bfa',
      });
    }
  }

  return recs.slice(0, 3);
}

/* ═══════════════════════════════════════════════════════════════
   STEP DEFINITIONS
═══════════════════════════════════════════════════════════════ */
const TOTAL_STEPS = 5;

/* ═══════════════════════════════════════════════════════════════
   PROFILER MODAL COMPONENT
═══════════════════════════════════════════════════════════════ */
interface ProfilerProps {
  onClose: () => void;
}

const RiskProfiler: React.FC<ProfilerProps> = ({ onClose }) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});
  const [showResults, setShowResults] = useState(false);
  const [animating, setAnimating] = useState(false);

  const progress = ((step) / TOTAL_STEPS) * 100;

  const go = useCallback((newAnswers: Partial<Answers>) => {
    setAnimating(true);
    setTimeout(() => {
      setAnswers(prev => ({ ...prev, ...newAnswers }));
      if (step < TOTAL_STEPS - 1) {
        setStep(s => s + 1);
      } else {
        setShowResults(true);
      }
      setAnimating(false);
    }, 220);
  }, [step]);

  const back = () => {
    if (step === 0) return;
    setAnimating(true);
    setTimeout(() => {
      setStep(s => s - 1);
      setAnimating(false);
    }, 180);
  };

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const recs = showResults ? buildRecommendations(answers) : [];

  const optionBtn = (
    label: string,
    sub: string,
    icon: React.ReactNode,
    onClick: () => void,
    selected = false
  ) => (
    <button
      onClick={onClick}
      style={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        padding: '16px 20px',
        borderRadius: '14px',
        border: `1.5px solid ${selected ? '#00e5ff' : 'rgba(255,255,255,0.1)'}`,
        background: selected ? 'rgba(0,229,255,0.08)' : 'rgba(255,255,255,0.03)',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.2s ease',
        boxShadow: selected ? '0 0 0 3px rgba(0,229,255,0.12)' : 'none',
      }}
      onMouseEnter={e => {
        if (!selected) (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(0,229,255,0.45)';
      }}
      onMouseLeave={e => {
        if (!selected) (e.currentTarget as HTMLButtonElement).style.borderColor = 'rgba(255,255,255,0.1)';
      }}
    >
      <div style={{
        width: '42px', height: '42px', borderRadius: '10px', flexShrink: 0,
        background: selected ? 'rgba(0,229,255,0.2)' : 'rgba(255,255,255,0.06)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        {icon}
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontWeight: 700, fontSize: '0.9rem', color: selected ? '#00e5ff' : '#f8fafc' }}>{label}</div>
        <div style={{ fontSize: '0.78rem', color: '#64748b', marginTop: '2px' }}>{sub}</div>
      </div>
      {selected && <CheckCircle2 style={{ width: 18, height: 18, color: '#00e5ff', flexShrink: 0 }} />}
    </button>
  );

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 10000,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: 'rgba(7,13,24,0.85)',
      backdropFilter: 'blur(8px)',
      padding: '24px',
    }}
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: '100%',
        maxWidth: showResults ? '760px' : '560px',
        maxHeight: '90vh',
        overflowY: 'auto',
        borderRadius: '28px',
        background: 'linear-gradient(145deg, #0b1528 0%, #0a192f 100%)',
        border: '1px solid rgba(0,229,255,0.2)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.7)',
        transition: 'max-width 0.4s ease',
        scrollbarWidth: 'thin',
        scrollbarColor: 'rgba(255,255,255,0.1) transparent',
      }}>

        {/* Header */}
        <div style={{
          padding: '24px 28px 20px',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          display: 'flex', alignItems: 'center', gap: '14px',
        }}>
          <div style={{
            width: '40px', height: '40px', borderRadius: '12px', flexShrink: 0,
            background: 'linear-gradient(135deg,#00e5ff,#20a3b6)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Sparkles style={{ width: 20, height: 20, color: '#070d18' }} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontWeight: 800, fontSize: '0.95rem', color: '#f8fafc', fontFamily: "'Plus Jakarta Sans',sans-serif" }}>
              Brolink AI Risk Profiler
            </div>
            <div style={{ fontSize: '11px', color: '#64748b', marginTop: '2px' }}>
              {showResults ? 'Your personalised service recommendations' : `Step ${step + 1} of ${TOTAL_STEPS} — ${Math.round(progress)}% complete`}
            </div>
          </div>
          <button onClick={onClose} style={{
            padding: '8px', border: 'none', background: 'transparent',
            cursor: 'pointer', color: '#64748b', borderRadius: '8px',
            display: 'flex', transition: 'color 0.2s',
          }}
            onMouseEnter={e => (e.currentTarget.style.color = '#ef4444')}
            onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
          >
            <X style={{ width: 18, height: 18 }} />
          </button>
        </div>

        {/* Progress bar */}
        {!showResults && (
          <div style={{ height: '3px', background: 'rgba(255,255,255,0.06)' }}>
            <div style={{
              height: '100%',
              width: `${progress}%`,
              background: 'linear-gradient(90deg,#00e5ff,#20a3b6)',
              transition: 'width 0.4s ease',
              borderRadius: '0 2px 2px 0',
            }} />
          </div>
        )}

        {/* Body */}
        <div style={{
          padding: '32px 28px 28px',
          opacity: animating ? 0 : 1,
          transform: animating ? 'translateY(8px)' : 'translateY(0)',
          transition: 'opacity 0.22s ease, transform 0.22s ease',
        }}>

          {/* ── STEP 0: Role ── */}
          {!showResults && step === 0 && (
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              <div>
                <h2 style={{ fontSize:'1.35rem', fontWeight:800, color:'#f8fafc', fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:'6px' }}>
                  Who are you in the insurance value chain?
                </h2>
                <p style={{ fontSize:'0.85rem', color:'#64748b' }}>
                  We'll tailor your recommendations based on your role.
                </p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {optionBtn('A Broker / Brokerage', 'I advise clients and place policies', <Users style={{width:20,height:20,color:'#00e5ff'}}/>, () => go({ role:'broker' }), answers.role==='broker')}
                {optionBtn('An Insurer', 'I underwrite risk and issue policies', <Building2 style={{width:20,height:20,color:'#20a3b6'}}/>, () => go({ role:'insurer' }), answers.role==='insurer')}
                {optionBtn('A Policyholder', 'I have or need insurance cover', <HeartHandshake style={{width:20,height:20,color:'#a78bfa'}}/>, () => go({ role:'policyholder' }), answers.role==='policyholder')}
              </div>
            </div>
          )}

          {/* ── STEP 1: Portfolio Size ── */}
          {!showResults && step === 1 && (
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              <div>
                <h2 style={{ fontSize:'1.35rem', fontWeight:800, color:'#f8fafc', fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:'6px' }}>
                  {answers.role === 'policyholder' ? 'How would you describe your insurance needs?' : 'What is your portfolio or business size?'}
                </h2>
                <p style={{ fontSize:'0.85rem', color:'#64748b' }}>
                  This helps us calibrate the scale of solution that fits you.
                </p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {answers.role === 'policyholder' ? (
                  <>
                    {optionBtn('Personal cover', 'Motor, home contents, building insurance', <ShieldCheck style={{width:20,height:20,color:'#00e5ff'}}/>, () => go({ portfolioSize:'small' }), answers.portfolioSize==='small')}
                    {optionBtn('Family & property', 'Multiple assets across home and vehicles', <ShieldCheck style={{width:20,height:20,color:'#20a3b6'}}/>, () => go({ portfolioSize:'medium' }), answers.portfolioSize==='medium')}
                    {optionBtn('Business owner', 'Commercial property, liability, fleet', <ShieldCheck style={{width:20,height:20,color:'#a78bfa'}}/>, () => go({ portfolioSize:'large' }), answers.portfolioSize==='large')}
                  </>
                ) : (
                  <>
                    {optionBtn('Small (< 500 policies / < R50M GWP)', 'Growing practice or startup insurer', <BarChart3 style={{width:20,height:20,color:'#00e5ff'}}/>, () => go({ portfolioSize:'small' }), answers.portfolioSize==='small')}
                    {optionBtn('Mid-size (500–5,000 policies)', 'Established broker or regional insurer', <BarChart3 style={{width:20,height:20,color:'#20a3b6'}}/>, () => go({ portfolioSize:'medium' }), answers.portfolioSize==='medium')}
                    {optionBtn('Large (5,000–50,000 policies)', 'Major brokerage or national insurer', <BarChart3 style={{width:20,height:20,color:'#a78bfa'}}/>, () => go({ portfolioSize:'large' }), answers.portfolioSize==='large')}
                    {optionBtn('Enterprise (50,000+ policies)', 'Group insurer or national broker network', <BarChart3 style={{width:20,height:20,color:'#34d399'}}/>, () => go({ portfolioSize:'enterprise' }), answers.portfolioSize==='enterprise')}
                  </>
                )}
              </div>
            </div>
          )}

          {/* ── STEP 2: Pain Points (multi-select) ── */}
          {!showResults && step === 2 && (
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              <div>
                <h2 style={{ fontSize:'1.35rem', fontWeight:800, color:'#f8fafc', fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:'6px' }}>
                  What are your biggest challenges right now?
                </h2>
                <p style={{ fontSize:'0.85rem', color:'#64748b' }}>
                  Select all that apply — we'll address each one.
                </p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {([
                  ['admin',      'Too much manual admin & paperwork',           <Clock style={{width:18,height:18,color:'#00e5ff'}}/>],
                  ['compliance', 'Regulatory compliance & FSCA obligations',    <ShieldCheck style={{width:18,height:18,color:'#34d399'}}/>],
                  ['claims',     'Slow or unclear claims processes',             <Zap style={{width:18,height:18,color:'#fbbf24'}}/>],
                  ['technology', 'Outdated systems & lack of integration',       <Cpu style={{width:18,height:18,color:'#a78bfa'}}/>],
                  ['growth',     'Scaling the business without growing costs',   <TrendingUp style={{width:18,height:18,color:'#20a3b6'}}/>],
                ] as [PainPoint, string, React.ReactNode][]).map(([id, label, icon]) => (
                  optionBtn(label, '', icon, () => {
                    const current = answers.painPoints ?? [];
                    const updated = current.includes(id) ? current.filter(x => x !== id) : [...current, id];
                    setAnswers(prev => ({ ...prev, painPoints: updated }));
                  }, (answers.painPoints ?? []).includes(id))
                ))}
              </div>
              <button
                onClick={() => go({})}
                disabled={!answers.painPoints?.length}
                style={{
                  marginTop:'8px', padding:'14px', borderRadius:'14px', border:'none',
                  background: answers.painPoints?.length ? 'linear-gradient(135deg,#00e5ff,#20a3b6)' : 'rgba(255,255,255,0.06)',
                  color: answers.painPoints?.length ? '#070d18' : '#64748b',
                  fontWeight:800, fontSize:'0.9rem', cursor: answers.painPoints?.length ? 'pointer' : 'not-allowed',
                  fontFamily:"'Plus Jakarta Sans',sans-serif",
                  display:'flex', alignItems:'center', justifyContent:'center', gap:'8px',
                  transition:'all 0.2s',
                }}
              >
                <span>Continue</span>
                <ArrowRight style={{ width:16, height:16 }} />
              </button>
            </div>
          )}

          {/* ── STEP 3: Priority ── */}
          {!showResults && step === 3 && (
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              <div>
                <h2 style={{ fontSize:'1.35rem', fontWeight:800, color:'#f8fafc', fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:'6px' }}>
                  What matters most to you in a solution?
                </h2>
                <p style={{ fontSize:'0.85rem', color:'#64748b' }}>Pick your single top priority.</p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {optionBtn('Speed & turnaround time', 'Faster quotes, claims, and policy issuance', <Zap style={{width:18,height:18,color:'#fbbf24'}}/>, () => go({ priority:'speed' }), answers.priority==='speed')}
                {optionBtn('Cost reduction', 'Measurable savings on back-office overhead', <TrendingUp style={{width:18,height:18,color:'#00e5ff'}}/>, () => go({ priority:'cost' }), answers.priority==='cost')}
                {optionBtn('Regulatory compliance', 'FSCA binder, POPIA, and audit readiness', <ShieldCheck style={{width:18,height:18,color:'#34d399'}}/>, () => go({ priority:'compliance' }), answers.priority==='compliance')}
                {optionBtn('System integration', 'API connectivity and tech modernisation', <Cpu style={{width:18,height:18,color:'#a78bfa'}}/>, () => go({ priority:'integration' }), answers.priority==='integration')}
              </div>
            </div>
          )}

          {/* ── STEP 4: Timeline ── */}
          {!showResults && step === 4 && (
            <div style={{ display:'flex', flexDirection:'column', gap:'16px' }}>
              <div>
                <h2 style={{ fontSize:'1.35rem', fontWeight:800, color:'#f8fafc', fontFamily:"'Plus Jakarta Sans',sans-serif", marginBottom:'6px' }}>
                  When are you looking to make a move?
                </h2>
                <p style={{ fontSize:'0.85rem', color:'#64748b' }}>Your timeline shapes our recommendation urgency.</p>
              </div>
              <div style={{ display:'flex', flexDirection:'column', gap:'10px' }}>
                {optionBtn('Right now — urgent need', 'I need a solution as soon as possible', <Zap style={{width:18,height:18,color:'#ef4444'}}/>, () => go({ timeline:'now' }), answers.timeline==='now')}
                {optionBtn('This quarter', 'Planning to implement within 3 months', <Clock style={{width:18,height:18,color:'#fbbf24'}}/>, () => go({ timeline:'quarter' }), answers.timeline==='quarter')}
                {optionBtn('Within the year', 'Evaluating for a future implementation', <BarChart3 style={{width:18,height:18,color:'#00e5ff'}}/>, () => go({ timeline:'year' }), answers.timeline==='year')}
                {optionBtn('Just exploring', 'Researching options, no firm timeline yet', <Sparkles style={{width:18,height:18,color:'#a78bfa'}}/>, () => go({ timeline:'exploring' }), answers.timeline==='exploring')}
              </div>
            </div>
          )}

          {/* ── RESULTS ── */}
          {showResults && (
            <div style={{ display:'flex', flexDirection:'column', gap:'24px' }}>
              {/* Summary pill */}
              <div style={{
                padding:'14px 20px', borderRadius:'14px',
                background:'rgba(0,229,255,0.06)', border:'1px solid rgba(0,229,255,0.2)',
                display:'flex', alignItems:'center', gap:'12px',
              }}>
                <CheckCircle2 style={{ width:20, height:20, color:'#34d399', flexShrink:0 }} />
                <div>
                  <div style={{ fontWeight:800, fontSize:'0.9rem', color:'#f8fafc' }}>
                    Profile complete — {recs.length} recommendations for you
                  </div>
                  <div style={{ fontSize:'0.78rem', color:'#64748b', marginTop:'2px' }}>
                    Based on: {answers.role} · {answers.portfolioSize} portfolio · {answers.priority} priority
                  </div>
                </div>
              </div>

              {/* Recommendation cards */}
              {recs.map((rec, i) => {
                const Icon = rec.icon;
                return (
                  <div key={i} style={{
                    padding:'24px', borderRadius:'18px',
                    background:'rgba(255,255,255,0.03)',
                    border:`1px solid rgba(255,255,255,0.09)`,
                    display:'flex', flexDirection:'column', gap:'14px',
                    position:'relative', overflow:'hidden',
                  }}>
                    {/* Left accent bar */}
                    <div style={{
                      position:'absolute', left:0, top:0, bottom:0,
                      width:'3px', background:rec.accentColor, borderRadius:'3px 0 0 3px',
                    }} />

                    <div style={{ display:'flex', alignItems:'flex-start', gap:'14px' }}>
                      <div style={{
                        width:'44px', height:'44px', borderRadius:'12px', flexShrink:0,
                        background:`${rec.accentColor}18`,
                        display:'flex', alignItems:'center', justifyContent:'center',
                      }}>
                        <Icon size={20} />
                      </div>
                      <div style={{ flex:1, minWidth:0 }}>
                        <div style={{ display:'flex', alignItems:'center', gap:'10px', flexWrap:'wrap', marginBottom:'6px' }}>
                          <span style={{ fontWeight:800, fontSize:'1rem', color:'#f8fafc', fontFamily:"'Plus Jakarta Sans',sans-serif" }}>
                            {rec.title}
                          </span>
                          {rec.urgencyLabel && (
                            <span style={{
                              fontSize:'10px', fontWeight:800, padding:'2px 8px', borderRadius:'5px',
                              background:'rgba(239,68,68,0.15)', color:'#f87171',
                              textTransform:'uppercase', letterSpacing:'0.04em',
                            }}>
                              {rec.urgencyLabel}
                            </span>
                          )}
                        </div>
                        <p style={{ fontSize:'0.83rem', color:'#94a3b8', lineHeight:1.65, margin:0 }}>
                          {rec.description}
                        </p>
                      </div>
                    </div>

                    {/* Tags */}
                    <div style={{ display:'flex', gap:'8px', flexWrap:'wrap' }}>
                      {rec.tags.map(tag => (
                        <span key={tag} style={{
                          fontSize:'10px', fontWeight:700, padding:'3px 10px', borderRadius:'5px',
                          background:'rgba(255,255,255,0.05)', color:'#94a3b8',
                          border:'1px solid rgba(255,255,255,0.08)',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={rec.ctaTarget}
                      onClick={onClose}
                      style={{
                        alignSelf:'flex-start', display:'flex', alignItems:'center', gap:'6px',
                        padding:'10px 18px', borderRadius:'10px',
                        background:`${rec.accentColor}18`, border:`1px solid ${rec.accentColor}40`,
                        color:rec.accentColor, fontWeight:700, fontSize:'0.83rem',
                        textDecoration:'none', transition:'all 0.2s ease',
                      }}
                      onMouseEnter={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = `${rec.accentColor}28`;
                      }}
                      onMouseLeave={e => {
                        (e.currentTarget as HTMLAnchorElement).style.background = `${rec.accentColor}18`;
                      }}
                    >
                      {rec.cta}
                      <ChevronRight style={{ width:14, height:14 }} />
                    </a>
                  </div>
                );
              })}

              {/* Contact CTA */}
              <div style={{
                padding:'20px 24px', borderRadius:'16px',
                background:'linear-gradient(135deg,rgba(0,229,255,0.08),rgba(32,163,182,0.04))',
                border:'1px solid rgba(0,229,255,0.2)',
                display:'flex', alignItems:'center', justifyContent:'space-between', flexWrap:'wrap', gap:'16px',
              }}>
                <div>
                  <div style={{ fontWeight:800, fontSize:'0.9rem', color:'#f8fafc' }}>
                    Want a personalised Brolink consultation?
                  </div>
                  <div style={{ fontSize:'0.78rem', color:'#64748b', marginTop:'3px' }}>
                    Our team will walk through these recommendations in detail — no obligation.
                  </div>
                </div>
                <a
                  href="#contact"
                  onClick={onClose}
                  style={{
                    padding:'12px 22px', borderRadius:'12px', border:'none', flexShrink:0,
                    background:'linear-gradient(135deg,#00e5ff,#20a3b6)',
                    color:'#070d18', fontWeight:800, fontSize:'0.85rem',
                    textDecoration:'none', display:'flex', alignItems:'center', gap:'6px',
                    fontFamily:"'Plus Jakarta Sans',sans-serif",
                  }}
                >
                  Book a Consultation
                  <ArrowRight style={{ width:14, height:14 }} />
                </a>
              </div>

              {/* Restart */}
              <button
                onClick={() => { setStep(0); setAnswers({}); setShowResults(false); }}
                style={{
                  alignSelf:'center', padding:'8px 20px', borderRadius:'9999px',
                  border:'1px solid rgba(255,255,255,0.1)', background:'transparent',
                  color:'#64748b', fontSize:'12px', fontWeight:600, cursor:'pointer',
                  transition:'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#94a3b8')}
                onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
              >
                ← Retake profile
              </button>
            </div>
          )}

          {/* Back button */}
          {!showResults && step > 0 && (
            <button
              onClick={back}
              style={{
                marginTop:'20px', display:'flex', alignItems:'center', gap:'6px',
                padding:'0', border:'none', background:'transparent',
                color:'#64748b', fontSize:'12px', fontWeight:600, cursor:'pointer',
                transition:'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#94a3b8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
            >
              <ArrowLeft style={{ width:13, height:13 }} />
              Back
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════════
   TRIGGER BUTTON  (exported, placed in Hero or Navbar)
═══════════════════════════════════════════════════════════════ */
export const RiskProfilerTrigger: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        id="risk-profiler-btn"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '10px 22px',
          borderRadius: '9999px',
          border: '1px solid rgba(0,229,255,0.35)',
          background: 'rgba(0,229,255,0.06)',
          color: '#00e5ff',
          fontWeight: 700,
          fontSize: '0.875rem',
          fontFamily: "'Plus Jakarta Sans',sans-serif",
          cursor: 'pointer',
          transition: 'all 0.25s ease',
        }}
        onMouseEnter={e => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.background = 'rgba(0,229,255,0.14)';
          el.style.boxShadow = '0 4px 20px rgba(0,229,255,0.25)';
        }}
        onMouseLeave={e => {
          const el = e.currentTarget as HTMLButtonElement;
          el.style.background = 'rgba(0,229,255,0.06)';
          el.style.boxShadow = 'none';
        }}
      >
        <Sparkles style={{ width: 15, height: 15 }} />
        <span>Find My Solution</span>
      </button>

      {open && <RiskProfiler onClose={() => setOpen(false)} />}
    </>
  );
};
