<script setup lang="ts">
import { computed, ref, type PropType } from 'vue';
import RingBorder from './RingBorder.vue';
import OrbitalElement from './OrbitalElement.vue';
import type { OrbitalElement as OrbitalElementType } from '../types/orbit.ts';

const DEFAULT_BORDER_CLASS = 'border-2 border-gray-800 hover:border-white';

const props = defineProps({
  elements: {
    type: Array as PropType<OrbitalElementType[]>,
    required: true,
  },
  ringIndex: {
    type: Number,
    required: true,
  },
  orbitSettings: {
    type: Object,
    required: true,
  },
  styleSettings: {
    type: Object,
    required: true,
  },
});

const isHovered = ref(false);

const rotationDuration = computed(
  () =>
    props.orbitSettings.baseSpeed +
    props.ringIndex * props.orbitSettings.speedMultiplier,
);

const glowRotationDuration = computed(
  () => rotationDuration.value / props.orbitSettings.glowRotationRatio,
);

const ringStyle = computed(() => {
  const size =
    props.orbitSettings.diameter -
    props.orbitSettings.spacing * props.ringIndex;
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

const counterRotationStyle = computed(() => ({
  animation: `counterOrbit ${rotationDuration.value}s linear infinite normal none ${animationState.value}`,
}));

function getElementStyle(index: number, totalElements: number) {
  const radius =
    (props.orbitSettings.diameter -
      props.orbitSettings.spacing * props.ringIndex) /
    2;
  const angle = (2 * Math.PI * index) / totalElements;
  const x = radius * Math.cos(angle);
  const y = radius * Math.sin(angle);

  return {
    left: '50%',
    top: '50%',
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    height: `${props.styleSettings.elementDiameter}px`,
    width: `${props.styleSettings.elementDiameter}px`,
  };
}

function getElementBorderClass(element: OrbitalElementType) {
  return element.style?.border || DEFAULT_BORDER_CLASS;
}
</script>

<template>
  <div
    class="absolute rounded-full transition-all duration-300"
    :style="ringStyle"
  >
    <RingBorder
      :color="styleSettings.borderColor"
      :opacity="styleSettings.borderOpacity"
      :glow-style="styleSettings.glowStyle"
      :enable-glow="orbitSettings.enableGlow"
      :rotation-duration="glowRotationDuration"
    />
    <div class="relative h-full w-full" :style="rotationStyle">
      <template v-for="(element, index) in elements" :key="index">
        <div
          class="absolute flex cursor-pointer items-center justify-center rounded-full transition-all duration-300 hover:z-10"
          :class="[styleSettings.background, getElementBorderClass(element)]"
          :style="getElementStyle(index, elements.length)"
        >
          <div
            class="origin-center h-full w-full flex justify-center items-center"
            :style="counterRotationStyle"
            @mouseenter="isHovered = true"
            @mouseleave="isHovered = false"
          >
            <OrbitalElement v-bind="element" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
