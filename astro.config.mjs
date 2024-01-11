import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: 'https://magnificent-licorice-7936e9.netlify.app/',
  integrations: [preact()]
});