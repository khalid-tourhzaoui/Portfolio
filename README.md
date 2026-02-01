# 🎮 Portfolio Web - Design Gaming/Rétro

<div align="center">

![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)
![Tailwind](https://img.shields.io/badge/Tailwind-3.4.16-38B2AC?style=for-the-badge&logo=tailwind-css)
![TypeScript](https://img.shields.io/badge/TypeScript-Ready-3178C6?style=for-the-badge&logo=typescript)

**Application portfolio moderne avec interface inspirée des jeux vidéo rétro**

[🌐 Demo en ligne](https://khalid-tourhzaoui.vercel.app/) • [📖 Documentation](#-installation)

</div>

---

## 📑 Table des matières

- [À propos du projet](#-à-propos-du-projet)
- [Fonctionnalités](#-fonctionnalités)
- [Architecture](#-architecture)
- [Technologies utilisées](#-technologies-utilisées)
- [Installation](#-installation)
- [Structure du projet](#-structure-du-projet)
- [Contribution](#-contribution)
- [Licence](#-licence)

---

## 🎯 À propos du projet

Application portfolio web moderne construite avec **React** et **Vite**, offrant une expérience utilisateur unique inspirée des jeux vidéo rétro. Ce projet démontre l'utilisation de composants React modernes, d'animations fluides et d'un design responsive.

### 🎮 Concept du Design
- **Interface Gaming/RPG** - Design inspiré des jeux vidéo classiques
- **Système de progression** - Niveaux, points d'expérience (XP), barres de progression
- **Cartes interactives** - Personnages et équipements stylisés
- **Switchboard analogique** - Navigation unique entre sections
- **Terminal rétro** - Formulaire de contact avec esthétique console
- **Design immersif** - Animations et interactions engageantes

---

## ✨ Fonctionnalités

### 🎨 Interface Utilisateur
- ✅ **Design Gaming Unique** - Interface inspirée des RPG avec système de cartes
- ✅ **Animations Fluides** - Transitions et effets visuels avec Framer Motion
- ✅ **Responsive Design** - Adaptation automatique à tous les appareils
- ✅ **Switchboard Interactif** - Navigation analogique entre différentes sections
- ✅ **Composants Modulaires** - Architecture basée sur des composants réutilisables

### 🔧 Fonctionnalités Techniques
- ⚡ **Performance Optimale** - Build ultra-rapide avec Vite
- 🎯 **Routing Dynamique** - Navigation fluide avec React Router DOM
- 📊 **Système de Progression** - Visualisation des compétences avec barres XP
- 🎭 **UI Components** - Bibliothèque Radix UI pour accessibilité
- 🎨 **Styling Moderne** - Tailwind CSS avec utilitaires personnalisés
- 📱 **Mobile First** - Design adaptatif prioritaire
- 🔄 **Hot Module Replacement** - Rechargement instantané en développement

---

## 🏗️ Architecture

### Sections Principales

#### 1️⃣ **Hero Section**
- Carte de personnage avec avatar stylisé
- Système de stats (HP, XP, Rank)
- Tags de technologies
- Call-to-action avec boutons interactifs

#### 2️⃣ **About Section**
- Bloc "Mission" avec description
- Grille "Core Abilities" affichant les compétences
- Carte développeur interactive avec statut de disponibilité
- Design en colonnes responsive

#### 3️⃣ **Skills Section - Loadout**
Système de navigation par onglets avec catégories :
- **FOUNDATIONS** - Technologies de base
- **FRONTEND** - Frameworks et bibliothèques UI
- **BACKEND** - Serveurs et APIs
- **DATABASE & DATA** - Systèmes de gestion de données
- **TOOLS & DEVOPS** - Outils de développement

Chaque catégorie affiche :
- Liste d'équipements (technologies)
- Achievements débloqués
- Niveau de maîtrise

#### 4️⃣ **Experience Section**
Interface "switchboard" avec :
- Toggles pour basculer entre Work/Education
- Moniteur CRT affichant les détails
- Cartes d'expérience avec informations structurées
- Tags de technologies utilisées

#### 5️⃣ **Projects Section**
Fenêtre de navigation rétro incluant :
- Carrousel de projets avec navigation Prev/Next
- Aperçu visuel des projets
- Description et stack technique
- Bouton "View Project" pour accès externe
- Indicateurs de pagination

#### 6️⃣ **Contact Section**
Deux panneaux principaux :
- **Message Terminal** - Formulaire de contact stylisé console
- **Developer Card** - Informations et liens sociaux
- Grille de boutons sociaux avec icônes
- Design inspiré des anciennes interfaces terminal

#### 7️⃣ **Footer**
- Indicateur de statut en ligne
- Horloge en temps réel
- Call-to-action final
- Copyright et informations

---

## 🛠️ Technologies utilisées

### **Core Framework**
- **React** `18.2.0` - Bibliothèque UI moderne et performante
- **Vite** `6.3.5` - Build tool ultra-rapide avec HMR
- **React Router DOM** `6.8.1` - Routing côté client
- **TypeScript** - Types pour React (ready)

### **Styling & UI**
- **Tailwind CSS** `3.4.16` - Framework CSS utility-first
- **Radix UI** - Composants accessibles et non-stylisés
  - `@radix-ui/react-slot` `1.1.0`
  - `@radix-ui/react-toggle` `1.1.0`
  - `@radix-ui/react-toggle-group` `1.1.0`
- **class-variance-authority** `0.7.0` - Gestion des variantes de composants

### **Icons & Assets**
- **Lucide React** `0.453.0` - Bibliothèque d'icônes moderne
- **React Icons** `5.5.0` - Collection d'icônes populaires

### **Build & Dev Tools**
- **esbuild** `0.25.5` - Transpiler JavaScript ultra-rapide
- **@vitejs/plugin-react** `4.3.4` - Plugin React pour Vite
- **globals** `15.12.0` - Variables globales ESLint

### **Package Manager**
```bash
npm install  # ou yarn install
```

---

## ⚙️ Installation

### Prérequis
- Node.js (v18.0.0 ou supérieur)
- npm ou yarn
- Git

### Étapes d'installation

1. **Cloner le dépôt**
```bash
git clone https://github.com/khalid-tourhzaoui/portfolio.git
cd portfolio
```

2. **Installer les dépendances**
```bash
npm install
# ou
yarn install
```

3. **Lancer le serveur de développement**
```bash
npm run dev
# ou
yarn dev
```

4. **Construire pour la production**
```bash
npm run build
# ou
yarn build
```

5. **Prévisualiser la build de production**
```bash
npm run preview
# ou
yarn preview
```

Le portfolio sera accessible sur `http://localhost:5173` (par défaut avec Vite).

---

## 📁 Structure du projet

```
portfolio/
├── public/
│   ├── assets/
│   │   ├── profile.jpg          # Avatar du développeur
│   │   ├── MyResume.pdf         # CV téléchargeable
│   │   └── ...                  # Autres assets
│   └── favicon.svg
├── src/
│   ├── assets/                  # Images et ressources
│   ├── components/
│   │   ├── ui/                  # Composants UI réutilisables
│   │   └── sections/            # Sections du portfolio
│   │       ├── Header.tsx
│   │       ├── HeroSection.tsx
│   │       ├── AboutSection.tsx
│   │       ├── SkillsSection.tsx
│   │       ├── ExperienceSection.tsx
│   │       ├── ProjectsSection.tsx
│   │       ├── ContactSection.tsx
│   │       └── Footer.tsx
│   ├── App.tsx                  # Composant principal
│   ├── index.tsx               # Point d'entrée
│   └── index.css               # Styles globaux
├── index.html                   # Template HTML
├── package.json                 # Dépendances et scripts
├── vite.config.ts              # Configuration Vite
├── tailwind.config.js          # Configuration Tailwind
└── README.md                    # Ce fichier
```

## 🤝 Contribution

Les contributions sont les bienvenues ! Pour contribuer :

1. **Fork** le projet
2. **Créez** votre branche (`git checkout -b feature/AmazingFeature`)
3. **Committez** vos changements (`git commit -m 'Add some AmazingFeature'`)
4. **Push** vers la branche (`git push origin feature/AmazingFeature`)
5. **Ouvrez** une Pull Request

### Guidelines
- Suivre les conventions de code existantes
- Tester les changements avant de soumettre
- Documenter les nouvelles fonctionnalités
- Maintenir le design gaming/rétro

---

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.

---

<div align="center">

### 🎮 Construit avec passion et créativité

**Fait avec ❤️ et ☕**

[![Made with React](https://img.shields.io/badge/Made%20with-React-61DAFB?style=flat&logo=react)](https://reactjs.org/)
[![Styled with Tailwind](https://img.shields.io/badge/Styled%20with-Tailwind%20CSS-38B2AC?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Built with Vite](https://img.shields.io/badge/Built%20with-Vite-646CFF?style=flat&logo=vite)](https://vitejs.dev/)

</div>