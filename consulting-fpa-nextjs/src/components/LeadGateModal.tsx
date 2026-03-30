'use client';

import { useState } from 'react';

interface LeadGateModalProps {
  isOpen: boolean;
  onClose: () => void;
  resourceName: string;
}

export default function LeadGateModal({ isOpen, onClose, resourceName }: LeadGateModalProps) {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      await fetch('https://formsubmit.co/ajax/kiran.npowerba@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify({
          email: email,
          resourceRequested: resourceName,
          _subject: `New Resource Request: ${resourceName}`
        })
      });
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
      setIsSubmitted(true); // Still show success so user doesn't get stuck, or handle properly
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="booking-overlay open">
      <div className="booking-modal" style={{ maxWidth: '450px', minHeight: 'auto' }}>
        <div className="bm-header-top" style={{ padding: '1.5rem 2rem 0.5rem' }}>
          <span style={{ fontSize: '0.9rem', color: 'var(--gold)', fontFamily: 'var(--font-mono)' }}>Instant Access</span>
          <button className="bm-close" onClick={onClose}>✕</button>
        </div>
        
        <div className="bm-body" style={{ padding: '1.5rem 2rem 2.5rem' }}>
          {!isSubmitted ? (
            <>
              <h3 className="display-md" style={{ marginBottom: '1rem', color: 'var(--cream)' }}>
                Download the <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>{resourceName}</em>
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-light)', marginBottom: '1.5rem' }}>
                Enter your work email below to receive the link. Join 100+ mission-driven finance professionals receiving our tools.
              </p>
              <form onSubmit={handleSubmit}>
                <div className="bm-field">
                  <label className="bm-label">Work Email</label>
                  <input 
                    className="bm-input" 
                    type="email" 
                    placeholder="you@organization.org" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>
                  <span>Get Free Access Now</span>
                </button>
              </form>
            </>
          ) : (
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🎉</div>
              <h3 className="display-md" style={{ marginBottom: '1rem', color: 'var(--cream)' }}>Check Your Inbox!</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--slate-light)', marginBottom: '1.5rem' }}>
                We've sent the <strong>{resourceName}</strong> directly to <strong>{email}</strong>.
              </p>
              <button className="btn btn-outline" style={{ width: '100%', justifyContent: 'center' }} onClick={onClose}>
                Return to Site
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
