<script setup lang="ts">
import { computed, type PropType } from 'vue';
import OrbitLevel from './OrbitLevel.vue';
import type { ItemCircle, Ui } from './../models/orbit';

const props = defineProps({
  navigationLevels: {
    type: Array as PropType<ItemCircle[][]>,
    required: true,
    default: () => [],
  },
  orbitDiameter: {
    type: Number,
    default: 500,
  },
  levelSpacing: {
    type: Number,
    default: 100,
  },
  orbitSpeed: {
    type: Number,
    default: 30,
  },
  speedIncrement: {
    type: Number,
    default: 1,
  },
  glowSpeedRatio: {
    type: Number,
    default: 2.5,
  },
  orbitLevelDiameter: {
    type: Number,
    default: 10,
  },
  glow: {
    type: Boolean,
    default: true,
  },
  ui: {
    type: Object as PropType<Ui>,
    default: () => ({
      glowColors: {
        center: '#FFFFFF',
        edge: '#FFD900FF',
      },
      bg: '#ffffff',
      border: {
        color: '#e2e8f0',
        opacity: 1,
      },
    }),
  },
});

const containerStyle = computed(() => ({
  width: `${props.orbitDiameter}px`,
  height: `${props.orbitDiameter}px`,
}));

const orbitSettings = computed(() => ({
  baseSpeed: props.orbitSpeed,
  speedIncrement: props.speedIncrement,
  glowSpeedRatio: props.glowSpeedRatio,
  diameter: props.orbitDiameter,
  spacing: props.levelSpacing,
  glow: props.glow,
}));

const styleSettings = computed(() => ({
  orbitColor: props.ui.bg,
  glowColors: props.ui.glowColors,
  orbitLevelDiameter: props.orbitLevelDiameter,
  borderColor: props.ui.border?.color,
  borderOpacity: props.ui.border?.opacity,
}));
</script>
<template>
  <div class="relative mx-auto my-12" :style="containerStyle">
    <template v-for="(level, levelIndex) in navigationLevels" :key="levelIndex">
      <OrbitLevel
        :level-data="level"
        :level-index="levelIndex"
        :orbit-level-diameter="10"
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
