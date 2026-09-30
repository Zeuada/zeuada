/**
 * "How we build" — draft principles from the brief (section 6.4).
 * Founder to confirm the wording before launch.
 */
export const principles = [
  {
    title: 'Research first',
    body: 'Features are based on published research, and we link to our sources.',
  },
  {
    title: 'Private by design',
    body: "Data stays on your device wherever possible. We don't sell data or show ads.",
  },
  {
    title: 'No manipulation',
    body: 'No dark patterns, fake urgency, or guilt. Our apps are designed to be used less, not more.',
  },
  {
    title: 'Honest claims',
    body: 'We say what our apps do and what the research shows, and nothing more.',
  },
  {
    title: 'Built to last',
    body: 'Small, fast, and maintained. We fix problems quickly and tell you what changed.',
  },
] as const;

/** The three shown on the home page. */
export const homePrinciples = [principles[0], principles[1], principles[2]];
