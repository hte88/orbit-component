<script setup lang="ts">
defineProps({
  color: {
    type: String,
    required: true,
  },
  opacity: {
    type: Number,
    default: 0.3,
  },
  glowTheme: {
    type: Object,
    required: true,
  },
  rotationDuration: {
    type: Number,
    required: true,
  },
})
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
    <CommonsOrbitBorderGlow :color :opacity :glow-theme :rotation-duration />
  </div>
</template>
