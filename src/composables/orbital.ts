// composables/useOrbitalSystem.ts
import { ref } from 'vue';
import type { OrbitalSystem } from '../types/orbit';
import { merge } from 'lodash';

const defaultOptions: OrbitalSystem = {
  rings: [],
  systemDiameter: 300,
  ringSpacing: 100,
  rotationSpeed: 30,
  rotationReversed: false,
  glowRotationReversed: false,
  speedMultiplier: 1,
  glowRotationRatio: 2.5,
  elementDiameter: 30,
  enableGlow: true,
  ui: {
    wrapper: 'relative mx-auto my-12',
    background: 'bg-white',
    border: {
      base: 'border border-2 border-gray-100/50',
    },
    glow: {
      primary: '#ff00ff',
      secondary: '#E9E9E9FF',
    },
    element: {
      border: 'border border-gray-400 hover:border-white',
    },
  },
};

const sharedConfig = ref<OrbitalSystem>({ ...defaultOptions });

export function useOrbitalSystem(
  options: Partial<OrbitalSystem> = {},
  useSharedState = true,
) {
  if (useSharedState && Object.keys(options).length) {
    sharedConfig.value = merge({}, defaultOptions, options);
  }

  return {
    ...sharedConfig.value,
  };
}
