'use client';

export default function About({ onPreview }: { onPreview?: (name: string) => void }) {
  const categories = [
    {
      label: 'Cloud & AI',
      items: [
        { icon: 'aws', title: 'AWS Certified', desc: 'Amazon Web Services AI', logo: '☁️' },
        { icon: 'db', title: 'Databricks Certified', desc: 'Generative AI Fundamentals', logo: 'DB' },
        { icon: 'db', title: 'Databricks Certified', desc: 'Azure Databricks Platform Architect', logo: 'DB' },
        { icon: 'lss', title: 'Lean Six Sigma', desc: 'Process Excellence Certified', logo: 'LSS' }
      ]
    }, // Total 4
    {
      label: 'Oracle Platform & AI',
      items: [
        { icon: 'or', title: 'Oracle Certified', desc: 'Fusion Cloud ERP Process', logo: 'Or' },
        { icon: 'or', title: 'Oracle Certified', desc: 'Data Platform Foundations', logo: 'Or' },
        { icon: 'or', title: 'Oracle Certified', desc: 'Cloud Infrastructure AI Foundations', logo: 'Or' },
        { icon: 'or', title: 'Oracle Certified', desc: 'Fusion AI Agent Studio', logo: 'Or' }
      ]
    }, // Total 4
    {
      label: 'Project Management & Analytics',
      items: [
        { icon: 'or', title: 'Oracle Primavera P6', desc: 'Professional Project Management', logo: 'Or' },
        { icon: 'or', title: 'Oracle Primavera Cloud', desc: 'Portfolio Management', logo: 'Or' },
        { icon: 'co', title: 'BI Essentials — Power BI', desc: 'Finance Analysts Specialization', logo: 'Co' }
      ]
    } // Total 3
  ];

  const tags = [
    'FP&A', 'SQL', 'Power BI', 'Advanced Excel', 'Power Query', 
    'Google Sheets', 'Databricks', 'Oracle ERP', 'AI Workflows',
    'Non-Profit', 'Public Sector', 'Education', 'Energy',
    'Environment', '10+ Years'
  ];

  const labels = ['ABOUT', 'CREDENTIALS'];

  return (
    <section className="section about-section" id="about" style={{ background: 'var(--navy)' }}>
      <div className="container">
        
        <div className="about-layout-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.2fr) minmax(0, 1fr)', gap: '4rem', alignItems: 'start' }}>
          
          {/* Left Column: Bio & Story */}
          <div className="about-bio reveal">
            <span className="gold-rule" style={{ display: 'block', marginBottom: '1.5rem' }}></span>
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.65rem' }}>{labels[0]}</span>
            <h2 className="display-lg" style={{ marginBottom: '2.5rem' }}>
              Built on Real <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Finance Experience</em>
            </h2>
            
            <div className="about-quote-box" style={{ background: 'var(--navy-mid)', borderLeft: '3px solid var(--gold)', padding: '1.5rem 2rem', borderRadius: '0 12px 12px 0', marginBottom: '2.5rem' }}>
              <p style={{ fontStyle: 'italic', color: 'var(--cream-dim)', fontSize: '1.1rem', lineHeight: 1.6, fontFamily: 'var(--font-display)' }}>
                "Practical over theoretical. Working deliverables over slide decks. Independence over dependency."
              </p>
            </div>

            <div 
                className="offer-sample-row" 
                style={{ marginBottom: '2.5rem', cursor: 'pointer', background: 'var(--navy-mid)', border: '1px solid var(--border)', padding: '1.25rem', borderRadius: '12px' }}
                onClick={() => onPreview && onPreview('Sample FP&A Assessment Report')}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <span style={{ fontSize: '1.4rem' }}>📄</span>
                <div>
                  <strong style={{ fontSize: '0.88rem', color: 'var(--cream)', display: 'block' }}>Sample Assessment Report</strong>
                  <span style={{ fontSize: '0.75rem', color: 'var(--gold)', fontWeight: 600 }}>See exactly what we deliver →</span>
                </div>
              </div>
            </div>

            <div className="about-text" style={{ color: 'var(--slate-light)', fontSize: '1rem', lineHeight: 1.7 }}>
              <p style={{ marginBottom: '1.5rem' }}>
                With over 10 years working inside finance teams across non-profit, education, public sector, energy, and environmental organizations, I've lived the problems I now help solve — closing books with limited resources, justifying budgets to boards, tracking grant compliance across multiple funding streams, and navigating the reporting demands of mission-driven work.
              </p>
              <p style={{ marginBottom: '2.5rem' }}>
                My background bridges financial planning & analysis, data engineering (SQL, Power BI, Databricks), Oracle ERP systems, and AI workflow design — an uncommon combination that lets me connect finance strategy directly to practical, automated implementation.
              </p>
            </div>

            <div className="about-tags" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.65rem' }}>
              {tags.map((tag, i) => (
                <span key={i} className="about-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column: Credentials */}
          <div className="about-creds-side reveal delay-2">
            <span className="gold-rule" style={{ display: 'block', marginBottom: '1.5rem' }}></span>
            <span className="label" style={{ display: 'block', marginBottom: '0.75rem', fontSize: '0.65rem' }}>{labels[1]}</span>
            
            <div style={{ marginTop: '3.5rem' }}> {/* Offset to match h2 gap on left */}
              {categories.map((cat, i) => (
                <div key={i} className="cred-cat-block" style={{ marginBottom: '2rem' }}>
                  <h4 style={{ fontSize: '0.62rem', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '0.8rem', fontFamily: 'var(--font-mono)' }}>{cat.label}</h4>
                  <div className="cred-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.5rem' }}>
                    {cat.items.map((item, j) => (
                      <div key={j} className="cred-card mini" style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', padding: '0.55rem 0.75rem', background: 'var(--navy-mid)', border: '1px solid var(--border)', borderRadius: '8px' }}>
                        <div className={`cred-card-logo ${item.icon}`} style={{ width: '28px', height: '28px', fontSize: '0.6rem', padding: '0' }}>{item.logo}</div>
                        <div style={{ flex: 1, minWidth: 0 }}>
                          <strong style={{ fontSize: '0.7rem', color: 'var(--cream)', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.title}</strong>
                          <span style={{ fontSize: '0.62rem', color: 'var(--slate)', display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              {/* Stats Summary - Integrated into list flow */}
              <div className="cred-stats-row" style={{ marginTop: '2.5rem', padding: '1.75rem', background: 'var(--navy-mid)', border: '1px solid var(--border)', borderRadius: '12px', display: 'flex', justifyContent: 'space-around', textAlign: 'center' }}>
                <div>
                    <span className="cred-stat-num" style={{ fontSize: '1.6rem', color: 'var(--gold)', fontWeight: 600, display: 'block', lineHeight: 1.2 }}>11</span>
                    <span className="cred-stat-label" style={{ fontSize: '0.6rem', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Certs</span>
                </div>
                <div style={{ width: '1px', background: 'var(--border)', height: '30px', alignSelf: 'center' }}></div>
                <div>
                    <span className="cred-stat-num" style={{ fontSize: '1.6rem', color: 'var(--gold)', fontWeight: 600, display: 'block', lineHeight: 1.2 }}>10+</span>
                    <span className="cred-stat-label" style={{ fontSize: '0.6rem', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Years</span>
                </div>
                <div style={{ width: '1px', background: 'var(--border)', height: '30px', alignSelf: 'center' }}></div>
                <div>
                    <span className="cred-stat-num" style={{ fontSize: '1.6rem', color: 'var(--gold)', fontWeight: 600, display: 'block', lineHeight: 1.2 }}>5</span>
                    <span className="cred-stat-label" style={{ fontSize: '0.6rem', color: 'var(--slate)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Sectors</span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
