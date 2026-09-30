/**
 * Lists everything still waiting on the founder, for the launch checklist:
 *  - unconfirmed (null) values in src/site.config.ts
 *  - visible [FOUNDER TO WRITE / FOUNDER TO ADD / CONFIRM / VERIFY] markers on built pages
 * Run `npm run build` first. Exits 1 when anything is left, with --strict.
 */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const strict = process.argv.includes('--strict');
let total = 0;

// 1. site.config.ts nulls
const config = readFileSync(join(root, 'src/site.config.ts'), 'utf8');
const nulls = [...config.matchAll(/^\s*(\w+):\s*null\b/gm)].map((m) => m[1]);
if (nulls.length) {
  console.log(`\nsrc/site.config.ts — ${nulls.length} unconfirmed value(s):`);
  for (const n of nulls) console.log(`  - ${n}`);
  total += nulls.length;
}

// 2. Markers on built pages
const dist = join(root, 'dist');
if (!existsSync(dist)) {
  console.log('\n(dist/ not found; run `npm run build` to check pages too)');
} else {
  const walk = (dir) =>
    readdirSync(dir).flatMap((f) => {
      const p = join(dir, f);
      return statSync(p).isDirectory() ? walk(p) : p.endsWith('.html') ? [p] : [];
    });
  const pattern = /\[(FOUNDER TO WRITE|FOUNDER TO ADD|CONFIRM|VERIFY):\s*([^\]]*)\]/g;
  for (const file of walk(dist).sort()) {
    const text = readFileSync(file, 'utf8')
      .replace(/<script[\s\S]*?<\/script>/g, '')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&amp;/g, '&');
    const found = [...new Set([...text.matchAll(pattern)].map((m) => `[${m[1]}] ${m[2].trim()}`))];
    if (!found.length) continue;
    const route = '/' + relative(dist, file).replace(/index\.html$/, '').replace(/\/$/, '');
    console.log(`\n${route} — ${found.length}:`);
    for (const f of found) console.log(`  - ${f}`);
    total += found.length;
  }
}

console.log(total ? `\n${total} item(s) to resolve before launch.` : '\nNo placeholders left.');
if (strict && total) process.exit(1);
