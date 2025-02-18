<script setup lang="ts">
import { type PropType } from 'vue';
import RingGlow from './RingGlow.vue';
import type { GlowStyle } from '../models/orbit';

defineProps({
  color: {
    type: String,
    required: true,
  },
  opacity: {
    type: Number,
    default: 1,
  },
  enableGlow: {
    type: Boolean,
    default: true,
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
</script>

<template>
  <div>
    <div
      class="absolute inset-0 rounded-full border-2"
      :style="{
        borderColor: color,
        opacity: opacity,
      }"
    />
    <RingGlow
      v-if="enableGlow"
      :color="color"
      :opacity="opacity"
      :glow-style="glowStyle"
      :rotation-duration="rotationDuration"
    />
  </div>
</template>
