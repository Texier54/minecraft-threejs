# minecraft-threejs

Réplique de **Minecraft** développée en **JavaScript** avec **Three.js**, incluant une architecture **client / serveur** et une gestion du monde par chunks.

![Aperçu du projet](public/images/preview.png)

---

## 🎮 Démo en ligne

👉 https://texier54.github.io/minecraft-threejs/

---

## 🕹️ Contrôles

### Déplacements
- **Z Q S D** → Avancer / Gauche / Reculer / Droite
- **Espace** → Sauter
- **Shift gauche** → Courir

### Interface & gameplay
- **E** → Inventaire
- **1 à 9** → Barre de raccourcis (slots)
- **T** → Afficher le chat
- **L** → Liste des joueurs
- **F5** → Changer de caméra
- **Échap** → Menu

---

## 🛠️ Développement (Client)

### Prérequis
- Node.js ≥ 18
- npm

### Lancer le projet en mode développement
```bash
npm install
npm run dev
```

Le client utilise **Three.js** pour le rendu 3D et gère :
- Le chargement dynamique des chunks
- Les entités (joueur, blocs interactifs, etc.)
- Les interactions (placement, destruction, portes, etc.)

---

## 🌍 Serveur

### Prérequis
- Node.js
- **PM2** (recommandé pour la production)

```bash
npm install -g pm2
```

### Rôle du serveur
Le serveur est responsable de :
- La synchronisation des joueurs
- La logique du monde
- La persistance des données

### Sauvegarde du monde
- Le monde est sauvegardé **par chunk**
- Format **binaire**
- Stockage dans le dossier :
```text
/worlddata
```

Chaque chunk est sauvegardé indépendamment afin d’optimiser les performances et la scalabilité.

---

## 📦 Technologies utilisées

- **Three.js** – Rendu 3D
- **Node.js** – Backend
- **WebSocket** – Communication temps réel
- **PM2** – Gestion des processus serveur

---

## 🚧 État du projet

Projet en cours de développement.
Certaines fonctionnalités peuvent être incomplètes ou sujettes à changement.

---

## 📄 Licence

Projet open‑source – licence à définir.