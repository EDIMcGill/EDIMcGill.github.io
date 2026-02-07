# 🎨 EDI McGill Design System & Guidelines

## Core Principles for EDI Web Design

### 1. **Inclusive Color Palette** - Warmth, Trust, Belonging

#### Primary Colors (Main Brand Identity)

```css
/* Teal/Cyan - Trust, Growth, Healing */
--primary-teal: #14b8a6 (teal-500) --primary-teal-light: #5eead4 (teal-300)
	--primary-teal-dark: #0d9488 (teal-600) /* Violet/Purple - Dignity, Wisdom, Creativity */
	--primary-violet: #8b5cf6 (violet-500) --primary-violet-light: #a78bfa (violet-400)
	--primary-violet-dark: #7c3aed (violet-600) /* Rose/Coral - Compassion, Community, Warmth */
	--accent-rose: #f43f5e (rose-500) --accent-coral: #fb7185 (rose-400);
```

#### Secondary Colors (Supporting Elements)

```css
/* Emerald - Hope, Balance, Nature */
--secondary-emerald: #10b981 (emerald-500) /* Amber - Optimism, Energy, Welcome */
	--secondary-amber: #f59e0b (amber-500) /* Indigo - Depth, Reflection, Clarity */
	--secondary-indigo: #6366f1 (indigo-500);
```

#### Neutral Colors

```css
/* Warm Grays (avoid pure black/white for accessibility) */
--gray-50: #f9fafb --gray-100: #f3f4f6 --gray-700: #374151 --gray-900: #111827;
```

---

## 2. **Typography - Readable & Welcoming**

### Font Hierarchy

```css
/* Headings - Bold & Friendly */
h1: 3xl-7xl, font-bold, leading-tight
h2: 2xl-5xl, font-bold, mb-4
h3: xl-3xl, font-bold

/* Body Text - Comfortable Reading */
body: text-base (16px), leading-relaxed (1.625)
large-text: text-lg-xl, leading-relaxed
small-text: text-sm, font-semibold

/* Special Text */
badges: text-xs-sm, font-bold, uppercase
buttons: text-base-lg, font-bold
```

### Inclusive Typography Practices

- **Minimum font size:** 16px (never smaller than 14px)
- **Line height:** 1.5-1.75 for body text
- **Line length:** Max 65-75 characters per line
- **Letter spacing:** Slightly increased for readability

---

## 3. **Layout Consistency - Uniform Structure**

### Page Template Structure

```astro
<!-- Every page follows this structure -->
<BaseLayout>
	<!-- 1. Hero/Header Section -->
	<section class='hero' data-aos='fade-down'>
		<TitlePage or Custom Hero />

		<!-- 2. Introduction/Context (if needed) -->
		<div class='prose dark:prose-invert max-w-3xl mx-auto mb-12'>
			<p>Brief intro...</p>
		</div>

		<!-- 3. Main Content Sections -->
		<section data-aos='fade-up'>
			<!-- Content -->
		</section>

		<!-- 4. Call-to-Action Section -->
		<section class='cta-section' data-aos='zoom-in'>
			<!-- CTA buttons -->
		</section>
	</section>
</BaseLayout>
```

### Spacing System (Consistent Margins)

```css
/* Section Spacing */
section: mb-16 to mb-24 (between major sections)
subsection: mb-8 to mb-12
elements: mb-4 to mb-6
components: gap-6 to gap-8 in grids

/* Padding */
cards: p-6 to p-10
containers: p-8 to p-16
buttons: px-8 py-3 to px-10 py-4
```

### Grid Layouts

```css
/* Consistent Grid Patterns */
2-column: grid-cols-1 md:grid-cols-2
3-column: grid-cols-1 md:grid-cols-3
4-column: grid-cols-2 md:grid-cols-4
gap: gap-6 to gap-8
```

---

## 4. **Component Patterns - Reusable Elements**

### Card Design

```astro
<!-- Standard EDI Card -->
<div
	class='bg-white dark:bg-gray-900
  border-2 border-gray-200 dark:border-gray-700
  rounded-2xl to rounded-3xl
  p-8 to p-10
  hover:border-[accent-color]
  hover:shadow-2xl
  hover:-translate-y-2
  transition-all duration-300'
>
	<div class='text-6xl mb-5'>[Icon/Emoji]</div>
	<h3 class='text-2xl-3xl font-bold mb-4'>[Title]</h3>
	<p class='text-lg leading-relaxed mb-6'>[Description]</p>
	<a href='#' class='[CTA Link]'>[Action]</a>
</div>
```

### Button Styles (3 Variants)

#### Primary Button

```css
bg-gradient-to-r from-[color1] to-[color2]
text-white
px-10 py-4
rounded-2xl
font-bold
hover:scale-105
shadow-lg hover:shadow-xl
transition-all
```

#### Secondary Button

```css
bg-white/95
text-[accent-color]
border-2 border-[accent-color]
px-10 py-4
rounded-2xl
font-bold
hover:bg-[accent-color-light]
hover:scale-105
shadow-lg
```

#### Ghost Button

```css
bg-transparent
text-[color]
border-2 border-[color]
px-8 py-3
rounded-xl
font-bold
hover:bg-[color]/10
transition-all
```

### Badge/Tag Design

```css
inline-flex items-center gap-2
bg-[color]-100 dark:bg-[color]-900
px-4 py-2
rounded-full
text-[color]-700 dark:text-[color]-300
font-semibold
text-sm
```

---

## 5. **EDI-Specific Design Elements**

### Accessibility-First Features

```astro
<!-- Always Include -->- aria-labels on all interactive elements - alt text on all images
(descriptive, not decorative) - Focus indicators (ring-2 ring-offset-2) - Keyboard navigation
support - High contrast mode support
```

### Inclusive Imagery Guidelines

- **Diverse representation** in all photos
- **Authentic moments** (not stock photos if possible)
- **Image opacity:** 15-20% on hero overlays
- **Multiple perspectives** shown together

### Language & Tone

- **Welcoming:** "Welcome," "Join us," "Your voice matters"
- **Action-oriented:** "Get involved," "Explore," "Connect"
- **Inclusive pronouns:** They/them when general
- **Avoid jargon:** Explain academic terms
- **Graduate student focused:** Speak directly to grad experiences

---

## 6. **Section-Specific Design Patterns**

### Hero Sections

```astro
<section class='hero'>
	<div
		class='relative w-full
    h-[500px] md:h-[600px]
    rounded-3xl overflow-hidden
    shadow-[0_25px_80px_-15px_rgba(0,0,0,0.4)]
    border border-gray-300/20'
	>
		<Image class='opacity-15' />
		<div class='gradient-overlay'>
			<badge>Institution</badge>
			<h1 class='text-5xl-7xl'>Title</h1>
			<p class='text-2xl-3xl'>Subtitle</p>
			<p class='description'>Context</p>
			<CTAs />
		</div>
	</div>
</section>
```

### Content Grid Sections

```astro
<section data-aos='fade-up'>
	<!-- Section Header (Centered) -->
	<div class='text-center mb-14'>
		<badge>[Category]</badge>
		<h2 class='text-4xl-5xl mb-4'>[Title]</h2>
		<p class='text-xl text-gray-600'>[Description]</p>
	</div>

	<!-- Grid Content -->
	<div class='grid grid-cols-1 md:grid-cols-3 gap-8'>
		[Cards with icons, titles, descriptions, links]
	</div>
</section>
```

### Call-to-Action Sections

```astro
<section
	class='bg-gradient-to-br from-[color1] to-[color2]
  rounded-3xl
  p-12 md:p-16
  shadow-2xl
  text-center'
	data-aos='zoom-in'
>
	<emoji class='text-7xl mb-6'>🎯</emoji>
	<h2 class='text-4xl-5xl font-bold mb-6'>[Headline]</h2>
	<p class='text-xl mb-8'>[Description]</p>
	<badge>[Time commitment]</badge>
	<button>[Primary CTA]</button>
</section>
```

---

## 7. **Animation Strategy**

### Scroll Animations (Using AOS)

```astro
<!-- Fade Up (Most Common) -->
<section data-aos='fade-up'>
	<!-- Fade Up with Delay (Sequential) -->
	<div data-aos='fade-up' data-aos-delay='100'>
		<div data-aos='fade-up' data-aos-delay='200'>
			<div data-aos='fade-up' data-aos-delay='300'>
				<!-- Zoom In (CTA sections) -->
				<section data-aos='zoom-in'>
					<!-- Fade Left/Right (Alternating content) -->
					<div data-aos='fade-right'>
						<div data-aos='fade-left'></div>
					</div>
				</section>
			</div>
		</div>
	</div>
</section>
```

### Hover Animations (Always Include)

```css
/* Cards */
hover:-translate-y-2 hover:shadow-2xl

/* Buttons */
hover:scale-105 hover:shadow-xl

/* Links */
hover:translate-x-2 (for arrows)
hover:text-[accent-color]

/* Images */
hover:scale-105 (on parent overflow-hidden)
```

---

## 8. **Dark Mode Strategy**

### Color Adjustments

```css
/* Backgrounds */
bg-white → dark:bg-gray-900
bg-gray-50 → dark:bg-gray-950
bg-[color]-50 → dark:bg-[color]-950

/* Text */
text-gray-900 → dark:text-white
text-gray-600 → dark:text-gray-300
text-gray-700 → dark:text-gray-200

/* Borders */
border-gray-200 → dark:border-gray-700
border-[color]-200 → dark:border-[color]-800
```

### Test Dark Mode

- Ensure all gradients work in both modes
- Check contrast ratios (WCAG AAA)
- Test on different screens

---

## 9. **Mobile-First Responsive Design**

### Breakpoints

```css
/* Mobile First Approach */
default: mobile (< 640px)
sm: 640px
md: 768px (tablets)
lg: 1024px (desktop)
xl: 1280px (large desktop)
```

### Responsive Patterns

```astro
<!-- Text Size -->text-2xl md:text-4xl lg:text-5xl

<!-- Spacing -->
mb-8 md:mb-12 lg:mb-16 p-6 md:p-10 lg:p-12

<!-- Grid -->
grid-cols-1 md:grid-cols-2 lg:grid-cols-3

<!-- Hero Height -->
h-[400px] md:h-[500px] lg:h-[600px]
```

### Mobile Menu

- Hamburger menu for navigation
- Large touch targets (min 44x44px)
- Swipeable carousels
- Collapsible sections

---

## 10. **Uniform Page Structure Template**

### Every Page Should Have:

#### **1. Hero/Title Section** (100px-200px height)

- Page title
- Brief description
- Optional hero image

#### **2. Introduction** (if needed)

- 1-2 paragraphs
- Sets context

#### **3. Main Content** (2-4 major sections)

- Consistent spacing between sections (mb-20 to mb-24)
- Each section has: Badge + H2 + Description + Content

#### **4. Call-to-Action** (before footer)

- Related action
- Link to other pages

#### **5. Footer** (always present via BaseLayout)

- Consistent across all pages

---

## 11. **Component Library - Reusable Pieces**

### Create These Shared Components

#### `EDICard.astro` - Universal Card

```astro
---
interface Props {
	title: string
	description: string
	icon?: string
	color: 'teal' | 'violet' | 'rose' | 'emerald'
	href?: string
}
---
```

#### `SectionHeader.astro` - Consistent Section Headers

```astro
---
interface Props {
	badge: string
	title: string
	description: string
	badgeColor?: string
}
---
```

#### `CTAButton.astro` - Consistent Buttons

```astro
---
interface Props {
	variant: 'primary' | 'secondary' | 'ghost'
	size: 'sm' | 'md' | 'lg'
	href: string
}
---
```

---

## 12. **EDI-Specific Best Practices**

### Content Strategy

- **Student Stories First:** Lead with lived experiences
- **Multiple Voices:** Show diverse perspectives in every section
- **Actionable:** Every page has clear next steps
- **Transparent:** Share real data and impact

### Navigation Design

- **7 Clear Tabs:** Home, About, Programs, Stories, Resources, Participate, Reports
- **Active State:** Always show where user is
- **Breadcrumbs:** On deep pages
- **Search:** Prominent and accessible

### Interactive Elements

- **Quizzes:** 3-5 questions max (like Participate page)
- **Filters:** Easy content discovery
- **Progress Indicators:** Show completion status
- **Feedback:** Immediate response to actions

---

## 13. **Performance Optimization**

### Image Optimization

```astro
<!-- Always use Astro Image -->
<Image src={image} alt='descriptive text' width={1200} height={600} loading='lazy' format='webp' />
```

### Code Splitting

- Lazy load heavy components
- Use client:load directives wisely
- Minimize JavaScript bundle

---

## 14. **Accessibility Checklist**

### WCAG AAA Compliance

- ✅ Color contrast ratios: 7:1 for normal text, 4.5:1 for large text
- ✅ Keyboard navigation for all interactive elements
- ✅ Screen reader support (aria-labels)
- ✅ Focus indicators visible
- ✅ Skip navigation links
- ✅ Alt text on all images
- ✅ Captions on videos
- ✅ Form labels properly associated

### Testing Tools (Free)

- **axe DevTools** (browser extension)
- **WAVE** (web accessibility evaluation)
- **Lighthouse** (built into Chrome)

---

## 15. **Recommended UI Enhancements**

### Immediate Improvements (2-3 hours)

#### A. Add Loading Skeletons

```astro
<!-- While content loads -->
<div class='animate-pulse bg-gray-200 h-48 rounded-2xl'></div>
```

#### B. Add Hover Tooltips

```astro
<button title='Click to learn more' class='group relative'>
	<span class='tooltip'>Helpful hint</span>
</button>
```

#### C. Add Smooth Scroll

```css
/* In global.css */
html {
	scroll-behavior: smooth;
	scroll-padding-top: 80px; /* Account for fixed header */
}
```

#### D. Add Focus Rings

```css
/* All interactive elements */
.focus-visible:focus {
	outline: 2px solid theme('colors.teal.500');
	outline-offset: 2px;
}
```

---

## 16. **Content Pages - Specific Layouts**

### About Page Layout

```
Hero Section (Team Photo)
↓
Mission Statement (Gradient Box)
↓
Our Approach (3 Pillars - Cards)
↓
Team Members (Grid with Photos)
↓
CTA: Join Us
```

### Programs Page Layout

```
Hero Section
↓
Upcoming Events (Timeline View)
↓
Past Events (Grid with Photos)
↓
Workshop Categories (Filter Chips)
↓
CTA: Register for Events
```

### Stories Page Layout

```
Hero Section
↓
Featured Story (Full Width)
↓
Filter by Topic (Chips)
↓
Story Grid (Magazine Style)
↓
CTA: Share Your Story
```

### Resources Page Layout

```
Hero Section
↓
Search Bar (Prominent)
↓
Resource Categories (Tabs)
↓
Resource Cards (Grid)
↓
CTA: Can't Find What You Need?
```

---

## 17. **Quick Implementation Guide**

### Step 1: Create Shared Components (1-2 hours)

```bash
src/components/
  ├── EDICard.astro        # Universal card
  ├── SectionHeader.astro  # Section headers
  ├── CTAButton.astro      # Buttons
  └── Badge.astro          # Category badges
```

### Step 2: Update Global Styles (30 min)

```css
/* src/styles/global.css */
@layer base {
	/* Add EDI color variables */
	/* Add focus ring utilities */
	/* Add smooth scroll */
}
```

### Step 3: Apply Animations (1 hour)

- Add `data-aos` attributes to all sections
- Test animation timings
- Adjust delays for flow

### Step 4: Test Across Devices (1 hour)

- Mobile (iPhone/Android)
- Tablet (iPad)
- Desktop (various sizes)
- Dark mode on all

---

## 18. **Visual Consistency Checklist**

### Use This on Every Page:

- ✅ Same hero section style
- ✅ Consistent section spacing (mb-20 to mb-24)
- ✅ Same badge style for categories
- ✅ Uniform card design
- ✅ Consistent button styles
- ✅ Same hover effects
- ✅ Matching color gradients
- ✅ Identical typography scale

---

## 19. **EDI-Themed Visual Elements**

### Icons to Use Consistently

```
🎓 Education/Students
🔬 Research/Academic
🤝 Community/Support
🌍 International/Global
💬 Stories/Communication
📚 Resources/Learning
🎯 Goals/Achievement
✨ Success/Excellence
🌟 Featured/Important
💝 Care/Compassion
```

### Gradient Combinations (EDI Colors)

```css
/* Welcoming Gradient */
from-teal-500 via-violet-500 to-rose-500

/* Academic Gradient */
from-blue-600 via-indigo-600 to-purple-600

/* Community Gradient */
from-emerald-500 via-cyan-500 to-teal-500

/* Celebration Gradient */
from-rose-500 via-amber-500 to-yellow-500
```

---

## 20. **Next Steps**

### Priority Order:

1. ✅ **Animations** (AOS - DONE!)
2. 🔄 **Create shared components** (EDICard, SectionHeader)
3. 🔄 **Add content to empty collections**
4. 🔄 **Implement forms** on Participate page
5. 🔄 **Add testimonial carousel** with Swiper
6. 🔄 **Create data visualizations** for Reports page
7. 🔄 **Add search functionality** enhancement
8. 🔄 **Mobile optimization** review

---

## 💡 **Pro Tips**

1. **Consistency > Creativity:** Use the same pattern everywhere
2. **White Space:** Let content breathe (generous padding/margins)
3. **Visual Hierarchy:** Biggest = most important
4. **Color Meaning:** Use color consistently (teal = primary action)
5. **Animation Sparingly:** Don't overwhelm with too much motion
6. **Test with Real Content:** Design breaks with long/short content
7. **Accessibility First:** If it's not accessible, it's not done

---

## 📱 **Mobile-Specific Considerations**

- Larger tap targets (min 48x48px)
- Readable text without zooming
- Hamburger menu with clear states
- Horizontal scrolling for carousels
- Sticky header with show/hide on scroll
- Bottom navigation for key actions

---

This design system ensures **visual consistency, accessibility, and an inclusive user experience** across your entire EDI McGill website! 🎨
