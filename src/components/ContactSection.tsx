import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, Clock } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    stakeholder: 'broker',
    message: ''
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Mail style={{ width: 16, height: 16, color: '#20a3b6' }} />
            <span>Connect With Brolink</span>
          </div>
          <h2 className="section-title">
            Let’s Build Your <span className="text-gradient">Insurance Solution</span>
          </h2>
          <p className="section-subtitle">
            Send us your details and our dedicated insurance administration team will get back to you promptly.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="contact-grid">
          
          {/* Left Direct Contact Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div className="office-info-card">
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                Brolink Head Office
              </h3>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(32, 163, 182, 0.15)', color: '#00e5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <MapPin style={{ width: 20, height: 20 }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: 2 }}>Physical Address</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                      Westend Office Park, 254 Hall Street, Centurion, Gauteng, 0157, South Africa
                    </div>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(32, 163, 182, 0.15)', color: '#00e5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Phone style={{ width: 20, height: 20 }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: 2 }}>Phone & Switchboard</div>
                    <a href="tel:+27126730000" style={{ color: '#00e5ff', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                      +27 (0)12 673 0000
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(32, 163, 182, 0.15)', color: '#00e5ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Mail style={{ width: 20, height: 20 }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: 2 }}>General & Claims Email</div>
                    <a href="mailto:brolink@brolink.co.za" style={{ color: '#00e5ff', fontWeight: 700, fontSize: '0.875rem', textDecoration: 'none' }}>
                      brolink@brolink.co.za
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px', paddingTop: '16px', borderTop: '1px solid var(--border-color)' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <ShieldCheck style={{ width: 20, height: 20 }} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)', marginBottom: 2 }}>Authorized Financial Services Provider</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', fontFamily: 'monospace', fontWeight: 700 }}>
                      FSP License No. 10834
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ padding: '20px 24px', borderRadius: '16px', background: 'var(--bg-surface)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <Clock style={{ width: 28, height: 28, color: '#00e5ff', flexShrink: 0 }} />
              <div>
                <div style={{ fontWeight: 700, fontSize: '0.875rem', color: 'var(--text-primary)' }}>Operating Hours</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: 2 }}>Monday – Friday: 08:00 – 16:30 SAST</div>
              </div>
            </div>

          </div>

          {/* Right Interactive Form Column */}
          <div className="form-card">
            
            {submitted ? (
              <div style={{ padding: '48px 0', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
                <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(16, 185, 129, 0.2)', color: '#34d399', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 style={{ width: 40, height: 40 }} />
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--text-primary)' }}>
                  Thank You, {formData.name}!
                </h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', maxWidth: '380px', lineHeight: 1.6 }}>
                  Your inquiry has been logged with our team. A Brolink specialist will get in touch with you within 1 business hour.
                </p>
                <button 
                  onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', company: '', stakeholder: 'broker', message: '' }); }}
                  className="btn-secondary"
                  style={{ fontSize: '0.85rem', marginTop: '16px' }}
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-primary)' }}>
                    I am interested as a:
                  </label>
                  <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                    {[
                      { id: 'broker', label: 'A Broker' },
                      { id: 'insurer', label: 'An Insurer' },
                      { id: 'policyholder', label: 'A Policyholder' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, stakeholder: item.id })}
                        className={`audience-tab-btn ${formData.stakeholder === item.id ? 'active' : ''}`}
                        style={{ padding: '8px 20px', fontSize: '0.85rem' }}
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Grid Inputs 1 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>Your Name *</label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Sarah Jenkins"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>Email Address *</label>
                    <input 
                      type="email" 
                      required
                      placeholder="s.jenkins@brokerage.co.za"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                {/* Grid Inputs 2 */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '20px' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>Phone Number</label>
                    <input 
                      type="tel" 
                      placeholder="+27 82 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="form-input"
                    />
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>Company / Brokerage Name</label>
                    <input 
                      type="text" 
                      placeholder="e.g. Apex Insurance Advisory"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="form-input"
                    />
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  <label style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--text-primary)' }}>How can we assist you?</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell us about your portfolio size, binder requirements, or specific inquiry..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="form-input"
                    style={{ minHeight: '120px', resize: 'vertical' }}
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={loading}
                  className="btn-primary"
                  style={{ width: '100%', padding: '16px', justifyContent: 'center', marginTop: '8px' }}
                >
                  {loading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send style={{ width: 16, height: 16 }} />
                      <span>Submit Inquiry</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
