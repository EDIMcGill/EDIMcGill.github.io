# EDI-Friendly Design System

## Overview

This document outlines the comprehensive EDI-friendly design approach implemented across the EDI McGill website. The design prioritizes warmth, humanity, accessibility, and emotional connection over corporate polish or promotional aesthetics.

---

## Core Design Principles

### 1. **Color as Emotion, Not Branding**

#### Warm, Muted, Human Tones

- **Sky Blue** (#DBEAFE, #7DD3FC): Calm, trustworthy (Programs)
- **Warm Peach** (#FED7AA, #FFEDD5): Personal, welcoming (Stories)
- **Sage Green** (#D1FAE5, #86EFAC): Calming, supportive (Resources)
- **Soft Lavender** (#F3E8FF, #DDD6FE): Community, creativity (Updates)
- **Warm Gray** (#E2E8F0, #CBD5E1): Neutral, formal (Reports)

#### Avoid

- Pure neon colors
- High-saturation gradients for core content
- Aggressive brand colors

#### Implementation

```css
/* Example: Warm support section background */
bg-[#FFF8F0] /* Soft peach/cream tint */
text-gray-800 /* Readable, not pure black */
```

---

### 2. **Soft Framing Over Hard Edges**

#### Preferred Patterns

- **Background bands** instead of card borders
- **Subtle shadows** instead of heavy borders
- **Gradient backgrounds** with low saturation (from-[#F0F9FF] to-[#FAF5FF])
- **Rounded corners** (rounded-xl, rounded-2xl) for all containers

#### Avoid

- Sharp, hard borders (border-2 in bright colors)
- High-contrast dividing lines
- Strict grid alignment with visible gaps

#### Example

```astro
<!-- Soft background band instead of bordered card -->
<div
	class='bg-gradient-to-br from-[#F0F9FF] via-white/80 to-[#FAF5FF]
            border border-gray-200/50 rounded-2xl shadow-lg'
>
	<!-- Content -->
</div>
```

---

### 3. **Typography: Humanist & Generous**

#### Font Weights

- **Headings**: `font-semibold` (600) instead of `font-bold` (700)
- **Body text**: `font-normal` (400) or `font-medium` (500)
- **Avoid**: Excessive bolding, ALL CAPS (except for small labels)

#### Line Height

- **Body paragraphs**: `line-height: 1.8` (or `leading-loose` in Tailwind)
- **Headings**: `line-height: 1.3` (or `leading-snug`)
- **Small text**: `leading-relaxed` for readability

#### Letter Spacing

- **Body**: `letter-spacing: 0.01em` (slight increase for warmth)
- **Headings**: `letter-spacing: -0.01em` (slight negative for large text)

#### Implementation

```css
/* Global styles in global.css */
body {
	line-height: 1.75;
	font-weight: 400;
	letter-spacing: 0.01em;
}

h1,
h2,
h3 {
	font-weight: 600;
	line-height: 1.3;
	letter-spacing: -0.01em;
}

p {
	line-height: 1.8;
}
```

---

### 4. **Conversational Language**

#### Before & After Examples

| Before (Directive)                | After (Conversational)                        |
| --------------------------------- | --------------------------------------------- |
| "Get Involved"                    | "Get involved"                                |
| "View All Updates →"              | "Browse all updates"                          |
| "Need Support or Accommodations?" | "You don't have to navigate this alone"       |
| "Find Your Path"                  | "You might want to explore..."                |
| "What's Happening Now"            | "Recent updates — see what's relevant to you" |

#### Guidelines

- Use lowercase for buttons and CTAs (except first word)
- Use contractions ("We're" instead of "We are")
- Use "you" language (second person)
- Add reassurance ("You can explore more than one.")
- Use "when you're ready..." for optional actions

---

### 5. **Icons: Subtle & Supportive**

#### Size & Style

- **Smaller than text**: `w-5 h-5` for most icons
- **Outline style**: `strokeWidth={1.5}` (Lucide icons)
- **Color**: Same as text color (`text-gray-600`), not accent colors by default
- **Placement**: Next to text, not dominant

#### Avoid

- Large, colorful icons as focal points
- Solid/filled icons (except in specific contexts like role cards)
- Icons as decorative elements

#### Example

```astro
<!-- Subtle icon next to heading -->
<HandHeart
	class='w-5 h-5 text-gray-600 dark:text-gray-400
                  flex-shrink-0 mt-1'
	strokeWidth={1.5}
/>
```

---

### 6. **Buttons: Balanced Hierarchy**

#### Primary (Soft)

- **Color**: Muted, warm tones (e.g., `bg-[#BAE6FD]` sky blue, `bg-[#E8D5C4]` warm tan)
- **Size**: `px-6 py-2.5` (not too large)
- **Weight**: `font-medium` or `font-semibold` (not bold)
- **Text**: Lowercase except first letter

```astro
<a
	class='bg-[#BAE6FD] dark:bg-[#1E40AF] text-gray-800
          px-6 py-2.5 rounded-lg font-medium text-sm
          hover:bg-[#7DD3FC] transition-all'
>
	Get support
</a>
```

#### Secondary (Very Subtle)

- **Style**: Text link with underline
- **Color**: Neutral gray, not accent
- **Weight**: `font-medium`

```astro
<a
	class='text-gray-600 hover:text-gray-800 text-sm font-medium
          underline decoration-gray-400 hover:decoration-gray-600'
>
	Browse resources
</a>
```

#### Avoid

- Bright, saturated gradients (`from-blue-600 to-purple-600`)
- High contrast borders (`border-2 border-blue-600`)
- Large padding (`px-8 py-4`)
- `hover:scale-105` (too flashy)

---

### 7. **Layout: Breathe Unevenly**

#### Reduce Grid Rigidity

- Allow headings and content to "float" more naturally
- Use varying gap sizes (`gap-3`, `gap-6`) instead of uniform grids
- Align content left when appropriate (not always centered)

#### Section Spacing

- Use `mb-6` for most sections (not `mb-12` or `mb-16`)
- Add top padding to sections with background bands (`py-6 md:py-8`)

#### Example

```astro
<!-- Left-aligned, uneven layout -->
<div class='text-left max-w-2xl'>
	<h2 class='text-xl font-semibold mb-3'>Have questions?</h2>
	<p class='text-sm leading-loose mb-6'>We'd love to hear from you.</p>
	<div class='flex gap-3'>
		<!-- Buttons -->
	</div>
</div>
```

---

### 8. **Illustrations as Texture, Not Heroes**

#### Techniques

- **Partial crops**: Show only part of an illustration
- **Faded backgrounds**: Low opacity overlays
- **Corner peeks**: Illustrations peeking from edges
- **Repeated motifs**: Subtle patterns at low opacity

#### Hero Image Treatment

- **Opacity**: 15% (very subtle)
- **Overlay**: Soft gradient (`from-blue-900/20 via-purple-900/15`)
- **Role**: Background texture, not foreground

```astro
<Image src={bannerImage} class='w-full h-full object-cover opacity-15' />
<div
	class='absolute inset-0 bg-gradient-to-r
            from-blue-900/20 via-purple-900/15'
>
</div>
```

---

### 9. **Accessibility Built In**

#### Focus States

- **Visible ring**: `ring-2 ring-teal-500 ring-offset-2`
- **Color**: Teal for consistency
- **Offset**: 2px for clarity

```css
button:focus-visible,
a:focus-visible {
	@apply ring-2 ring-teal-500 ring-offset-2 
         dark:ring-teal-400 dark:ring-offset-gray-900;
}
```

#### Contrast

- All text meets WCAG AA standards (4.5:1 for body, 3:1 for large text)
- Test with dark mode enabled

#### Keyboard Navigation

- All interactive elements are keyboard-accessible
- Skip-to-content link for screen readers

---

## Component-Specific Guidelines

### Home Page Hero

**Purpose**: Orientation, not promotion

```astro
<!-- Warm, editorial hero -->
<h1 class='text-xl md:text-2xl font-semibold leading-snug'>
	Stories, resources, and conversations for equity...
</h1>
<p class='text-xs leading-loose'>We're building an inclusive graduate community...</p>
<div class='flex gap-3'>
	<a class='bg-[#BAE6FD] px-5 py-2.5 rounded-lg'>Learn more</a>
	<a class='text-gray-700 underline'>Get involved</a>
</div>
```

### Update Cards

**Purpose**: Content discovery with emotional color coding

```astro
<!-- Warm peach for Stories -->
<div
	class='bg-gradient-to-br from-[#FFF7ED]/50 via-white/80
            to-[#FFEDD5]/40 border border-gray-200/60
            rounded-xl hover:shadow-lg'
>
	<span
		class='bg-[#FED7AA]/80 text-[#C2410C]
               px-3 py-1 rounded-lg text-xs font-medium'
	>
		Stories
	</span>
	<!-- Content -->
</div>
```

### Role Cards (Students, Staff, Faculty)

**Purpose**: Friendly navigation paths

```astro
<!-- Soft sky blue for Students -->
<a
	class='bg-gradient-to-br from-[#E0F2FE] to-[#BAE6FD]
          border border-[#7DD3FC]/30 rounded-xl p-5
          hover:shadow-lg hover:-translate-y-1'
>
	<GraduationCap class='w-5 h-5 text-[#0EA5E9]/70' strokeWidth={1.5} />
	<h3 class='text-lg font-semibold'>Students</h3>
	<p class='text-xs leading-loose'>Resources and community for your journey</p>
</a>
```

### Support Section

**Purpose**: Reassurance, not promotion

```astro
<div
	class='bg-[#FFF8F0] dark:bg-[#2B2520] rounded-2xl p-8
            border border-[#F5E6D3]/50'
>
	<div class='flex items-start gap-3'>
		<HandHeart class='w-5 h-5 text-gray-600 mt-1' strokeWidth={1.5} />
		<div>
			<h3 class='text-xl font-semibold leading-snug'>You don't have to navigate this alone</h3>
			<p class='text-base leading-relaxed'>Support and accommodations are available.</p>
		</div>
	</div>
	<div class='flex gap-3 mt-4'>
		<a class='bg-[#E8D5C4] px-6 py-2.5 rounded-lg'>Get support</a>
		<a class='text-gray-600 underline'>Browse resources</a>
	</div>
</div>
```

---

## Color Palette Reference

### Light Mode

- **Sky Blue**: #F0F9FF → #E0F2FE → #BAE6FD → #7DD3FC → #0EA5E9
- **Warm Peach**: #FFF7ED → #FFEDD5 → #FED7AA → #C2410C
- **Sage Green**: #F0FDF4 → #DCFCE7 → #D1FAE5 → #86EFAC → #16A34A
- **Soft Lavender**: #FAF5FF → #F3E8FF → #E9D5FF → #DDD6FE → #A78BFA
- **Warm Tan**: #FFF8F0 → #F5E6D3 → #E8D5C4

### Dark Mode

- **Sky Blue**: #1E3A8A → #1E40AF → #3B82F6 → #60A5FA → #93C5FD
- **Warm Peach**: #7C2D12 → #9A3412 → #FED7AA
- **Sage Green**: #064E3B → #065F46 → #059669 → #A7F3D0
- **Soft Lavender**: #5B21B6 → #6D28D9 → #7C3AED → #C084FC
- **Warm Brown**: #2B2520 → #3D3530 → #4A3F35

---

## Implementation Checklist

### Typography

- [x] Set `line-height: 1.75` for body text
- [x] Use `font-semibold` (600) for headings instead of bold
- [x] Add `letter-spacing: 0.01em` for body text
- [x] Use lowercase for CTAs (except first letter)

### Colors

- [x] Replace bright gradients with muted tones
- [x] Use emotional color coding for content types
- [x] Implement warm background bands
- [x] Reduce saturation across all components

### Layout

- [x] Replace hard borders with soft shadows
- [x] Use background bands instead of card borders
- [x] Reduce section gaps to `mb-6`
- [x] Left-align CTAs where appropriate

### Language

- [x] Change "Get Involved" → "Get involved"
- [x] Add conversational reassurance ("You don't have to...")
- [x] Use "you" language throughout
- [x] Remove aggressive arrows (→) from secondary CTAs

### Icons

- [x] Reduce icon size to `w-5 h-5`
- [x] Use outline style with `strokeWidth={1.5}`
- [x] Match icon color to text color
- [x] Remove decorative/floating icons

### Buttons

- [x] Use muted colors for primary CTAs
- [x] Make secondary CTAs text links with underline
- [x] Reduce padding to `px-6 py-2.5`
- [x] Remove `hover:scale-105` effects

---

## Testing & Validation

### Visual Testing

1. View site in light mode and dark mode
2. Check color contrast with tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
3. Verify that no text is pure black (#000) or pure white (#FFF)
4. Ensure all buttons have sufficient padding and are easily clickable

### Accessibility Testing

1. Tab through all interactive elements
2. Test with screen reader (NVDA, JAWS, VoiceOver)
3. Verify focus states are visible
4. Check that all images have alt text

### Emotional Testing

1. Does the page feel warm and welcoming?
2. Is the language conversational and reassuring?
3. Do the colors evoke the intended emotions?
4. Does the design feel "lived-in" rather than corporate?

---

## Maintenance

### When Adding New Content

- Use the established color palette
- Follow the typography guidelines (font weights, line heights)
- Keep language conversational and reassuring
- Prioritize accessibility (alt text, focus states, contrast)

### When Creating New Components

1. Start with a soft background band (gradient)
2. Use outline icons, not filled
3. Keep button text lowercase (except first letter)
4. Test in both light and dark modes
5. Verify WCAG AA contrast ratios

---

## Resources

- **Color Palette Tool**: [Coolors.co](https://coolors.co/)
- **Contrast Checker**: [WebAIM](https://webaim.org/resources/contrastchecker/)
- **Icon Library**: [Lucide Icons](https://lucide.dev/)
- **Typography Scale**: [Type Scale](https://typescale.com/)
- **Accessibility Guidelines**: [WCAG 2.1](https://www.w3.org/WAI/WCAG21/quickref/)

---

## Contact

For questions about this design system, please reach out to the EDI McGill team or refer to the project README.

**Last Updated**: February 2026
