'use client';

export default function Offer({ onOpenModal, onPreview }: { onOpenModal: () => void, onPreview?: (name: string) => void }) {
  const includes = [
    '60-minute discovery call',
    'Deep-dive audit of reporting & budgeting',
    'Custom 8-12 page PDF report',
    'AI use case identification',
    'Priority 30-60-90 day roadmap',
    'Automation opportunities'
  ];

  return (
    <section className="section offer-section" id="offer">
      <div className="container">
        <div className="section-header centered" style={{ marginBottom: '3rem' }}>
          <span className="gold-rule center"></span>
          <span className="label reveal">Entry Offer</span>
          <h2 className="display-lg reveal delay-1" style={{ marginTop: '0.75rem' }}>
            Start with a <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Focused Assessment</em>
          </h2>
          <p className="body-lg reveal delay-2" style={{ marginTop: '1rem', maxWidth: '560px', marginLeft: 'auto', marginRight: 'auto' }}>
            The lowest-risk way to begin. Walk away with a clear picture of exactly what to fix — and where AI can help.
          </p>
        </div>
        <div className="offer-card reveal">
          <div className="offer-badge">⭐ Most Popular Starting Point</div>
          <div className="offer-grid">
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, marginBottom: '1.5rem' }}>
                FP&A Process Assessment &amp; Optimization Report
              </h3>
              <ul className="offer-includes">
                {includes.map(inc => <li key={inc}>{inc}</li>)}
              </ul>

              <div
                className="offer-sample-row"
                style={{ marginTop: '1.5rem', cursor: 'pointer' }}
                onClick={() => onPreview && onPreview('Sample FP&A Assessment Report')}
              >
                <span className="offer-sample-row-icon">📄</span>
                <div className="offer-sample-row-text">
                  <strong>See a sample of what you'll receive</strong>
                  <span>Preview the FP&A Assessment Report structure →</span>
                </div>
                <span style={{ color: 'var(--gold)', fontSize: '0.9rem' }}>↗</span>
              </div>

              <div style={{ marginTop: '1.25rem', padding: '1.25rem 1.5rem', background: 'var(--navy)', border: '1px solid rgba(78,173,124,0.2)', borderRadius: '8px' }}>
                <p style={{ fontSize: '0.85rem', color: 'var(--green-soft)', lineHeight: 1.6 }}>
                  <strong>Identify:</strong> What's broken · What to fix first · Where AI helps · Roadmap to clarity.
                </p>
              </div>
            </div>
            <div>
              <div className="offer-price-box" style={{ position: 'relative' }}>
                <div className="offer-price">
                  <span style={{ fontSize: '1rem', fontStyle: 'italic', fontWeight: 400, opacity: 0.8, marginRight: '0.5rem', display: 'block', marginBottom: '-0.5rem' }}>As low as</span>
                  $250
                </div>
                <div className="offer-price-note">
                  Pricing depends upon complexity of your organization. One-time Investment · <strong>Expected ROI:</strong> Typically pays for itself in time savings alone within 30 days.
                </div>
                <button
                  className="btn btn-primary"
                  style={{ width: '100%', justifyContent: 'center', marginBottom: '0.75rem' }}
                  onClick={onOpenModal}
                >
                  <span>Book Your Assessment →</span>
                </button>
                <button
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center' }}
                  onClick={onOpenModal}
                >
                  Schedule a Free Call First
                </button>
              </div>
              <div className="offer-upgrade">
                <p>Typical Next Steps:</p>
                <p style={{ marginTop: '0.5rem' }}><strong>Implementation</strong> → $2k–$10k+</p>
                <p><strong>Ongoing Advisory</strong> → Monthly retainer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
