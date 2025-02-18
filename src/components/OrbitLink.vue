<script setup lang="ts">
defineProps<{ href?: string }>();
</script>

<template>
  <a v-if="href" :href="href" target="_blank" rel="noopener noreferrer" class="contents">
    <slot />
  </a>
  <slot v-else />
</template>
