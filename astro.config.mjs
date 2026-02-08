// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://dannyhoz2.github.io',
  base: '/playa-venao-living/',
  vite: {
    plugins: [tailwindcss()]
  }
});
