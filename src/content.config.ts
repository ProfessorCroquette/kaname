import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const analyses = defineCollection({
  // The new v6 way to load files
  loader: glob({ pattern: "**/*.md", base: "./src/content/analyses" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    category: z.string(),
    description: z.string(),
  }),
});

export const collections = { analyses };
