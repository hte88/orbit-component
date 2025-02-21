<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import type { OrbitalElement, ElementStyle } from '../types/orbit.ts';
import { useOrbitalSystem } from '../composables/orbital.ts';

const props = defineProps({
  element: {
    type: Object as PropType<OrbitalElement>,
    required: true,
  },
   ringIndex: {
    type: Number,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  countElements: {
    type: Number,
    required: true,
  },
});

const {
  rotationSpeed,
  speedMultiplier,
  systemDiameter,
  ringSpacing,
  elementDiameter,
  ui,
} = useOrbitalSystem();

const isHovered = ref(false);

const animationState = computed(() => (isHovered.value ? 'paused' : 'running'));

const rotationDuration = computed(
  () => rotationSpeed + props.ringIndex * speedMultiplier,
);

const counterRotationStyle = computed(() => ({
  animation: `counterOrbit ${rotationDuration.value}s linear infinite normal none ${animationState.value}`,
}));

function getElementStyle(index: number, totalElements: number) {
  const radius = (systemDiameter - ringSpacing * props.ringIndex) / 2;
  const angle = (2 * Math.PI * index) / totalElements;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return {
    left: '50%',
    top: '50%',
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    height: `${elementDiameter}px`,
    width: `${elementDiameter}px`,
  };
}
function getElementBorderClass(element: OrbitalElement) {
  return element.style?.border || ui.element?.border;
}

function handleCallback(element: OrbitalElement) {
  if (!element.callback) return;
  if (typeof element.callback === 'function') {
    element.callback();
    return;
  }
  console.warn('Orbital: callback is neither a function !');
  return;
}
</script>

<template>
  <div
    class="absolute flex cursor-pointer items-center justify-center rounded-full transition-all duration-300"
    :class="[ui.background, getElementBorderClass(element)]"
    :style="getElementStyle(index, countElements)"
  >
    <div
      class="origin-center h-full w-full flex justify-center items-center"
      :style="counterRotationStyle"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @click="handleCallback(element)"
    >
      <slot />
    </div>
  </div>
</template>
