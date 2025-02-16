<script setup lang="ts">
import { computed } from 'vue'
const props = defineProps({
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

function adjustColor(color: string, opacity: number) {
  if (color.startsWith('rgba')) {
    return color.replace(/[\d.]+\)$/g, `${opacity})`)
  }
  if (color.startsWith('rgb')) {
    return color.replace('rgb', 'rgba').replace(')', `, ${opacity})`)
  }
  return color
}

const glowStyle = computed(() => ({
  animation: `borderLight ${props.rotationDuration}s linear infinite`,
  border: '2px solid transparent',
  borderRadius: '50%',
  background: `
      linear-gradient(45deg,
        transparent 20%,
        ${adjustColor(props.glowTheme.secondary, 0.1)} 30%,
        ${props.glowTheme.highlight} 35%,
        ${props.glowTheme.primary} 40%,
        ${props.glowTheme.secondary} 60%,
        ${props.glowTheme.highlight} 65%,
        ${adjustColor(props.glowTheme.secondary, 0.1)} 70%,
        transparent 80%
      ) border-box
    `,
  filter: 'drop-shadow(0 0 2px rgba(255, 255, 255, 0.3))',
  WebkitMask:
    'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
  WebkitMaskComposite: 'xor',
  mask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
  maskComposite: 'exclude',
}))
</script>
<template>
  <div class="absolute inset-0 rounded-full" :style="glowStyle" />
</template>
