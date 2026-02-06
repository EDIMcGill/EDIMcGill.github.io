import { getCollection } from 'astro:content'
import type { CollectionEntry } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

// Legacy blog collection functions (keeping for backward compatibility)
export const getCategories = async () => {
	const posts = await getCollection('blog')
	const categories = new Set(
		posts.filter((post) => !post.data.draft).map((post) => post.data.category)
	)
	return Array.from(categories).sort((a, b) =>
		CATEGORIES.indexOf(a) < CATEGORIES.indexOf(b) ? -1 : 1
	)
}

export const getPosts = async (max?: number) => {
	return (await getCollection('blog'))
		.filter((post) => !post.data.draft)
		.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}

export const getTags = async () => {
	const posts = await getCollection('blog')
	const tags = new Set()
	posts
		.filter((post) => !post.data.draft)
		.forEach((post) => {
			post.data.tags.forEach((tag) => {
				if (tag != '') {
					tags.add(tag.toLowerCase())
				}
			})
		})

	return Array.from(tags)
}

export const getPostByTag = async (tag: string) => {
	const posts = await getPosts()
	const lowercaseTag = tag.toLowerCase()
	return posts
		.filter((post) => !post.data.draft)
		.filter((post) => {
			return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag)
		})
}

export const filterPostsByCategory = async (category: string) => {
	const posts = await getPosts()
	return posts
		.filter((post) => !post.data.draft)
		.filter((post) => post.data.category.toLowerCase() === category)
}

// New content collection functions
export const getEventPosts = async (max?: number) => {
	try {
		return (await getCollection('events'))
			.filter((post) => !post.data.draft)
			.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
			.slice(0, max)
	} catch {
		return []
	}
}

export const getStoryPosts = async (max?: number) => {
	try {
		return (await getCollection('stories'))
			.filter((post) => !post.data.draft)
			.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
			.slice(0, max)
	} catch {
		return []
	}
}

export const getResourcePosts = async (max?: number) => {
	try {
		return (await getCollection('resources'))
			.filter((post) => !post.data.draft)
			.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
			.slice(0, max)
	} catch {
		return []
	}
}

export const getReportPosts = async (max?: number) => {
	try {
		return (await getCollection('reports'))
			.filter((post) => !post.data.draft)
			.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
			.slice(0, max)
	} catch {
		return []
	}
}

// Get all content from all new collections
export const getAllContent = async () => {
	const events = await getEventPosts()
	const stories = await getStoryPosts()
	const resources = await getResourcePosts()
	const reports = await getReportPosts()

	// Combine and sort by date
	const allContent = [
		...events.map((item) => ({ item, type: 'events' as const })),
		...stories.map((item) => ({ item, type: 'stories' as const })),
		...resources.map((item) => ({ item, type: 'resources' as const })),
		...reports.map((item) => ({ item, type: 'reports' as const }))
	]

	return allContent.sort((a, b) => b.item.data.pubDate.valueOf() - a.item.data.pubDate.valueOf())
}

// Get pinned content across all collections
export const getPinnedContent = async () => {
	const allContent = await getAllContent()
	return allContent.filter(({ item }) => item.data.pinned)
}

// Filter content by type
export const filterContentByType = async (type: 'events' | 'stories' | 'resources' | 'reports') => {
	const allContent = await getAllContent()
	return allContent.filter(({ type: contentType }) => contentType === type)
}
