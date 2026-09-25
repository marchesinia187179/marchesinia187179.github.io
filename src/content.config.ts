import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/blog",
    }),

    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    loader: glob({
        pattern: "**/*.md",
        base: "./src/data/projects",
    }),

    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default([]),
        github: z.string().url().optional(),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    blog,
    projects,
};