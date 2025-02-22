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
  rotationReversed,
  systemDiameter,
  ringSpacing,
  enableGlow,
  ui,
} = useOrbitalSystem();

const isHovered = ref(false);

const animationState = computed(() => (isHovered.value ? 'paused' : 'running'));

const rotationDuration = computed(
  () => rotationSpeed + props.ringIndex * speedMultiplier,
);

const elementRotationStyle = computed(() => ({
  animation: `leftHandRotation ${rotationDuration.value}s linear infinite normal none ${animationState.value}`,
}));

const ringRotationStyle = computed(() => ({
  animation: `rightHandRotation ${rotationDuration.value}s linear infinite normal none ${animationState.value}`,
}));


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
    <div class="relative h-full w-full" :style="rotationReversed ? elementRotationStyle : ringRotationStyle">
      <template v-for="(element, index) in rings" :key="index">
        <OrbitalWrapperElement
          v-model:is-hovered="isHovered"
          :element-rotation-style="rotationReversed ? ringRotationStyle : elementRotationStyle"
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
