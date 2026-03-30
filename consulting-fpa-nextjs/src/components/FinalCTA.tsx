import Link from 'next/link';

export default function FinalCTA({ onOpenModal }: { onOpenModal: () => void }) {
  return (
    <section className="final-cta" id="contact">
      <div className="container">
        <span className="gold-rule center reveal"></span>
        <span className="label reveal">Let's Talk</span>
        <h2 className="display-lg reveal delay-1" style={{ marginTop: '0.75rem' }}>
          Ready to Transform Your<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Finance Function?</em>
        </h2>
        <p className="reveal delay-2">
          Book a free 30-minute call to explore whether we're the right fit — no commitment, no pressure, just a clear conversation about where you are and where you could be.
        </p>
        <div className="btn-group reveal delay-3">
          <button onClick={onOpenModal} className="btn btn-primary" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>
            <span>📅 Book Free FP&A Assessment</span>
          </button>
          <Link href="#offer" className="btn btn-outline" style={{ fontSize: '1rem', padding: '1rem 2.5rem' }}>View the $250 Offer →</Link>
        </div>
        <p className="reveal delay-4" style={{ marginTop: '2rem', fontSize: '0.8rem', color: 'var(--slate)' }}>
          Typically responds within 1 business day · Based in Canada · Available globally (remote)
        </p>
      </div>
    </section>
  );
}
