import { z, defineCollection } from "astro:content"

const postsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.date(),
    featured: z.boolean(),
    url: z.string().url()
  })
})

export const collections = {
  posts: postsCollection
}
