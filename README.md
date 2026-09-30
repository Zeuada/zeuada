# zeuada.com

The website for Zeuada, an independent software studio, and its first app, Unloop. It's a static [Astro](https://astro.build) site: no client-side JavaScript, no cookies, no trackers, no third-party requests.

- **Brief:** [`CLAUDE.md`](CLAUDE.md) (company site) and [`content/briefs/unloop-brief.md`](content/briefs/unloop-brief.md) (Unloop product, research and claims checklist).
- **Hosting:** Cloudflare Pages, deployed from git. Build command `npm run build`, output directory `dist`, Node 22.

## Commands

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server at http://localhost:4321 |
| `npm run build` | Build the static site into `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run verify` | Type check, spell check, build, HTML validation and internal link check |
| `npm run lhci` | Lighthouse CI; fails below 95 in any category (needs Chrome, set `CHROME_PATH` if it isn't found) |
| `npm run links:external` | Also check external links (DOIs, Google Play and so on) |
| `npm run placeholders` | List every fact and piece of copy still waiting on the founder |
| `npm run og` | Regenerate the Open Graph images in `public/og/` (needs Playwright) |

GitHub Actions runs the same checks on every push (`.github/workflows/ci.yml`).

## Where things live

| What | Where |
| --- | --- |
| Company facts: legal name, founding year, city, founder, emails, Play Store URL, price | `src/site.config.ts` (leave `null` until confirmed) |
| Unloop features (with build status), research entries, sources, FAQ | `src/data/unloop.ts` |
| Principles ("How we build") | `src/data/principles.ts` |
| Dated updates | `src/content/updates/*.md` |
| Legal texts (terms, website privacy, Unloop privacy policy) | `src/content/legal/*.md` |
| Team cards | `src/content/people/*.md` |
| Design tokens, type scale, dark mode | `src/styles/global.css` |
| Security headers, redirects | `public/_headers`, `public/_redirects` |
| Press kit files | `public/press/` |
| Old site content, to triage | `content/legacy/old-site.md` |

## Content rules

- **Never invent facts.** Unconfirmed values stay `null` in `site.config.ts`, and pages show a visible `[CONFIRM: …]` marker instead. Copy that only the founder can write shows `[FOUNDER TO WRITE: …]`. Run `npm run placeholders` for the full list.
- **Only built features appear.** Each feature in `src/data/unloop.ts` has a status from the Unloop brief (`built`, `confirm`, `in-progress`, `planned`). Research entries, comparison rows and FAQ answers that depend on an unbuilt feature are hidden automatically. To launch a feature, change its status to `built` once it is built and tested.
- **Research is described as research,** never as Unloop's results, and never as "clinically proven". Every source is listed with a link.
- **Legal texts are drafts** until reviewed by a qualified professional. Set `reviewed: true` in the file's frontmatter to remove the draft notice, and update `lastUpdated` whenever the text changes.

## Adding things

- **An update:** add `src/content/updates/YYYY-MM-DD-slug.md` with `title`, `date` and `summary`.
- **A person:** add `src/content/people/name.md`. Put their photo next to it and reference it as `photo: ./name.jpg`. When the team grows, switch the About page from "I" to "we".
- **Real screenshots:** put them in `src/assets/` and pass an `<Image />` into `<PhoneFrame>` on the home and Unloop pages.
- **A contact form:** the site uses `mailto:` links. If you want a form later, a Cloudflare Pages Function can send email without any third-party script.

## Before launch

See the launch checklist in `CLAUDE.md` (section 10). In short: fill in `site.config.ts`, write the founder note, add real screenshots and a photo, confirm the privacy policy placeholders and match them to the Play Data safety form, get the legal texts reviewed, spot-check the research DOIs, and set up SPF, DKIM and DMARC for the zeuada.com mailboxes.
