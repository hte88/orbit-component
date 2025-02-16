<script setup lang="ts">
import OrbitalNavigation from './components/OrbitalNavigation.vue'
const l = [['fg'],['x'],['x']]

</script>

<template>
  <div class="bg-gray-500">
    <OrbitalNavigation   :navigation-levels="l"
          :orbit-diameter="400"
          :level-spacing="120"
          :orbit-speed="15"
          :glow-speed-ratio="3"
          orbit-color="rgb(255, 255, 255)"
          :glow-theme="{
            primary: 'rgb(221, 221, 221)',
            secondary: 'rgba(221, 221, 221, 0.5)',
            highlight: 'rgba(255, 255, 255)',
          }"/>
  </div>
</template>
