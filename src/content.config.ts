import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** Dated posts: releases, fixes, research notes. Newest first on /updates. */
const updates = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/updates' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    summary: z.string(),
    tags: z.array(z.enum(['release', 'fix', 'research', 'company'])).default([]),
  }),
});

/** Legal pages. Every one shows "Last updated". */
const legal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/legal' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lastUpdated: z.coerce.date(),
    /** Flip to true once a qualified professional has reviewed the text. */
    reviewed: z.boolean().default(false),
  }),
});

/** Team cards on /about. Adding a person is a new file here. */
const people = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/people' }),
  schema: ({ image }) =>
    z.object({
      /** null until the founder confirms how their name should appear. */
      name: z.string().nullable(),
      role: z.string(),
      bio: z.string().nullable(),
      photo: image().optional(),
      photoAlt: z.string().optional(),
      links: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      order: z.number().default(0),
    }),
});

/** Products. Unloop first; the template supports more. */
const products = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/products' }),
  schema: z.object({
    name: z.string(),
    tagline: z.string(),
    summary: z.string(),
    platform: z.string(),
    href: z.string(),
    order: z.number().default(0),
  }),
});

export const collections = { updates, legal, people, products };
