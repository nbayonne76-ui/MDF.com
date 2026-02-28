/* ==========================================
   MOBILIER DE FRANCE - script.js
   ========================================== */

/* ==========================================
   TRADUCTIONS FR / EN
   ========================================== */
const translations = {
  fr: {
    // Navbar
    'nav.accueil': 'Accueil',
    'nav.app':     'Notre Application',
    'nav.qualite': 'Qualité',
    'nav.sav':     'Assistance',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge':    'Excellence depuis 1962',
    'hero.title1':   "L'art de livrer",
    'hero.title2':   'la qualité',
    'hero.subtitle': "Mobilier de France s'engage à vous offrir une expérience de livraison irréprochable, grâce à notre système de traçabilité qualité de bout en bout.",
    'hero.btn1':  "Découvrir l'application",
    'hero.btn2':  'Assistance client',
    'hero.card1': 'Livraison vérifiée',
    'hero.card2': 'Suivi en temps réel',
    'hero.card3': 'Qualité garantie',

    // Stats
    'stats.label1': "Années d'expérience",
    'stats.label2': 'Livraisons tracées',
    'stats.label3': 'Acteurs du processus',
    'stats.label4': 'Support disponible',

    // Application
    'app.tag':   'Application Mobile',
    'app.title': 'Une app pour chaque acteur',
    'app.desc':  "Notre application de traçabilité qualité connecte tous les maillons de la chaîne — du fournisseur au client final — en passant par le chauffeur et le showroom.",
    'app.card1.title': 'Fournisseur',
    'app.card1.desc':  "Préparation des commandes, contrôle qualité à la source, photos de départ et chargement camion.",
    'app.card2.title': 'Chauffeur',
    'app.card2.desc':  "Prise en charge des livraisons, gestion des tournées, photos à la livraison et signalement d'incidents.",
    'app.card3.title': 'Showroom',
    'app.card3.desc':  "Réception des meubles, contrôle à la livraison, validation ou signalement des défauts.",
    'app.card4.title': 'Client',
    'app.card4.desc':  "Suivi de sa commande, réception confirmée avec signature électronique et avis qualité.",
    'app.download.label': 'Application disponible prochainement sur',
    'app.download.sub':   'Disponible sur',

    // Qualité
    'qualite.tag':   'Notre engagement',
    'qualite.title': 'Zéro compromis sur la qualité',
    'qualite.desc':  "Chaque meuble est photographié, référencé et suivi à chaque étape — de la fabrication à votre domicile.",
    'qualite.text':  "Grâce à notre système de traçabilité numérique, vous disposez d'une preuve photo à chaque étape. Fini les litiges sans preuve : tout est documenté, daté et archivé.",
    'qualite.check1': 'Photos de contrôle avant expédition',
    'qualite.check2': 'Vérification au chargement du camion',
    'qualite.check3': 'Contrôle à la réception en showroom',
    'qualite.check4': 'Confirmation de livraison chez le client',
    'qualite.check5': 'Historique complet accessible en ligne',
    'qualite.step1.title': 'Fournisseur',
    'qualite.step1.desc':  'Contrôle qualité à la source',
    'qualite.step2.title': 'Transport',
    'qualite.step2.desc':  'Chargement vérifié et photographié',
    'qualite.step3.title': 'Showroom',
    'qualite.step3.desc':  'Réception contrôlée',
    'qualite.step4.title': 'Client',
    'qualite.step4.desc':  'Livraison confirmée et signée',

    // SAV Bot
    'sav.tag':    'Service Après-Vente',
    'sav.title':  'Assistance intelligente 24h/24',
    'sav.desc':   "Notre assistant virtuel est disponible à tout moment pour répondre à vos questions, suivre vos dossiers SAV et vous orienter vers le bon interlocuteur.",
    'sav.bot.name':    'Assistant MDF',
    'sav.bot.status':  'En ligne',
    'sav.bot.welcome': "Bonjour ! Je suis l'assistant Mobilier de France. Comment puis-je vous aider aujourd'hui ?",
    'sav.suggest1': 'Suivre ma livraison',
    'sav.suggest2': 'Signaler un problème',
    'sav.suggest3': 'Contacter le SAV',
    'sav.input.placeholder': 'Posez votre question...',
    'sav.send': 'Envoyer',

    // Contact
    'contact.tag':           'Nous contacter',
    'contact.title':         'Une question ? Écrivez-nous',
    'contact.address.label': 'Siège social',
    'contact.address.value': 'France',
    'contact.email.label':   'Email',
    'contact.hours.label':   'Horaires',
    'contact.hours.value':   'Lun - Ven : 9h - 18h',
    'contact.chat.label':    'Support en ligne',
    'contact.chat.link':     'Accéder au chat →',
    'form.firstname': 'Prénom',
    'form.lastname':  'Nom',
    'form.email':     'Email',
    'form.subject':   'Sujet',
    'form.subject.opt0': 'Choisir un sujet',
    'form.subject.opt1': 'Suivi de livraison',
    'form.subject.opt2': 'Service après-vente',
    'form.subject.opt3': 'Application mobile',
    'form.subject.opt4': 'Autre',
    'form.message': 'Message',
    'form.placeholder.firstname': 'Jean',
    'form.placeholder.lastname':  'Dupont',
    'form.placeholder.message':   'Votre message...',
    'form.submit':  'Envoyer le message',
    'form.success': 'Message envoyé ! Nous vous répondrons sous 24h.',

    // Footer
    'footer.desc':          'Excellence et qualité dans chaque livraison depuis 1962.',
    'footer.nav.title':     'Navigation',
    'footer.legal.title':   'Légal',
    'footer.legal.privacy': 'Politique de confidentialité',
    'footer.legal.support': 'Support',
    'footer.copy': '© 2026 Mobilier de France. Tous droits réservés.',

    // Bot responses
    'bot.resp.delivery': "Pour suivre votre livraison, veuillez nous communiquer votre numéro de commande. Vous pouvez également télécharger notre application mobile pour un suivi en temps réel.",
    'bot.resp.problem':  "Nous sommes désolés pour ce désagrément. Pour signaler un problème, merci de préciser :\n• Votre numéro de commande\n• La nature du problème\n• Des photos si possible\nNous traiterons votre demande dans les 24h.",
    'bot.resp.contact':  "Notre équipe SAV est disponible du lundi au vendredi, de 9h à 18h.\n📧 sav@mdf.com\n\nVous pouvez aussi remplir le formulaire dans l'onglet Contact.",
    'bot.resp.default':  "Merci pour votre message. Un conseiller va vous répondre prochainement. Pour une réponse rapide, utilisez les boutons de raccourci ci-dessus.",
  },

  en: {
    // Navbar
    'nav.accueil': 'Home',
    'nav.app':     'Our Application',
    'nav.qualite': 'Quality',
    'nav.sav':     'Support',
    'nav.contact': 'Contact',

    // Hero
    'hero.badge':    'Excellence since 1962',
    'hero.title1':   'The art of delivering',
    'hero.title2':   'quality',
    'hero.subtitle': "Mobilier de France is committed to providing you with an impeccable delivery experience, thanks to our end-to-end quality traceability system.",
    'hero.btn1':  'Discover the app',
    'hero.btn2':  'Customer support',
    'hero.card1': 'Verified delivery',
    'hero.card2': 'Real-time tracking',
    'hero.card3': 'Guaranteed quality',

    // Stats
    'stats.label1': 'Years of experience',
    'stats.label2': 'Deliveries tracked',
    'stats.label3': 'Process actors',
    'stats.label4': 'Available support',

    // Application
    'app.tag':   'Mobile Application',
    'app.title': 'An app for every actor',
    'app.desc':  "Our quality traceability app connects every link in the chain — from supplier to end customer — through the driver and the showroom.",
    'app.card1.title': 'Supplier',
    'app.card1.desc':  "Order preparation, quality control at source, departure photos and truck loading.",
    'app.card2.title': 'Driver',
    'app.card2.desc':  "Delivery handling, route management, delivery photos and incident reporting.",
    'app.card3.title': 'Showroom',
    'app.card3.desc':  "Furniture reception, delivery inspection, validation or defect reporting.",
    'app.card4.title': 'Customer',
    'app.card4.desc':  "Order tracking, confirmed reception with electronic signature and quality review.",
    'app.download.label': 'Application coming soon on',
    'app.download.sub':   'Available on',

    // Quality
    'qualite.tag':   'Our commitment',
    'qualite.title': 'Zero compromise on quality',
    'qualite.desc':  "Every piece of furniture is photographed, referenced and tracked at every step — from manufacturing to your home.",
    'qualite.text':  "Thanks to our digital traceability system, you have photographic proof at every stage. No more disputes without evidence: everything is documented, dated and archived.",
    'qualite.check1': 'Quality control photos before shipping',
    'qualite.check2': 'Verification at truck loading',
    'qualite.check3': 'Inspection upon showroom reception',
    'qualite.check4': 'Delivery confirmation at customer',
    'qualite.check5': 'Complete history accessible online',
    'qualite.step1.title': 'Supplier',
    'qualite.step1.desc':  'Quality control at source',
    'qualite.step2.title': 'Transport',
    'qualite.step2.desc':  'Verified and photographed loading',
    'qualite.step3.title': 'Showroom',
    'qualite.step3.desc':  'Controlled reception',
    'qualite.step4.title': 'Customer',
    'qualite.step4.desc':  'Confirmed and signed delivery',

    // Support Bot
    'sav.tag':    'After-Sales Service',
    'sav.title':  'Intelligent 24/7 assistance',
    'sav.desc':   "Our virtual assistant is available at any time to answer your questions, track your support cases and direct you to the right contact.",
    'sav.bot.name':    'MDF Assistant',
    'sav.bot.status':  'Online',
    'sav.bot.welcome': 'Hello! I am the Mobilier de France assistant. How can I help you today?',
    'sav.suggest1': 'Track my delivery',
    'sav.suggest2': 'Report an issue',
    'sav.suggest3': 'Contact support',
    'sav.input.placeholder': 'Ask your question...',
    'sav.send': 'Send',

    // Contact
    'contact.tag':           'Contact us',
    'contact.title':         'A question? Write to us',
    'contact.address.label': 'Headquarters',
    'contact.address.value': 'France',
    'contact.email.label':   'Email',
    'contact.hours.label':   'Opening hours',
    'contact.hours.value':   'Mon - Fri: 9am - 6pm',
    'contact.chat.label':    'Online support',
    'contact.chat.link':     'Open chat →',
    'form.firstname': 'First name',
    'form.lastname':  'Last name',
    'form.email':     'Email',
    'form.subject':   'Subject',
    'form.subject.opt0': 'Choose a subject',
    'form.subject.opt1': 'Delivery tracking',
    'form.subject.opt2': 'After-sales service',
    'form.subject.opt3': 'Mobile application',
    'form.subject.opt4': 'Other',
    'form.message': 'Message',
    'form.placeholder.firstname': 'John',
    'form.placeholder.lastname':  'Smith',
    'form.placeholder.message':   'Your message...',
    'form.submit':  'Send message',
    'form.success': 'Message sent! We will reply within 24 hours.',

    // Footer
    'footer.desc':          'Excellence and quality in every delivery since 1962.',
    'footer.nav.title':     'Navigation',
    'footer.legal.title':   'Legal',
    'footer.legal.privacy': 'Privacy Policy',
    'footer.legal.support': 'Support',
    'footer.copy': '© 2026 Mobilier de France. All rights reserved.',

    // Bot responses
    'bot.resp.delivery': "To track your delivery, please provide your order number. You can also download our mobile app for real-time tracking.",
    'bot.resp.problem':  "We are sorry for this inconvenience. To report an issue, please specify:\n• Your order number\n• The nature of the problem\n• Photos if possible\nWe will handle your request within 24 hours.",
    'bot.resp.contact':  "Our support team is available Monday to Friday, 9am to 6pm.\n📧 sav@mdf.com\n\nYou can also fill in the form in the Contact tab.",
    'bot.resp.default':  "Thank you for your message. An advisor will reply shortly. For a quick response, use the shortcut buttons above.",
  }
};

/* ==========================================
   MOTEUR DE TRADUCTION
   ========================================== */
let currentLang = 'fr';

function t(key) {
  return translations[currentLang][key] || translations['fr'][key] || key;
}

function applyTranslations() {
  // Texte des éléments
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const val = t(key);
    if (val) el.textContent = val;
  });

  // Placeholders
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const val = t(key);
    if (val) el.placeholder = val;
  });

  // Mettre à jour le message de bienvenue du bot (si pas encore interagi)
  const welcomeBubble = document.querySelector('#botMessages .bot-bubble');
  if (welcomeBubble && welcomeBubble.closest('.bot-message--bot') === document.querySelector('#botMessages .bot-message')) {
    welcomeBubble.textContent = t('sav.bot.welcome');
  }

  // Mettre à jour l'attribut lang du HTML
  document.documentElement.lang = currentLang;
}

function toggleLang() {
  currentLang = currentLang === 'fr' ? 'en' : 'fr';
  const label = document.getElementById('langLabel');
  label.textContent = currentLang === 'fr' ? 'EN' : 'FR';
  applyTranslations();
}

/* ==========================================
   NAVIGATION PAR ONGLETS
   ========================================== */
function switchTab(tabName) {
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));

  const panel = document.getElementById('tab-' + tabName);
  if (panel) { panel.classList.add('active'); window.scrollTo({ top: 0, behavior: 'smooth' }); }

  const tab = document.querySelector(`.nav-tab[data-tab="${tabName}"]`);
  if (tab) tab.classList.add('active');

  document.getElementById('navLinks').classList.remove('open');

  if (tabName === 'qualite') initProcessSteps();
  if (tabName === 'accueil') initStats();
}

/* --- Onglets navbar --- */
document.querySelectorAll('.nav-tab').forEach(tab => {
  tab.addEventListener('click', e => { e.preventDefault(); switchTab(tab.dataset.tab); });
});

/* --- Mobile toggle --- */
document.getElementById('navToggle').addEventListener('click', () => {
  document.getElementById('navLinks').classList.toggle('open');
});

/* ==========================================
   STATS : compteurs animés
   ========================================== */
let statsAnimated = false;

function initStats() {
  if (statsAnimated) return;
  statsAnimated = true;
  document.querySelectorAll('.stat-number[data-target]').forEach(el => {
    animateCounter(el, parseInt(el.dataset.target, 10), el.dataset.suffix || '');
  });
}

function animateCounter(el, target, suffix, duration = 1400) {
  const step = ts => {
    if (!el._start) el._start = ts;
    const p = Math.min((ts - el._start) / duration, 1);
    el.textContent = Math.floor(p * target) + suffix;
    if (p < 1) requestAnimationFrame(step);
    else el.textContent = target + suffix;
  };
  requestAnimationFrame(step);
}

initStats();

/* ==========================================
   PROCESS STEPS
   ========================================== */
let processInterval = null;
let currentStep = 0;

function initProcessSteps() {
  const steps = document.querySelectorAll('.process-step');
  if (!steps.length) return;
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
   SAV BOT
   ========================================== */
function getBotResponse(message) {
  const lower = message.toLowerCase();
  if (lower.includes('livraison') || lower.includes('delivery') || lower.includes('track')) return t('bot.resp.delivery');
  if (lower.includes('problème') || lower.includes('problem') || lower.includes('issue') || lower.includes('signaler') || lower.includes('report')) return t('bot.resp.problem');
  if (lower.includes('sav') || lower.includes('contact') || lower.includes('support')) return t('bot.resp.contact');
  return t('bot.resp.default');
}

function addBotMessage(text, isUser = false) {
  const msgs = document.getElementById('botMessages');
  const div = document.createElement('div');
  div.className = `bot-message bot-message--${isUser ? 'user' : 'bot'}`;
  const bubble = document.createElement('div');
  bubble.className = 'bot-bubble';
  bubble.textContent = text;
  div.appendChild(bubble);
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addTypingIndicator() {
  const msgs = document.getElementById('botMessages');
  const div = document.createElement('div');
  div.className = 'bot-message bot-message--bot';
  div.id = 'typingIndicator';
  const bubble = document.createElement('div');
  bubble.className = 'bot-bubble';
  bubble.style.opacity = '0.5';
  bubble.textContent = '...';
  div.appendChild(bubble);
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function removeTypingIndicator() {
  const el = document.getElementById('typingIndicator');
  if (el) el.remove();
}

function sendMessage(text) {
  if (!text.trim()) return;
  addBotMessage(text, true);
  const sugg = document.getElementById('botSuggestions');
  if (sugg) sugg.style.display = 'none';
  addTypingIndicator();
  setTimeout(() => { removeTypingIndicator(); addBotMessage(getBotResponse(text)); }, 900);
}

function sendBotMessage() {
  const input = document.getElementById('botInput');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  sendMessage(text);
}

function sendSuggestion(text) { sendMessage(text); }
function handleBotKey(e)      { if (e.key === 'Enter') sendBotMessage(); }

/* ==========================================
   CONTACT FORM
   ========================================== */
function handleContactForm(event) {
  event.preventDefault();
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = form.querySelector('.btn-primary');

  btn.textContent = currentLang === 'fr' ? 'Envoi en cours...' : 'Sending...';
  btn.disabled = true;

  setTimeout(() => {
    btn.textContent = t('form.submit');
    btn.disabled = false;
    success.textContent = t('form.success');
    success.classList.add('visible');
    form.reset();
    setTimeout(() => success.classList.remove('visible'), 5000);
  }, 1200);
}
