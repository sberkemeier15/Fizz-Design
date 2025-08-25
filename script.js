// Mobile toggle
const toggle = document.querySelector('.nav-toggle');
const links  = document.querySelector('.nav-links');

toggle?.addEventListener('click', () => {
  const expanded = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', String(!expanded));
  links.classList.toggle('open');
});

// Close menu when a link is clicked (mobile)
links?.addEventListener('click', (e) => {
  if (e.target.closest('a') && links.classList.contains('open')) {
    links.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }
});

// Quote form (Formspree inline success)
const form = document.getElementById('quote-form');
const statusEl = document.getElementById('quote-status');

form?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const data = new FormData(form);
  if (data.get('company')) return; // honeypot

  try {
    const r = await fetch(form.action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (r.ok) {
      statusEl.textContent = "Thanks! I’ll email you within 1–2 business days ✨";
      form.reset();
    } else {
      statusEl.textContent = "Hmm, something went wrong. You can also email me directly.";
    }
  } catch {
    statusEl.textContent = "Network error — try again, or email me directly.";
  }
});

// Footer: year + back-to-top smooth scroll
document.getElementById('year').textContent = new Date().getFullYear();
document.querySelector('.back-top')?.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});


