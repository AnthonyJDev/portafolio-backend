// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://Jaydnnx.github.io',
  base: '/portafolio-backend',
  integrations: [react()],
});
