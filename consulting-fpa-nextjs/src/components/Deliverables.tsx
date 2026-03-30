'use client';

export default function Deliverables() {
  const items = [
    { 
      icon: '📄', 
      title: 'Financial Reporting Templates', 
      desc: 'Structured, standardized report formats tailored for your board, funders, or leadership — no more reformatting every month.' 
    },
    { 
      icon: '📊', 
      title: 'Automated Dashboard Designs', 
      desc: 'Live Power BI dashboards with direct data connections — leadership sees current numbers without waiting for the finance team.' 
    },
    { 
      icon: '🔮', 
      title: 'Driver-Based Forecasting Models', 
      desc: 'Excel or BI models built on your real operational drivers — headcount, volumes, grant schedules — not just historical averages.' 
    },
    { 
      icon: '💼', 
      title: 'Budget Tracking Frameworks', 
      desc: 'Multi-fund structures with real-time variance alerts, utilization tracking, and audit-ready funder reporting views.' 
    },
    { 
      icon: '🤖', 
      title: 'AI Workflow Implementation', 
      desc: 'Specific AI use cases built and tested — variance commentary, data consolidation, scenario simulation — not just a list of ideas.' 
    },
    { 
      icon: '📘', 
      title: 'Documentation & Team Training', 
      desc: 'Full written guides, walkthroughs, and recorded sessions so your team maintains everything independently from day one.' 
    }
  ];

  return (
    <section className="section deliverables-section" id="deliverables" style={{ background: 'var(--navy)' }}>
      <div className="container">
        <div className="section-header">
          <span className="gold-rule"></span>
          <span className="label reveal">Tangible Outputs</span>
          <h2 className="display-lg reveal delay-1" style={{ marginTop: '0.75rem', maxWidth: '640px' }}>
            What You Actually <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Receive</em>
          </h2>
          <p className="body-lg reveal delay-2" style={{ marginTop: '1rem', maxWidth: '560px' }}>
            Every engagement produces concrete, working deliverables — not slide decks. 
          </p>
        </div>

        {/* Discovery Step */}
        <div className="deliverable-step reveal" style={{ marginBottom: '4rem' }}>
          <div className="deliverable-step-header" style={{ display: 'grid', gridTemplateColumns: 'auto 1fr auto', gap: '2rem', alignItems: 'start', padding: '2rem', background: 'var(--navy-mid)', borderRadius: '12px', border: '1px solid var(--border)' }}>
            <div className="deliverable-step-num" style={{ fontSize: '3rem', fontWeight: 600, color: 'var(--gold)', opacity: 0.8, lineHeight: 1, fontFamily: 'var(--font-display)' }}>01</div>
            <div className="deliverable-step-info">
              <h3 style={{ fontSize: '1.4rem', color: 'var(--cream)', fontWeight: 600 }}>Discovery Phase <span className="step-sub" style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--slate)', marginLeft: '0.5rem' }}>· 60–90 minutes</span></h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-light)', marginTop: '0.5rem', lineHeight: 1.6 }}>
                A structured diagnostic session where we map every system, score your processes on a 1–5 maturity scale, and identify your biggest time-drains.
              </p>
            </div>
            <div className="deliverable-step-outcome" style={{ background: 'var(--navy)', padding: '1.25rem', borderRadius: '10px', border: '1px solid var(--border)', maxWidth: '300px' }}>
              <div style={{ fontSize: '0.62rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '0.5rem', letterSpacing: '0.1em', fontFamily: 'var(--font-mono)' }}>You receive</div>
              <div style={{ fontSize: '0.95rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '0.4rem' }}>📄 FP&A Assessment Report</div>
              <p style={{ fontSize: '0.78rem', color: 'var(--slate)', lineHeight: 1.5 }}>
                12-page PDF covering current-state gaps, root causes, and a prioritized 90-day action roadmap.
              </p>
            </div>
          </div>
        </div>

        {/* Connector */}
        <div className="deliverable-connector reveal" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', margin: '3rem 0' }}>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}></div>
          <div style={{ fontSize: '0.68rem', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '0.3rem 1rem', border: '1px solid var(--border)', borderRadius: '999px', fontFamily: 'var(--font-mono)' }}>
            If you choose to proceed with Implementation
          </div>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }}></div>
        </div>

        {/* Implementation Step */}
        <div className="deliverable-step reveal" style={{ padding: '3.5rem', background: 'var(--navy-mid)', border: '1px solid var(--border)', borderRadius: '16px' }}>
          
          <div className="implementation-header" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '3rem', alignItems: 'start', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', gap: '2rem', alignItems: 'start' }}>
              <div style={{ fontSize: '3.2rem', fontWeight: 600, color: 'var(--gold)', opacity: 0.8, lineHeight: 1, fontFamily: 'var(--font-display)' }}>02</div>
              <div>
                <h3 style={{ fontSize: '1.6rem', color: 'var(--cream)', fontWeight: 600 }}>Implementation <span style={{ fontSize: '0.85rem', fontWeight: 400, color: 'var(--slate)', marginLeft: '0.5rem' }}>· custom scope & timeline</span></h3>
                <p style={{ fontSize: '1rem', color: 'var(--slate-light)', marginTop: '1rem', lineHeight: 1.6, maxWidth: '580px' }}>
                  We build every deliverable from scratch against your real data and workflows. Everything below is handed over fully working, tested, documented, and ready for your team to own independently.
                </p>
              </div>
            </div>
            
            <div style={{ padding: '1.75rem', background: 'var(--navy)', border: '1px solid var(--border)', borderRadius: '12px', textAlign: 'center' }}>
              <div style={{ fontSize: '0.6rem', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '1rem', fontFamily: 'var(--font-mono)' }}>You receive all six</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--cream)', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                 ⚙️ Full Process Transformation
              </div>
              <p style={{ fontSize: '0.78rem', color: 'var(--slate)', fontStyle: 'italic', lineHeight: 1.5 }}>
                Automated systems that replace your manual workflows — permanently.
              </p>
            </div>
          </div>

          <div className="deliverables-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {items.map((item, i) => (
              <div key={i} className="deliverable-item" style={{ background: 'var(--navy)', border: '1px solid var(--border-sub)', borderRadius: '12px', padding: '1.5rem', transition: 'all 0.3s ease' }}>
                <div style={{ width: '42px', height: '42px', background: 'var(--gold-dim)', border: '1px solid var(--border)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.1rem', marginBottom: '1.25rem' }}>
                  {item.icon}
                </div>
                <div>
                  <h4 style={{ fontSize: '1rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '0.6rem' }}>{item.title}</h4>
                  <p style={{ fontSize: '0.82rem', color: 'var(--slate-light)', lineHeight: 1.6 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
