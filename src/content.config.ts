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
        period: z.string().optional(),

        tags: z.array(z.string()).default([]),

        image: z.string().optional(),
        imageAlt: z.string().optional(),

        github: z.string().url().optional(),
        demo: z.string().url().optional(),

        status: z
            .enum([
                "completed",
                "in-progress",
                "planned",
            ])
            .default("completed"),

        featured: z.boolean().default(false),
        draft: z.boolean().default(false),
    }),
});

export const collections = {
    blog,
    projects,
};