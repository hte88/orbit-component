<script setup lang="ts">
import { computed, type PropType } from 'vue';
import OrbitalRing from './OrbitalRing.vue';
import type { OrbitalElement, OrbitalUI } from '../types/orbit.ts';

const props = defineProps({
  rings: {
    type: Array as PropType<OrbitalElement[][]>,
    required: true,
    default: () => [],
  },
  systemDiameter: {
    type: Number,
    default: 500,
  },
  ringSpacing: {
    type: Number,
    default: 100,
  },
  rotationSpeed: {
    type: Number,
    default: 30,
  },
  speedMultiplier: {
    type: Number,
    default: 1,
  },
  glowRotationRatio: {
    type: Number,
    default: 2.5,
  },
  elementDiameter: {
    type: Number,
    default: 30,
  },
  enableGlow: {
    type: Boolean,
    default: true,
  },
  ui: {
    type: Object as PropType<OrbitalUI>,
    default: () => ({
      glow: {
        center: '#FFFFFF',
        edge: '#FFD900FF',
      },
      background: '#ffffff',
      border: {
        color: '#e2e8f0',
        opacity: 1,
      },
    }),
  },
});

const containerStyle = computed(() => ({
  width: `${props.systemDiameter}px`,
  height: `${props.systemDiameter}px`,
}));

const orbitSettings = computed(() => ({
  baseSpeed: props.rotationSpeed,
  speedMultiplier: props.speedMultiplier,
  glowRotationRatio: props.glowRotationRatio,
  diameter: props.systemDiameter,
  spacing: props.ringSpacing,
  enableGlow: props.enableGlow,
}));

const styleSettings = computed(() => ({
  background: props.ui.background,
  glowStyle: props.ui.glow,
  elementDiameter: props.elementDiameter,
  borderColor: props.ui.border?.color,
  borderOpacity: props.ui.border?.opacity,
}));
</script>

<template>
  <div class="relative mx-auto my-12" :style="containerStyle">
    <template v-for="(ring, ringIndex) in rings" :key="ringIndex">
      <OrbitalRing
        :elements="ring"
        :ring-index="ringIndex"
        :orbit-settings="orbitSettings"
        :style-settings="styleSettings"
      />
    </template>
  </div>
</template>
<style>
@keyframes orbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes counterOrbit {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}

@keyframes borderLight {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
