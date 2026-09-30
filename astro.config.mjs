// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://zeuada.com',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // The whole stylesheet is ~12 KB (~3 KB gzipped); inlining it removes the
    // only render-blocking request.
    inlineStylesheets: 'always',
  },
  // Old URLs to forward (GitHub Pages has no server-side redirects, so Astro
  // writes a small page at each old path that forwards to the new one):
  // redirects: { '/privacy-policy': '/unloop/privacy/' },
  integrations: [sitemap({ filter: (page) => !page.endsWith('/404') && !page.endsWith('/404/') })],
});
