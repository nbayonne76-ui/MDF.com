/* ==========================================
   MOBILIER DE FRANCE - script.js
   ========================================== */

/* ==========================================
   NAVIGATION PAR ONGLETS
   ========================================== */
function switchTab(tabName) {
  // Masquer tous les panels
  document.querySelectorAll('.tab-panel').forEach(panel => {
    panel.classList.remove('active');
  });

  // Désactiver tous les onglets de la navbar
  document.querySelectorAll('.nav-tab').forEach(tab => {
    tab.classList.remove('active');
  });

  // Afficher le panel cible
  const targetPanel = document.getElementById('tab-' + tabName);
  if (targetPanel) {
    targetPanel.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Activer l'onglet correspondant dans la navbar
  const targetTab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
  if (targetTab) {
    targetTab.classList.add('active');
  }

  // Fermer le menu mobile si ouvert
  navLinks.classList.remove('open');

  // Déclencher les animations spécifiques à chaque onglet
  if (tabName === 'qualite') initProcessSteps();
  if (tabName === 'accueil') initStats();
}

/* --- Clic sur les onglets de la navbar --- */
const navLinks = document.getElementById('navLinks');

document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', (e) => {
    e.preventDefault();
    switchTab(tab.dataset.tab);
  });
});

/* --- Mobile toggle --- */
const navToggle = document.getElementById('navToggle');
navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

/* ==========================================
   STATS : compteurs animés (onglet Accueil)
   ========================================== */
let statsAnimated = false;

function initStats() {
  if (statsAnimated) return;
  statsAnimated = true;

  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    const target = parseInt(el.dataset.target, 10);
    const suffix = el.dataset.suffix || '';
    animateCounter(el, target, suffix);
  });
}

function animateCounter(el, target, suffix, duration = 1400) {
  const step = (timestamp) => {
    if (!el._startTime) el._startTime = timestamp;
    const progress = Math.min((timestamp - el._startTime) / duration, 1);
    el.textContent = Math.floor(progress * target) + suffix;
    if (progress < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(step);
}

// Lancer les stats au chargement (onglet accueil actif par défaut)
initStats();

/* ==========================================
   PROCESS STEPS : animation (onglet Qualité)
   ========================================== */
let processInterval = null;
let currentStep = 0;

function initProcessSteps() {
  const steps = document.querySelectorAll('.process-step');
  if (!steps.length) return;

  // Réinitialiser
  clearInterval(processInterval);
  currentStep = 0;
  steps.forEach(s => s.classList.remove('active'));
  steps[0].classList.add('active');

  processInterval = setInterval(() => {
    steps.forEach(s => s.classList.remove('active'));
    currentStep = (currentStep + 1) % steps.length;
    steps[currentStep].classList.add('active');
  }, 1800);
}

/* ==========================================
   SAV BOT (onglet Assistance)
   ========================================== */
const botResponses = {
  'suivre ma livraison': 'Pour suivre votre livraison, veuillez nous communiquer votre numéro de commande. Vous pouvez également télécharger notre application mobile pour un suivi en temps réel.',
  'signaler un problème': 'Nous sommes désolés pour ce désagrément. Pour signaler un problème, merci de préciser :\n• Votre numéro de commande\n• La nature du problème\n• Des photos si possible\nNous traiterons votre demande dans les 24h.',
  'contacter le sav': 'Notre équipe SAV est disponible du lundi au vendredi, de 9h à 18h.\n📧 sav@mdf.com\n\nVous pouvez aussi remplir le formulaire dans l\'onglet Contact.',
  'default': 'Merci pour votre message. Un conseiller va vous répondre prochainement. Pour une réponse rapide, utilisez les boutons de raccourci ci-dessus.'
};

function addBotMessage(text, isUser = false) {
  const botMessages = document.getElementById('botMessages');
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
  const botMessages = document.getElementById('botMessages');
  const div = document.createElement('div');
  div.className = 'bot-message bot-message--bot';
  div.id = 'typingIndicator';
  const bubble = document.createElement('div');
  bubble.className = 'bot-bubble';
  bubble.style.opacity = '0.5';
  bubble.textContent = '...';
  div.appendChild(bubble);
  botMessages.appendChild(div);
  botMessages.scrollTop = botMessages.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function getBotResponse(message) {
  const lower = message.toLowerCase().trim();
  for (const key in botResponses) {
    if (key !== 'default' && lower.includes(key)) return botResponses[key];
  }
  return botResponses['default'];
}

function sendMessage(text) {
  if (!text.trim()) return;
  addBotMessage(text, true);
  const suggestions = document.getElementById('botSuggestions');
  if (suggestions) suggestions.style.display = 'none';
  addTypingIndicator();
  setTimeout(() => {
    removeTypingIndicator();
    addBotMessage(getBotResponse(text));
  }, 900);
}

function sendBotMessage() {
  const input = document.getElementById('botInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  sendMessage(text);
}

function sendSuggestion(text) { sendMessage(text); }

function handleBotKey(event) {
  if (event.key === 'Enter') sendBotMessage();
}

/* ==========================================
   FORMULAIRE DE CONTACT (onglet Contact)
   ========================================== */
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
    setTimeout(() => success.classList.remove('visible'), 5000);
  }, 1200);
}
