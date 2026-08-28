import React, { useState } from 'react';
import { Calculator, TrendingUp, Clock, ArrowRight } from 'lucide-react';

export const PortfolioCalculator: React.FC = () => {
  const [policiesCount, setPoliciesCount] = useState<number>(5000);
  const [avgPremium, setAvgPremium] = useState<number>(2500);
  const [weeklyAdminHours, setWeeklyAdminHours] = useState<number>(40);

  // Calculations
  const totalAnnualGWP = policiesCount * avgPremium * 12;
  const annualHoursSaved = Math.round(weeklyAdminHours * 52 * 0.62);
  const estimatedCostSavingsZAR = Math.round(annualHoursSaved * 350);
  const claimsTurnaroundSpeedGain = 45;

  const formatZAR = (val: number) => {
    return new Intl.NumberFormat('en-ZA', { style: 'currency', currency: 'ZAR', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <section id="calculator">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="badge-pill">
            <Calculator style={{ width: 16, height: 16, color: '#20a3b6' }} />
            <span>Interactive Savings Simulator</span>
          </div>
          <h2 className="section-title">
            Calculate Your Brokerage <br />
            <span className="text-gradient">Efficiency & Cost ROI</span>
          </h2>
          <p className="section-subtitle">
            Estimate how much operational time and administrative expense your business can save by deploying Brolink’s Websure™ portfolio administration system.
          </p>
        </div>

        {/* Calculator Card */}
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-[var(--border-color)] calculator-grid">
          
          {/* Sliders Input Column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Slider 1: Policies */}
            <div className="slider-group">
              <div className="slider-label-row">
                <label>Active Portfolio Policies</label>
                <span className="slider-value">{policiesCount.toLocaleString()} Policies</span>
              </div>
              <input 
                type="range" 
                min={500} 
                max={50000} 
                step={500}
                value={policiesCount}
                onChange={(e) => setPoliciesCount(Number(e.target.value))}
                className="custom-range-input"
              />
              <div className="slider-minmax-row">
                <span>500</span>
                <span>25,000</span>
                <span>50,000+</span>
              </div>
            </div>

            {/* Slider 2: Premium */}
            <div className="slider-group">
              <div className="slider-label-row">
                <label>Average Monthly Premium</label>
                <span className="slider-value">{formatZAR(avgPremium)} / mo</span>
              </div>
              <input 
                type="range" 
                min={500} 
                max={15000} 
                step={250}
                value={avgPremium}
                onChange={(e) => setAvgPremium(Number(e.target.value))}
                className="custom-range-input"
              />
              <div className="slider-minmax-row">
                <span>R 500</span>
                <span>R 7,500</span>
                <span>R 15,000+</span>
              </div>
            </div>

            {/* Slider 3: Hours */}
            <div className="slider-group">
              <div className="slider-label-row">
                <label>Weekly Admin & Endorsement Hours</label>
                <span className="slider-value">{weeklyAdminHours} Hours / wk</span>
              </div>
              <input 
                type="range" 
                min={10} 
                max={120} 
                step={5}
                value={weeklyAdminHours}
                onChange={(e) => setWeeklyAdminHours(Number(e.target.value))}
                className="custom-range-input"
              />
              <div className="slider-minmax-row">
                <span>10 hrs</span>
                <span>65 hrs</span>
                <span>120 hrs</span>
              </div>
            </div>

            {/* GWP Callout */}
            <div className="gwp-box">
              <div style={{ fontWeight: 700, fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Total Portfolio Gross Written Premium (GWP):</div>
              <div className="text-2xl font-extrabold text-gradient-gold">{formatZAR(totalAnnualGWP)} / year</div>
            </div>

          </div>

          {/* Results Panel */}
          <div className="results-panel-card">
            
            <div style={{ fontSize: '0.75rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em', color: `var(--accent)` }}>
              Projected Brolink Websure™ Impact
            </div>

            <div className="results-metrics-grid">
              
              {/* Metric 1 */}
              <div className="metric-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>
                  <Clock style={{ width: 16, height: 16, color: `var(--accent)` }} />
                  <span>Annual Hours Saved</span>
                </div>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#ffffff' }}>
                  {annualHoursSaved.toLocaleString()} hrs
                </div>
                <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 700 }}>
                  ~62% Admin Workload Saved
                </div>
              </div>

              {/* Metric 2 */}
              <div className="metric-box">
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.75rem', color: '#94a3b8' }}>
                  <TrendingUp style={{ width: 16, height: 16, color: `var(--accent)` }} />
                  <span>Est. Cost Reduction</span>
                </div>
                <div style={{ fontSize: '1.875rem', fontWeight: 800, color: '#ffffff' }}>
                  {formatZAR(estimatedCostSavingsZAR)}
                </div>
                <div style={{ fontSize: '0.75rem', color: '#34d399', fontWeight: 700 }}>
                  Reduced Back-Office Overhead
                </div>
              </div>

            </div>

            <div style={{ padding: '16px', borderRadius: '16px', background: 'rgba(0, 229, 255, 0.1)', border: '1px solid var(--accent-border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.85rem' }}>
              <span style={{ fontWeight: 600, color: '#e2e8f0' }}>Claims & Endorsement Turnaround</span>
              <span style={{ fontWeight: 800, color: `var(--accent)` }}>+{claimsTurnaroundSpeedGain}% Faster</span>
            </div>

            <a href="#contact" className="btn-primary" style={{ textAlign: 'center', width: '100%', justifyContent: 'center', padding: '16px' }}>
              <span>Book Full Portfolio Audit & Demo</span>
              <ArrowRight style={{ width: 16, height: 16 }} />
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};
