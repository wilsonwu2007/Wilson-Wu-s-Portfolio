import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		date: z.coerce.date(),
		org: z.string().optional(),
		tags: z.array(z.string()).default([]),
		featured: z.boolean().default(false),
		image: z.string().optional(),
		order: z.number().default(0),
	}),
});

export const collections = { projects };
