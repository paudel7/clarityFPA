'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const TIME_SLOTS = [
  '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
  '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
  '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
  '4:00 PM',
];

const BLOCKED_DAYS = [0, 6]; // Sat, Sun

const STEP_INFO = [
  'Step 1 of 4 — Contact Details',
  'Step 2 of 4 — Your Needs',
  'Step 3 of 4 — Schedule',
  'Step 4 of 4 — Review & Confirm',
];

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    orgType: '',
    teamSize: '',
    budgetRange: '',
    services: [] as string[],
    urgency: '',
    source: '',
    challenge: '',
    consent: false,
  });

  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [calDate, setCalDate] = useState(new Date());
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // Reset on close if needed
    }
  }, [isOpen]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    const fieldName = id.replace('bm-', '');
    setFormData(prev => ({ ...prev, [fieldName]: value }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => {
      const services = prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service];
      return { ...prev, services };
    });
  };

  const validate = () => {
    if (currentStep === 0) {
      return formData.firstName && formData.lastName && formData.email && formData.organization && formData.orgType && formData.urgency;
    }
    if (currentStep === 1) {
      return formData.services.length > 0;
    }
    if (currentStep === 2) {
      return selectedDate && selectedTime;
    }
    if (currentStep === 3) {
      return formData.consent;
    }
    return true;
  };

  const nextStep = () => {
    if (validate()) {
      if (currentStep < 3) setCurrentStep(currentStep + 1);
      else handleSubmit();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      // Using FormSubmit.co via AJAX (REST API)
      const response = await fetch('https://formsubmit.co/ajax/kiran.npowerba@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          selectedDate: selectedDate?.toLocaleDateString(),
          selectedTime: selectedTime,
          _subject: `New FP&A Assessment Booking: ${formData.organization}`,
          _template: 'box'
        })
      });
      
      const result = await response.json();
      if (result.success === 'true' || response.ok) {
        setIsSuccess(true);
      } else {
        throw new Error('Form submission failed.');
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was a problem sending your booking. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Calendar Logic
  const renderCalendar = () => {
    const year = calDate.getFullYear();
    const month = calDate.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const today = new Date();
    today.setHours(0,0,0,0);

    const days = [];
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="bm-cal-day empty"></div>);
    }

    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(year, month, d);
      const isPast = date < today;
      const isBlocked = BLOCKED_DAYS.includes(date.getDay());
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime();
      const isToday = date.getTime() === today.getTime();

      days.push(
        <div 
          key={d} 
          className={`bm-cal-day ${isPast || isBlocked ? 'disabled' : ''} ${isSelected ? 'selected' : ''} ${isToday ? 'today' : ''}`}
          onClick={() => {
            if (!isPast && !isBlocked) {
              setSelectedDate(date);
              setSelectedTime(null);
            }
          }}
        >
          {d}
        </div>
      );
    }
    return days;
  };

  if (!isOpen) return null;

  return (
    <div className="booking-overlay open">
      <div className="booking-modal" id="bookingModal">
        <div className="bm-header">
          <div className="bm-header-top">
            <span className="bm-logo">
              <Image src="/consultingLogo.png" alt="Clarity FP&A" width={160} height={40} className="nav-logo-img" />
              &mdash; Booking
            </span>
            <button className="bm-close" onClick={onClose}>✕</button>
          </div>
          <div className="bm-steps">
            {[1, 2, 3, 4].map((s, i) => (
              <div key={s} className={`bm-step ${currentStep === i ? 'active' : ''} ${currentStep > i ? 'done' : ''}`}>
                <div className="bm-step-circle">{s}</div>
                <div className="bm-step-label">{['About You', 'Your Needs', 'Schedule', 'Confirm'][i]}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="bm-body">
          {/* Step 0 */}
          {currentStep === 0 && (
            <div className="bm-panel active">
              <div className="bm-panel-title">Tell us about yourself</div>
              <div className="bm-grid-2">
                <div className="bm-field">
                  <label className="bm-label">First Name *</label>
                  <input className="bm-input" id="bm-firstName" value={formData.firstName} onChange={handleInputChange} placeholder="Sarah" />
                </div>
                <div className="bm-field">
                  <label className="bm-label">Last Name *</label>
                  <input className="bm-input" id="bm-lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Mitchell" />
                </div>
              </div>
              <div className="bm-grid-2">
                <div className="bm-field">
                  <label className="bm-label">Work Email *</label>
                  <input className="bm-input" id="bm-email" value={formData.email} onChange={handleInputChange} type="email" placeholder="you@org.org" />
                </div>
                <div className="bm-field">
                  <label className="bm-label">Organization *</label>
                  <input className="bm-input" id="bm-organization" value={formData.organization} onChange={handleInputChange} />
                </div>
              </div>
              <div className="bm-grid-2">
                <div className="bm-field">
                  <label className="bm-label">Org Type *</label>
                  <select className="bm-select" id="bm-orgType" value={formData.orgType} onChange={handleInputChange}>
                    <option value="">Select type</option>
                    <option value="nonprofit">Non-Profit</option>
                    <option value="education">Education</option>
                    <option value="public">Public Sector</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="bm-field">
                  <label className="bm-label">Finance Team Size</label>
                  <select className="bm-select" id="bm-teamSize" value={formData.teamSize} onChange={handleInputChange}>
                    <option value="">Select size</option>
                    <option value="1-2">1-2 People</option>
                    <option value="3-5">3-5 People</option>
                    <option value="6-10">6-10 People</option>
                    <option value="10+">10+ People</option>
                  </select>
                </div>
              </div>
              <div className="bm-field">
                <label className="bm-label">When would you like to start? *</label>
                <select className="bm-select" id="bm-urgency" value={formData.urgency} onChange={handleInputChange}>
                  <option value="">Select timeline</option>
                  <option value="immediately">Immediately</option>
                  <option value="next-30">Within 30 Days</option>
                  <option value="next-90">Next 90 Days</option>
                  <option value="researching">Just Researching</option>
                </select>
              </div>
            </div>
          )}

          {/* Step 1 */}
          {currentStep === 1 && (
            <div className="bm-panel active">
              <div className="bm-panel-title">What do you need help with?</div>
              <div className="bm-service-grid">
                {[
                  { id: 'reporting', icon: '📈', label: 'Reporting Automation' },
                  { id: 'forecasting', icon: '🔭', label: 'Forecasting' },
                  { id: 'budgeting', icon: '🏷️', label: 'Budgeting' },
                ].map(s => (
                  <label 
                    key={s.id} 
                    className={`bm-service-item ${formData.services.includes(s.id) ? 'selected' : ''}`}
                    onClick={() => handleServiceToggle(s.id)}
                  >
                    <span className="bm-service-icon">{s.icon}</span>
                    <span className="bm-service-text"><strong>{s.label}</strong></span>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 2 */}
          {currentStep === 2 && (
            <div className="bm-panel active">
              <div className="bm-panel-title">Schedule your call</div>
              <div className="bm-cal-wrapper">
                <div className="bm-cal-box">
                  <div className="bm-cal-header">
                    <button onClick={() => setCalDate(new Date(calDate.getFullYear(), calDate.getMonth() - 1))}>&lt;</button>
                    <span>{calDate.toLocaleString('default', { month: 'long', year: 'numeric' })}</span>
                    <button onClick={() => setCalDate(new Date(calDate.getFullYear(), calDate.getMonth() + 1))}>&gt;</button>
                  </div>
                  <div className="bm-cal-grid">{renderCalendar()}</div>
                </div>
                {selectedDate && (
                  <div className="bm-time-box">
                    <div className="bm-time-grid">
                      {TIME_SLOTS.map(t => (
                        <button 
                          key={t} 
                          className={`bm-time-slot ${selectedTime === t ? 'selected' : ''}`}
                          onClick={() => setSelectedTime(t)}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 3 */}
          {currentStep === 3 && (
            <div className="bm-panel active">
              <div className="bm-panel-title">Review &amp; Confirm</div>
              <div className="bm-review-card">
                <p><strong>Name:</strong> {formData.firstName} {formData.lastName}</p>
                <p><strong>Organization:</strong> {formData.organization} ({formData.orgType})</p>
                <p><strong>Team Size:</strong> {formData.teamSize || 'N/A'}</p>
                <p><strong>Timeline:</strong> {formData.urgency}</p>
                <p><strong>Appointment:</strong> {selectedDate?.toLocaleDateString()} at {selectedTime}</p>
              </div>
              <label className="bm-consent-row">
                <input type="checkbox" checked={formData.consent} onChange={(e) => setFormData(prev => ({ ...prev, consent: e.target.checked }))} />
                <span>I agree to be contacted regarding this booking.</span>
              </label>
            </div>
          )}
          
          {isSuccess && (
             <div className="bm-success-overlay show">
                <div className="bm-success-card">
                  <h3>Booking Confirmed!</h3>
                  <p>We've sent an email to {formData.email}.</p>
                  <button className="btn btn-primary" onClick={onClose}>Finish</button>
                </div>
             </div>
          )}
        </div>

        <div className="bm-footer">
          <div className="bm-footer-left">
            {!isSuccess && <button className="bm-btn-back" onClick={prevStep} style={{ display: currentStep > 0 ? 'flex' : 'none' }}>← Back</button>}
          </div>
          <div className="bm-footer-right">
            {!isSuccess && (
              <button 
                className="bm-btn-next" 
                onClick={nextStep}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : currentStep === 3 ? '✅ Submit' : 'Next →'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
