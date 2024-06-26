import { z, defineCollection } from "astro:content"

const itemsCollection = defineCollection({
  type: "content", // v2.5.0 and later
  schema: z.object({
    author: z.string(),
    cost: z.number().optional(),
    date: z.date(),
    description: z.string(),
    featured: z.boolean(),
    hidedate: z.boolean().optional(),
    title: z.string(),
    url: z.string().url()
  })
})

export const collections = {
  items: itemsCollection
}
