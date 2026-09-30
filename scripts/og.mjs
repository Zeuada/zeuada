/**
 * Renders the Open Graph images in public/og/ with a headless browser, so they
 * use the site's real font. Run after changing the copy below:
 *   npm run og
 * Requires Playwright (npx playwright, or a global install). The PNGs are
 * committed, so this doesn't run on every build.
 */
import { readFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { fileURLToPath } from 'node:url';

const require = createRequire(import.meta.url);
const { chromium } = require('playwright');
const root = fileURLToPath(new URL('..', import.meta.url));
const font = readFileSync(
  root + 'node_modules/@fontsource-variable/onest/files/onest-latin-wght-normal.woff2',
).toString('base64');

const mark = (bg, fg) =>
  `<svg width="64" height="64" viewBox="0 0 32 32"><rect width="32" height="32" rx="8" fill="${bg}"/><path d="M10 10h12L10 22h12" fill="none" stroke="${fg}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const images = [
  {
    file: 'default.png',
    bg: '#f4f6f8',
    ink: '#14161f',
    muted: '#5b6272',
    accent: '#2f6f5e',
    kicker: 'Zeuada',
    title: 'Software that protects your attention.',
    sub: 'An independent studio building calm, research-grounded apps.',
    logo: mark('#14161f', '#f4f6f8'),
  },
  {
    file: 'unloop.png',
    bg: '#0b1030',
    ink: '#eef0f8',
    muted: '#b7bcd6',
    accent: '#ffb547',
    kicker: 'Unloop, by Zeuada',
    title: 'Take your time back from Reels.',
    sub: 'A pause, a better choice, and a live count of your day.',
    logo: mark('#eef0f8', '#0b1030'),
  },
];

const html = (i) => `<!doctype html><html><head><style>
@font-face{font-family:Onest;src:url(data:font/woff2;base64,${font}) format('woff2');font-weight:100 900}
*{margin:0;box-sizing:border-box}
body{width:1200px;height:630px;background:${i.bg};color:${i.ink};font-family:Onest,sans-serif;padding:80px 88px;display:flex;flex-direction:column;justify-content:space-between}
.k{display:flex;align-items:center;gap:20px;font-size:34px;font-weight:700;letter-spacing:-.02em}
h1{font-size:84px;line-height:1.02;letter-spacing:-.035em;font-weight:680;max-width:15ch}
p{font-size:32px;color:${i.muted};margin-top:28px}
.bar{width:96px;height:8px;border-radius:4px;background:${i.accent}}
</style></head><body><div class="k">${i.logo}<span>${i.kicker}</span></div><div><h1>${i.title}</h1><p>${i.sub}</p></div><div class="bar"></div></body></html>`;

mkdirSync(root + 'public/og', { recursive: true });
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const i of images) {
  await page.setContent(html(i), { waitUntil: 'load' });
  await page.evaluate(() => document.fonts.ready);
  await page.screenshot({ path: root + 'public/og/' + i.file });
  console.log('wrote public/og/' + i.file);
}
await browser.close();
