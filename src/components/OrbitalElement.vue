<script setup lang="ts">
import { Icon } from '@iconify/vue';
import OrbitalLink from './OrbitalLink.vue';
import type { OrbitalElement } from '../types/orbit';

defineProps<OrbitalElement>();
</script>

<template>
  <div
    class="dynamic-content rounded-full overflow-hidden h-full w-full flex justify-center items-center text-black"
  >
    <OrbitalLink :href="href">
      <template v-if="!$slots[type]">
        <span v-if="type === 'string'" :class="style?.content">{{
          content
        }}</span>

        <Icon
          v-else-if="type === 'icon'"
          :icon="content || ''"
          :class="style?.content ?? 'h-full w-full p-1'"
        />

        <img
          v-else-if="type === 'image'"
          :src="content"
          :class="style?.content"
          :alt="alt || content"
        />

        <div v-else :class="style?.content" />
      </template>
    </OrbitalLink>
  </div>
</template>
