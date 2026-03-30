import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <Image src="/consultingLogo.png" alt="Clarity FP&A Logo" width={180} height={45} className="nav-logo-img" />
            </div>
            <p className="footer-tagline">Financial Planning &amp; Analysis consulting for non-profits, education, and public sector organizations. Structured systems. Practical results.</p>
            <div className="footer-socials" style={{ marginTop: '1.5rem' }}>
              <a href="#" className="footer-social">in</a>
              <a href="#" className="footer-social">𝕏</a>
              <a href="#" className="footer-social">✉</a>
            </div>
          </div>
          <div className="footer-col">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link href="#services">Reporting Automation</Link></li>
              <li><Link href="#services">Forecasting &amp; Planning</Link></li>
              <li><Link href="#services">Budget &amp; Fund Tracking</Link></li>
              <li><Link href="#services">AI Enablement</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Resources</h4>
            <ul className="footer-links">
              <li><Link href="#trust-stack">Assessment Report Sample</Link></li>
              <li><Link href="#trust-stack">Budget Template</Link></li>
              <li><Link href="#trust-stack">Forecast Model</Link></li>
              <li><Link href="#trust-stack">Mini Case Pack</Link></li>
              <li><Link href="#resources">Free Checklist</Link></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Get Started</h4>
            <ul className="footer-links">
              <li><Link href="#contact">Book Free Call</Link></li>
              <li><Link href="#offer">View $250 Offer</Link></li>
              <li><Link href="#transformation">Case Studies</Link></li>
              <li><Link href="mailto:info@clarityfpa.com">Email Directly</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2025 ClarityFP&A. All rights reserved.</span>
          <span>Cambridge, Ontario · Remote-first · Available globally</span>
        </div>
      </div>
    </footer>
  );
}
