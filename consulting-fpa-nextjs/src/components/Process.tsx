export default function Process() {
  const steps = [
    {
      num: '01',
      icon: '🔍',
      title: 'Diagnose',
      desc: 'Map systems and score process maturity to identify your primary bottlenecks and time leaks.',
      tags: ['Systems Review', 'Process Scoring']
    },
    {
      num: '02',
      icon: '📐',
      title: 'Design',
      desc: 'Architect a custom solution tailored to your drivers—from reporting models to AI automation.',
      tags: ['Future State Gap', 'AI Opportunities']
    },
    {
      num: '03',
      icon: '⚙️',
      title: 'Implement',
      desc: 'Build and connect live dashboards, forecasting models, and automated workflows against your real data.',
      tags: ['Dashboards', 'driver models']
    },
    {
      num: '04',
      icon: '🎓',
      title: 'Enable',
      desc: 'Train your team for self-sufficiency and hand over fully documented systems in 90 days.',
      tags: ['Documentation', 'Team Training']
    }
  ];

  return (
    <section className="section approach-section" id="approach">
      <div className="container">
        <div className="section-header">
          <span className="gold-rule"></span>
          <span className="label reveal">Our Methodology</span>
          <h2 className="display-lg reveal delay-1" style={{ marginTop: '0.75rem', maxWidth: '600px' }}>
            A Practical, <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Implementation-Focused</em> Approach
          </h2>
          <p className="body-lg reveal delay-2" style={{ marginTop: '1rem', maxWidth: '560px' }}>
            We don’t just give advice. We build, test, and hand over fully working finance systems that your team can own forever.
          </p>
        </div>
        <div className="approach-steps reveal">
          {steps.map((step, i) => (
            <div key={i} className="approach-step">
              <span className="approach-num">{step.num}</span>
              <div className="approach-step-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
              <div className="approach-step-tags">
                {step.tags.map(tag => <span key={tag}>{tag}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
