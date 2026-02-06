interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://EDIMcGill.github.io', // GitHub Pages URL
	author: 'EDI McGill Team', // Site author
	title: 'Equity, Diversity and Inclusion for Graduate Students', // Site title (fixed typo: Includion -> Inclusion)
	description: 'Welcome to Team EDI McGill, Faculty of Engineering!', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 10 // Number of posts per page
}
