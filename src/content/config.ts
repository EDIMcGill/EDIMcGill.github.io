import { defineCollection, z } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

// Base schema for all content types
const baseSchema = ({ image }: { image: any }) =>
	z.object({
		title: z.string().max(80),
		description: z.string(),
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		heroImage: image(),
		tags: z.array(z.string()),
		draft: z.boolean().default(false),
		pinned: z.boolean().default(false),
		featured: z.boolean().default(false)
	})

// Legacy blog collection (keeping for backward compatibility)
const blog = defineCollection({
	schema: ({ image }) =>
		baseSchema({ image }).extend({
			category: z.enum(CATEGORIES)
		})
})

// Events collection - workshops, seminars, etc.
const events = defineCollection({
	schema: ({ image }) =>
		baseSchema({ image }).extend({
			eventDate: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val))
				.optional(),
			location: z.string().optional(),
			registrationLink: z.string().url().optional()
		})
})

// Stories collection - personal narratives, interviews, blog posts
const stories = defineCollection({
	schema: ({ image }) =>
		baseSchema({ image }).extend({
			author: z.string().optional(),
			authorRole: z.string().optional()
		})
})

// Resources collection - support materials, guides, external links
const resources = defineCollection({
	schema: ({ image }) =>
		baseSchema({ image }).extend({
			resourceType: z.enum(['mental-health', 'academic', 'external', 'guide']).optional(),
			externalLink: z.string().url().optional()
		})
})

// Reports collection - research, annual reports, data
const reports = defineCollection({
	schema: ({ image }) =>
		baseSchema({ image }).extend({
			reportYear: z.number().optional(),
			pdfLink: z.string().url().optional()
		})
})

// Static pages collection - about, team, etc.
const pages = defineCollection({
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			description: z.string(),
			heroImage: image().optional(),
			lastUpdated: z
				.string()
				.or(z.date())
				.transform((val) => new Date(val))
				.optional()
		})
})

export const collections = {
	blog,
	events,
	stories,
	resources,
	reports,
	pages
}
