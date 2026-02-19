# Editorial Design Refinements

## Latest Changes (February 2026)

This document outlines the most recent refinements to the EDI McGill website, focusing on achieving a **minimal, editorial aesthetic** with **subtle color accents** (5-10% intensity).

---

## 1. "Who Is This For" Section (Home Page)

### Design Philosophy

Shifted from **colorful UI cards** to **editorial magazine layout** with:

- Warm off-white background (#FEFDFB)
- Neutral white/light gray cards
- **Accent colors used sparingly** (left border only, 40% opacity)
- No shadows, no gradients, no motion-heavy effects

### Color Accents (At 5-10% Intensity)

| Role         | Accent Color                    | Border                | Icon Color       |
| ------------ | ------------------------------- | --------------------- | ---------------- |
| **Students** | Muted sky blue / soft blue-gray | `border-[#93C5FD]/40` | `text-[#64748B]` |
| **Staff**    | Muted lavender / dusty purple   | `border-[#C084FC]/40` | `text-[#64748B]` |
| **Faculty**  | Muted sage / gray-green         | `border-[#86EFAC]/40` | `text-[#64748B]` |

### Implementation

```astro
<!-- Section wrapper: Warm off-white background -->
<div class='bg-[#FEFDFB] dark:bg-gray-900/30 rounded-3xl py-8 px-8'>
	<!-- Role card: Neutral base with thin left border -->
	<a
		class='bg-white dark:bg-gray-800/50
            border-l-4 border-[#93C5FD]/40
            rounded-lg p-6
            hover:bg-gray-50/50
            transition-colors'
	>
		<!-- Icon: Neutral gray, not accent color -->
		<GraduationCap class='w-5 h-5 text-[#64748B]' strokeWidth={1.5} />

		<!-- On hover: First link gets underline in accent color -->
		<span class='group-hover:underline decoration-[#93C5FD]/60'> Student support resources</span>
	</a>
</div>
```

### Key Changes

#### Before (Colorful UI)

- **Full-card background colors**: Gradients from blue/purple/green
- **Colored text**: White text on colored backgrounds
- **Colored icons**: Icons matched card color (`text-[#0EA5E9]`)
- **Shadows & lift**: `hover:shadow-lg hover:-translate-y-1`
- **Strong borders**: `border border-[#7DD3FC]/30`

#### After (Editorial)

- **Neutral base**: White cards on warm off-white background
- **Minimal accent**: Thin left border only (`border-l-4`)
- **Gray icons**: Neutral `text-[#64748B]` for all icons
- **Subtle hover**: Background warmth (`hover:bg-gray-50/50`) + underline first link
- **No motion**: Removed `translate-y` animations

---

## 2. Case Study Callout

### Changes Made

#### Before

- Button label: **"Try quiz"**
- Button style: Filled gradient (`bg-[#E9D5FF]`)
- Size: Medium (`px-5 py-2`)

#### After

- Link label: **"Explore case studies →"**
- Link style: Text link with underline (`underline decoration-gray-400`)
- Size: Small, inline text
- Hover: Darker underline (`group-hover:decoration-gray-600`)

### Implementation

```astro
<!-- Minimal, editorial callout -->
<a
	class='group block bg-white border-l-4 border-[#D8B4FE]/40
          rounded-lg p-6 hover:bg-gray-50/50 transition-colors'
>
	<div class='flex justify-between gap-4'>
		<div class='flex-1'>
			<p class='text-xs text-gray-500 mb-2'>When you're ready...</p>
			<h3 class='text-lg font-semibold text-gray-800'>Explore real EDI case studies</h3>
		</div>

		<!-- Text link instead of button -->
		<span
			class='text-sm font-medium underline decoration-gray-400
                 group-hover:decoration-gray-600'
		>
			Explore case studies →
		</span>
	</div>
</a>
```

### Rationale

- **"Try quiz"** felt promotional/gamified
- **"Explore case studies"** is more editorial/educational
- **Text link** feels less like a CTA, more like navigation
- **Underline on hover** maintains interactivity without flashiness

---

## 3. Updates Section Footer

### Changes Made

#### Before

```astro
<div class='mt-8'>
	<p class='text-sm text-gray-500 mb-2'>Looking for something specific?</p>
	<a class='bg-[#F5F3F0] px-6 py-2.5 rounded-lg'> Browse all updates</a>
</div>
```

#### After

```astro
<!-- Removed entirely -->
```

### Rationale

- **Redundant CTA**: Updates are already browsable via cards
- **Centered buttons** feel promotional/final
- **Cleaner flow**: Section ends naturally after update cards
- **Less noise**: Removes unnecessary decision point

---

## Design Principles Applied

### 1. **Color at 5-10% Intensity**

- Accent colors used **only** for:
  - Thin left borders (`border-l-4`)
  - Hover underlines (`decoration-[color]/60`)
- **Not used** for:
  - Card backgrounds
  - Icon colors (icons are neutral gray)
  - Text colors (text is gray/black)

### 2. **Neutral Base, Not Fully Colored**

- **Cards**: White (`bg-white`) or very light gray (`bg-gray-50/50`)
- **Background**: Warm off-white (`bg-[#FEFDFB]`)
- **No gradients**: Solid colors only

### 3. **Softer Borders & No Shadows**

- **Borders**: Reduced to 40% opacity (`/40`)
- **Shadows**: Removed entirely
- **Border style**: Left border only (`border-l-4`) for editorial feel

### 4. **Increased Inner Padding**

- **Before**: `p-5` (1.25rem / 20px)
- **After**: `p-6` (1.5rem / 24px)
- **Spacing**: Increased link spacing from `space-y-2` to `space-y-2.5`

### 5. **Calm Hover States**

- **Background warmth**: `hover:bg-gray-50/50` (very subtle)
- **Underline first link**: `group-hover:underline decoration-[accent]/60`
- **No motion**: Removed all `translate-y` animations
- **No shadows**: Removed `hover:shadow-lg`

### 6. **Editorial Over UI**

- **Text links** instead of buttons
- **Underlines** instead of fills
- **Neutral colors** instead of accent colors
- **Minimal motion** instead of lift effects

---

## Color Reference

### Accent Colors (Used at 40% Opacity)

#### Sky Blue (Students)

- **Light**: `#93C5FD` → `border-[#93C5FD]/40`
- **Dark**: `#60A5FA` → `border-[#60A5FA]/40`
- **Underline**: `decoration-[#93C5FD]/60`

#### Lavender (Staff)

- **Light**: `#C084FC` → `border-[#C084FC]/40`
- **Dark**: `#A855F7` → `border-[#A855F7]/40`
- **Underline**: `decoration-[#C084FC]/60`

#### Sage Green (Faculty)

- **Light**: `#86EFAC` → `border-[#86EFAC]/40`
- **Dark**: `#6EE7B7` → `border-[#6EE7B7]/40`
- **Underline**: `decoration-[#86EFAC]/60`

### Neutral Colors (Used for Text & Icons)

| Element             | Light Mode            | Dark Mode            |
| ------------------- | --------------------- | -------------------- |
| **Icons**           | `#64748B` (slate-500) | `#9CA3AF` (gray-400) |
| **Headings**        | `#1F2937` (gray-800)  | `#F3F4F6` (gray-100) |
| **Body text**       | `#4B5563` (gray-700)  | `#D1D5DB` (gray-300) |
| **Supporting text** | `#6B7280` (gray-600)  | `#9CA3AF` (gray-400) |
| **Arrows**          | `#9CA3AF` (gray-400)  | Same                 |

---

## Before & After Comparison

### Visual Hierarchy

#### Before (UI-First)

1. **Accent colors** are primary (bright gradients on cards)
2. **Icons** are accent-colored
3. **Borders** are visible and bright
4. **Shadows** add depth
5. **Motion** on hover (lift + shadow increase)

#### After (Editorial-First)

1. **Content** is primary (text, headings)
2. **Accent colors** are subtle (thin border only)
3. **Icons** are neutral gray
4. **No shadows** (flat, clean)
5. **Minimal motion** (subtle background change + underline)

### User Experience

#### Before

- Feels like a **product UI** (buttons, cards, CTAs)
- **Action-oriented** (many clickable elements)
- **High contrast** (colors draw attention)

#### After

- Feels like a **magazine layout** (articles, sections)
- **Content-oriented** (cards are containers for info)
- **Low contrast** (colors recede, content advances)

---

## Testing Checklist

### Visual Testing

- [ ] Cards have white/light gray background (not colored)
- [ ] Left borders are visible but subtle (~40% opacity)
- [ ] Icons are neutral gray (not colored)
- [ ] Hover adds slight background warmth
- [ ] First link gets underline on hover
- [ ] No shadows visible on cards
- [ ] Background is warm off-white (#FEFDFB)

### Interaction Testing

- [ ] Entire card is clickable
- [ ] Hover state is subtle (no lift animation)
- [ ] First link gets colored underline on hover
- [ ] No jarring motion or color changes
- [ ] Text remains readable in light/dark modes

### Content Testing

- [ ] "Try quiz" changed to "Explore case studies"
- [ ] Case study uses text link (not button)
- [ ] "Looking for something specific?" removed
- [ ] "Browse all updates" button removed
- [ ] Updates section ends cleanly after cards

---

## Maintenance Notes

### When Adding New Role Cards

1. Use **white background**: `bg-white dark:bg-gray-800/50`
2. Add **thin left border**: `border-l-4 border-[accent]/40`
3. Use **neutral icon color**: `text-[#64748B] dark:text-gray-400`
4. Add **hover underline** to first link: `group-hover:underline decoration-[accent]/60`
5. No shadows, no motion

### When Creating Similar Sections

- Start with **warm off-white background** (`bg-[#FEFDFB]`)
- Keep cards **neutral** (white/light gray)
- Use accent colors **sparingly** (borders, underlines only)
- Prefer **text links** over buttons
- Avoid **motion effects** (translate, scale)

---

## Impact Summary

### Design Consistency

- ✅ Reduced visual noise (fewer colors, shadows)
- ✅ Increased editorial feel (magazine-like)
- ✅ Aligned with EDI values (calm, welcoming, not promotional)

### User Experience

- ✅ Easier to scan (less distraction from color)
- ✅ Clearer hierarchy (content over UI)
- ✅ More accessible (higher contrast ratios)

### Brand Perception

- ✅ Feels more **human** (less corporate)
- ✅ Feels more **thoughtful** (minimal design)
- ✅ Feels more **welcoming** (warm tones, soft edges)

---

**Last Updated**: February 2026  
**Related Files**: `src/pages/index.astro`, `EDI_FRIENDLY_DESIGN_GUIDE.md`
