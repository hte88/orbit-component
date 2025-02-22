import { type OrbitalElement } from '../types/orbit';

export const ui = {
  wrapper: 'relative mx-auto my-12',
  background: 'bg-white',
  border: {
    base: 'border border-2 border-blue-100/50',
  },
  glow: {
    primary: '#0441E985',
    secondary: '#E9E9E9FF',
  },
};

export const stackUi = {
  ...ui,
  glow: {
    primary: '#4DE90485',
    secondary: '#E9E9E9FF',
  },
};

export const colorsUi = {
  ...ui,
  border: {
    base: 'border border-2 border-pink-100',
  },
  glow: {
    primary: '#9C0BC985',
    secondary: '#FF7575FF',
  },
};

export const persona: OrbitalElement[][] = [
  [
    {
      type: 'image',
      content:
        'https://plus.unsplash.com/premium_photo-1689568158814-3b8e9c1a9618?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1760&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      content:
        'https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  [
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1504257432389-52343af06ae3?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1661&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1517256673644-36ad11246d21?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
  [
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },

    {
      type: 'image',
      content:
        'https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: 'image',
      content:
        'https://images.unsplash.com/photo-1592621385612-4d7129426394?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ],
];

export const stack: OrbitalElement[][] = [
  [
    { type: 'icon', content: 'logos:git' },
    { type: 'icon', content: 'logos:github-icon' },
    { type: 'icon', content: 'logos:gitlab' },
    { type: 'icon', content: 'logos:vercel-icon' },
    { type: 'icon', content: 'logos:netlify' },
    { type: 'icon', content: 'logos:redis' },
    { type: 'icon', content: 'logos:mongodb-icon' },
  ],
  [
    { type: 'icon', content: 'logos:vuetifyjs' },
    { type: 'icon', content: 'logos:bootstrap' },
    { type: 'icon', content: 'logos:tailwindcss-icon' },
    { type: 'icon', content: 'logos:typescript-icon-round' },
    { type: 'icon', content: 'logos:eslint' },
    { type: 'icon', content: 'logos:prettier' },
  ],
  [
    { type: 'icon', content: 'logos:postgresql' },
    { type: 'icon', content: 'logos:mysql' },
    { type: 'icon', content: 'logos:react' },
    { type: 'icon', content: 'logos:php' },
  ],
  [
    { type: 'icon', content: 'logos:vue' },
    { type: 'icon', content: 'logos:html-5' },
    { type: 'icon', content: 'logos:css-3' },
  ],
];

export const colors: OrbitalElement[][] = [
  [
    {
      type: 'string',
      content: '',
      style: {
        content: 'bg-red-500 w-full h-full justify-center flex items-center',
      },
    },
    {
      type: 'string',
      content: '',
      style: {
        content: 'bg-yellow-500 w-full h-full justify-center flex items-center',
      },
    },
    {
      type: 'string',
      content: '',
      style: {
        content: 'bg-blue-500 w-full h-full justify-center flex items-center',
      },
    },
    {
      type: 'string',
      content: '',
      style: {
        content: 'bg-gray-500 w-full h-full justify-center flex items-center',
      },
    },
  ],
  [
    {
      type: 'string',
      content: '4',
      style: {
        content: 'bg-green-500 w-full h-full justify-center flex items-center',
      },
    },
    {
      type: 'string',
      content: '5',
      style: {
        content: 'bg-cyan-500 w-full h-full justify-center flex items-center',
      },
    },
    {
      type: 'string',
      content: '6',
      style: {
        content: 'bg-pink-500 w-full h-full justify-center flex items-center',
      },
    },
  ],
  [
    {
      type: 'string',
      content: '1',
      style: {
        content: 'bg-white w-full h-full justify-center flex items-center',
      },
    },
    {
      type: 'string',
      content: '2',
      style: {
        content: 'bg-black w-full h-full justify-center flex items-center',
      },
    },
    {
      type: 'string',
      content: '3',
      style: {
        content: 'bg-indigo-500 w-full h-full justify-center flex items-center',
      },
    },
  ],
];
