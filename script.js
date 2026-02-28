/* ==========================================
   MOBILIER DE FRANCE - script.js
   ========================================== */

/* --- NAVBAR : scroll effect & mobile toggle --- */
const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

window.addEventListener('scroll', () => {
  if (window.scrollY > 60) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

/* --- PROCESS STEPS : animation au scroll --- */
const processSteps = document.querySelectorAll('.process-step');
let currentStep = 0;

function animateSteps() {
  processSteps.forEach((step, i) => step.classList.remove('active'));
  processSteps[currentStep].classList.add('active');
  currentStep = (currentStep + 1) % processSteps.length;
}

const processSection = document.querySelector('.process-steps');
if (processSection) {
  const observer = new IntersectionObserver((entries) => {
    if (entries[0].isIntersecting) {
      animateSteps();
      setInterval(animateSteps, 1800);
      observer.disconnect();
    }
  }, { threshold: 0.5 });
  observer.observe(processSection);
}

/* --- STATS : compteur animé --- */
function animateCounter(el, target, duration = 1500) {
  const start = 0;
  const step = (timestamp) => {
    if (!el._startTime) el._startTime = timestamp;
    const progress = Math.min((timestamp - el._startTime) / duration, 1);
    const current = Math.floor(progress * target);
    el.textContent = current + (el.dataset.suffix || '');
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + (el.dataset.suffix || '');
  };
  requestAnimationFrame(step);
}

const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
  if (entries[0].isIntersecting) {
    statNumbers.forEach(el => {
      const raw = el.textContent.trim();
      const num = parseInt(raw.replace(/\D/g, ''), 10);
      if (!isNaN(num)) {
        const suffix = raw.replace(/[0-9]/g, '');
        el.dataset.suffix = suffix;
        animateCounter(el, num);
      }
    });
    statsObserver.disconnect();
  }
}, { threshold: 0.5 });

const statsSection = document.querySelector('.stats');
if (statsSection) statsObserver.observe(statsSection);

/* --- SAV BOT --- */
const botMessages = document.getElementById('botMessages');
const botInput = document.getElementById('botInput');
const botSuggestions = document.getElementById('botSuggestions');

// Réponses simples du bot
const botResponses = {
  'suivre ma livraison': 'Pour suivre votre livraison, veuillez nous communiquer votre numéro de commande. Vous pouvez également télécharger notre application mobile pour un suivi en temps réel.',
  'signaler un problème': 'Nous sommes désolés pour ce désagrément. Pour signaler un problème, merci de préciser :\n• Votre numéro de commande\n• La nature du problème\n• Des photos si possible\nNous traiterons votre demande dans les 24h.',
  'contacter le sav': 'Notre équipe SAV est disponible du lundi au vendredi, de 9h à 18h.\n📧 sav@mdf.com\n\nVous pouvez aussi remplir le formulaire de contact en bas de page.',
  'default': 'Merci pour votre message. Un conseiller va vous répondre prochainement. Pour une réponse rapide, n\'hésitez pas à utiliser les boutons de raccourci ci-dessus.'
};

function addBotMessage(text, isUser = false) {
  const div = document.createElement('div');
  div.className = `bot-message bot-message--${isUser ? 'user' : 'bot'}`;

  const bubble = document.createElement('div');
  bubble.className = 'bot-bubble';
  bubble.textContent = text;

  div.appendChild(bubble);
  botMessages.appendChild(div);
  botMessages.scrollTop = botMessages.scrollHeight;
}

function addTypingIndicator() {
  const div = document.createElement('div');
  div.className = 'bot-message bot-message--bot';
  div.id = 'typingIndicator';

  const bubble = document.createElement('div');
  bubble.className = 'bot-bubble';
  bubble.style.opacity = '0.6';
  bubble.textContent = '...';

  div.appendChild(bubble);
  botMessages.appendChild(div);
  botMessages.scrollTop = botMessages.scrollHeight;
}

function removeTypingIndicator() {
  const indicator = document.getElementById('typingIndicator');
  if (indicator) indicator.remove();
}

function getBotResponse(message) {
  const lower = message.toLowerCase().trim();
  for (const key in botResponses) {
    if (key !== 'default' && lower.includes(key)) {
      return botResponses[key];
    }
  }
  return botResponses['default'];
}

function sendMessage(text) {
  if (!text.trim()) return;
  addBotMessage(text, true);

  // Cacher les suggestions après le premier message
  if (botSuggestions) {
    botSuggestions.style.display = 'none';
  }

  addTypingIndicator();

  setTimeout(() => {
    removeTypingIndicator();
    addBotMessage(getBotResponse(text));
  }, 900);
}

function sendBotMessage() {
  const text = botInput.value.trim();
  if (!text) return;
  botInput.value = '';
  sendMessage(text);
}

function sendSuggestion(text) {
  sendMessage(text);
}

function handleBotKey(event) {
  if (event.key === 'Enter') {
    sendBotMessage();
  }
}

/* --- CONTACT FORM --- */
function handleContactForm(event) {
  event.preventDefault();
  const form = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  const btn = form.querySelector('.btn-primary');
  btn.textContent = 'Envoi en cours...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = 'Envoyer le message';
    btn.disabled = false;
    success.classList.add('visible');
    form.reset();

    setTimeout(() => {
      success.classList.remove('visible');
    }, 5000);
  }, 1200);
}

/* --- SCROLL REVEAL : animation d'apparition --- */
const revealElements = document.querySelectorAll(
  '.app-card, .stat-item, .qualite-list li, .contact-item'
);

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealElements.forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = `opacity 0.5s ease ${i * 0.07}s, transform 0.5s ease ${i * 0.07}s`;
  revealObserver.observe(el);
});
