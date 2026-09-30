/**
 * Single source of company facts.
 *
 * Every value that has not been confirmed by the founder is `null`.
 * Components must omit or visibly mark a `null` value (see Placeholder.astro),
 * never invent one. Fill these in before launch; `npm run placeholders`
 * lists what is still open.
 */
export const site = {
  name: 'Zeuada',
  url: 'https://zeuada.com',
  description:
    'Zeuada is an independent software studio building calm, research-grounded apps that help people protect their attention.',

  company: {
    /** Registered legal name, e.g. "Zeuada Technologies LLP". */
    legalName: null as string | null,
    /** e.g. "Sole proprietorship", "LLP", "Private limited company". */
    entityType: null as string | null,
    /** Registration number(s) where applicable (e.g. LLPIN, CIN, GSTIN). */
    registration: null as string | null,
    /** Business or virtual-office address. Never a home address. */
    registeredAddress: null as string | null,
    /** Year Zeuada started (from the old site). */
    foundingYear: null as number | null,
    /** Location shown publicly, e.g. "Bengaluru, India". */
    location: null as string | null,
  },

  founder: {
    /** Full name or first name, as the founder prefers. */
    name: null as string | null,
    role: 'Founder, designer and developer',
  },

  email: {
    hello: 'hello@zeuada.com',
    support: 'support@zeuada.com',
    privacy: 'privacy@zeuada.com',
    press: 'hello@zeuada.com',
  },

  /** Only promise what is realistic. */
  responsePromise: 'I read every message and reply within 2 business days.',

  unloop: {
    /** Google Play listing URL. Buttons render as placeholders until set. */
    playStoreUrl: null as string | null,
    /** Human-readable price, e.g. "Free" or "₹199 one-time". */
    price: null as string | null,
    /** Numeric price and currency for JSON-LD, when known. */
    priceValue: null as number | null,
    priceCurrency: null as string | null,
    /** Public launch date (ISO), when known. */
    launchDate: null as string | null,
  },
} as const;

export type Site = typeof site;
