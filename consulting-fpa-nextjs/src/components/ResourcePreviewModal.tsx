'use client';

interface ResourcePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  tab: string;
}

export default function ResourcePreviewModal({ isOpen, onClose, tab }: ResourcePreviewModalProps) {
  if (!isOpen) return null;

  // Helper for diamonds
  const Diamond = () => <span style={{ color: 'var(--gold)', marginRight: '0.6rem', fontSize: '0.75rem' }}>◆</span>;

  return (
    <div className="booking-overlay open" onClick={onClose}>
      <div className="booking-modal" style={{ maxWidth: '860px', padding: 0, background: 'var(--navy-mid)', border: '1px solid var(--border)' }} onClick={e => e.stopPropagation()}>
        
        {/* Header Section */}
        <div className="bm-header-top" style={{ padding: '1.5rem 2.0rem', borderBottom: '1px solid var(--border)', background: 'var(--navy-mid)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <div>
              <span className="label" style={{ display: 'block', marginBottom: '0.4rem', color: 'var(--gold)', fontSize: '0.68rem', textTransform: 'uppercase', letterSpacing: '0.15em', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>
                {tab === 'Mini Case Pack' ? 'CASE PACK PREVIEW' : 
                 tab === 'Non-Profit Budget Template' ? 'TEMPLATE PREVIEW' :
                 tab === 'Finance Dashboard Mockup' ? 'VISUAL PREVIEW' :
                 tab === 'Driver-Based Forecast Model' ? 'MODEL PREVIEW' : 
                 tab === 'Data Transformation & ETL Pipeline' ? 'INFRASTRUCTURE PREVIEW' :
                 tab === 'Transactional Analysis Framework' ? 'ANALYSIS PREVIEW' :
                 tab === 'Sample FP&A Assessment Report' ? 'DIAGNOSTIC PREVIEW' : 'ASSET SNAPSHOT'}
              </span>
              <h3 style={{ fontSize: '1.75rem', color: 'var(--cream)', fontWeight: 600, fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>{tab}</h3>
            </div>
            <button className="bm-close" onClick={onClose} style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '50%', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</button>
          </div>
        </div>
        
        <div className="bm-body" style={{ padding: '2.5rem', maxHeight: '76vh', overflowY: 'auto', background: 'var(--navy-mid)' }}>
          
          {/* Static Upload Notice */}
          <div className="upload-notice" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', padding: '1rem 1.25rem', background: 'rgba(26, 43, 60, 0.6)', border: '1px solid rgba(42, 59, 76, 0.8)', borderRadius: '8px', marginBottom: '2.5rem', fontSize: '0.82rem', color: 'var(--slate)' }}>
            <span style={{ fontSize: '1.1rem' }}>📌</span>
            <span style={{ fontStyle: 'italic' }}>
              {tab === 'Sample FP&A Assessment Report' ? 'This is a sample snapshot. The final report is a custom-tailored 8–12 page PDF diagnostic with specific AI recommendations and a migration roadmap.' :
               'Previewing internal structure. To activate the full PDF download, please proceed with the discovery call request.'}
            </span>
          </div>

          {/* ─── ASSESSMENT REPORT PREVIEW (The core of this request) ─── */}
          {tab === 'Sample FP&A Assessment Report' && (
            <div className="assessment-preview" style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              {/* Report Cover Snapshot */}
              <div style={{ background: 'linear-gradient(135deg, var(--navy-mid), var(--navy))', border: '1px solid var(--border)', borderRadius: '16px', padding: '3.5rem 2rem', textAlign: 'center', marginBottom: '0.5rem', position: 'relative', overflow: 'hidden' }}>
                 <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid var(--gold)', borderRadius: '4px', padding: '0.3rem 0.8rem', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.12em', display: 'inline-block', marginBottom: '2rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>SAMPLE DOCUMENT</div>
                 <h2 style={{ fontSize: '2.4rem', color: 'var(--white)', fontWeight: 600, fontFamily: 'var(--font-display)', fontStyle: 'italic', marginBottom: '1rem', letterSpacing: '-0.01em' }}>FP&A Process Assessment Report</h2>
                 <p style={{ fontSize: '1.05rem', color: 'var(--cream-dim)', marginBottom: '2.5rem' }}>Reporting, Budgeting & Forecast Optimization</p>
                 <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.6rem', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem 1.4rem', borderRadius: '999px', fontSize: '0.78rem', color: 'var(--slate-light)' }}>
                    <span>Prepared by</span>
                    <strong style={{ color: 'var(--white)' }}>ClarityFP&A</strong>
                 </div>
              </div>

              {/* Snapshot TOC Header */}
              <div style={{ background: 'rgba(7,17,31,0.4)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem 2.5rem' }}>
                 <h4 style={{ fontSize: '0.9rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>Table of Contents</h4>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
                    {[
                      { n: '1', l: 'Executive Summary & Maturity Score', p: 'pp. 2–3' },
                      { n: '2', l: 'Current State Analysis (Reporting)', p: 'pp. 4' },
                      { n: '3', l: 'Current State Analysis (Budgeting & Forecasting)', p: 'pp. 5' },
                      { n: '4', l: 'Key Pain Points & Risk Areas', p: 'pp. 6' },
                      { n: '5', l: 'Opportunity Areas & Quick Wins', p: 'pp. 7' },
                      { n: '6', l: 'AI Opportunities (Specific to Your Workflows)', p: 'pp. 8' },
                      { n: '7', l: 'Priority Roadmap: 30–60–90 Days', p: 'pp. 9–10' },
                      { n: '8', l: 'Expected Outcomes & Next Steps', p: 'pp. 11–12' }
                    ].map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', padding: '0.6rem 0', borderBottom: i < 7 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                        <span style={{ width: '24px', height: '24px', background: 'var(--navy-mid)', border: '1px solid var(--border)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.7rem', color: 'var(--gold)', marginRight: '1.25rem', fontFamily: 'var(--font-mono)', fontWeight: 600 }}>{item.n}</span>
                        <span style={{ flex: 1, fontSize: '0.88rem', color: 'var(--cream-dim)' }}>{item.l}</span>
                        <span style={{ fontSize: '0.78rem', color: 'var(--slate)', fontFamily: 'var(--font-mono)', fontStyle: 'italic' }}>{item.p}</span>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Section 1: Maturity Score */}
              <div style={{ background: 'rgba(7,17,31,0.2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>Section 1 Preview: Maturity Score (1–5 Rating Scale)</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                   {[
                     { l: 'Reporting Process', s: '2/5', p: '40%' },
                     { l: 'Budgeting Process', s: '3/5', p: '60%' },
                     { l: 'Forecasting', s: '1.5/5', p: '30%' },
                     { l: 'Data Structure', s: '2.5/5', p: '50%' }
                   ].map((score, i) => (
                     <div key={i} className="maturity-row">
                        <div className="maturity-label" style={{ fontSize: '0.82rem', color: 'var(--slate-light)', width: '130px' }}>{score.l}</div>
                        <div className="maturity-bar" style={{ background: 'rgba(255,255,255,0.05)', height: '6px', flex: 1, borderRadius: '4px' }}>
                           <div className="maturity-fill" style={{ width: score.p, height: '100%', background: 'linear-gradient(90deg, var(--gold), var(--gold-light))', borderRadius: '4px' }}></div>
                        </div>
                        <div className="maturity-score" style={{ fontSize: '0.75rem', color: 'var(--gold)', width: '35px', textAlign: 'right' }}>{score.s}</div>
                     </div>
                   ))}
                </div>
                <div style={{ marginTop: '1.5rem', padding: '0.75rem 1rem', background: 'rgba(212,78,78,0.08)', borderRadius: '6px', border: '1px solid rgba(212,78,78,0.2)' }}>
                   <p style={{ fontSize: '0.75rem', color: 'var(--cream-dim)' }}>
                     <strong style={{ color: '#D44E4E' }}>Overall Maturity Level: Low-Medium</strong> · Significant optimization opportunity identified.
                   </p>
                </div>
              </div>

              {/* Section 6: AI Opportunities */}
              <div style={{ background: 'rgba(7,17,31,0.2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>Section 6 Preview: AI Opportunity Areas</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                   {[
                     { i: '🤖', t: 'Automated Data Consolidation', d: 'Replace 4-hour manual data pull with AI-assisted pipeline — estimated 80% time reduction.' },
                     { i: '💬', t: 'Variance Explanation Using AI', d: 'Auto-generate narrative commentary on budget variances using structured AI prompts.' },
                     { i: '📊', t: 'Forecast Scenario Simulation', d: 'Use AI to rapidly model impact of assumption changes across 3 probability scenarios.' }
                   ].map((opp, i) => (
                     <div key={i} style={{ padding: '1.25rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                          <span style={{ fontSize: '1.25rem' }}>{opp.i}</span>
                          <div>
                            <strong style={{ fontSize: '0.88rem', color: 'var(--cream)', display: 'block', marginBottom: '0.2rem' }}>{opp.t}</strong>
                            <p style={{ fontSize: '0.78rem', color: 'var(--slate)', lineHeight: 1.5 }}>{opp.d}</p>
                          </div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Section 7: Roadmap */}
              <div style={{ background: 'rgba(7,17,31,0.2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '1.75rem' }}>
                <h4 style={{ fontSize: '0.9rem', color: 'var(--gold)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>Section 7 Preview: 30–60–90 Day Priority Roadmap</h4>
                <div style={{ border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', overflow: 'hidden' }}>
                   <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.78rem' }}>
                      <thead>
                         <tr style={{ background: 'rgba(201,168,76,0.1)' }}>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--gold)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>TIMELINE</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--gold)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>PRIORITY ACTION</th>
                            <th style={{ padding: '0.75rem 1rem', textAlign: 'left', color: 'var(--gold)', borderBottom: '1px solid rgba(201,168,76,0.2)' }}>EXPECTED OUTCOME</th>
                         </tr>
                      </thead>
                      <tbody>
                         {[
                           { day: '30 Days', action: 'Reporting process cleanup & data source mapping', outcome: 'Clarity on current state, quick wins identified' },
                           { day: '60 Days', action: 'Dashboard setup + automated data connections', outcome: 'Reporting cycle reduced by 60–80%' },
                           { day: '90 Days', action: 'Driver-based forecast model + team training', outcome: 'Live forecasting capability, team self-sufficient' }
                         ].map((row, i) => (
                           <tr key={i} style={{ borderBottom: i < 2 ? '1px solid rgba(255,255,255,0.05)' : 'none' }}>
                              <td style={{ padding: '0.85rem 1.15rem' }}>
                                 <span style={{ fontSize: '0.7rem', color: 'var(--gold)', background: 'var(--gold-dim)', padding: '0.15rem 0.6rem', borderRadius: '4px', fontStyle: 'italic', fontWeight: 600 }}>{row.day}</span>
                              </td>
                              <td style={{ padding: '0.85rem 1rem', color: 'var(--cream-dim)' }}>{row.action}</td>
                              <td style={{ padding: '0.85rem 1rem', color: 'var(--slate-light)', fontStyle: 'italic' }}>{row.outcome}</td>
                           </tr>
                         ))}
                      </tbody>
                   </table>
                </div>
              </div>

            </div>
          )}

          {/* ─── CASE PACK PREVIEW ─── */}
          {tab === 'Mini Case Pack' && (
             <div className="cases-preview">
                <div style={{ padding: '2rem', background: 'rgba(7, 17, 31, 0.4)', border: '1px solid var(--border)', borderRadius: '12px', textAlign: 'center', marginBottom: '2.5rem' }}>
                  <h4 style={{ fontSize: '1.4rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '0.5rem', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>"How Finance Teams Reduce Manual Work by 40–60%"</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--gold)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>3 Representative Examples · Problem · Solution · Outcome</p>
                </div>
                <div style={{ display: 'grid', gap: '2rem' }}>
                   {[
                     { id: 1, cat: 'NON-PROFIT', topic: 'REPORTING AUTOMATION', title: 'Reporting Cycle: 5 Days → 1 Day', p: 'Manual data pull from 4 systems each month. 5 full business days to produce finance report.', s: 'Centralized data source + automated Power BI dashboard with live connections.', o: 'Reporting cycle dropped to under 1 day. Finance team recovered 4 days/month of capacity.' },
                     { id: 2, cat: 'EDUCATION', topic: 'BUDGET OPTIMIZATION', title: 'Multi-Fund Clarity & Variance Control', p: '6 funding streams tracked in separate spreadsheets. Year-end surprises were frequent.', s: 'Structured multi-fund budget template with automated variance alerts and consolidated view.', o: 'Year-end surprises eliminated. Budget accuracy improved 34%. Audit prep time cut by 50%.' },
                     { id: 3, cat: 'PUBLIC SECTOR', topic: 'FORECAST IMPROVEMENT', title: 'Driver-Based Forecasting for Programs', p: 'Annual budget disconnected from program operations. Leadership lacked confidence in forecasts.', s: 'Driver-based forecasting model tied to program headcount, delivery volumes, and grant schedules.', o: 'Leadership confidence in resource decisions increased 60%. Planning cycle shortened by 3 weeks.' }
                   ].map((c, i) => (
                      <div key={i} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '12px', background: 'rgba(7, 17, 31, 0.3)' }}>
                         <div style={{ display: 'inline-block', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.3)', borderRadius: '4px', padding: '0.25rem 0.75rem', fontSize: '0.62rem', color: 'var(--gold)', letterSpacing: '0.08em', marginBottom: '1.5rem', fontFamily: 'var(--font-mono)' }}>
                           CASE {c.id} · {c.cat} · {c.topic}
                         </div>
                         <h4 style={{ fontSize: '1.35rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '1.75rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>{c.title}</h4>
                         <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                           {[{ l: 'PROBLEM', v: c.p, b: 'rgba(212,78,78,0.15)', t: '#D44E4E' }, { l: 'SOLUTION', v: c.s, b: 'rgba(201,168,76,0.15)', t: 'var(--gold)' }, { l: 'OUTCOME', v: c.o, b: 'rgba(78,173,124,0.15)', t: '#4EAD7C' }].map((col, j) => (
                              <div key={j} style={{ padding: '1.25rem', border: `1px solid ${col.b}`, borderRadius: '6px', background: 'rgba(255,255,255,0.01)' }}>
                                <label style={{ fontSize: '0.6rem', color: col.t, textTransform: 'uppercase', letterSpacing: '0.12em', fontWeight: 700, display: 'block', marginBottom: '0.75rem' }}>{col.l}</label>
                                <p style={{ fontSize: '0.82rem', color: 'var(--slate-light)', lineHeight: 1.6 }}>{col.v}</p>
                              </div>
                           ))}
                         </div>
                      </div>
                   ))}
                </div>
             </div>
          )}

          {/* ─── BUDGET TEMPLATE ─── */}
          {tab === 'Non-Profit Budget Template' && (
            <div className="budget-preview">
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginBottom: '1.25rem' }}>
                 {[
                   { t: 'Tab 1: Summary Dashboard', i: ['Total budget vs actual (YTD)', 'Variance amount & percentage', 'Executive summary view', 'Auto-populated from other tabs'] },
                   { t: 'Tab 2: Fund-Level Budget', i: ['Fund | Budget | Actual | Variance', 'Color-coded variance alerts', 'Multiple funding streams', 'Grant utilization %'] },
                   { t: 'Tab 3: Expense Categories', i: ['Program costs breakdown', 'Administrative costs', 'Salaries by department', 'Category vs budget tracking'] }
                 ].map((card, i) => (
                   <div key={i} style={{ padding: '1.75rem', background: 'rgba(7, 17, 31, 0.4)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                      <h4 style={{ color: 'var(--gold)', marginBottom: '1.25rem', fontSize: '1rem', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>📄 {card.t}</h4>
                      <div style={{ fontSize: '0.85rem', color: 'var(--slate-light)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {card.i.map((li, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start' }}><Diamond /> {li}</div>
                        ))}
                      </div>
                   </div>
                 ))}
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: '1fr', marginBottom: '2.5rem' }}>
                  <div style={{ padding: '1.75rem', background: 'rgba(7, 17, 31, 0.4)', border: '1px solid var(--border)', borderRadius: '12px', maxWidth: '320px' }}>
                    <h4 style={{ color: 'var(--gold)', marginBottom: '1.25rem', fontSize: '1rem', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>🔮 Tab 4: Forecast</h4>
                    <div style={{ fontSize: '0.85rem', color: 'var(--slate-light)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                      {['Monthly projections (12-month)', 'Actuals + forecast combined', 'Year-end projected total', 'Variance to original budget'].map((li, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'flex-start' }}><Diamond /> {li}</div>
                      ))}
                    </div>
                  </div>
               </div>
               <div style={{ padding: '1.25rem 1.75rem', background: 'rgba(78, 173, 124, 0.05)', border: '1px solid rgba(78, 173, 124, 0.2)', borderRadius: '10px', fontSize: '0.85rem', color: 'var(--slate-light)', display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                 <span style={{ fontSize: '1.2rem', color: '#4EAD7C' }}>✅</span>
                 <span style={{ fontStyle: 'italic' }}>Clean design · Color-coded alerts · Simple formulas · No macro dependencies · Works in Excel & Google Sheets</span>
               </div>
            </div>
          )}

          {/* ─── FINANCE DASHBOARD ─── */}
          {tab === 'Finance Dashboard Mockup' && (
             <div className="dashboard-preview">
                <div style={{ background: '#0D1B2D', border: '1px solid var(--border)', borderRadius: '16px', padding: '1.5rem', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '1rem' }}>
                        <span style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--cream)', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>Sample Dashboard for Non-Profit Finance Teams</span>
                        <span style={{ fontSize: '0.68rem', color: 'var(--gold)', fontFamily: 'var(--font-mono)', letterSpacing: '0.1em' }}>FY 2025 · LIVE DATA</span>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', marginBottom: '2rem' }}>
                        {[
                          { l: 'TOTAL BUDGET', v: '$4.2M', s: '↑ 12%', c: 'var(--green-soft)' },
                          { l: 'YTD ACTUAL', v: '$2.8M', s: '✓', c: 'var(--green-soft)' },
                          { l: 'YTD VARIANCE', v: '-3.1%', s: '▼', c: '#D44E4E' },
                          { l: 'GRANT UTILIZATION', v: '87%', s: '✓', c: 'var(--green-soft)' }
                        ].map((k, i) => (
                          <div key={i} style={{ background: 'rgba(7, 17, 31, 0.4)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', padding: '1.25rem' }}>
                             <div style={{ fontSize: '0.62rem', color: 'var(--slate)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>{k.l}</div>
                             <div style={{ fontSize: '1.4rem', fontWeight: 700, color: 'var(--cream)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>{k.v} <span style={{ fontSize: '0.75rem', color: k.c }}>{k.s}</span></div>
                          </div>
                        ))}
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '1.5rem', marginBottom: '1.5rem' }}>
                        <div style={{ background: 'rgba(7, 17, 31, 0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem' }}>
                            <div style={{ fontSize: '0.72rem', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Budget vs Actual — Monthly Trend</div>
                            <div style={{ display: 'flex', alignItems: 'flex-end', height: '100px', gap: '8px', paddingBottom: '0.5rem' }}>
                                {[35, 20, 50, 45, 15, 60, 48, 75, 40, 25].map((h, i) => (
                                    <div key={i} style={{ flex: 1, height: `${h}%`, background: i === 7 ? 'var(--gold)' : 'rgba(201,168,76,0.3)', borderRadius: '2px' }}></div>
                                ))}
                            </div>
                        </div>
                        <div style={{ background: 'rgba(7, 17, 31, 0.4)', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem' }}>
                            <div style={{ fontSize: '0.72rem', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '1.5rem' }}>Fund Utilization</div>
                            {[
                                { l: 'Grant A', p: '87%', c: 'var(--gold)' },
                                { l: 'Grant B', p: '62%', c: 'var(--green-soft)' },
                                { l: 'General', p: '45%', c: 'var(--slate)' }
                            ].map((f, i) => (
                                <div key={i} style={{ marginBottom: '1rem' }}>
                                    <div style={{ height: '5px', background: 'rgba(255,255,255,0.05)', borderRadius: '5px', marginBottom: '0.4rem', overflow: 'hidden' }}>
                                        <div style={{ width: f.p, height: '100%', background: f.c }}></div>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.7rem' }}>
                                        <span style={{ color: 'var(--slate-light)', fontStyle: 'italic' }}>{f.l}</span>
                                        <span style={{ color: f.c, fontWeight: 600 }}>{f.p}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '1.5rem' }}>
                        <div style={{ padding: '1rem 1.5rem' }}>
                            <div style={{ fontSize: '0.72rem', color: 'var(--slate)', textTransform: 'uppercase', marginBottom: '1rem' }}>Expense Breakdown</div>
                            {[
                                { l: 'Program Costs', v: '54%', d: 'var(--gold)' },
                                { l: 'Salaries', v: '28%', d: 'var(--green-soft)' },
                                { l: 'Admin & Overhead', v: '18%', d: 'var(--slate)' }
                            ].map((e, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem', fontSize: '0.75rem' }}>
                                    <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: e.d }}></div>
                                    <span style={{ color: 'var(--slate-light)', flex: 1 }}>{e.l}</span>
                                    <span style={{ color: e.d, fontWeight: 700 }}>{e.v}</span>
                                </div>
                            ))}
                        </div>
                        <div style={{ padding: '1rem 1.5rem', borderLeft: '1px solid rgba(255,255,255,0.05)' }}>
                            <div style={{ fontSize: '0.72rem', color: 'var(--slate)', textTransform: 'uppercase', marginBottom: '0.75rem' }}>Forecast Trend (to Year-End)</div>
                            <div style={{ fontSize: '2rem', fontWeight: 600, color: 'var(--green-soft)', marginBottom: '0.2rem' }}>$4.05M</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--slate)', fontStyle: 'italic', marginBottom: '0.5rem' }}>Projected Year-End Actual</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600 }}>$150K under budget · On track</div>
                        </div>
                    </div>
                </div>
             </div>
          )}

          {/* ─── FORECAST MODEL ─── */}
          {tab === 'Driver-Based Forecast Model' && (
             <div className="forecast-preview">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                   {[
                     { t: 'Revenue Drivers', c: '📊', i: ['Grant income by funder', 'Program fee revenue', 'Donation projections', 'Government transfers'] },
                     { t: 'Expense Drivers', c: '💼', i: ['Headcount × avg salary', 'Program delivery costs', 'Overhead allocation %', 'Capital expenditure plan'] }
                   ].map((card, i) => (
                      <div key={i} style={{ padding: '2rem 1.5rem', background: 'rgba(7, 17, 31, 0.4)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                        <h4 style={{ color: 'var(--gold)', marginBottom: '1.5rem', fontSize: '1.05rem', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>{card.c} {card.t}</h4>
                        <div style={{ fontSize: '0.85rem', color: 'var(--slate-light)', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {card.i.map((li, j) => (
                            <div key={j} style={{ display: 'flex', alignItems: 'flex-start' }}><Diamond /> {li}</div>
                          ))}
                        </div>
                      </div>
                   ))}
                   <div style={{ padding: '2rem 1.5rem', background: 'rgba(7, 17, 31, 0.4)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                      <h4 style={{ color: 'var(--gold)', marginBottom: '1.5rem', fontSize: '1.05rem', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>🔀 Scenario Toggle</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {[
                          { l: 'BASE CASE', d: 'Most likely', c: 'rgba(78, 173, 124, 0.1)', t: '#4EAD7C' },
                          { l: 'BEST CASE', d: 'Upside scenario', c: 'rgba(201, 168, 76, 0.1)', t: 'var(--gold)' },
                          { l: 'WORST CASE', d: 'Risk scenario', c: 'rgba(212, 78, 78, 0.1)', t: '#D44E4E' }
                        ].map((btn, j) => (
                          <div key={j} style={{ padding: '0.75rem 1rem', background: btn.c, border: `1px solid ${btn.t}22`, borderRadius: '6px', textAlign: 'center' }}>
                            <div style={{ fontSize: '0.75rem', fontWeight: 700, color: btn.t, letterSpacing: '0.05em' }}>{btn.l}</div>
                            <div style={{ fontSize: '0.65rem', color: btn.t, opacity: 0.8, fontStyle: 'italic' }}>{btn.d}</div>
                          </div>
                        ))}
                      </div>
                   </div>
                </div>
                <div style={{ padding: '1.5rem 2rem', background: 'rgba(201, 168, 76, 0.04)', border: '1px solid rgba(201, 168, 76, 0.15)', borderRadius: '12px', fontSize: '0.88rem', color: 'var(--slate-light)', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                    <span style={{ fontSize: '1.25rem' }}>💡</span>
                    <p style={{ lineHeight: 1.6 }}>
                      This is <strong style={{ color: 'var(--gold)' }}>structured thinking</strong>, not just spreadsheet arithmetic. Each driver is documented, assumptions are transparent, and any team member can update the model without breaking it.
                    </p>
                </div>
             </div>
          )}

          {/* ─── DATA TRANSFORMATION PREVIEW ─── */}
          {tab === 'Data Transformation & ETL Pipeline' && (
            <div className="infrastructure-preview animated-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
                 {[
                   { t: 'Step 1: Integration', i: ['Direct ERP connection (Sage/NetSuite)', 'Daily bank feed synchronization', 'Payroll (HRIS) data mapping', 'API connector configuration'] },
                   { t: 'Step 2: Cleanse & ETL', i: ['Auto-reconcile transactions', 'Cross-system data validation', 'DIM mapping & deduplication', 'Historical trend standardization'] },
                   { t: 'Step 3: Ready for BI', i: ['Flat production-ready tables', 'Automated refresh schedules', 'Audit-ready history tracking', 'Performance-optimized indexing'] }
                 ].map((card, i) => (
                   <div key={i} style={{ padding: '1.75rem', background: 'rgba(7, 17, 31, 0.4)', border: '1px solid var(--border)', borderRadius: '12px' }}>
                      <h4 style={{ color: 'var(--gold)', marginBottom: '1.25rem', fontSize: '1rem', fontStyle: 'italic', fontFamily: 'var(--font-display)' }}>⚙️ {card.t}</h4>
                      <div style={{ fontSize: '0.82rem', color: 'var(--slate-light)', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {card.i.map((li, j) => (
                          <div key={j} style={{ display: 'flex', alignItems: 'flex-start' }}><Diamond /> {li}</div>
                        ))}
                      </div>
                   </div>
                 ))}
               </div>
               <div style={{ padding: '1.75rem 2rem', background: 'rgba(255, 255, 255, 0.03)', border: '1px solid var(--border)', borderRadius: '12px', fontSize: '0.92rem', color: 'var(--slate-light)' }}>
                 <p style={{ lineHeight: 1.6 }}>
                   <strong style={{ color: 'var(--cream)' }}>The Technical Advantage:</strong> Most teams live in manual Excel exports. Our pipelines turn your raw data into a <strong style={{ color: 'var(--gold)' }}>single source of truth</strong> that refreshes automatically, eliminating the 'data preparation' stage of your month-end.
                 </p>
               </div>
            </div>
          )}

          {/* ─── TRANSACTIONAL ANALYSIS PREVIEW ─── */}
          {tab === 'Transactional Analysis Framework' && (
            <div className="analysis-preview animated-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
               <div style={{ background: 'rgba(7, 17, 31, 0.2)', border: '1px solid var(--border)', borderRadius: '12px', padding: '2rem' }}>
                 <h4 style={{ fontSize: '1rem', color: 'var(--gold)', marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>General Ledger Mapping & Pipelining</h4>
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', alignItems: 'center' }}>
                    <div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--slate)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>Process Flow</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                           {[
                             { label: 'Extraction', desc: 'Auto-export 10k+ annual GL lines' },
                             { label: 'Classification', desc: 'Predictive Vendor category tagging' },
                             { label: 'Mapping', desc: 'Direct Chart of Account translation' },
                             { label: 'Validation', desc: 'Pre-flight check for mapping gaps' },
                             { label: 'Roll-up', desc: 'Automatic population of P&L views' }
                           ].map((item, i) => (
                             <div key={i} style={{ fontSize: '0.85rem', color: 'var(--cream-dim)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                               <span style={{ color: 'var(--gold)', fontSize: '0.8rem' }}>▶</span> 
                               <span><strong>{item.label}:</strong> <span style={{ color: 'var(--slate)' }}>{item.desc}</span></span>
                             </div>
                           ))}
                        </div>
                    </div>
                    <div style={{ background: 'rgba(7, 17, 31, 0.3)', padding: '2rem', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                        <div style={{ fontSize: '0.75rem', color: 'var(--gold)', textTransform: 'uppercase', marginBottom: '1rem', letterSpacing: '0.1em' }}>Business Outcome</div>
                        <p style={{ fontSize: '0.88rem', lineHeight: 1.7, color: 'var(--slate-light)' }}>
                          We transform "messy" raw system exports into structured dimensions. This allows you to slice your finance data by <strong style={{ color: 'var(--cream)' }}>Program, Project, or Vendor</strong> instantly without manual reformatting.
                        </p>
                    </div>
                 </div>
               </div>
               <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                  {[
                    { t: 'Formatting', i: '🔎', d: 'Standardizes disparate source files into a single, clean table structure.' },
                    { t: 'Integrity', i: '🎯', d: 'Connects raw account codes to your Board-level reporting categories.' },
                    { t: 'Pipelining', i: '🚀', d: 'Pushes cleaned transactions directly to your dashboard models.' }
                  ].map((item, i) => (
                    <div key={i} style={{ padding: '1.5rem', background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '8px', textAlign: 'center' }}>
                       <div style={{ fontSize: '1.75rem', marginBottom: '0.85rem' }}>{item.i}</div>
                       <div style={{ fontSize: '0.88rem', fontWeight: 700, color: 'var(--cream)', marginBottom: '0.5rem' }}>{item.t}</div>
                       <p style={{ fontSize: '0.78rem', color: 'var(--slate)', lineHeight: 1.5 }}>{item.d}</p>
                    </div>
                  ))}
               </div>
            </div>
          )}

        </div>

        {/* Footer Buttons matched to screenshot layout */}
        <div className="modal-footer" style={{ padding: '1.5rem 2.5rem', borderTop: '1px solid var(--border)', display: 'flex', gap: '1.25rem', justifyContent: 'center', alignItems: 'center', background: 'rgba(7, 17, 31, 0.2)' }}>
          <button className="btn btn-outline btn-sm" style={{ padding: '0.75rem 1.75rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--foreground)', fontWeight: 600, fontSize: '0.85rem' }} onClick={onClose}>
            Close Preview
          </button>
          
          <button className="btn btn-outline btn-sm" style={{ padding: '0.75rem 1.75rem', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px', color: 'var(--foreground)', fontWeight: 600, fontSize: '0.85rem', display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            <span>⬇</span> Preview / Download ({tab.includes('Template') || tab.includes('Model') ? 'XLSX' : 'PDF'})
          </button>

          <a href="#contact" className="btn btn-primary btn-sm" style={{ background: 'var(--gold)', color: 'var(--navy)', fontWeight: 600, padding: '0.75rem 2rem', borderRadius: '8px', fontSize: '0.88rem' }} onClick={onClose}>
             <span>Book Your Real Assessment →</span>
          </a>
        </div>
      </div>
    </div>
  );
}
