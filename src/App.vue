<script setup lang="ts">
import { ref } from 'vue';
import OrbitalSystem from './components/OrbitalSystem.vue';
import { ui, persona, stack, stackUi, colors, colorsUi } from './utils/dummy';

const sysDiameter = ref(400);
const ringSpacing = ref(120);
</script>

<template>
  <div class="bg-white flex">
    <OrbitalSystem
      :rings="persona"
      :system-diameter="sysDiameter"
      :ring-spacing="ringSpacing"
      :rotation-speed="30"
      :speed-multiplier="1"
      :glow-rotation-ratio="2.5"
      :element-diameter="50"
      :enable-glow="true"
      :ui="ui"
    />
  </div>
  <div class="bg-white">
    <OrbitalSystem
      :rings="stack"
      :system-diameter="400"
      :ring-spacing="100"
      :rotation-speed="15"
      :rotation-reversed="true"
      :glow-rotation-reversed="true"
      :speed-multiplier="1"
      :glow-rotation-ratio="2.5"
      :element-diameter="40"
      :enable-glow="true"
      :ui="stackUi"
    />
  </div>
  <div class="bg-white">
    <OrbitalSystem
      :rings="colors"
      :system-diameter="400"
      :ring-spacing="100"
      :rotation-speed="15"
      :speed-multiplier="1"
      :glow-rotation-ratio="2.5"
      :element-diameter="40"
      :enable-glow="true"
      :ui="colorsUi"
    />
  </div>
</template>
