export default function Results() {
  const results = [
    {
      icon: '⏱️',
      num: '40–60%',
      label: 'Less time spent on manual data prep',
      context: 'per month, consistently'
    },
    {
      icon: '🚀',
      num: '5×',
      label: 'Faster reporting cycle time',
      context: '5 days → under 1 day'
    },
    {
      icon: '🎯',
      num: '90 days',
      label: 'To a fully transformed finance function',
      context: 'from assessment to live systems'
    },
    {
      icon: '💡',
      num: '100%',
      label: 'Team ownership of every system',
      context: 'no ongoing dependency on us'
    }
  ];

  return (
    <section className="section results-section" id="results">
      <div className="container">
        <div className="section-header centered" style={{ marginBottom: '3rem' }}>
          <span className="gold-rule center"></span>
          <span className="label reveal">What Changes</span>
          <h2 className="display-lg reveal delay-1" style={{ marginTop: '0.75rem' }}>
            Outcomes That <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Matter</em>
          </h2>
          <p className="body-lg reveal delay-2" style={{ marginTop: '1rem', maxWidth: '500px', marginLeft: 'auto', marginRight: 'auto' }}>
            These aren't aspirational targets — they're the concrete shifts organizations experience within the first 90 days.
          </p>
        </div>
        <div className="results-grid">
          {results.map((r, i) => (
            <div key={i} className={`result-item reveal delay-${i + 1}`}>
              <div className="result-bar"></div>
              <span className="result-icon">{r.icon}</span>
              <span className="result-num">{r.num}</span>
              <div className="result-label">{r.label}</div>
              <div className="result-context">{r.context}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
