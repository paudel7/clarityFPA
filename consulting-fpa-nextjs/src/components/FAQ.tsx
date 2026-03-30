'use client';

import { useState } from 'react';

export default function FAQ() {
  const faqs = [
    {
      q: "What does the assessment process actually involve?",
      a: "The assessment is a structured 60–90 minute session where we map your current systems, reporting workflows, and pain points. You’ll receive a detailed report outlining inefficiencies, opportunities for automation, and a clear 30-60-90 day roadmap. There’s no preparation required—just access to how your current process works."
    },
    {
      q: "How quickly will we start seeing results?",
      a: "Most teams start seeing improvements within the first few weeks, especially in reporting efficiency and clarity. Significant transformation—such as automated workflows and improved forecasting—typically happens within 30 to 90 days depending on scope."
    },
    {
      q: "Will this disrupt our current operations?",
      a: "No. The approach is designed to work alongside your existing processes with minimal disruption. Changes are implemented incrementally, ensuring your team can continue daily operations without interruption."
    },
    {
      q: "What kind of organizations benefit the most from this?",
      a: "Organizations with multiple funding streams, manual reporting processes, or limited visibility into financial performance benefit the most. This includes growing non-profits, education institutions, and public sector teams managing complex budgets."
    },
    {
      q: "Do you work with our existing tools (Excel, Power BI, accounting systems)?",
      a: "Yes. The goal is to maximize the value of tools you already use. We integrate and optimize existing systems wherever possible, avoiding unnecessary software costs or complexity."
    },
    {
      q: "How customized is the solution?",
      a: "Every solution is fully tailored to your organization’s structure, funding model, and reporting needs. Nothing is off-the-shelf—everything is built specifically around your workflows and decision-making requirements."
    },
    {
      q: "What level of involvement is required from our team?",
      a: "Your team’s involvement is mainly during the initial discovery and periodic reviews. Most of the heavy lifting—design, building, and implementation—is handled independently to minimize your team’s workload."
    },
    {
      q: "What happens after the implementation is complete?",
      a: "You receive fully documented systems, training, and walkthroughs so your team can operate independently. Optional ongoing advisory support is available, but the goal is to make you self-sufficient."
    },
    {
      q: "How is this different from hiring an internal finance analyst?",
      a: "Hiring adds capacity, but not necessarily better systems. This approach focuses on building scalable infrastructure that reduces manual work permanently, enabling your existing team to operate more efficiently."
    },
    {
      q: "Is our financial data secure?",
      a: "Yes. All work follows best practices for data security and confidentiality. Access is limited, controlled, and aligned with your organization’s policies. Sensitive data is handled with strict care throughout the process."
    },
    {
      q: "What if we’re not ready for a full transformation yet?",
      a: "That’s exactly why the assessment exists. It gives you a clear, low-risk starting point and actionable insights, even if you decide to implement changes gradually or internally."
    },
    {
      q: "How do we know if this is the right fit for us?",
      a: "If your team spends significant time on manual reporting, struggles with forecasting, or lacks clear financial visibility, this is likely a strong fit. The initial call helps confirm alignment before any commitment."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 5);

  return (
    <section className="section faq-section" id="faq" style={{ background: 'var(--navy-mid)' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <div className="section-header centered">
          <span className="label">FAQ</span>
          <h2 className="display-sm" style={{ marginTop: '0.5rem' }}>Common <em style={{ color: 'var(--gold)' }}>Questions</em></h2>
        </div>
        <div style={{ marginTop: '3rem' }}>
          {visibleFaqs.map((faq, i) => (
            <div key={i} style={{ marginBottom: '1rem', border: '1px solid var(--border)', borderRadius: '8px', overflow: 'hidden', background: 'var(--navy)', transition: 'all 0.3s ease' }} className="faq-item">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                style={{ 
                  width: '100%', 
                  textAlign: 'left', 
                  padding: '1.25rem 1.5rem', 
                  background: 'transparent', 
                  display: 'flex', 
                  justifyContent: 'space-between', 
                  alignItems: 'center',
                  cursor: 'pointer',
                  border: 'none',
                  outline: 'none'
                }}
              >
                <span style={{ fontWeight: 600, color: 'var(--cream)', fontSize: '0.95rem', paddingRight: '2rem' }}>{faq.q}</span>
                <span style={{ color: 'var(--gold)', fontSize: '1.2rem', transition: 'transform 0.3s', transform: openIndex === i ? 'rotate(45deg)' : 'none', flexShrink: 0 }}>+</span>
              </button>
              {openIndex === i && (
                <div style={{ padding: '0 1.5rem 1.5rem', background: 'transparent', color: 'var(--slate-light)', fontSize: '0.88rem', lineHeight: 1.6 }}>
                  <div style={{ paddingTop: '0.5rem', borderTop: '1px solid var(--border-sub)' }}>
                    {faq.a}
                  </div>
                </div>
              )}
            </div>
          ))}
          
          {!showAll && (
            <div style={{ textAlign: 'center', marginTop: '2rem' }}>
              <button 
                onClick={() => setShowAll(true)}
                className="btn btn-outline"
                style={{ fontSize: '0.8rem', padding: '0.6rem 1.5rem' }}
              >
                <span>View More Questions ↓</span>
              </button>
            </div>
          )}
          
          {showAll && (
             <div style={{ textAlign: 'center', marginTop: '2rem' }}>
             <button 
               onClick={() => { setShowAll(false); setOpenIndex(null); }}
               className="btn btn-outline"
               style={{ fontSize: '0.8rem', padding: '0.6rem 1.5rem', opacity: 0.7 }}
             >
               <span>Show Less ↑</span>
             </button>
           </div>
          )}
        </div>
      </div>
    </section>
  );
}
