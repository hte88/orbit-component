<script setup lang="ts">
import { computed, type PropType } from 'vue';
import type { GlowStyle } from '../types/orbit';

const props = defineProps({
  color: {
    type: String,
    required: true,
  },
  opacity: {
    type: Number,
    default: 0.3,
  },
  glowStyle: {
    type: Object as PropType<GlowStyle>,
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
      transparent 0%,
      transparent 35%,
      ${props.glowStyle.edge} 40%,
      ${props.glowStyle.center} 47%,
      ${props.glowStyle.center} 53%,
      ${props.glowStyle.edge} 60%,
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
    :style="glowStyle"
  />
</template>
