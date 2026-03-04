// ===== DALEL - دلّل حيوانك =====
// Main JS File

// ===== TRANSLATIONS =====
const translations = {
  ar: {
    nav_home: "الرئيسية",
    nav_about: "من نحن",
    nav_services: "الخدمات",
    nav_packages: "الحزم",
    nav_booking: "احجز الآن",
    nav_reviews: "آراء العملاء",
    nav_contact: "تواصل معنا",
    nav_rating: "قيّمنا",
    lang_switch: "English",
    // Hero
    hero_title: "فندق رعاية الحيوانات الأليفة الأول",
    hero_brand: "دلّل حيوانك",
    hero_sub: "نرعى حيوانك الأليف كما نرعى أفراد عائلتنا. أفضل خدمات الإقامة والرعاية في هونغ كونغ",
    hero_btn1: "احجز الآن",
    hero_btn2: "اعرف أكثر",
    // Stats
    stat1_num: "+500",
    stat1_label: "حيوان أليف سعيد",
    stat2_num: "+200",
    stat2_label: "عميل موثوق",
    stat3_num: "24/7",
    stat3_label: "رعاية بيطرية",
    stat4_num: "5★",
    stat4_label: "تقييم عملائنا",
    // Services section
    services_title: "خدماتنا",
    services_sub: "نوفر بيئة آمنة ومريحة لحيوانك الأليف مع مجموعة متنوعة من الخدمات المميزة",
    // Footer
    footer_about: "دلّل حيوانك هو فندق رعاية متخصص للحيوانات الأليفة في هونغ كونغ، نوفر أفضل الخدمات لأحبائك من الكلاب.",
    footer_links: "روابط سريعة",
    footer_contact: "تواصل معنا",
    footer_copy: "© 2025 دلّل حيوانك | Dalel - جميع الحقوق محفوظة",
    // Page titles
    about_title: "من نحن",
    about_sub: "قصتنا وفريقنا وقيمنا",
    services_page_title: "خدماتنا",
    services_page_sub: "كل ما يحتاجه حيوانك الأليف في مكان واحد",
    packages_title: "الحزم والأسعار",
    packages_sub: "اختر الحزمة المناسبة لحيوانك الأليف",
    booking_title: "احجز إقامة",
    booking_sub: "احجز مكاناً مريحاً لحيوانك الأليف معنا",
    reviews_title: "آراء عملائنا",
    reviews_sub: "ماذا يقول عملاؤنا عن تجربتهم معنا",
    contact_title: "تواصل معنا",
    contact_sub: "نحن هنا للإجابة على جميع استفساراتك",
    rating_title: "قيّمنا",
    rating_sub: "رأيك يهمنا لنتحسن ونقدم الأفضل دائماً",
    // Accessibility
    a11y_title: "إمكانية الوصول",
    a11y_contrast: "تباين عالي",
    a11y_dyslexic: "خط للقراءة",
    a11y_underline: "تسطير الروابط",
    a11y_reduce_motion: "تقليل الحركة",
  },
  en: {
    nav_home: "Home",
    nav_about: "About Us",
    nav_services: "Services",
    nav_packages: "Packages",
    nav_booking: "Book Now",
    nav_reviews: "Reviews",
    nav_contact: "Contact",
    nav_rating: "Rate Us",
    lang_switch: "العربية",
    // Hero
    hero_title: "The Premier Pet Hotel & Care",
    hero_brand: "Dalel",
    hero_sub: "We care for your pet like family. The best boarding and care services in Hong Kong.",
    hero_btn1: "Book Now",
    hero_btn2: "Learn More",
    // Stats
    stat1_num: "500+",
    stat1_label: "Happy Pets",
    stat2_num: "200+",
    stat2_label: "Trusted Clients",
    stat3_num: "24/7",
    stat3_label: "Vet Care",
    stat4_num: "5★",
    stat4_label: "Client Rating",
    // Services
    services_title: "Our Services",
    services_sub: "We provide a safe and comfortable environment for your pet with a variety of premium services.",
    // Footer
    footer_about: "Dalel is a specialized pet care hotel in Hong Kong, providing the best services for your beloved dogs.",
    footer_links: "Quick Links",
    footer_contact: "Contact Us",
    footer_copy: "© 2025 Dalel - دلّل حيوانك | All Rights Reserved",
    // Page titles
    about_title: "About Us",
    about_sub: "Our story, team, and values",
    services_page_title: "Our Services",
    services_page_sub: "Everything your pet needs in one place",
    packages_title: "Packages & Pricing",
    packages_sub: "Choose the right package for your pet",
    booking_title: "Book a Stay",
    booking_sub: "Reserve a comfortable spot for your pet with us",
    reviews_title: "Client Reviews",
    reviews_sub: "What our clients say about their experience",
    contact_title: "Contact Us",
    contact_sub: "We're here to answer all your inquiries",
    rating_title: "Rate Us",
    rating_sub: "Your feedback helps us improve and serve you better",
    // Accessibility
    a11y_title: "Accessibility",
    a11y_contrast: "High Contrast",
    a11y_dyslexic: "Dyslexia Font",
    a11y_underline: "Underline Links",
    a11y_reduce_motion: "Reduce Motion",
  }
};

// ===== STATE =====
let currentLang = localStorage.getItem('dalel-lang') || 'ar';
let a11yPanelOpen = false;

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  applyLanguage(currentLang);
  initNavbar();
  initAccessibility();
  initForms();
  initTabs();
  setActiveNav();
  loadSavedA11y();
});

// ===== LANGUAGE =====
function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('dalel-lang', lang);
  document.body.classList.toggle('lang-en', lang === 'en');
  document.documentElement.setAttribute('lang', lang);
  document.documentElement.setAttribute('dir', lang === 'en' ? 'ltr' : 'rtl');

  // Update all translatable elements
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });

  // Update lang button text
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.textContent = lang === 'ar' ? 'English' : 'العربية';
  }
}

function toggleLanguage() {
  const newLang = currentLang === 'ar' ? 'en' : 'ar';
  applyLanguage(newLang);
}

// ===== NAVBAR =====
function initNavbar() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('open');
    });
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
      }
    });
  }
}

function setActiveNav() {
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-links a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === current || (current === '' && href === 'index.html')) {
      a.classList.add('active');
    }
  });
}

// ===== FONT SIZE =====
const fontSizes = ['font-sm', 'font-md', 'font-lg', 'font-xl'];
let fontIdx = 1;

function increaseFontSize() {
  if (fontIdx < fontSizes.length - 1) {
    fontIdx++;
    document.body.className = document.body.className
      .split(' ').filter(c => !fontSizes.includes(c)).join(' ');
    document.body.classList.add(fontSizes[fontIdx]);
    localStorage.setItem('dalel-fontidx', fontIdx);
  }
}

function decreaseFontSize() {
  if (fontIdx > 0) {
    fontIdx--;
    document.body.className = document.body.className
      .split(' ').filter(c => !fontSizes.includes(c)).join(' ');
    document.body.classList.add(fontSizes[fontIdx]);
    localStorage.setItem('dalel-fontidx', fontIdx);
  }
}

// ===== ACCESSIBILITY =====
function toggleA11yPanel() {
  a11yPanelOpen = !a11yPanelOpen;
  const panel = document.getElementById('a11yPanel');
  if (panel) panel.classList.toggle('open', a11yPanelOpen);
}

function loadSavedA11y() {
  const fi = localStorage.getItem('dalel-fontidx');
  if (fi !== null) {
    fontIdx = parseInt(fi);
    document.body.classList.add(fontSizes[fontIdx]);
  }

  if (localStorage.getItem('dalel-contrast') === '1') {
    document.body.classList.add('high-contrast');
    const el = document.getElementById('toggleContrast');
    if (el) el.checked = true;
  }
  if (localStorage.getItem('dalel-dyslexic') === '1') {
    document.body.classList.add('dyslexic');
    const el = document.getElementById('toggleDyslexic');
    if (el) el.checked = true;
  }
  if (localStorage.getItem('dalel-underline') === '1') {
    document.body.classList.add('underline-links');
    const el = document.getElementById('toggleUnderline');
    if (el) el.checked = true;
  }
}

function initAccessibility() {
  const contrast = document.getElementById('toggleContrast');
  const dyslexic = document.getElementById('toggleDyslexic');
  const underline = document.getElementById('toggleUnderline');

  if (contrast) contrast.addEventListener('change', () => {
    document.body.classList.toggle('high-contrast', contrast.checked);
    localStorage.setItem('dalel-contrast', contrast.checked ? '1' : '0');
  });
  if (dyslexic) dyslexic.addEventListener('change', () => {
    document.body.classList.toggle('dyslexic', dyslexic.checked);
    localStorage.setItem('dalel-dyslexic', dyslexic.checked ? '1' : '0');
  });
  if (underline) underline.addEventListener('change', () => {
    document.body.classList.toggle('underline-links', underline.checked);
    localStorage.setItem('dalel-underline', underline.checked ? '1' : '0');
  });
}

// ===== FORMS =====
function initForms() {
  // Booking form
  const bookingForm = document.getElementById('bookingForm');
  if (bookingForm) bookingForm.addEventListener('submit', handleBookingSubmit);

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) contactForm.addEventListener('submit', handleContactSubmit);

  // Review form
  const reviewForm = document.getElementById('reviewForm');
  if (reviewForm) reviewForm.addEventListener('submit', handleReviewSubmit);

  // Rating form
  const ratingForm = document.getElementById('ratingForm');
  if (ratingForm) ratingForm.addEventListener('submit', handleRatingSubmit);
}

function validateRequired(field) {
  const err = document.getElementById(field.id + '_err');
  if (!field.value.trim()) {
    field.classList.add('error');
    if (err) err.classList.add('show');
    return false;
  }
  field.classList.remove('error');
  if (err) err.classList.remove('show');
  return true;
}

function validateEmail(field) {
  const err = document.getElementById(field.id + '_err');
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!re.test(field.value)) {
    field.classList.add('error');
    if (err) err.classList.add('show');
    return false;
  }
  field.classList.remove('error');
  if (err) err.classList.remove('show');
  return true;
}

function validatePhone(field) {
  const err = document.getElementById(field.id + '_err');
  const re = /^[\d\s\+\-]{7,15}$/;
  if (!re.test(field.value)) {
    field.classList.add('error');
    if (err) err.classList.add('show');
    return false;
  }
  field.classList.remove('error');
  if (err) err.classList.remove('show');
  return true;
}

function showAlert(id, type) {
  const el = document.getElementById(id);
  if (!el) return;
  el.className = `alert alert-${type} show`;
  setTimeout(() => el.classList.remove('show'), 5000);
}

function handleBookingSubmit(e) {
  e.preventDefault();
  const fields = ['bookName', 'bookPhone', 'bookEmail', 'bookDog', 'bookBreed', 'bookPackage', 'bookCheckIn', 'bookCheckOut'];
  let valid = true;
  fields.forEach(id => {
    const f = document.getElementById(id);
    if (f) {
      if (id === 'bookEmail') { if (!validateEmail(f)) valid = false; }
      else if (id === 'bookPhone') { if (!validatePhone(f)) valid = false; }
      else { if (!validateRequired(f)) valid = false; }
    }
  });
  if (valid) {
    showAlert('bookingAlert', 'success');
    document.getElementById('bookingSuccessMsg').style.display = 'block';
    e.target.reset();
  } else {
    showAlert('bookingAlertErr', 'error');
  }
}

function handleContactSubmit(e) {
  e.preventDefault();
  const fields = [
    { id: 'contactName', type: 'required' },
    { id: 'contactEmail', type: 'email' },
    { id: 'contactMsg', type: 'required' }
  ];
  let valid = true;
  fields.forEach(f => {
    const el = document.getElementById(f.id);
    if (el) {
      if (f.type === 'email') { if (!validateEmail(el)) valid = false; }
      else { if (!validateRequired(el)) valid = false; }
    }
  });
  if (valid) {
    showAlert('contactAlert', 'success');
    e.target.reset();
  } else {
    showAlert('contactAlertErr', 'error');
  }
}

function handleReviewSubmit(e) {
  e.preventDefault();
  const name = document.getElementById('reviewName');
  const text = document.getElementById('reviewText');
  const star = document.querySelector('input[name="rating"]:checked');

  let valid = true;
  if (!validateRequired(name)) valid = false;
  if (!validateRequired(text)) valid = false;
  if (!star) {
    document.getElementById('starErr').classList.add('show');
    valid = false;
  } else {
    document.getElementById('starErr').classList.remove('show');
  }

  if (valid) {
    addReview(name.value, text.value, star.value);
    showAlert('reviewAlert', 'success');
    e.target.reset();
  } else {
    showAlert('reviewAlertErr', 'error');
  }
}

function handleRatingSubmit(e) {
  e.preventDefault();
  const star = document.querySelector('input[name="overallRating"]:checked');
  if (!star) {
    document.getElementById('ratingStarErr').classList.add('show');
    return;
  }
  document.getElementById('ratingStarErr').classList.remove('show');
  showAlert('ratingAlert', 'success');
  document.getElementById('ratingThankMsg').style.display = 'block';
  e.target.reset();
}

function addReview(name, text, stars) {
  const list = document.getElementById('reviewsList');
  if (!list) return;
  const starStr = '★'.repeat(parseInt(stars)) + '☆'.repeat(5 - parseInt(stars));
  const date = new Date().toLocaleDateString(currentLang === 'ar' ? 'ar-SA' : 'en-GB');
  const card = document.createElement('div');
  card.className = 'review-card';
  card.innerHTML = `
    <div class="review-stars">${starStr}</div>
    <p class="review-text">"${text}"</p>
    <div class="review-author">${name}</div>
    <div class="review-date">${date}</div>
  `;
  list.prepend(card);
}

// ===== TABS =====
function initTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-tab');
      const parent = btn.closest('.tabs-wrap');
      parent.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
      parent.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      parent.querySelector(`[data-panel="${target}"]`).classList.add('active');
    });
  });
}

// ===== SMOOTH SCROLL =====
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
