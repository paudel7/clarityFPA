'use client';

export default function TransformationSection({ onPreview }: { onPreview?: (name: string) => void }) {
  const cases = [
    {
      badge: 'NON-PROFIT · REPORTING',
      title: 'Reporting Cycle: 5 Days → 1 Day',
      problem: 'A mid-size non-profit was spending the first week of every month manually assembling reports from four data sources. Finance team was exhausted.',
      solution: 'Centralized data infrastructure + automated dashboard design.',
      outcome: 'Reporting cycle reduced from 5 days to under 1 day.'
    },
    {
      badge: 'EDUCATION · BUDGETING',
      title: 'Multi-Fund Budget Clarity',
      problem: 'An education org managing six funding streams had no clear visibility into how each was tracking vs budget. Year-end surprises were common and costly.',
      solution: 'Structured fund-tracking model with variance reporting and automated alerts.',
      outcome: 'Eliminated year-end surprises · Budget accuracy improved 34%'
    },
    {
      badge: 'PUBLIC SECTOR · FORECASTING',
      title: 'Driver-Based Forecasting',
      problem: 'A public sector program team lacked forecasting infrastructure to make confident resource allocation decisions. Their annual budget exercise was disconnected from reality.',
      solution: 'Driver-based forecasting model aligned to program-level metrics.',
      outcome: 'Leadership made resource decisions with 60% more confidence'
    }
  ];

  return (
    <section className="section transform-section" id="transformation" style={{ background: 'var(--navy-mid)' }}>
      <div className="container">
        <div className="section-header centered">
          <span className="gold-rule center"></span>
          <h2 className="display-lg visible delay-1" style={{ marginTop: '0.75rem' }}>
            Finance Transformations in <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Practice</em>
          </h2>
          <p className="body-lg visible delay-2" style={{ marginTop: '1.25rem', maxWidth: '640px', marginLeft: 'auto', marginRight: 'auto', color: 'var(--slate-light)' }}>
            Representative scenarios illustrating the kinds of transformations we design — and the outcomes organizations achieve.
          </p>
        </div>

        <div className="transform-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem', marginTop: '3.5rem' }}>
          {cases.map((c, i) => (
            <div key={i} className={`transform-card reveal delay-${i + 1}`} style={{ background: 'var(--navy)', border: '1px solid var(--border)', borderRadius: '16px', padding: '2.5rem', display: 'flex', flexDirection: 'column', transition: 'all 0.3s ease' }}>
              <div style={{ alignSelf: 'flex-start', background: 'rgba(201,168,76,0.06)', border: '1px solid rgba(201,168,76,0.2)', padding: '0.4rem 1rem', borderRadius: '4px', fontSize: '0.65rem', color: 'var(--gold)', letterSpacing: '0.15em', fontWeight: 600, fontFamily: 'var(--font-mono)', marginBottom: '1.75rem' }}>
                {c.badge}
              </div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--cream)', fontWeight: 600, marginBottom: '1.5rem', fontFamily: 'var(--font-display)', fontStyle: 'italic', lineHeight: 1.3 }}>
                {c.title}
              </h3>
              <p style={{ fontSize: '0.92rem', color: 'var(--slate-light)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                {c.problem}
              </p>
              <p style={{ fontSize: '0.85rem', color: 'var(--slate)', fontStyle: 'italic', marginBottom: '2rem', borderLeft: '2px solid var(--border)', paddingLeft: '1rem' }}>
                <span style={{ color: 'var(--slate-light)', fontWeight: 500 }}>Solution:</span> {c.solution}
              </p>
              
              <div style={{ marginTop: 'auto', background: 'rgba(78,173,124,0.05)', border: '1px solid rgba(78,173,124,0.2)', padding: '1.25rem', borderRadius: '8px' }}>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--green-soft)', fontWeight: 700 }}>→</span>
                  <p style={{ fontSize: '0.88rem', color: 'var(--green-soft)', fontWeight: 500, lineHeight: 1.5 }}>{c.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="transform-footer centered" style={{ marginTop: '4rem', padding: '2rem', borderTop: '1px solid var(--border)' }}>
          <p style={{ fontSize: '0.9rem', color: 'var(--slate)', fontStyle: 'italic' }}>
            Want the full story? The <span style={{ color: 'var(--gold)', fontWeight: 600, cursor: 'pointer' }} onClick={() => onPreview && onPreview('Mini Case Pack')}>Mini Case Pack</span> includes problem, solution, and outcome narrative for all three scenarios.
          </p>
        </div>
      </div>
    </section>
  );
}
