<script setup lang="ts">
import OrbitalSystem from './components/OrbitalSystem.vue';
import { type OrbitalElement } from './types/orbit';

function hello() {
  console.log('hello');
}

const ui = {
  wrapper: 'relative mx-auto my-12',
  background: 'bg-white',
  border: {
    base: 'border border-2 border-gray-100/50',
  },
  glow: {
    primary: '#2AE90485',
    secondary: '#E9E9E9FF',
  },
};

const orbitalData: OrbitalElement[][] = [
  [
    {
      type: 'icon',
      content: 'mdi-light:home',
      style: {
        border: 'border-1 border-blue-800 hover:border-red-500',
        content: 'text-red-500',
      },
      callback: hello,
    },
    {
      type: 'string',
      content: 'X',
    },
    {
      type: 'string',
      content: 'X',
    },
  ],

  [
    { type: 'image', content: '/src/assets/vue.svg', href: 'google.fr' },
    { type: 'image', content: '/src/assets/astro.jpg' },
  ],
  [
    {
      type: 'string',
      content: 'X',
      style: {
        content: 'text-red-500',
      },
    },
    {
      type: 'string',
      href: 'google.fr',
      style: {
        content: 'bg-red-500 h-full w-full',
      },
    },
  ],
];
</script>

<template>
  <div>
    <OrbitalSystem
      :rings="orbitalData"
      :system-diameter="350"
      :ring-spacing="100"
      :rotation-speed="20"
      :speed-multiplier="1"
      :glow-rotation-ratio="2.5"
      :element-diameter="40"
      :enable-glow="true"
      :ui="ui"
    />
  </div>
</template>
