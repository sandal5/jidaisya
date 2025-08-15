import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  i18n: {
    defaultLocale: 'zh-tw',
    locales: ['zh-tw', 'zh-cn', 'ja', 'en'],
    routing: { prefixDefaultLocale: false }
  },
  integrations: [tailwind({})]
});