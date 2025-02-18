<script setup lang="ts">
import { computed } from 'vue';
const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  opacity: {
    type: Number,
    default: 0.3,
  },
  glowColors: {
    type: Object,
    required: true,
  },
  rotationDuration: {
    type: Number,
    required: true,
  },
});

const glowStyle = computed(() => ({
  animation: `borderLight ${props.rotationDuration}s linear infinite`,
  background: `
    linear-gradient(45deg,
      transparent 0%, /* Démarre totalement transparent */
      transparent 35%, /* Reste transparent jusqu'à 35% pour créer une zone claire */
      ${props.glowColors.edge} 40%,  /* Transition vers le jaune sur 5% (35-40%) */
      ${props.glowColors.center} 47%,    /* Transition vers l'orange sur 7% (40-47%) */
      ${props.glowColors.center} 53%,    /* Maintient l'orange au centre sur 6% (47-53%) */
      ${props.glowColors.edge} 60%,  /* Transition vers le jaune sur 7% (53-60%) */
      transparent 65%, /* Transition finale vers transparent sur 5% (60-65%) */
      transparent 100%  /* Reste transparent jusqu'à la fin */
    ) border-box
    `,
  filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))',
  WebkitMask:
    'linear-gradient(#ffffff 0 0) padding-box, linear-gradient(#ffffff 0 0)',
  WebkitMaskComposite: 'xor',
  mask: 'linear-gradient(#ffffff 0 0) padding-box, linear-gradient(#ffffff 0 0)',
  maskComposite: 'exclude',
}));
</script>
<template>
  <div
    class="absolute inset-0 rounded-full border-2 border-transparent"
    :style="glowStyle"
  />
</template>
