import { z, defineCollection } from "astro:content";
const projectCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    featured: z.boolean(),
  }),
});
export const collections = {
  project: projectCollection,
};
