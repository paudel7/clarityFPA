'use client';

import { useState, useEffect } from 'react';

const phases = [
  { id: 'mock-phase-0', label: 'CURRENT STATE · PROBLEM', duration: 3800 },
  { id: 'mock-phase-1', label: 'ANALYZING PROCESS…', duration: 3200 },
  { id: 'mock-phase-2', label: 'INSIGHTS IDENTIFIED', duration: 3400 },
  { id: 'mock-phase-3', label: 'TRANSFORMED DASHBOARD', duration: 4800 },
];

export default function Hero({ onOpenModal }: { onOpenModal: () => void }) {
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActivePhase((prev) => (prev + 1) % phases.length);
    }, phases[activePhase].duration);

    return () => clearTimeout(timer);
  }, [activePhase]);

  return (
    <section className="hero" id="hero">
      <div className="hero-bg"></div>
      <div className="hero-grid-lines"></div>
      <div className="container">
        {/* Top Header Section */}
        <div className="hero-header-row visible">
          <div className="hero-eyebrow">
            <span className="label" style={{ color: 'var(--gold-light)' }}>
              FP&A Consulting · Non-Profit · Public
              Sector · Education · Energy · Environment
            </span>
          </div>
          <h1 className="display-xl delay-1">
            Stop Guessing Start Growing: Turn Financial <em>Chaos</em> Into <em>Strategic Clarity</em>
          </h1>
          <h2 className="hero-tagline delay-2">
            We help funding based organizations & teams automate end-to-end FP&A & Reporting Mechanism so you can focus on your mission, not your spreadsheets.
          </h2>
          <div className="hero-ctas delay-3">
            <button className="btn btn-primary" onClick={onOpenModal}>
              <span>👉 Book Free FP&A Assessment</span>
            </button>
            <a href="#services" className="btn btn-outline">
              See How We Transform Finance →
            </a>
          </div>

          <div className="hero-trust-badges delay-3">
            <span className="trust-badge"><span className="trust-badge-icon">📄</span> Sample Assessment Report</span>
            <span className="trust-badge"><span className="trust-badge-icon">📊</span> Budget Template</span>
            <span className="trust-badge"><span className="trust-badge-icon">📈</span> Dashboard Mock</span>
            <span className="trust-badge"><span className="trust-badge-icon">📋</span> Case Pack</span>
          </div>
        </div>

        {/* Visuals Row (Side-by-Side Stats and Mockup) */}
        <div className="hero-visuals-grid" style={{ alignItems: 'stretch' }}>
          <div className="hero-stats-cards visible delay-4" style={{ gap: '1rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div className="stat-card" style={{ padding: '1.25rem 1.5rem', flex: 1 }}>
              <div className="stat-card-badge" style={{ background: 'rgba(78, 173, 124, 0.1)', color: 'var(--green-soft)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'inline-block' }}>EFFICIENCY</div>
              <div className="hero-stat-num" style={{ fontSize: '2.2rem' }}>40–60%</div>
              <div className="hero-stat-label" style={{ fontSize: '0.8rem', color: 'var(--slate-light)' }}>Reduction in manual effort through automation.</div>
            </div>
            <div className="stat-card" style={{ padding: '1.25rem 1.5rem', flex: 1 }}>
              <div className="stat-card-badge" style={{ background: 'var(--gold-dim)', color: 'var(--gold)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'inline-block' }}>AUTHORITY</div>
              <div className="hero-stat-num" style={{ fontSize: '2.2rem' }}>10+</div>
              <div className="hero-stat-label" style={{ fontSize: '0.8rem', color: 'var(--slate-light)' }}>Years of deep expertise in non-profit & finance.</div>
            </div>
            <div className="stat-card" style={{ padding: '1.25rem 1.5rem', flex: 1 }}>
              <div className="stat-card-badge" style={{ background: 'rgba(138, 155, 181, 0.1)', color: 'var(--slate-light)', padding: '0.15rem 0.5rem', borderRadius: '4px', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.05em', marginBottom: '0.75rem', display: 'inline-block' }}>CAPABILITY</div>
              <div className="hero-stat-num" style={{ fontSize: '2.2rem' }}>5+</div>
              <div className="hero-stat-label" style={{ fontSize: '0.8rem', color: 'var(--slate-light)' }}>Industry-specific solutions for multiple sectors.</div>
            </div>
          </div>
 
          <div className="visible delay-2" style={{ position: 'relative', flex: 1 }}>
            <div className="dashboard-mockup" id="heroMockup" style={{ transform: 'none', margin: 0, height: '100%', minHeight: '430px' }}>
              <div className="dash-topbar" style={{ padding: '0.75rem 1rem' }}>
                <div className="dash-dot r"></div>
                <div className="dash-dot y"></div>
                <div className="dash-dot g"></div>
                <span className="dash-title" id="mockPhaseLabel">{phases[activePhase].label}</span>
                <div className="mock-phase-dots">
                  {phases.map((_, i) => (
                    <span
                      key={i}
                      className={`mpd ${activePhase === i ? 'active' : ''}`}
                      onClick={() => setActivePhase(i)}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="mock-panels">
                {/* Phase 0 */}
                <div className={`mock-panel ${activePhase === 0 ? 'active' : ''}`}>
                  <div className="mock-phase-header problem">
                    <span className="mock-status-dot red"></span>
                    Manual Process Detected
                    <span className="mock-badge red">HIGH RISK</span>
                  </div>
                  <div className="dash-kpis">
                    <div className="dash-kpi dash-kpi-bad">
                      <div className="dash-kpi-label">Close Cycle</div>
                      <div className="dash-kpi-val" style={{ color: 'var(--red-soft)' }}>5 days <span className="neg">▲</span></div>
                    </div>
                    <div className="dash-kpi dash-kpi-bad">
                      <div className="dash-kpi-label">Manual Steps</div>
                      <div className="dash-kpi-val" style={{ color: 'var(--red-soft)' }}>12 <span className="neg">⚠</span></div>
                    </div>
                  </div>
                  <div className="mock-issue-list">
                    <div className="mock-issue"><span className="mi-dot red"></span>Data scattered across multiple systems</div>
                    <div className="mock-issue"><span className="mi-dot red"></span>No single source of financial truth</div>
                    <div className="mock-issue"><span className="mi-dot amber"></span>Grant tracking done manually</div>
                  </div>
                  <div className="mock-effort-bar">
                    <div className="mock-effort-label">Finance Time — Prep vs Analysis</div>
                    <div className="mock-effort-track">
                      <div className="mock-effort-bad">78%</div>
                      <div className="mock-effort-good">22%</div>
                    </div>
                  </div>
                </div>

                {/* Phase 1 */}
                <div className={`mock-panel ${activePhase === 1 ? 'active' : ''}`}>
                  <div className="mock-phase-header analyzing">
                    <span className="mock-spinner"></span>
                    Analyzing Finance Process…
                  </div>
                  <div className="mock-scan-steps">
                    <div className="mock-scan-step done">✓ Mapping data sources & systems</div>
                    <div className="mock-scan-step done">✓ Identifying manual workflows</div>
                    <div className="mock-scan-step scanning">◎ AI opportunity areas…</div>
                  </div>
                  <div className="mock-scan-bars">
                    <div className="mock-scan-bar-row">
                      <span>Reporting</span>
                      <div className="mock-scan-track"><div className="mock-scan-fill" style={{ width: activePhase === 1 ? '35%' : '0' }}></div></div>
                    </div>
                    <div className="mock-scan-bar-row">
                      <span>Forecasting</span>
                      <div className="mock-scan-track"><div className="mock-scan-fill" style={{ width: activePhase === 1 ? '22%' : '0' }}></div></div>
                    </div>
                  </div>
                </div>

                {/* Phase 2 */}
                <div className={`mock-panel ${activePhase === 2 ? 'active' : ''}`}>
                  <div className="mock-phase-header insight">
                    <span className="mock-status-dot gold"></span>
                    Key Insights Identified
                    <span className="mock-badge gold">3 QUICK WINS</span>
                  </div>
                  <div className="mock-findings">
                    <div className="mock-finding">
                      <div className="mf-icon">⚡</div>
                      <div className="mf-text">
                        <strong>Automate reporting pipeline</strong>
                        <span>Save 4 days/month</span>
                      </div>
                    </div>
                  </div>
                  <div className="mock-score-row">
                    <div className="mock-score-item"><div className="mock-score-label">Current</div><div className="mock-score-val bad">38%</div></div>
                    <div className="mock-score-arrow">→</div>
                    <div className="mock-score-item"><div className="mock-score-label">After</div><div className="mock-score-val good">87%</div></div>
                  </div>
                </div>

                {/* Phase 3 */}
                <div className={`mock-panel ${activePhase === 3 ? 'active' : ''}`}>
                  <div className="mock-phase-header result">
                    <span className="mock-status-dot green"></span>
                    Transformed State · Live
                  </div>
                  <div className="dash-kpis">
                    <div className="dash-kpi"><div className="dash-kpi-label">Total Budget</div><div className="dash-kpi-val">$4.2M</div></div>
                    <div className="dash-kpi"><div className="dash-kpi-label">Variance</div><div className="dash-kpi-val">-3.1%</div></div>
                  </div>
                  <div className="dash-chart-area">
                    <div className="dash-bars">
                      <div className="dash-bar" style={{ height: '45%' }}></div>
                      <div className="dash-bar" style={{ height: '55%' }}></div>
                      <div className="dash-bar highlight" style={{ height: '90%' }}></div>
                      <div className="dash-bar active" style={{ height: '75%' }}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mock-outcome-strip">
                <span className="mos-item"><span className="mos-icon">⚡</span>Close: 5d → 1d</span>
                <span className="mos-divider"></span>
                <span className="mos-item"><span className="mos-icon">📊</span>Effort −60%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
