// ===== Mobile nav toggle =====
const hamburger = document.getElementById('hamburger');
const mainNav = document.getElementById('mainNav');
if (hamburger && mainNav) {
  hamburger.addEventListener('click', () => {
    mainNav.classList.toggle('open');
  });
  mainNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mainNav.classList.remove('open'));
  });
}

// ===== Scroll reveal =====
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealEls.forEach(el => observer.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// ===== FAQ accordion =====
document.querySelectorAll('.faq-item').forEach(item => {
  const btn = item.querySelector('.faq-q');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('open');
    document.querySelectorAll('.faq-item.open').forEach(openItem => {
      if (openItem !== item) openItem.classList.remove('open');
    });
    item.classList.toggle('open', !isOpen);
  });
});

// ===== Meta Pixel — InitiateCheckout event on real checkout click =====
// यह event तब फायर होता है जब कोई असली "checkout" बटन दबाता है (सिर्फ ऐंकर
// लिंक नहीं) — इससे Meta को असली buying-intent वाला signal मिलता है, जो
// सिर्फ "Link Click" से कहीं बेहतर है। Campaign में इसे Custom Conversion
// बनाकर Conversions objective के लिए optimize किया जा सकता है, भले ही
// Superprofile checkout पर अभी Purchase event ना लगा हो।
document.querySelectorAll('.checkout-link').forEach(function (link) {
  link.addEventListener('click', function () {
    if (typeof fbq === 'function') {
      fbq('track', 'InitiateCheckout', { value: 479, currency: 'INR' });
    }
  });
});

// ===== Honest countdown — counts down to midnight, resets naturally every day =====
// यह timer refresh karne par reset nahi hota (fake nahi hai) — genuinely
// aaj raat 11:59:59 tak ka असली बचा हुआ समय दिखाता है। Agar aapka offer
// din-wise nahi badalta, to ismein ईमानदारी se sirf "आज का ऑफर" jaisa
// wording rakhein, aur fake urgency na banayen.
(function () {
  const displays = document.querySelectorAll('.countdown-timer');
  if (!displays.length) return;

  function tick() {
    const now = new Date();
    const midnight = new Date(now);
    midnight.setHours(23, 59, 59, 999);
    let remaining = midnight - now;
    if (remaining < 0) remaining = 0;

    const hrs = Math.floor(remaining / 3600000);
    const mins = Math.floor((remaining % 3600000) / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    const text = [hrs, mins, secs].map(n => String(n).padStart(2, '0')).join(':');
    displays.forEach((el) => { el.textContent = text; });
  }
  tick();
  setInterval(tick, 1000);
})();
