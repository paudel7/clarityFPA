export default function Cases() {
  const cases = [
    {
      tag: 'Non-Profit · Reporting',
      title: 'Reporting Cycle: 5 Days → 1 Day',
      desc: 'A mid-size non-profit was spending the first week of every month manually assembling reports from four data sources.',
      sol: 'Centralized data infrastructure + automated dashboard design.',
      res: 'Reporting cycle reduced by 80%'
    },
    {
      tag: 'Education · Budgeting',
      title: 'Multi-Fund Budget Clarity',
      desc: 'An education org managing six funding streams had no clear visibility into how each was tracking vs budget.',
      sol: 'Structured fund-tracking model with real-time alerts.',
      res: 'Eliminated year-end budget surprises'
    },
    {
      tag: 'Public Sector · Forecasting',
      title: 'Driver-Based Forecasting',
      desc: 'A public sector team lacked forecasting infrastructure to make confident resource allocation decisions.',
      sol: 'Driver-based forecasting model aligned to program metrics.',
      res: 'Decision confidence increased by 60%'
    }
  ];

  return (
    <section className="section cases-section" id="cases">
      <div className="container">
        <div className="section-header">
          <span className="gold-rule"></span>
          <span className="label reveal">Practice</span>
          <h2 className="display-lg reveal delay-1" style={{ marginTop: '0.75rem', maxWidth: '600px' }}>
            Finance Transformations in <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Practice</em>
          </h2>
          <p className="body-lg reveal delay-2" style={{ marginTop: '1rem', maxWidth: '600px' }}>
            Representative scenarios illustrating the outcomes organizations achieve.
          </p>
        </div>
        <div className="grid-3" style={{ marginTop: '3rem' }}>
          {cases.map((c, i) => (
            <div key={i} className={`case-card reveal delay-${i + 1}`}>
              <div className="case-tag">{c.tag}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <p style={{ fontSize: '0.82rem', color: 'var(--slate)', marginBottom: 0 }}>Solution: {c.sol}</p>
              <div className="case-result">{c.res}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
