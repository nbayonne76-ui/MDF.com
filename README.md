# mdf.com — Site Mobilier de France

Site vitrine officiel de **Mobilier de France**, hébergeant :
- Présentation de l'application mobile de traçabilité qualité
- Assistant SAV virtuel intégré
- Pages légales requises pour le déploiement App Store / Google Play

## Structure

```
mdf.com/
├── index.html          # Page principale
├── style.css           # Styles globaux
├── script.js           # Interactions & SAV bot
├── privacy-policy.html # Politique de confidentialité (RGPD / App Store)
└── support.html        # Centre de support (App Store / Play Store)
```

## Pages

| Page | Description |
|------|-------------|
| `index.html` | Accueil, présentation app, processus qualité, SAV bot, contact |
| `privacy-policy.html` | Politique de confidentialité RGPD — **requis App Store & Play Store** |
| `support.html` | Centre de support avec FAQ — **requis App Store & Play Store** |

## Développement local

Ouvrir `index.html` dans un navigateur, ou utiliser un serveur local :

```bash
# Python
python -m http.server 3000

# Node.js (npx)
npx serve .
```

## Déploiement

Ce site est conçu pour être hébergé sur :
- **GitHub Pages** (gratuit, depuis ce repo)
- Ou tout hébergeur statique (Netlify, Vercel, etc.)

Pour GitHub Pages : activer dans Settings > Pages > Branch: main.
