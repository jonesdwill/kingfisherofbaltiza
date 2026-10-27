import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const blog = defineCollection({
	loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
	schema: z.object({
		title: z.string(),
		description: z.string().optional().default(''),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const pages = defineCollection({
	loader: glob({ base: './src/content/pages', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date().optional(),
	}),
});

const tripReports = defineCollection({
	loader: glob({ base: './src/content/trip-reports', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		heroImage: z.string().optional(),
		pdf: z.string().optional(),
		pdfSize: z.string().optional(),
		expeditionDates: z.string().optional(),
		authors: z.string().optional(),
		team: z.string().optional(),
	}),
});

export const collections = { blog, pages, 'trip-reports': tripReports };
