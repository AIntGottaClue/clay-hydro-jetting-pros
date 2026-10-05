import { defineConfig } from 'astro/config';

// Real domain by default. The GitHub Pages workflow sets BASE=/clay-hydro-jetting-pros for the preview.
export default defineConfig({
  site: 'https://clayhydrojetting.prosapp.site',
  base: process.env.BASE ?? '/',
  trailingSlash: 'always',
  build: { format: 'directory' },
});
