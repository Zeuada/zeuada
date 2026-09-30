// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zeuada.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // Inline small stylesheets so pages render without a blocking request.
    inlineStylesheets: 'auto',
  },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404') && !page.endsWith('/404/') })],
});
