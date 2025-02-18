<script setup lang="ts">
import { Icon } from '@iconify/vue';
import OrbitLink from './OrbitLink.vue';
import type { ItemCircle } from './../models/orbit';

interface CustomClassContent extends ItemCircle {
  customClassContent?:string
}

defineProps<CustomClassContent>();
</script>

<template>
  <div
    class="dynamic-content rounded-full overflow-hidden h-full w-full flex justify-center items-center text-black"
  >
    <OrbitLink :href>
      <template v-if="!$slots[type]">
        <span v-if="type === 'string'" :class="customClassContent">{{ content }}</span>

        <Icon v-else-if="type === 'icon'" :icon="content" :class="customClassContent"></Icon>

        <img
          v-else-if="type === 'image'"
          :src="content"
          :class="customClassContent"
          :alt="alt || content"
        />
        <div v-else :class="customClassContent"></div>
      </template>
    </OrbitLink>
  </div>
</template>
