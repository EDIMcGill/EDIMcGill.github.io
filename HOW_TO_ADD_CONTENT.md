# 🚀 How to Add Content - Auto-Tile System

This website uses an **automatic content system**. When you create a new `.md` or `.mdx` file with the correct category, it automatically appears as a tile on the appropriate page!

---

## 📋 Quick Guide

### 1. **About Page** (Team profiles, history, mission)

- **Location**: Create file in `src/content/blog/`
- **Required category**: `category: 'Home Page'`
- **Appears on**: `/about` page as a tile
- **Color**: 🔷 Teal badge

**Example:**

```md
---
title: 'Meet Our Director'
description: 'Learn about Dr. Smith and their vision for EDI at McGill'
pubDate: '2025-03-27'
heroImage: '../../assets/images/director.jpg'
category: 'Home Page'
tags: ['Team', 'Leadership']
---

Content goes here...
```

---

### 2. **Programs & Events Page** (Workshops, seminars, events)

- **Location**: Create file in `src/content/blog/`
- **Required category**: `category: 'Events & Workshops'`
- **Appears on**: `/programs` page as a tile
- **Color**: 🔵 Blue badge

**Example:**

```md
---
title: 'Spring Workshop: Inclusive Leadership'
description: 'Join us for an interactive workshop on building inclusive teams'
pubDate: '2025-04-15'
heroImage: '../../assets/images/workshop.jpg'
category: 'Events & Workshops'
tags: ['Workshop', 'Leadership', 'Spring 2025']
---

Content goes here...
```

---

### 3. **Resources Page** (Guides, toolkits, support materials)

- **Location**: Create file in `src/content/blog/`
- **Required category**: `category: 'Resources & Support'`
- **Appears on**: `/resources` page as a tile
- **Color**: 🟢 Green badge

**Example:**

```md
---
title: 'Mental Health Resources for Graduate Students'
description: 'A comprehensive guide to mental health support at McGill'
pubDate: '2025-03-20'
heroImage: '../../assets/images/mental-health.jpg'
category: 'Resources & Support'
tags: ['Mental Health', 'Support', 'Wellness']
---

Content goes here...
```

---

### 4. **Stories Page** (Personal narratives, blogs, interviews)

- **Location**: Create file in `src/content/blog/`
- **Required category**: `category: 'Blogs & Stories'`
- **Appears on**: `/stories` page as a tile
- **Color**: 🟣 Purple badge

**Example:**

```md
---
title: 'My Journey as an International Student'
description: 'How EDI initiatives helped me feel welcomed at McGill'
pubDate: '2025-03-25'
heroImage: '../../assets/images/student-story.jpg'
category: 'Blogs & Stories'
tags: ['Student Story', 'International', 'Community']
---

Content goes here...
```

---

## 📁 File Structure

```
src/
  content/
    blog/
      ├── Team EDI McGill.mdx        → Shows on /about (Home Page)
      ├── Our Team.mdx               → Shows on /about (Home Page)
      ├── Pizza Dinner 1.mdx         → Shows on /programs (Events & Workshops)
      ├── Resources_and_Support1.mdx → Shows on /resources (Resources & Support)
      └── your-new-file.md           → Add here with correct category!
  assets/
    images/
      └── your-hero-image.jpg        → Store images here
```

---

## ✅ Required Frontmatter Fields

Every content file **must include** these fields:

```yaml
---
title: 'Your Title Here' # Required: Max 80 characters
description: 'Brief summary' # Required: Summary for tile
pubDate: '2025-03-27' # Required: Publication date (YYYY-MM-DD)
heroImage: '../../assets/images/pic.jpg' # Required: Path to image
category: 'Events & Workshops' # Required: One of the 4 categories
tags: ['Tag1', 'Tag2', 'Tag3'] # Required: Array of tags
draft: false # Optional: Set true to hide
---
```

---

## 🎨 Color-Coded Categories

| Category              | Badge Color | Appears On   | Purpose                     |
| --------------------- | ----------- | ------------ | --------------------------- |
| `Home Page`           | 🔷 Teal     | `/about`     | Team profiles, history      |
| `Events & Workshops`  | 🔵 Blue     | `/programs`  | Events, workshops, seminars |
| `Resources & Support` | 🟢 Green    | `/resources` | Guides, toolkits, support   |
| `Blogs & Stories`     | 🟣 Purple   | `/stories`   | Personal narratives, blogs  |

---

## 🔄 How It Works Automatically

1. **Create** a `.md` or `.mdx` file in `src/content/blog/`
2. **Set** the correct `category` in the frontmatter
3. **Save** the file
4. **Refresh** the browser
5. ✨ **Your tile appears automatically** on the correct page!

No code changes needed. No manual linking required. The system reads the category and displays it in the right place.

---

## 💡 Tips

- **Images**: Store in `src/assets/images/` for optimization
- **Sorting**: Newer content (by `pubDate`) appears first
- **Drafts**: Set `draft: true` to hide content without deleting it
- **Tags**: Use consistent tags for better organization
- **Updates Feed**: All content also appears on `/updates` (home page preview)

---

## 🆘 Troubleshooting

**Q: My tile doesn't appear**

- ✅ Check category spelling (case-sensitive!)
- ✅ Ensure file is in `src/content/blog/`
- ✅ Verify `draft: false` (or field not present)
- ✅ Refresh browser (hard refresh: Ctrl+F5)

**Q: Image doesn't load**

- ✅ Check path: Should be `../../assets/images/filename.jpg`
- ✅ Verify image exists in `src/assets/images/`
- ✅ Check file extension matches (jpg vs jpeg, png, etc.)

---

**Need help?** Contact the EDI McGill web team or check the full documentation in the repository.
