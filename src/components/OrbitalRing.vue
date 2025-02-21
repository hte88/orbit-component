<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import RingBorder from './RingBorder.vue';
import OrbitalElement from './OrbitalElement.vue';
import OrbitalWrapperElement from './OrbitalWrapperElement.vue';
import type { OrbitalElement as OrbitalElementType } from '../types/orbit.ts';
import { useOrbitalSystem } from '../composables/orbital';

const props = defineProps({
  rings: {
    type: Array as PropType<OrbitalElementType[]>,
    required: true,
  },
  ringIndex: {
    type: Number,
    required: true,
  },
});

const {
  rotationSpeed,
  speedMultiplier,
  glowRotationRatio,
  systemDiameter,
  ringSpacing,
  enableGlow,
  ui,
} = useOrbitalSystem();

const isHovered = ref(false);

const rotationDuration = computed(
  () => rotationSpeed + props.ringIndex * speedMultiplier,
);

const glowRotationDuration = computed(
  () => rotationDuration.value / glowRotationRatio,
);

const ringStyle = computed(() => {
  const size = systemDiameter - ringSpacing * props.ringIndex;
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };
});

const animationState = computed(() => (isHovered.value ? 'paused' : 'running'));

const rotationStyle = computed(() => ({
  animation: `orbit ${rotationDuration.value}s linear infinite normal none ${animationState.value}`,
}));

const countElements = computed(() => props.rings.length);
</script>

<template>
  <div class="absolute" :style="ringStyle">
    <RingBorder
      :border-ui="ui.border"
      :glow-ui="ui.glow"
      :enable-glow="enableGlow"
      :rotation-duration="glowRotationDuration"
    />
    <div class="relative h-full w-full" :style="rotationStyle">
      <template v-for="(element, index) in rings" :key="index">
        <OrbitalWrapperElement
          :element="element"
          :index="index"
          :ring-index="ringIndex"
          :count-elements="countElements"
        >
          <OrbitalElement v-bind="element" />
        </OrbitalWrapperElement>
      </template>
    </div>
  </div>
</template>
