<script setup lang="ts">
import { computed } from 'vue';
import OrbitalRing from './OrbitalRing.vue';
import type { OrbitalSystem } from '../types/orbit.ts';
import { useOrbitalSystem } from '../composables/orbital.ts';

const props = defineProps<OrbitalSystem>();

const containerStyle = computed(() => ({
  width: `${props.systemDiameter}px`,
  height: `${props.systemDiameter}px`,
}));

useOrbitalSystem({
  rings: props.rings,
  rotationSpeed: props.rotationSpeed,
  rotationReversed: props.rotationReversed,
  glowRotationReversed: props.rotationReversed,
  speedMultiplier: props.speedMultiplier,
  glowRotationRatio: props.glowRotationRatio,
  systemDiameter: props.systemDiameter,
  ringSpacing: props.ringSpacing,
  enableGlow: props.enableGlow,
  elementDiameter: props.elementDiameter,
  ui: props.ui,
});
</script>

<template>
  <div :class="ui.wrapper" :style="containerStyle">
    <template v-for="(ring, ringIndex) in rings" :key="ringIndex">
      <OrbitalRing :rings="ring" :ring-index="ringIndex" />
    </template>
  </div>
</template>
<style>
@keyframes rightHandRotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes leftHandRotation {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(-360deg);
  }
}
</style>
