// @ts-check
import { defineConfig } from 'astro/config'

import vue from '@astrojs/vue'
import tailwindcss from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],

  vite: {
    plugins: [tailwindcss()],
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: false, // L'anglais sera sur mondomaine.com, le français sur mondomaine.com/fr
    },
  },
})
