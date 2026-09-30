# zeuada.com

The website for Zeuada, an independent software studio, and its first app, Unloop. It's a static [Astro](https://astro.build) site: no client-side JavaScript, no cookies, no trackers, no third-party requests.

- **Brief:** [`CLAUDE.md`](CLAUDE.md) (company site) and [`content/briefs/unloop-brief.md`](content/briefs/unloop-brief.md) (Unloop product, research and claims checklist).
- **Hosting:** GitHub Pages at zeuada.com, deployed by `.github/workflows/deploy.yml` on every push to `main` (and only `main`). The deploy runs `npm run verify` first; if any check fails, nothing is published.

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

GitHub Actions runs the same checks, plus Lighthouse CI, on every push (`.github/workflows/ci.yml`).

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
| Content security policy | `src/layouts/BaseLayout.astro` (meta tag; GitHub Pages can't send custom headers) |
| Redirects from old URLs | `redirects` in `astro.config.mjs` |
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
- **A contact form:** the site uses `mailto:` links. GitHub Pages can't run server code, so a form would need a separate email service; `mailto:` keeps the site free of third parties.

## Deploying

One-time setup in the GitHub repository:

1. **Settings → Pages → Build and deployment → Source:** choose **GitHub Actions**.
2. **Settings → Pages → Custom domain:** enter `zeuada.com` and save. (With Actions deploys, a `CNAME` file in the repo is ignored; the setting is what counts.)
3. At your DNS provider, point the apex domain at GitHub Pages: four `A` records for `zeuada.com` to `185.199.108.153`, `185.199.109.153`, `185.199.110.153` and `185.199.111.153` (plus the matching `AAAA` records if you want IPv6), and a `CNAME` record for `www` to `zeuada.github.io`. Check GitHub's "Managing a custom domain for your GitHub Pages site" docs for the current values.
4. Optional but recommended: **Settings → Pages → Verify** the domain for your account or organization, so nobody else can claim it.
5. Once the DNS check passes, tick **Enforce HTTPS**.

After that, every push to `main` publishes the site. You can also re-run a deploy from the Actions tab ("Deploy to GitHub Pages" → Run workflow).

GitHub Pages can't set custom response headers such as HSTS or `frame-ancestors`. The site sets its content security policy with a meta tag instead, and HTTPS is enforced by the Pages setting above.

## Before launch

See the launch checklist in `CLAUDE.md` (section 10). In short: fill in `site.config.ts`, write the founder note, add real screenshots and a photo, confirm the privacy policy placeholders and match them to the Play Data safety form, get the legal texts reviewed, spot-check the research DOIs, and set up SPF, DKIM and DMARC for the zeuada.com mailboxes.
