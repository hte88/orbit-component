<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { GlowStyle } from '../types/orbit';
import { useOrbitalSystem } from '../composables/orbital';

const props = defineProps({
  glowUi: {
    type: Object as PropType<GlowStyle>,
    required: true,
  },
  rotationDuration: {
    type: Number,
    required: true,
  },
});

const { glowRotationReversed } = useOrbitalSystem();

const directionRotation = computed(() =>
  glowRotationReversed ? 'leftHandRotation' : 'rightHandRotation',
);

const glowUi = computed(() => ({
  animation: `${directionRotation.value} ${props.rotationDuration}s linear infinite normal`,
  background: `
    linear-gradient(45deg,
      transparent 0%,
      transparent 35%,
      ${props.glowUi.secondary} 40%,
      ${props.glowUi.primary} 47%,
      ${props.glowUi.primary} 53%,
      ${props.glowUi.secondary} 60%,
      transparent 65%,
      transparent 100%
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
    :style="glowUi"
  />
</template>
