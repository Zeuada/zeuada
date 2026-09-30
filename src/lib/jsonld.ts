import { site } from '../site.config';

/** Drop null/undefined values so unconfirmed facts never reach structured data. */
function clean<T extends Record<string, unknown>>(obj: T): Partial<T> {
  return Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== null && v !== undefined)) as Partial<T>;
}

export function organizationLd() {
  const { company, founder } = site;
  return clean({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${site.url}/#organization`,
    name: site.name,
    legalName: company.legalName,
    url: site.url,
    logo: `${site.url}/favicon.svg`,
    description: site.description,
    email: site.email.hello,
    foundingDate: company.foundingYear ? String(company.foundingYear) : null,
    founder: founder.name ? { '@type': 'Person', name: founder.name } : null,
    address: company.location ? { '@type': 'PostalAddress', addressLocality: company.location } : null,
  });
}

export function unloopAppLd() {
  const { unloop } = site;
  return clean({
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Unloop',
    applicationCategory: 'HealthApplication',
    operatingSystem: 'Android',
    url: `${site.url}/unloop/`,
    description:
      'Unloop is an Android app that helps you break the Instagram Reels habit with a mindful pause, a live reel counter, and better alternatives to scrolling.',
    publisher: { '@id': `${site.url}/#organization` },
    installUrl: unloop.playStoreUrl,
    datePublished: unloop.launchDate,
    offers:
      unloop.priceValue !== null && unloop.priceCurrency
        ? { '@type': 'Offer', price: unloop.priceValue, priceCurrency: unloop.priceCurrency }
        : null,
  });
}
