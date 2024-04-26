import { z, defineCollection } from "astro:content"

const itemsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    title: z.string(),
    author: z.string(),
    description: z.string(),
    date: z.date(),
    hidedate: z.boolean().optional(),
    featured: z.boolean(),
    url: z.string().url()
  })
})

export const collections = {
  items: itemsCollection
}
