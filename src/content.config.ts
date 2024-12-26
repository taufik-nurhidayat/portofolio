import { z, defineCollection } from "astro:content";
const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    featured: z.boolean(),
    website: z.string().optional(),
    cover: z.string(),
    excerpt: z.string(),
    createdAt: z.date(),
  }),
});
export const collections = {
  project: projectCollection,
};
