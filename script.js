// ── Nav
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => nav.classList.toggle('scrolled', window.scrollY > 50));

// ── Mobile menu
const mobileBtn = document.getElementById('mobileBtn');
const mobileMenu = document.getElementById('mobileMenu');
const mobileClose = document.getElementById('mobileClose');
mobileBtn.addEventListener('click', () => mobileMenu.classList.add('open'));
mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
document.querySelectorAll('.mnl').forEach(l => l.addEventListener('click', () => mobileMenu.classList.remove('open')));

// ── Scroll reveal
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
reveals.forEach(el => revealObserver.observe(el));
// Hero fires immediately
document.querySelectorAll('.hero .reveal').forEach((el, i) => setTimeout(() => el.classList.add('visible'), 100 + i * 120));

// ── Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const t = document.querySelector(this.getAttribute('href'));
    if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// ── Tabs
document.querySelectorAll('.resources-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.resources-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.resources-tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    const target = document.getElementById('tab-' + tab.dataset.tab);
    if (target) target.classList.add('active');
  });
});

// ── Modals
function openModal(id) {
  document.getElementById('modal-' + id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById('modal-' + id).classList.remove('open');
  document.body.style.overflow = '';
}
// Close on overlay click
document.querySelectorAll('.modal-overlay').forEach(overlay => {
  overlay.addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.remove('open');
      document.body.style.overflow = '';
    }
  });
});
// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(m => {
      m.classList.remove('open'); document.body.style.overflow = '';
    });
  }
});

// ── Download handler
// Files map: update paths when you upload actual files
const FILE_MAP = {
  'fpa-assessment-sample.pdf':    null, // set to '/assets/fpa-assessment-sample.pdf' after upload
  'nonprofit-budget-template.xlsx': null,
  'dashboard-mockup.pdf':         null,
  'forecast-model.xlsx':          null,
  'mini-case-pack.pdf':           null,
};

function handleDownload(filename) {
  const path = FILE_MAP[filename];
  if (path) {
    const a = document.createElement('a');
    a.href = path; a.download = filename; a.click();
  } else {
    showToast();
  }
}

function showToast() {
  const toast = document.getElementById('toast');
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';
  setTimeout(() => {
    toast.style.transform = 'translateY(100px)';
    toast.style.opacity = '0';
  }, 3500);
}

// ── Theme toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  themeToggle.textContent = theme === 'light' ? '🌙' : '☀️';
  themeToggle.title = theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode';
  try { localStorage.setItem('cfpa-theme', theme); } catch(e) {}
}

// Restore saved preference, fallback to dark
(function() {
  let saved = 'dark';
  try { saved = localStorage.getItem('cfpa-theme') || 'dark'; } catch(e) {}
  applyTheme(saved);
})();

themeToggle.addEventListener('click', () => {
  const current = html.getAttribute('data-theme') || 'dark';
  applyTheme(current === 'dark' ? 'light' : 'dark');
});

// ════════════════════════════════════════════════════════
// BOOKING FORM ENGINE
// ════════════════════════════════════════════════════════
(function () {

  /* ── Config ──────────────────────────────────────────── */
  // Replace with your Formspree endpoint: https://formspree.io/f/YOUR_ID
  // Free tier sends email on every submission — no backend needed.
  const FORM_ENDPOINT = 'https://formsubmit.co/kiran.npowerba@gmail.com';

  const TIME_SLOTS = [
    '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM',
    '11:00 AM', '11:30 AM', '1:00 PM', '1:30 PM',
    '2:00 PM', '2:30 PM', '3:00 PM', '3:30 PM',
    '4:00 PM',
  ];
  // Days of week to block: 0=Sun, 6=Sat
  const BLOCKED_DAYS = [0, 6];

  const STEP_INFO = [
    'Step 1 of 4 — Contact Details',
    'Step 2 of 4 — Your Needs',
    'Step 3 of 4 — Schedule',
    'Step 4 of 4 — Review & Confirm',
  ];

  /* ── State ───────────────────────────────────────────── */
  let currentStep   = 0;
  let selectedDate  = null;
  let selectedTime  = null;
  let calYear, calMonth;
  let consentChecked = false;

  const today = new Date();
  today.setHours(0,0,0,0);
  calYear  = today.getFullYear();
  calMonth = today.getMonth();

  /* ── DOM refs ────────────────────────────────────────── */
  const overlay   = document.getElementById('bookingOverlay');
  const modal     = document.getElementById('bookingModal');
  const bmClose   = document.getElementById('bmClose');
  const bmBack    = document.getElementById('bmBack');
  const bmNext    = document.getElementById('bmNext');
  const bmFooterInfo = document.getElementById('bmFooterInfo');
  const bmBody    = document.getElementById('bmBody');
  const bmSuccess = document.getElementById('bmSuccess');
  const bmFooter  = document.getElementById('bmFooter');

  /* ── Open / close ────────────────────────────────────── */
  window.openBooking = function (preselect) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    if (preselect) preselectService(preselect);
    renderCal();
    updateTZ();
  };
  window.closeBooking = function () {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  };

  bmClose.addEventListener('click', closeBooking);
  overlay.addEventListener('click', e => { if (e.target === overlay) closeBooking(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('open')) closeBooking(); });

  function preselectService(val) {
    document.querySelectorAll('#bmServiceGrid .bm-service-item input').forEach(cb => {
      if (cb.value === val) { cb.checked = true; cb.closest('.bm-service-item').classList.add('selected'); }
    });
  }

  /* ── Service item toggles ────────────────────────────── */
  document.querySelectorAll('#bmServiceGrid .bm-service-item').forEach(item => {
    item.addEventListener('click', () => {
      const cb = item.querySelector('input');
      cb.checked = !cb.checked;
      item.classList.toggle('selected', cb.checked);
    });
  });

  /* ── Consent toggle ──────────────────────────────────── */
  const consentEl = document.getElementById('bmConsent');
  consentEl.addEventListener('click', () => {
    consentChecked = !consentChecked;
    consentEl.classList.toggle('checked', consentChecked);
    document.getElementById('err-consent').classList.remove('show');
  });

  /* ── Step navigation ─────────────────────────────────── */
  function goTo(step) {
    // Hide all panels
    document.querySelectorAll('.bm-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.bm-step').forEach((s, i) => {
      s.classList.toggle('active', i === step);
      s.classList.toggle('done',   i < step);
    });
    document.getElementById('bm-panel-' + step).classList.add('active');
    currentStep = step;
    bmBack.style.display = step > 0 ? 'inline-flex' : 'none';
    bmFooterInfo.textContent = STEP_INFO[step];
    bmNext.querySelector('.bm-btn-text').textContent = step === 3 ? '✅ Submit Booking' : 'Next →';
    bmBody.scrollTop = 0;
    if (step === 3) populateReview();
  }

  bmBack.addEventListener('click', () => goTo(currentStep - 1));

  bmNext.addEventListener('click', () => {
    if (!validate(currentStep)) return;
    if (currentStep < 3) { goTo(currentStep + 1); }
    else { submitForm(); }
  });

  /* ── Validation ──────────────────────────────────────── */
  function validate(step) {
    let ok = true;
    const show = (id, msg) => { const el=document.getElementById(id); if(el){el.classList.add('show'); el.textContent=msg||el.textContent;} ok=false; };
    const hide = (id) => { const el=document.getElementById(id); if(el) el.classList.remove('show'); };
    const field = (id) => document.getElementById(id);
    const mark = (id, bad) => { const el=field(id); if(el){ el.classList.toggle('error',bad); } };

    if (step === 0) {
      hide('err-fname'); hide('err-lname'); hide('err-email'); hide('err-org'); hide('err-orgtype');
      if (!field('bm-fname').value.trim())                    { mark('bm-fname',true);   show('err-fname'); }   else mark('bm-fname',false);
      if (!field('bm-lname').value.trim())                    { mark('bm-lname',true);   show('err-lname'); }   else mark('bm-lname',false);
      const em = field('bm-email').value.trim();
      if (!em || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em))    { mark('bm-email',true);   show('err-email'); }   else mark('bm-email',false);
      if (!field('bm-org').value.trim())                      { mark('bm-org',true);     show('err-org'); }     else mark('bm-org',false);
      if (!field('bm-orgtype').value)                         { mark('bm-orgtype',true); show('err-orgtype'); } else mark('bm-orgtype',false);
    }
    if (step === 1) {
      hide('err-services');
      const any = [...document.querySelectorAll('#bmServiceGrid input')].some(cb => cb.checked);
      if (!any) show('err-services', 'Please select at least one area of interest.');
    }
    if (step === 2) {
      hide('err-schedule');
      if (!selectedDate || !selectedTime) show('err-schedule', 'Please select a date and a time slot.');
    }
    if (step === 3) {
      hide('err-consent');
      if (!consentChecked) { show('err-consent', 'Please accept to continue.'); }
    }
    return ok;
  }

  /* ── Review population ───────────────────────────────── */
  function populateReview() {
    const fname = document.getElementById('bm-fname').value.trim();
    const lname = document.getElementById('bm-lname').value.trim();
    const orgSel = document.getElementById('bm-orgtype');
    const orgText = orgSel.options[orgSel.selectedIndex]?.text || '—';
    const urgSel = document.getElementById('bm-urgency');
    const urgText = urgSel.options[urgSel.selectedIndex]?.text || '—';
    const services = [...document.querySelectorAll('#bmServiceGrid input:checked')]
      .map(cb => cb.closest('.bm-service-item').querySelector('strong').textContent).join(', ') || '—';
    const challenge = document.getElementById('bm-challenge').value.trim() || '(not provided)';

    setText('rv-name',    fname + ' ' + lname);
    setText('rv-email',   document.getElementById('bm-email').value.trim());
    setText('rv-org',     document.getElementById('bm-org').value.trim());
    setText('rv-orgtype', orgText);
    setText('rv-services',services);
    setText('rv-urgency', urgText || '—');
    setText('rv-challenge', challenge.length > 120 ? challenge.slice(0,117)+'…' : challenge);
    setText('rv-appt',    formatAppt());
  }

  function setText(id, val) { const el=document.getElementById(id); if(el) el.textContent=val; }
  function formatAppt() {
    if (!selectedDate || !selectedTime) return '—';
    return selectedDate.toLocaleDateString('en-CA', {weekday:'long',year:'numeric',month:'long',day:'numeric'}) + ' · ' + selectedTime + ' ET';
  }

  /* ── Form submission (Formspree AJAX) ────────────────── */
  async function submitForm() {
    const btnText = bmNext.querySelector('.bm-btn-text');
    const spinner = bmNext.querySelector('.bm-spinner');
    bmNext.disabled = true;
    btnText.style.display = 'none';
    spinner.style.display = 'inline-block';

    const services = [...document.querySelectorAll('#bmServiceGrid input:checked')]
      .map(cb => cb.closest('.bm-service-item').querySelector('strong').textContent).join(', ');
    const orgSel  = document.getElementById('bm-orgtype');
    const urgSel  = document.getElementById('bm-urgency');
    const srcSel  = document.getElementById('bm-source');

    const payload = {
      firstName:    document.getElementById('bm-fname').value.trim(),
      lastName:     document.getElementById('bm-lname').value.trim(),
      email:        document.getElementById('bm-email').value.trim(),
      phone:        document.getElementById('bm-phone').value.trim() || 'Not provided',
      organization: document.getElementById('bm-org').value.trim(),
      orgType:      orgSel.options[orgSel.selectedIndex]?.text || '',
      teamSize:     document.getElementById('bm-teamsize').value || 'Not specified',
      budgetRange:  document.getElementById('bm-budget').value || 'Not specified',
      services,
      urgency:      urgSel.options[urgSel.selectedIndex]?.text || 'Not specified',
      source:       srcSel.options[srcSel.selectedIndex]?.text || 'Not specified',
      challenge:    document.getElementById('bm-challenge').value.trim() || 'Not provided',
      appointment:  formatAppt(),
      _subject:     'New FP&A Assessment Booking — ClarityFP&A',
    };

    let success = false;
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method:'POST', headers:{'Accept':'application/json','Content-Type':'application/json'},
        body: JSON.stringify(payload),
      });
      success = res.ok;
    } catch (err) {
      success = false;
    }

    spinner.style.display = 'none';
    bmNext.disabled = false;
    btnText.style.display = 'inline';

    if (success) {
      // Show success screen
      document.querySelectorAll('.bm-panel').forEach(p => { p.classList.remove('active'); p.style.display='none'; });
      document.querySelectorAll('.bm-step').forEach(s => s.classList.add('done'));
      bmFooter.style.display = 'none';
      bmSuccess.style.display = 'none'; // reset
      bmSuccess.classList.add('show');
      setText('sc-appt',  formatAppt() + ' · ');
      setText('sc-email', document.getElementById('bm-email').value.trim());
    } else {
      bmNext.querySelector('.bm-btn-text').textContent = 'Retry →';
      const err = document.createElement('p');
      err.style.cssText = 'color:var(--red-soft);font-size:0.8rem;text-align:center;margin-top:0.5rem';
      err.textContent = 'Submission failed — please try again or email us directly.';
      bmFooter.appendChild(err);
      setTimeout(() => err.remove(), 5000);
    }
  }

  /* ── Calendar ────────────────────────────────────────── */
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];

  function renderCal() {
    const label = document.getElementById('calMonthLabel');
    const grid  = document.getElementById('calGrid');
    if (!label || !grid) return;

    label.textContent = MONTHS[calMonth] + ' ' + calYear;

    const first = new Date(calYear, calMonth, 1).getDay();
    const days  = new Date(calYear, calMonth + 1, 0).getDate();

    grid.innerHTML = '';

    // Empty cells
    for (let i = 0; i < first; i++) {
      const el = document.createElement('div');
      el.className = 'bm-cal-day empty';
      grid.appendChild(el);
    }

    for (let d = 1; d <= days; d++) {
      const el  = document.createElement('div');
      const date = new Date(calYear, calMonth, d);
      const dow  = date.getDay();
      const isPast    = date < today;
      const isBlocked = BLOCKED_DAYS.includes(dow);
      const isToday   = date.getTime() === today.getTime();
      const isSelected = selectedDate && date.getTime() === selectedDate.getTime();

      el.className = 'bm-cal-day';
      el.textContent = d;
      if (isToday)    el.classList.add('today');
      if (isPast || isBlocked) { el.classList.add(isPast ? 'past' : 'disabled'); }
      else {
        el.classList.toggle('selected', isSelected);
        el.addEventListener('click', () => selectDate(date));
      }
      grid.appendChild(el);
    }

    document.getElementById('calPrev').disabled = (calYear === today.getFullYear() && calMonth <= today.getMonth());
  }

  document.getElementById('calPrev').addEventListener('click', () => {
    calMonth--; if (calMonth < 0) { calMonth=11; calYear--; } renderCal();
  });
  document.getElementById('calNext').addEventListener('click', () => {
    calMonth++; if (calMonth > 11) { calMonth=0; calYear++; } renderCal();
  });

  function selectDate(date) {
    selectedDate = date; selectedTime = null;
    renderCal();
    document.getElementById('calSelectedDateLabel').textContent =
      date.toLocaleDateString('en-CA', {weekday:'long', month:'long', day:'numeric', year:'numeric'});
    renderTimeSlots();
    document.getElementById('err-schedule').classList.remove('show');
  }

  function renderTimeSlots() {
    const wrap = document.getElementById('timeSlotsWrap');
    wrap.innerHTML = '';
    const grid = document.createElement('div');
    grid.className = 'bm-time-grid';
    TIME_SLOTS.forEach(t => {
      const btn = document.createElement('div');
      btn.className = 'bm-time-slot';
      btn.textContent = t;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.bm-time-slot').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedTime = t;
        document.getElementById('err-schedule').classList.remove('show');
      });
      grid.appendChild(btn);
    });
    wrap.appendChild(grid);
  }

  function updateTZ() {
    const tzNote = document.getElementById('tzNote');
    if (!tzNote) return;
    try {
      const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const offset = -new Date().getTimezoneOffset() / 60;
      const sign   = offset >= 0 ? '+' : '';
      tzNote.textContent = `Your timezone: ${tz} (UTC${sign}${offset})`;
    } catch(e) { tzNote.textContent = 'Times shown in Eastern Time (ET)'; }
  }

})(); // end booking engine

// ── Rewire ALL booking CTAs ──────────────────────────────
(function () {
  // Helper: intercept clicks on anchors/buttons pointing to #contact
  function makeBooking(el, preselect) {
    el.addEventListener('click', function (e) {
      e.preventDefault();
      window.openBooking(preselect || null);
    });
  }

  // All #contact href links
  document.querySelectorAll('a[href="#contact"]').forEach(el => makeBooking(el));

  // Footer "Book Free Call" link
  document.querySelectorAll('a[href="#contact"]').forEach(el => makeBooking(el));

  // Modal footer book buttons (already caught above via href="#contact")

  // Service sample links that say "See … AI Opportunity" → open booking with assessment preselect
  // (already handled by openModal calls, those stay as-is)
})();

(function () {
  const phases = [
    { id:'mock-phase-0', label:'CURRENT STATE · PROBLEM',    duration:3800 },
    { id:'mock-phase-1', label:'ANALYZING PROCESS…',         duration:3200 },
    { id:'mock-phase-2', label:'INSIGHTS IDENTIFIED',        duration:3400 },
    { id:'mock-phase-3', label:'TRANSFORMED DASHBOARD',      duration:4800 },
  ];

  const phaseLabel = document.getElementById('mockPhaseLabel');
  const phaseDots  = document.querySelectorAll('.mpd');
  if (!document.getElementById('mock-phase-0')) return; // guard

  let timer = null;

  function resetScanBars() {
    // Force scan fill bars to re-animate by collapsing then expanding
    document.querySelectorAll('.mock-scan-fill').forEach(bar => {
      const target = bar.style.getPropertyValue('--fill-w') || bar.style.width;
      bar.style.transition = 'none';
      bar.style.width = '0';
      // Trigger reflow
      void bar.offsetWidth;
      bar.style.transition = 'width 1.3s ease';
      bar.style.width = target;
    });
  }

  function activate(i) {
    clearTimeout(timer);

    // deactivate all
    phases.forEach((p, idx) => {
      const el = document.getElementById(p.id);
      if (el) el.classList.remove('active');
      if (phaseDots[idx]) phaseDots[idx].classList.remove('active');
    });

    // activate target
    const el = document.getElementById(phases[i].id);
    if (el) el.classList.add('active');
    if (phaseDots[i]) phaseDots[i].classList.add('active');
    if (phaseLabel) phaseLabel.textContent = phases[i].label;

    // Re-trigger scan bar animations when entering phase 1
    if (i === 1) setTimeout(resetScanBars, 50);

    timer = setTimeout(() => activate((i + 1) % phases.length), phases[i].duration);
  }

  // Start on phase 0 after a short delay to let page settle
  setTimeout(() => activate(0), 600);
})();

// ── Active nav highlighting
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
const sectionObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      navLinks.forEach(l => {
        l.style.color = l.getAttribute('href') === '#' + e.target.id ? 'var(--cream)' : '';
      });
    }
  });
}, { threshold: 0.4 });
sections.forEach(s => sectionObs.observe(s));
