import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  output: 'static',
  site: 'https://jidaisya.com',
  base: '/',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto'
  },
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'zh-cn', 'ja', 'en'],
    routing: { 
      prefixDefaultLocale: false
    }
  },
  integrations: [
    tailwind({
      applyBaseStyles: false
    }),
    sitemap({
      i18n: {
        defaultLocale: 'zh-tw',
        locales: {
          'zh-tw': 'zh-Hant',
          'zh-cn': 'zh-Hans',
          'ja': 'ja-JP',
          'en': 'en'
        }
      }
    })
  ],
  vite: {
    build: {
      rollupOptions: {
        output: {
          assetFileNames: '_astro/[name].[hash][extname]',
          chunkFileNames: '_astro/[name].[hash].js',
          entryFileNames: '_astro/[name].[hash].js'
        }
      }
    }
  }
});