export default function TrustStack({ onDownload, onPreview }: { onDownload: (name: string) => void, onPreview: (name: string) => void }) {
  const assets = [
    {
      type: '📄 PDF Report · 12 Pages',
      title: 'Sample FP&A Assessment Report',
      text: 'Our flagship 8–12 page audit covering maturity scores, root causes, AI opportunities, and a prioritized 90-day roadmap.',
      icon: '📄',
    },
    {
      type: '📊 Excel / Sheets · 4 Tabs',
      title: 'Non-Profit Budget Template',
      text: 'A ready-to-use budget workbook with fund-level tracking, expense categories, and monthly forecast tabs.',
      icon: '📊',
    },
    {
      type: '📈 Power BI Style · Visual Mock',
      title: 'Finance Dashboard Mockup',
      text: 'A visual mockup of the dashboard we build—including budget vs actual, utilization, and forecast trends.',
      icon: '📈',
    },
    {
      type: '🔮 Excel Model · Driver-Based',
      title: 'Driver-Based Forecast Model',
      text: 'A structured model with scenario toggles (base/best/worst) showing the logic behind our forecasting approach.',
      icon: '🔮',
    },
    {
      type: '⚙️ Infrastructure · SQL / ETL',
      title: 'Data Transformation & ETL Pipeline',
      text: 'End-to-end data pipeline setup: from raw system connections to structured databases ready for real-time processing and visualization.',
      icon: '⚙️',
    },
    {
      type: '🔎 Analysis · GL Mapping',
      title: 'Transactional Analysis Framework',
      text: 'Automated General Ledger extraction and mapping framework that transforms thousands of transactions into clean, report-ready dimensions.',
      icon: '🔎',
    },
  ];

  const renderPreview = (title: string) => {
    if (title.includes('Report')) {
      return (
        <div className="preview-pdf-page">
          <div className="preview-line gold"></div>
          <div className="preview-line wide"></div>
          <div className="preview-line med"></div>
          <div className="preview-line med"></div>
          <div className="preview-line short"></div>
          <div style={{ marginTop: 'auto', display: 'flex', gap: '4px' }}>
            <div style={{ width: '12px', height: '12px', background: 'var(--gold-dim)', borderRadius: '2px' }}></div>
            <div style={{ width: '12px', height: '12px', background: 'var(--gold-dim)', borderRadius: '2px' }}></div>
          </div>
        </div>
      );
    }
    if (title.includes('Budget')) {
      return (
        <div className="preview-sheet">
          {[1, 2, 3, 4].map(r => (
            <div key={r} className="preview-sheet-row">
              {[1, 2, 3, 4].map(c => (
                <div key={c} className={`preview-sheet-cell ${r === 1 ? 'h' : ''} ${r > 1 && c === 4 ? 'g' : ''}`}></div>
              ))}
            </div>
          ))}
        </div>
      );
    }
    if (title.includes('Dashboard')) {
      return (
        <div className="preview-chart">
           <div className="preview-chart-bars">
             <div className="preview-chart-bar" style={{ height: '40%' }}></div>
             <div className="preview-chart-bar b" style={{ height: '65%' }}></div>
             <div className="preview-chart-bar" style={{ height: '50%' }}></div>
             <div className="preview-chart-bar g" style={{ height: '90%' }}></div>
           </div>
           <div style={{ height: '4px', background: 'var(--border)', width: '100%' }}></div>
        </div>
      );
    }
    if (title.includes('Forecast')) {
      return (
        <div className="preview-chart" style={{ opacity: 0.8 }}>
           <div style={{ display: 'flex', gap: '4px', marginBottom: '10px' }}>
             <div style={{ width: '20px', height: '8px', background: 'rgba(78,173,124,0.3)', borderRadius: '2px' }}></div>
             <div style={{ width: '20px', height: '8px', background: 'var(--gold-dim)', borderRadius: '2px' }}></div>
           </div>
           <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: '60px' }}>
             {[30, 45, 60, 55, 75, 85, 95].map((h, i) => (
               <div key={i} style={{ flex: 1, height: `${h}%`, background: 'var(--gold-dim)', borderRadius: '1px' }}></div>
             ))}
           </div>
        </div>
      );
    }
    if (title.includes('Infrastructure')) {
      return (
        <div className="preview-infra">
           <div className="preview-infra-node"><span></span></div>
           <div className="preview-infra-line"></div>
           <div className="preview-infra-node" style={{ background: 'var(--gold-dim)' }}><span></span></div>
           <div className="preview-infra-line"></div>
           <div className="preview-infra-node"><span></span></div>
        </div>
      );
    }
    if (title.includes('Transactional')) {
      return (
        <div className="preview-analysis">
           <div className="preview-search-bar"></div>
           <div className="preview-analysis-lines">
             <div className="preview-analysis-line"></div>
             <div className="preview-analysis-line hl"></div>
             <div className="preview-analysis-line"></div>
             <div className="preview-analysis-line"></div>
             <div className="preview-analysis-line hl"></div>
           </div>
        </div>
      );
    }
    return <div style={{ fontSize: '3rem' }}>📁</div>;
  };

  return (
    <section className="section trust-stack-section" id="trust-stack">
      <div className="container">
        <div className="section-header">
          <span className="gold-rule"></span>
          <span className="label reveal">The Proof</span>
          <h2 className="display-lg reveal delay-1" style={{ marginTop: '0.75rem', maxWidth: '680px'}}>
            Tangible <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>Outputs</em> Over Slide Decks
          </h2>
          <p className="body-lg reveal delay-2" style={{ marginTop: '1rem', maxWidth: '580px' }}>
            Before engaging, you deserve to see evidence of capability. These purpose-built assets demonstrate exactly what you'll receive.
          </p>
        </div>

        <div className="assets-grid">
          {assets.map((asset, i) => (
            <div key={i} className={`asset-card reveal delay-${(i % 3) + 1}`}>
              <div className="asset-card-preview" onClick={() => onPreview(asset.title)}>
                <div className="asset-preview-inner">
                  {renderPreview(asset.title)}
                </div>
                <div className="asset-card-overlay">
                  <div className="asset-card-overlay-btn">👁 Preview {asset.icon}</div>
                </div>
              </div>
              <div className="asset-card-body">
                <div className="asset-type-badge">{asset.type}</div>
                <h3>{asset.title}</h3>
                <p>{asset.text}</p>
                <div className="asset-card-actions" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <button className="btn btn-outline btn-sm" onClick={() => onPreview(asset.title)}>
                     👁 Preview 
                  </button>
                  <button className="btn btn-primary btn-sm" onClick={() => onDownload(asset.title)} style={{ justifyContent: 'center' }}>
                     Access Now ⬇
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
