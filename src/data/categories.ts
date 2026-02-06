// List of categories for EDI content (legacy - keeping for backward compatibility)
// Used for organizing posts and filtering in navigation
export const CATEGORIES = [
	'Home Page', // Main/landing content
	'Blogs & Stories', // Personal narratives and experiences
	'Events & Workshops', // Upcoming and past events
	'Resources & Support' // Helpful resources and support materials
] as const

// New content types for restructured site
export const CONTENT_TYPES = ['events', 'stories', 'resources', 'reports'] as const

// Main navigation tabs for the EDI site
export const NAV_TABS = [
	{ name: 'Home', href: '/' },
	{ name: 'About', href: '/about' },
	{ name: 'Programs', href: '/programs' },
	{ name: 'Stories', href: '/stories' },
	{ name: 'Resources', href: '/resources' },
	{ name: 'Participate', href: '/participate' },
	{ name: 'Reports', href: '/reports' }
] as const

// Filter options for Updates feed
export const FILTER_OPTIONS = [
	{ id: 'all', label: 'All Updates' },
	{ id: 'events', label: 'Events' },
	{ id: 'stories', label: 'Stories' },
	{ id: 'resources', label: 'Resources' },
	{ id: 'reports', label: 'Reports' }
] as const
