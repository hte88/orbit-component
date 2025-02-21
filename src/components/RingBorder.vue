<script setup lang="ts">
import { type PropType } from 'vue';
import RingGlow from './RingGlow.vue';
import type { GlowStyle } from '../types/orbit';

defineProps({
  borderUi: {
    type: Object,
    required: true,
  },
  enableGlow: {
    type: Boolean,
    default: true,
  },
  glowUi: {
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
    <div class="absolute inset-0 rounded-full" :class="borderUi.base" />
    <RingGlow
      v-if="enableGlow"
      :glow-ui="glowUi"
      :rotation-duration="rotationDuration"
    />
  </div>
</template>
