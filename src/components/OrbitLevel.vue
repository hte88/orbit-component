<script setup lang="ts">
import { computed,type PropType } from 'vue';
import OrbitBorder from './OrbitBorder.vue';
import OrbitDynamicContent from './OrbitDynamicContent.vue';
import {type Data} from './../models/orbit'

const props = defineProps({
  levelData: {
    type: Array as PropType<Data[]>,
    required: true,
  },
  levelIndex: {
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

const rotationDuration = computed(
  () =>
    props.orbitSettings.baseSpeed +
    props.levelIndex * props.orbitSettings.speedIncrement,
);

const getLightRotationDuration = computed(
  () => rotationDuration.value / props.orbitSettings.glowSpeedRatio,
);

const levelStyle = computed(() => {
  const size =
    props.orbitSettings.diameter -
    props.orbitSettings.spacing * props.levelIndex;
  return {
    width: `${size}px`,
    height: `${size}px`,
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
  };
});

const rotationStyle = computed(() => ({
  animation: `orbit ${rotationDuration.value}s linear infinite`,
}));

const counterRotationStyle = computed(() => ({
  animation: `counterOrbit ${rotationDuration.value}s linear infinite`,
}));

function getItemStyle(index: number, totalItems: number, item: any) {
  const orbitRadius =
    (props.orbitSettings.diameter -
      props.orbitSettings.spacing * props.levelIndex) /
    2;
  const angle = (2 * Math.PI * index) / totalItems;
  const x = orbitRadius * Math.cos(angle);
  const y = orbitRadius * Math.sin(angle);

  return {
    left: '50%',
    top: '50%',
    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
    height: `${props.styleSettings.orbitLevelDiameter}px`,
    width: `${props.styleSettings.orbitLevelDiameter}px`,
  };
}
</script>
<template>
  <div
    class="absolute rounded-full transition-all duration-300"
    :style="levelStyle"
  >
    <OrbitBorder
      :color="styleSettings.borderColor"
      :opacity="styleSettings.borderOpacity"
      :glow-colors="styleSettings.glowColors"
      :glow="orbitSettings.glow"
      :rotation-duration="getLightRotationDuration"
    />

    <div class="relative h-full w-full" :style="rotationStyle">
      <template v-for="(item, index) in levelData" :key="index">
        <div
          class="absolute flex cursor-pointer items-center justify-center rounded-full border-2 border-gray-800 hover:border-white transition-all duration-300 hover:z-10"
          :class="styleSettings.orbitColor"
          :style="getItemStyle(index, levelData.length, item)"
        >
          <div
            class="origin-center h-full w-full flex justify-center items-center"
            :style="counterRotationStyle"
          >
            <OrbitDynamicContent
              :type="item?.type"
              :content="item?.content"
              :class="item?.class"
              :alt="item?.alt"
              :href="item?.href"
            />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
