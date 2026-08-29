import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// "work" entries live in src/content/work/*.md
// Each file's `id` is derived from its filename, e.g. studio-os.md -> "studio-os",
// which becomes the URL at /work/studio-os.
const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      summary: z.string().max(160),
      date: z.coerce.date(),
      lastedited: z.coerce.date(),
      tags: z.array(z.string()).default([]),
      cover: image().optional(),
      url: z.url().optional(),
      repo: z.url().optional(),
      featured: z.boolean().default(false),
      draft: z.boolean().default(false),
    }),
});

const galleries = defineCollection({
  loader: glob({ pattern: '*.json', base: 'src/content/galleries' }),
  schema: ({ image }) => z.object({
    images: z.array(z.object({
      src: image(),
      alt: z.string(),
      title: z.string(),
      description: z.string(),
    })),
  }),
});

export const collections = { blog, galleries };
