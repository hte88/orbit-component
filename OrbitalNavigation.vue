<script setup lang="ts">
import type { Stacks } from '~/models/stacks.ts'

const props = defineProps({
  navigationLevels: {
    type: Array as PropType<Stacks[][]>,
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
    default: 10,
  },
  glowSpeedRatio: {
    type: Number,
    default: 2.5,
  },
  orbitColor: {
    type: String,
    default: 'rgb(243, 244, 246)',
  },
  orbitOpacity: {
    type: Number,
    default: 0.3,
  },
  glowTheme: {
    type: Object,
    default: () => ({
      primary: 'rgba(255, 255, 255, 0.8)',
      secondary: 'rgba(70, 131, 255, 0.8)',
      highlight: 'rgba(255, 255, 255, 0.8)',
    }),
  },
  itemSize: {
    type: String,
    default: '30px',
  },
})

const containerStyle = computed(() => ({
  width: `${props.orbitDiameter}px`,
  height: `${props.orbitDiameter}px`,
}))

const orbitSettings = computed(() => ({
  baseSpeed: props.orbitSpeed,
  speedIncrement: props.speedIncrement,
  glowSpeedRatio: props.glowSpeedRatio,
  diameter: props.orbitDiameter,
  spacing: props.levelSpacing,
}))

const styleSettings = computed(() => ({
  orbitColor: props.orbitColor,
  orbitOpacity: props.orbitOpacity,
  glowTheme: props.glowTheme,
  itemSize: props.itemSize,
}))
</script>
<template>
  <div class="relative mx-auto my-12" :style="containerStyle">
    <template v-for="(level, levelIndex) in navigationLevels" :key="levelIndex">
      <CommonsOrbitLevel
        :level-data="level"
        :level-index="levelIndex"
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
