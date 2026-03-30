'use client';

import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import PainSection from '../components/PainSection';
import TransformationSection from '../components/TransformationSection';
import TrustStack from '../components/TrustStack';
import Services from '../components/Services';
import BookingModal from '../components/BookingModal';
import About from '../components/About';
import FinalCTA from '../components/FinalCTA';
import Footer from '../components/Footer';
import Process from '../components/Process';
import Results from '../components/Results';
import LeadGateModal from '../components/LeadGateModal';
import Testimonials from '../components/Testimonials';
import Offer from '../components/Offer';
import FAQ from '../components/FAQ';
import Deliverables from '../components/Deliverables';
import ResourcePreviewModal from '../components/ResourcePreviewModal';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLeadGateOpen, setIsLeadGateOpen] = useState(false);
  const [activeResource, setActiveResource] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [previewTab, setPreviewTab] = useState('');

  const openLeadGate = (resource: string) => {
    setActiveResource(resource);
    setIsLeadGateOpen(true);
  };

  const openPreview = (resource: string) => {
    setPreviewTab(resource);
    setIsPreviewOpen(true);
  };

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          revealObserver.unobserve(e.target); 
        } 
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    
    reveals.forEach(el => revealObserver.observe(el));
    
    return () => revealObserver.disconnect();
  }, []);

  return (
    <>
      <Navbar onOpenModal={() => setIsModalOpen(true)} onDownload={openLeadGate} />
      <main>
        {/* Foundation & Authority */}
        <Hero onOpenModal={() => setIsModalOpen(true)} />
        
        <div className="trust-strip">
          <div className="container">
            <div className="trust-strip-inner">
              <div className="trust-strip-item"><span className="trust-strip-icon">📄</span> Assessment Samples</div>
              <div className="trust-strip-divider"></div>
              <div className="trust-strip-item"><span className="trust-strip-icon">📊</span> Budget Templates</div>
              <div className="trust-strip-divider"></div>
              <div className="trust-strip-item"><span className="trust-strip-icon">📈</span> Live Dashboards</div>
              <div className="trust-strip-divider"></div>
              <div className="trust-strip-item"><span className="trust-strip-icon">🔮</span> Scenario Models</div>
            </div>
          </div>
        </div>

        <Results />

        {/* The Problem & The Transformation */}
        <PainSection onPreview={openPreview} />
        <TransformationSection onPreview={openPreview} />
        
        {/* Credibility & Domains */}
        <About onPreview={openPreview} />
        <Services onOpenModal={() => setIsModalOpen(true)} onPreview={openPreview} />
        
        {/* Proof of Competence (Evidence) */}
        <TrustStack onDownload={openLeadGate} onPreview={openPreview} />
        <Testimonials />
        
        {/* Methodology & Roadmap */}
        <Process />
        <Deliverables />
        <Offer onOpenModal={() => setIsModalOpen(true)} onPreview={openPreview} />
        
        {/* Final Conviction */}
        <FAQ />
        <FinalCTA onOpenModal={() => setIsModalOpen(true)} />

      </main>
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <LeadGateModal 
        isOpen={isLeadGateOpen} 
        onClose={() => setIsLeadGateOpen(false)} 
        resourceName={activeResource} 
        />
      <ResourcePreviewModal 
        isOpen={isPreviewOpen} 
        onClose={() => setIsPreviewOpen(false)} 
        tab={previewTab} 
        />
    </>
  );
}
