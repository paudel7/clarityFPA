'use client';

export default function PainSection({ onPreview }: { onPreview?: (name: string) => void }) {
  const pains = [
    {
      icon: '📅',
      title: 'Reporting Takes Days or Weeks',
      text: 'Monthly close is a marathon sprint. Leadership is waiting. Your team is exhausted — and the data is already stale by the time it\'s ready.',
    },
    {
      icon: '🗂️',
      title: 'Data Scattered Across Systems',
      text: 'Spreadsheets, email attachments, accounting software that doesn\'t talk to anything — reconciling it all is a full-time job in itself.',
    },
    {
      icon: '📊',
      title: 'Forecasts Are Difficult to Maintain',
      text: 'A forecast built once, never updated. Or one that requires a finance PhD to maintain. Neither helps leadership make real decisions.',
    },
    {
      icon: '🏷️',
      title: 'Grant & Fund Tracking Is Messy',
      text: 'Multiple funding streams, different requirements, unclear allocation rules. Audits are stressful. Donor reporting takes forever.',
    },
    {
      icon: '⏳',
      title: 'More Preparing Than Analyzing',
      text: 'Your finance team\'s most valuable hours go to data wrangling, not insight generation. The work that moves the mission gets squeezed out.',
    },
    {
      icon: '✅',
      title: 'There\'s a Better Way',
      text: 'These aren\'t permanent conditions — they\'re symptoms of systems that haven\'t been modernized. The fix is structured, proven, and practical.',
      special: true,
    },
  ];

  return (
    <section className="section pain-section" id="pain">
      <div className="container">
        <div className="section-header">
          <span className="gold-rule"></span>
          <span className="label visible">Pain Identification</span>
          <h2 className="display-lg visible delay-1" style={{ marginTop: '0.75rem', maxWidth: '600px' }}>
            Are you dealing <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>with any of </em> these challenges?
          </h2>
          <p className="body-lg visible delay-2" style={{ marginTop: '1rem', maxWidth: '540px' }}>
            Finance teams in mission-driven organizations face predictable, solvable problems — yet most continue working around them.
          </p>
        </div>
        <div className="pain-grid">
          {pains.map((pain, i) => (
            <div 
              key={i} 
              className="pain-card visible"
              style={{ 
                background: pain.special ? 'var(--gold-dim)' : undefined,
                borderColor: pain.special ? 'var(--gold)' : undefined,
              }}
            >
              <div className="pain-icon">{pain.icon}</div>
              <h3>{pain.title}</h3>
              <p>{pain.text}</p>
              {pain.special && (
                <button 
                  className="btn-ghost" 
                  style={{ marginTop: '1rem' }}
                  onClick={() => onPreview && onPreview('Sample FP&A Assessment Report')}
                >
                  See the Assessment Sample Report →
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
