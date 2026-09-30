# Zeuada — Company Website Brief (for Claude Code)

This document is the brief for building **zeuada.com**, the company website for Zeuada, the parent company of Unloop. Give it to Claude Code as `CLAUDE.md` (or reference it from there) in an empty website repository.

> **Read first:** Zeuada is currently run by one person. The website must be honest about that while looking professional and being ready to grow. Credibility comes from being real, specific, and verifiable, not from looking like a big corporation.

> **Companion brief:** all Unloop content comes from `content/briefs/unloop-brief.md` (the Unloop Product, Research & Marketing Brief). Respect its feature status column and its claims & compliance checklist. See "Working in this repo" at the end of this file.

---

## 0. Content from the old zeuada.com

The previous site could not be retrieved automatically (the server blocked automated access), so its content is not included here.

**Before building, the founder should paste the old site's text into `/content/legacy/old-site.md`.** Then triage it with this rule:

| Keep | Drop |
|---|---|
| The founding year or history (for example "Building software since 20XX"). A track record is a trust signal. | Old services or products that no longer exist or don't fit the current focus |
| Past projects that are real, live, or verifiable (with links) | Anything unverifiable, outdated, or exaggerated |
| The founder's background and skills, if still accurate | Stock photos, placeholder text, generic taglines |
| Existing contact channels that still work | Dead links, old phone numbers, old addresses |

Anything kept should be rewritten in the voice described in section 4.

---

## 1. What Zeuada is

**One-line description (draft):**
Zeuada is an independent software studio building calm, research-grounded apps that help people protect their attention.

**Longer description (draft):**
Zeuada makes software that respects people's time. Our first app, Unloop, helps people break the Instagram Reels habit with a mindful pause, a live reel counter, and better alternatives to scrolling. Every product we build is grounded in published research, private by design, and free of manipulative design.

**Focus area:** digital wellbeing and attention. Future products can extend this (for example, other short-form apps, focus tools), but the site should not promise specific future products.

**Placeholders to confirm:**
- Legal entity type and registered name: `[e.g., sole proprietorship / LLP / Pvt Ltd — confirm]`
- Founding year: `[from old site]`
- Location to display: `[city, country — e.g., Bengaluru, India]`
- Founder name to display: `[full name or first name]`
- Contact emails: `hello@zeuada.com`, `support@zeuada.com`, `privacy@zeuada.com` (on the company domain, not Gmail)

---

## 2. Trust principles (research-based)

The Stanford Web Credibility guidelines (Fogg, based on research with over 4,500 people) are the backbone of this site. Each guideline maps to something concrete:

| Guideline | How this site applies it |
|---|---|
| Make it easy to verify information | Unloop's Research page links to real sources. Product claims link to evidence. |
| Show there's a real organization | Company details page: legal name, location, founding year, contact. Real founder photo and name. |
| Highlight expertise | Founder's background, the research process behind Unloop, published write-ups. |
| Show honest, trustworthy people | A personal founder note, written in first person, honest about being a one-person studio. |
| Make it easy to contact you | Contact in the header and footer, a clear response-time promise, separate support and privacy emails. |
| Look professional | Clean, fast, accessible, consistent design. No template leftovers. |
| Easy to use and useful | Few pages, clear navigation, answers to real questions (FAQ, support). |
| Update often | Dated "Updates" page and "Last updated" dates on legal pages. |
| Restraint with promotion | No pop-ups, no newsletter modals, no countdown timers, no fake urgency. |
| Avoid errors | Spell-check everything; automated link checking before each deploy. |

**Specific to Zeuada:** the site must practice what Unloop preaches. No dark patterns, no attention-grabbing pop-ups, no tracking cookies. The website itself is proof of the company's values.

---

## 3. Being a one-person studio: how to present it

Research on credibility favors showing real people. Pretending to be a big team is a trust risk if discovered, and it removes one of a solo studio's real strengths.

**Do:**
- Write the founder note and About page in first person ("I started Zeuada to…").
- Use "Zeuada" (the company) in product pages, legal pages, and support text. This scales naturally when the team grows.
- Frame being small as a benefit: direct contact with the person who builds the product, fast fixes, no investors pushing for engagement metrics.
- Show a real photo of the founder (or at least a real name and a professional profile link).

**Don't:**
- Use "our team of experts," fake team photos, stock office photos, or invented job titles.
- Show logos of companies you haven't worked with, fake testimonials, or inflated download numbers.
- Imply partnerships or endorsements that don't exist (including researchers cited on the Research page).

**Built to scale:** the About page has a "People" section that currently shows one person. Adding team members later is a content change, not a redesign. When the team grows, switch the About page voice from "I" to "we."

**Address privacy for the founder:** a physical address builds credibility, but a solo founder shouldn't publish a home address. Use a registered business address or virtual office if displaying one. Note that the Google Play developer account type affects what is shown publicly (see section 9).

---

## 4. Voice and tone

- Calm, honest, specific. Plain words, short sentences, sentence case.
- Describe what things do, not how amazing they are. "Unloop pauses the Reels feed and asks how you feel" beats "revolutionary AI-powered focus solution."
- Confident about the research, careful about claims: "built on research," never "clinically proven."
- Warm, never preachy or shaming about phone use.
- No buzzwords: avoid "revolutionary," "cutting-edge," "world-class," "leverage," "synergy."

---

## 5. Site map

Keep it small. Every page must earn its place.

```
/                   Home
/unloop             Unloop product page (see Unloop brief)
/unloop/research    Research behind Unloop (sources)
/unloop/privacy     Unloop privacy policy (Play Store link target)
/unloop/support     Unloop help and FAQ
/about              About Zeuada + founder note + principles
/principles         How we build (can be a section of About at first)
/updates            Dated updates and changelog
/contact            Contact options
/press              Press kit (logos, screenshots, fact sheet)
/legal/terms        Terms of use
/legal/company      Company details (legal name, registration, address)
/legal/privacy      Website privacy notice
```

The Unloop pages live on zeuada.com at first (one site to maintain). If Unloop later gets its own domain, redirect `/unloop/*` there.

---

## 6. Page-by-page content

### 6.1 Home
Purpose: in five seconds, a visitor knows who Zeuada is, what it makes, and that it's real.

1. **Hero**
   - Headline (draft): *Software that protects your attention.*
   - Subhead: *Zeuada is an independent studio building calm, research-grounded apps. Our first app, Unloop, helps you break the Instagram Reels habit.*
   - Primary button: *Get Unloop on Google Play.* Secondary link: *How Unloop works.*
   - Visual: Unloop's pause screen and companion in a phone frame (real screenshot).
2. **Unloop feature strip** — three points: pause and notice, live reel counter, better alternatives. Link to /unloop.
3. **How we build** — three principles (see 6.4), each one sentence.
4. **Founder note** — photo, two or three sentences, link to About. (e.g., "I built Unloop because I kept losing evenings to Reels. Zeuada exists to make tools I'd trust with my own attention.") *Founder to write the real version.*
5. **Latest update** — most recent entry from /updates, with date.
6. **Footer** — contact email, company details link, legal links, location, founding year.

### 6.2 Unloop pages
Use the separate **Unloop Product, Research & Marketing Brief** for all Unloop content (features, research, benefits, FAQ, claims checklist). Only advertise features that are built.

- `/unloop/privacy` must be a public, plain HTML page (not a PDF, not behind a login, not geo-blocked), since it's the Play Store privacy policy link.
- `/unloop/support` should include the FAQ, troubleshooting (accessibility service turned off, battery optimization on specific phone brands), and a support email.

### 6.3 About
1. **Founder note (first person)** — why Zeuada exists, the founder's background, how Unloop started. Honest and specific.
2. **Facts** — founded [year], based in [city], [one person / small team], products: Unloop.
3. **People** — founder card: photo, name, role ("Founder, designer and developer"), one-line bio, professional links. Structured so more cards can be added.
4. **Principles** — see below.
5. **Contact** — email and expected response time.

### 6.4 Principles ("How we build")
Draft principles (founder to confirm):
1. **Research first.** Features are based on published research, and we link to our sources.
2. **Private by design.** Data stays on your device wherever possible. We don't sell data or show ads.
3. **No manipulation.** No dark patterns, fake urgency, or guilt. Our apps are designed to be used less, not more.
4. **Honest claims.** We say what our apps do and what the research shows, and nothing more.
5. **Built to last.** Small, fast, and maintained. We fix problems quickly and tell you what changed.

### 6.5 Updates
Dated entries, newest first: releases, fixes, research notes, beta results (only real numbers, with method). Even short entries show the company is active.

### 6.6 Contact
- Support for Unloop: `support@zeuada.com`
- Privacy questions: `privacy@zeuada.com`
- Everything else: `hello@zeuada.com`
- Response promise: *"I read every message and reply within 2 business days."* (Only promise what's realistic.)
- Optional: a simple contact form that sends email. No CAPTCHA-walls, no phone unless it's answered.

### 6.7 Press
- One-paragraph description of Zeuada and Unloop.
- Fact sheet: founded, location, founder, platform, price, launch date.
- Downloadable logos (SVG, PNG, light and dark), app icon, screenshots, founder photo.
- Press contact email.

### 6.8 Legal
- **Company details:** legal name, entity type, registration details where applicable, registered address (business address, not home), contact email.
- **Terms of use** for the website and apps.
- **Website privacy notice:** what the site collects (ideally nothing beyond server logs and cookieless analytics).
- Every legal page shows "Last updated: [date]."
- Legal text must be reviewed by a qualified professional. India's Digital Personal Data Protection Act and the laws of any country where the app is distributed may apply.

---

## 7. Design direction

The company brand should feel calm, precise, and trustworthy, and be able to host multiple products. Unloop keeps its own ink-blue and amber identity inside its product section.

**Proposed tokens (Claude Code may refine, but keep the character):**
- `--bg: #F4F6F8` cool light gray background (not cream)
- `--surface: #FFFFFF`
- `--ink: #14161F` text
- `--muted: #5B6272` secondary text
- `--accent: #2F6F5E` calm deep green, used sparingly for links and primary buttons
- `--line: #DDE2E8` borders
- Unloop sections may use Unloop's palette (`#0B1030` ink blue, `#FFB547` amber) to feel like the product.

**Type:** one characterful sans-serif family for everything, for example **Onest** or **Hanken Grotesk** (Google Fonts), with a clear type scale. Avoid generic defaults.

**Layout principles:**
- Generous whitespace, left-aligned text, line length under 75 characters.
- Real screenshots and a real founder photo; no stock imagery or abstract 3D blobs.
- One memorable element: the Unloop phone visual in the hero. Everything else quiet.
- No carousels, no autoplay video, no animated counters, no pop-ups.
- Dark mode support via `prefers-color-scheme`.

**Avoid template tells:** identical rounded cards everywhere, all-caps eyebrow labels over every heading, gradient washes as decoration, "→" on every link, fake metrics sections.

---

## 8. Technical specification

- **Framework:** Astro (static output). Fast, SEO-friendly, simple to host and maintain alone. Content in Markdown/MDX via content collections.
- **Styling:** plain CSS with custom properties (or Tailwind if preferred), no heavy UI library.
- **Content collections:** `products` (Unloop first; template supports more), `updates` (dated posts), `legal` pages, `people` (team cards).
- **Hosting:** a static host such as Cloudflare Pages, Netlify, or Vercel, with HTTPS and automatic deploys from git.
- **Email:** company-domain email with SPF, DKIM, and DMARC configured, so messages don't land in spam.
- **Analytics:** none, or a cookieless privacy-friendly tool. No cookie banner needed if no tracking cookies are used.
- **Forms:** static-host form handling or mailto. No third-party trackers.
- **Performance targets:** Lighthouse 95+ on performance, accessibility, best practices, and SEO. Total JS minimal; images optimized (AVIF/WebP, responsive sizes).
- **Accessibility:** WCAG 2.2 AA. Semantic HTML, keyboard navigation, visible focus, alt text, sufficient contrast, reduced-motion support.
- **SEO:**
  - Unique titles and descriptions per page.
  - Open Graph and Twitter card images (branded, per page).
  - JSON-LD: `Organization` (Zeuada) on all pages; `SoftwareApplication` (Unloop, operatingSystem Android, offers/price when known) on Unloop pages.
  - `sitemap.xml`, `robots.txt`, canonical URLs.
- **Quality checks before every deploy:** spell check, broken link check, HTML validation, Lighthouse CI.
- **Security headers:** HTTPS only, HSTS, basic content-security policy.

---

## 9. Google Play and business considerations

These affect what the website must show and what's public:

- **Privacy policy URL:** required for Unloop. Use `/unloop/privacy`.
- **Developer website:** optional for personal accounts but strongly recommended; required for new organization accounts.
- **Account type matters:**
  - Personal accounts publicly show the developer email; in some regions, more (like name or address) may be displayed. Organization accounts show the organization name, address, email, and phone publicly, and require a D-U-N-S number.
  - Several sources report that new personal accounts must run a closed test with 12 testers for 14 days before production, while organization accounts are exempt. Verify current rules in Play Console Help before deciding.
- If Zeuada registers as a business and uses an organization account, the website's Company details page, Play Store listing, and D-U-N-S record should all use the same legal name and address.

---

## 10. Launch checklist

- [ ] Old site content triaged (section 0)
- [ ] Founder note, photo, and bio written by the founder
- [ ] Company details confirmed (legal name, entity, address, founding year)
- [ ] Company emails set up with SPF/DKIM/DMARC
- [ ] Unloop page uses only built features and follows the Unloop claims checklist
- [ ] Unloop privacy policy published at a public URL and matches the Play Data safety form
- [ ] Terms and privacy texts reviewed by a professional
- [ ] Research page sources verified
- [ ] Press kit assets exported
- [ ] Lighthouse 95+, accessibility check passed, no broken links
- [ ] OG images and JSON-LD in place
- [ ] At least one dated update published
- [ ] 404 page with helpful links
- [ ] Redirect from old site URLs if any are indexed

---

## 11. Instructions for Claude Code

1. Scaffold an Astro project with the site map in section 5 and content collections in section 8.
2. Implement the design tokens in section 7 as CSS custom properties, with dark mode.
3. Build pages with the content in section 6. Use clearly marked placeholders like `[FOUNDER TO WRITE]` wherever real content is needed; never invent facts, numbers, testimonials, or people.
4. Pull Unloop content from the Unloop brief, respecting its status column and claims checklist.
5. Add SEO, JSON-LD, sitemap, and security headers.
6. Set up checks: spell check, link check, Lighthouse CI.
7. Keep the whole site static, fast, and free of trackers and pop-ups.

---

## Working in this repo

- `npm run dev` starts the dev server. `npm run build` outputs the static site to `dist/`.
- `npm run verify` runs the full pre-deploy suite: `astro check`, spell check, build, HTML validation, internal link check. `npm run lhci` runs Lighthouse CI (needs Chrome; set `CHROME_PATH`).
- `npm run placeholders` lists every `[FOUNDER TO WRITE]`, `[CONFIRM: …]` and `[VERIFY]` marker still in the source.
- **Company facts** (legal name, founding year, city, founder, emails, Play Store URL, price) live only in `src/site.config.ts`. Leave a value `null` until it is confirmed. Components omit or visibly mark missing values; they never invent them.
- **Unloop features** live in `src/data/unloop.ts` with the status column from the Unloop brief. Only `status: 'built'` features render. To launch a feature, change its status after confirming it is built and tested.
- **Research entries and sources** also live in `src/data/unloop.ts`. A source gets a link only once it has been verified.
- **Content collections** (`src/content/`): `updates` (dated posts), `legal` (legal pages with `lastUpdated`), `people` (team cards), `products`.
- Hosting is Cloudflare Pages. Security headers are in `public/_headers` and redirects in `public/_redirects`.
- No client-side JavaScript, trackers, cookies or third-party requests. The font (Onest) is self-hosted through `@fontsource-variable/onest`.
