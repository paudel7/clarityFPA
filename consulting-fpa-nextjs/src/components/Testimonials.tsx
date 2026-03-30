export default function Testimonials() {
  const testimonials = [
    {
      quote: "The automated dashboards have saved our team 20+ hours a month. We finally have a single source of truth for our grant reporting.",
      author: "Finance Director",
      org: "Education Non-Profit"
    },
    {
      quote: "Most consultants just give advice. Clarity actually built the models and trained our staff to use them independently. Highly recommended.",
      author: "CFO",
      org: "Public Sector Agency"
    },
    {
      quote: "The driver-based forecasting allowed us to present to the board with total confidence. We caught a potential deficit 4 months earlier than usual.",
      author: "Senior Manager",
      org: "Regional Museum Foundation"
    }
  ];

  return (
    <section className="section testimonials-section" style={{ background: 'var(--navy-mid)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <div className="section-header centered">
          <span className="label">Social Proof</span>
          <h2 className="display-md" style={{ marginTop: '0.5rem' }}>Trusted by <em style={{ color: 'var(--gold)' }}>Mission-Driven</em> Finance Leaders</h2>
        </div>
        <div className="grid-3" style={{ marginTop: '3rem' }}>
          {testimonials.map((t, i) => (
            <div key={i} className="test-card reveal" style={{ background: 'var(--navy)', padding: '2rem', borderRadius: '12px', border: '1px solid var(--border-sub)' }}>
              <div style={{ color: 'var(--gold)', fontSize: '1.5rem', marginBottom: '1rem' }}>"</div>
              <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--cream-dim)', fontSize: '0.95rem', lineHeight: 1.6 }}>{t.quote}</p>
              <div>
                <strong style={{ display: 'block', color: 'var(--gold-light)', fontSize: '0.9rem' }}>{t.author}</strong>
                <span style={{ fontSize: '0.75rem', color: 'var(--slate)' }}>{t.org}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
