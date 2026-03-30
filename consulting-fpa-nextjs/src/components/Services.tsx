export default function Services({ onOpenModal, onPreview }: { onOpenModal: () => void, onPreview: (name: string) => void }) {
  const domains = [
    {
      icon: '📈',
      title: 'Reporting Automation',
      text: 'Stop the daily data scramble. We automate reporting to deliver insights in hours, not days.',
      outcomes: [
        'Live Power BI Dashboards',
        'Direct ERP/Data Connections',
        'Standardized Board Report Templates'
      ],
      sample: 'Finance Dashboard Mockup'
    },
    {
      icon: '🔮',
      title: 'Strategic Forecasting',
      text: 'Anticipate changes with driver-based scenario planning. Move to rolling live forecasts.',
      outcomes: [
        'Rolling 12-Month Forecasts',
        'Scenario Comparison (Best/Worst)',
        'Revenue & Expense Drivers'
      ],
      sample: 'Driver-Based Forecast Model'
    },
    {
      icon: '🤖',
      title: 'AI Workflows',
      text: 'Turn AI into a force multiplier. Intelligent variance commentary and data cleanup.',
      outcomes: [
        'AI Variance Analysis',
        'Automated Data Reconciliation',
        'Prompt Engineering for Tasks'
      ],
      sample: 'Non-Profit Budget Template'
    },
    {
      icon: '📊',
      title: 'Maturity Audit',
      text: 'Identify bottlenecks. We provide a structured roadmap to modernize your systems and talent.',
      outcomes: [
        'Complexity Score Mapping',
        '30-60-90 Day Action Plans',
        'Systems & Process Audit'
      ],
      sample: 'Sample FP&A Assessment Report'
    },
  ];

  return (
    <section className="section services-section" id="services">
      <div className="container">
        <div className="section-header">
          <span className="gold-rule"></span>
          <span className="label reveal">What We Do</span>
          <h2 className="display-lg reveal delay-1" style={{ marginTop: '0.75rem', maxWidth: '600px' }}>
            Four Domains of <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Finance Transformation</em>
          </h2>
        </div>
        <div className="grid-2" style={{ marginTop: '3rem' }}>
          {domains.map((domain, i) => (
            <div key={i} className={`service-card reveal delay-${(i % 2) + 1}`}>
              <div className="service-icon">{domain.icon}</div>
              <h3>{domain.title}</h3>
              <p>{domain.text}</p>
              <div className="service-outcomes">
                {domain.outcomes.map((outcome, j) => (
                  <div key={j} className="service-outcome">{outcome}</div>
                ))}
              </div>
              <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', paddingTop: '1.5rem' }}>
                <button className="btn btn-primary btn-sm" onClick={onOpenModal}>
                  <span>Book Free Audit</span>
                </button>
                {domain.sample && (
                  <button className="service-sample-link" onClick={() => onPreview(domain.sample)}>
                    <span>👁</span> See Sample
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
