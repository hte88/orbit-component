# Orbital Navigation System

Un système de navigation orbital dynamique et personnalisable pour Vue 3. Ce composant crée une interface de navigation interactive où les éléments orbitent autour d'un point central, avec des effets de survol et d'animation.

## 🚀 Installation

```bash
npm install orbital-navigation-system
# ou
yarn add orbital-navigation-system
```

## 📋 Prérequis

- Vue 3
- TypeScript
- Tailwind CSS
- Iconify (pour les icônes)

## 🎯 Utilisation de base

```vue
<script setup lang="ts">
import OrbitalSystem from './components/OrbitalSystem.vue';
import type { OrbitalElement } from './types/orbital-nav.types';

const orbitalData: OrbitalElement[][] = [
  [
    {
      type: 'icon',
      content: 'mdi-light:home',
      style: {
        border: 'border-1 border-blue-800 hover:border-red-500',
        content: 'text-red-500',
      },
    },
  ],
];
</script>

<template>
  <OrbitalSystem
    :rings="orbitalData"
    :system-diameter="300"
    :ring-spacing="100"
  />
</template>
```

## ⚙️ Props

### OrbitalSystem

| Prop              | Type               | Default | Description                                                 |
| ----------------- | ------------------ | ------- | ----------------------------------------------------------- |
| rings             | OrbitalElement[][] | `[]`    | Tableau de tableaux contenant les éléments de chaque anneau |
| systemDiameter    | number             | 500     | Diamètre total du système en pixels                         |
| ringSpacing       | number             | 100     | Espacement entre les anneaux en pixels                      |
| rotationSpeed     | number             | 30      | Vitesse de rotation de base (en secondes par rotation)      |
| speedMultiplier   | number             | 1       | Multiplicateur de vitesse entre les anneaux                 |
| glowRotationRatio | number             | 2.5     | Ratio de vitesse pour l'effet de lueur                      |
| elementDiameter   | number             | 10      | Diamètre des éléments en pixels                             |
| enableGlow        | boolean            | true    | Active/désactive l'effet de lueur                           |
| theme             | OrbitalUI          | {...}   | Configuration du thème                                      |

### Types d'éléments supportés

Le système supporte trois types d'éléments :

1. **Icon**

```typescript
{
  type: 'icon',
  content: 'mdi-light:home', // Nom de l'icône Iconify
  style?: {
    border?: string,    // Classes Tailwind pour la bordure
    content?: string    // Classes Tailwind pour l'icône
  },
  href?: string        // Lien optionnel
}
```

2. **String**

```typescript
{
  type: 'string',
  content: 'Texte',    // Contenu textuel
  style?: {
    border?: string,    // Classes Tailwind pour la bordure
    content?: string    // Classes Tailwind pour le texte
  },
  href?: string        // Lien optionnel
}
```

3. **Image**

```typescript
{
  type: 'image',
  content: '/path/to/image.jpg', // Chemin de l'image
  alt?: string,       // Texte alternatif
  style?: {
    border?: string,   // Classes Tailwind pour la bordure
    content?: string   // Classes Tailwind pour l'image
  },
  href?: string       // Lien optionnel
}
```

## 🎨 Personnalisation du thème

```typescript
const theme = {
  background: 'bg-white', // Classe Tailwind pour l'arrière-plan
  border: {
    color: '#F7F7F7FF', // Couleur de la bordure
    opacity: 1, // Opacité de la bordure
  },
  glow: {
    center: '#ff00ff', // Couleur centrale de la lueur
    edge: '#E9E9E9FF', // Couleur externe de la lueur
  },
};
```

## 🔄 Animations

Le système inclut trois types d'animations :

- Rotation des anneaux
- Contre-rotation des éléments
- Animation de la lueur des bordures

Les animations peuvent être mises en pause au survol d'un élément.

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou une pull request.

## 📄 Licence

MIT
