'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar({ onOpenModal, onDownload }: { onOpenModal: () => void, onDownload: (name: string) => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    const savedTheme = localStorage.getItem('cfpa-theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem('cfpa-theme', nextTheme);
  };

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Practice', href: '#transformation' },
    { name: 'Resources', href: '#trust-stack' },
    { name: 'About', href: '#about' },
  ];

  return (
    <>
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`} id="nav">
        {!scrolled && (
          <div className="lead-magnet-bar-top" style={{ background: 'var(--gold)', color: 'var(--navy)', padding: '0.45rem 0', fontWeight: 600, borderBottom: '1px solid rgba(0,0,0,0.1)' }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ fontSize: '0.62rem', border: '1px solid var(--navy)', padding: '0px 6px', borderRadius: '4px', textTransform: 'uppercase', fontStyle: 'normal' }}>Free Tool</span>
              <p style={{ fontSize: '0.8rem', margin: 0, letterSpacing: '0.02em', color: 'var(--navy)' }}>
                Get the <strong>FP&A Modernization Toolkit</strong>
              </p>
              <button 
                className="btn-ghost" 
                style={{ fontSize: '0.78rem', color: 'var(--navy)', borderBottom: '2px solid var(--navy)', fontWeight: 700, padding: 0 }}
                onClick={() => onDownload('Full FP&A Toolkit')}
              >
                Download →
              </button>
            </div>
          </div>
        )}
        <div className="container">
          <div className="nav-inner">
            <Link href="#hero" className="nav-logo">
              <Image 
                src="/consultingLogo.png" 
                alt="Consulting FPA Logo" 
                width={180} 
                height={45} 
                className="nav-logo-img" 
                priority
              />
            </Link>
            
            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.name}</Link>
                </li>
              ))}
            </ul>

            <div className="nav-cta">
              <button 
                className="theme-toggle" 
                id="themeToggle" 
                aria-label="Toggle light/dark theme"
                title="Toggle theme"
                onClick={toggleTheme}
              >
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
              <Link href="#trust-stack" className="btn btn-outline btn-sm">
                📥 Sample Reports
              </Link>
              <button className="btn btn-primary btn-sm" onClick={onOpenModal}>
                <span>Book Assessment</span>
              </button>
            </div>

            <button 
              className="nav-mobile-btn" 
              id="mobileBtn" 
              aria-label="Open menu"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span></span><span></span><span></span>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobileMenuOpen ? 'open' : ''}`} id="mobileMenu">
        <button 
          className="mobile-close" 
          id="mobileClose"
          onClick={() => setMobileMenuOpen(false)}
        >
          ✕
        </button>
        {navLinks.map((link) => (
          <Link 
            key={link.href} 
            href={link.href} 
            className="mnl"
            onClick={() => setMobileMenuOpen(false)}
          >
            {link.name}
          </Link>
        ))}
        <button 
          className="btn btn-primary" 
          style={{ marginTop: '1rem' }}
          onClick={() => setMobileMenuOpen(false)}
        >
          <span>Book Assessment →</span>
        </button>
      </div>
    </>
  );
}
