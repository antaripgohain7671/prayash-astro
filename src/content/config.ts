import { defineCollection, z } from 'astro:content';

const newsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    description: z.string(),
  }),
});

export const collections = {
  news: newsCollection,
};
