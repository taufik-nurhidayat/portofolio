import { z, defineCollection } from "astro:content";
const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    featured: z.boolean(),
    cover: z.string(),
    excerpt: z.string(),
  }),
});
export const collections = {
  project: projectCollection,
};
