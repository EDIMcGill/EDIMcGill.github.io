# 🌈 EDI McGill Website

> **Promoting Equity, Diversity, and Inclusion at McGill University, Faculty of Engineering**

This is the official website for EDI McGill, a graduate student-focused initiative fostering an inclusive community where diverse voices are heard, valued, and empowered to thrive.

**Live Site:** [https://edimcgill.github.io](https://edimcgill.github.io)

---

## 📋 Table of Contents

1. [About This Website](#-about-this-website)
2. [Site Structure](#-site-structure)
3. [How to Add Content](#-how-to-add-content)
4. [Auto-Content System](#-auto-content-system)
5. [Running Locally](#-running-locally)
6. [Tech Stack](#-tech-stack)
7. [Design System](#-design-system)
8. [Commands](#-commands)

---

## 🎯 About This Website

The EDI McGill website serves as a central hub for:

- **Stories & Experiences**: Personal narratives from the McGill community
- **Programs & Events**: Workshops, seminars, and learning opportunities
- **Resources & Support**: Mental health, academic support, and EDI toolkits
- **Reports & Research**: Annual reports, data, and strategic initiatives
- **Community Engagement**: Interactive elements, quizzes, and ways to participate

**Target Audience:** Graduate students, staff, and faculty at McGill University's Faculty of Engineering.

---

## 🗺️ Site Structure

The website has a **7-tab navigation structure**:

| Tab             | URL            | Purpose                                               | Content Source                                    |
| --------------- | -------------- | ----------------------------------------------------- | ------------------------------------------------- |
| **Home**        | `/`            | Landing page with hero, updates, and quick navigation | Mixed (all collections)                           |
| **About**       | `/about`       | Mission, approach, team profiles                      | Blog posts with `category: 'Home Page'`           |
| **Programs**    | `/programs`    | Events, workshops, seminars                           | Blog posts with `category: 'Events & Workshops'`  |
| **Stories**     | `/stories`     | Personal narratives, interviews                       | `stories` collection                              |
| **Resources**   | `/resources`   | Support materials, guides                             | Blog posts with `category: 'Resources & Support'` |
| **Reports**     | `/reports`     | Annual reports, research, data                        | `reports` collection                              |
| **Participate** | `/participate` | Engagement opportunities, quizzes                     | Static page + interactive elements                |

---

## 📝 How to Add Content

### **Quick Start - 3 Steps:**

1. **Create a new `.md` or `.mdx` file** in `src/content/blog/`
2. **Add required frontmatter** with the correct category
3. **Save the file** → Content automatically appears on the website!

### **Example - Adding a New Event:**

Create `src/content/blog/workshop-april-2025.md`:

```markdown
---
title: 'Spring Workshop: Inclusive Leadership'
description: 'Join us for an interactive workshop on building inclusive teams'
pubDate: '2025-04-15'
heroImage: '../../assets/images/workshop.jpg'
category: 'Events & Workshops'
tags: ['Workshop', 'Leadership', 'Spring 2025']
draft: false
---

## About This Workshop

Content goes here with full Markdown/MDX support...

### What You'll Learn

- Leadership principles
- Inclusive practices
- Team building strategies

[Register Now](#)
```

**Result:** This content will automatically:

- ✅ Appear on `/programs` page as a tile
- ✅ Show in "What's Happening Now" on the home page
- ✅ Get a blue "Programs" badge
- ✅ Be sorted by publication date

---

## 🔄 Auto-Content System

The website uses an **intelligent auto-routing system** that displays content on the correct pages based on the `category` field:

### **Category → Page Mapping:**

| Category in .md file    | Appears On   | Badge Color | Example Content                 |
| ----------------------- | ------------ | ----------- | ------------------------------- |
| `'Home Page'`           | `/about`     | 🔷 Teal     | Team profiles, history          |
| `'Events & Workshops'`  | `/programs`  | 🔵 Blue     | Workshops, seminars, events     |
| `'Resources & Support'` | `/resources` | 🟢 Green    | Guides, toolkits, support       |
| `'Blogs & Stories'`     | `/stories`   | 🟠 Amber    | Personal narratives, interviews |

### **Home Page Auto-Updates:**

The home page "What's Happening Now" section **automatically displays the 6 most recent items** from all categories, sorted by `pubDate`.

**Example:**

- You add a new workshop (category: `'Events & Workshops'`)
- It immediately appears on `/programs` page
- If it's one of the 6 most recent items, it also appears on the home page
- Gets color-coded with a blue "Programs" badge

**No code changes needed!**

---

## 📁 File Structure

```
src/
├── content/
│   ├── blog/                    ← ADD YOUR CONTENT HERE
│   │   ├── Team EDI McGill.mdx       (Shows on /about)
│   │   ├── Pizza Dinner 1.mdx        (Shows on /programs)
│   │   ├── Resources_and_Support1.mdx (Shows on /resources)
│   │   └── your-new-file.md          (Add here!)
│   ├── events/                  (Future: Dedicated events)
│   ├── stories/                 (Future: Dedicated stories)
│   ├── resources/               (Future: Dedicated resources)
│   ├── reports/                 (Future: Dedicated reports)
│   └── config.ts                (Content schema definitions)
├── assets/
│   └── images/                  ← STORE YOUR IMAGES HERE
│       ├── Diversity1.jpg       (Hero image)
│       ├── banner.jpg
│       └── your-image.jpg       (Add here!)
├── pages/
│   ├── index.astro              (Home page)
│   ├── about.astro              (About page)
│   ├── programs.astro           (Programs page)
│   ├── stories.astro            (Stories page)
│   ├── resources.astro          (Resources page)
│   ├── reports.astro            (Reports page)
│   └── participate.astro        (Participate page)
├── components/                  (Reusable UI components)
└── data/
    └── categories.ts            (Navigation & categories config)
```

---

## ✏️ Content Frontmatter Reference

### **Required Fields:**

```yaml
---
title: 'Your Title Here' # Max 80 characters
description: 'Brief summary for preview' # Short description
pubDate: '2025-03-27' # Publication date (YYYY-MM-DD)
heroImage: '../../assets/images/pic.jpg' # Path to image
category: 'Events & Workshops' # See categories below
tags: ['Tag1', 'Tag2', 'Tag3'] # Array of tags
---
```

### **Optional Fields:**

```yaml
draft: false # Set to true to hide content (default: false)
pinned: false # Feature this content (future use)
featured: false # Highlight this content (future use)
```

### **Valid Categories:**

1. `'Home Page'` → About page
2. `'Events & Workshops'` → Programs page
3. `'Resources & Support'` → Resources page
4. `'Blogs & Stories'` → Stories page

> ⚠️ **Important:** Category names are case-sensitive! Make sure to match exactly.

---

## 🖼️ Adding Images

### **Step 1: Add Image to Assets**

Place your image in `src/assets/images/`:

```
src/assets/images/your-image.jpg
```

### **Step 2: Reference in Frontmatter**

Use a relative path from the content file:

```yaml
heroImage: '../../assets/images/your-image.jpg'
```

### **Supported Formats:**

- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.svg`

> 💡 **Tip:** Astro automatically optimizes images for fast loading!

---

## 💻 Running Locally

### **Prerequisites:**

- Node.js 18+
- pnpm (recommended) or npm

### **Installation:**

1. **Clone the repository:**

```bash
git clone https://github.com/EDIMcGill/EDIMcGill.github.io.git
cd EDIMcGill.github.io
```

2. **Install dependencies:**

```bash
npm install
# or
pnpm install
```

3. **Start development server:**

```bash
npm run dev
# or
pnpm dev
```

4. **Open browser:**
   Visit `http://localhost:4321/`

### **Building for Production:**

```bash
npm run build
npm run preview
```

---

## 🛠️ Tech Stack

| Technology       | Purpose                           |
| ---------------- | --------------------------------- |
| **Astro 4.x**    | Static site generator             |
| **TypeScript**   | Type safety                       |
| **Tailwind CSS** | Utility-first styling             |
| **Lucide Icons** | Modern outline icons              |
| **AOS**          | Scroll animations                 |
| **MDX**          | Enhanced Markdown with components |
| **GitHub Pages** | Hosting & deployment              |

### **Why Astro?**

- ⚡ **Fast**: Static generation for incredible performance
- 🎨 **Flexible**: Mix Markdown, React, Vue, or plain HTML
- 📦 **Zero JS by default**: Ships minimal JavaScript
- 🔍 **SEO-friendly**: Perfect for content-heavy sites

---

## 🎨 Design System

The website follows a comprehensive design system documented in `EDI_DESIGN_SYSTEM.md`.

### **Color Palette:**

```css
/* Primary Colors */
Blue:    #3B82F6  (Trust, academic)
Purple:  #A855F7  (Inclusion, diversity)
Teal:    #14B8A6  (Community, growth)
Green:   #10B981  (Resources, support)

/* Content Type Colors */
Programs:  Blue (#3B82F6)   - Trustworthy, academic
Stories:   Amber (#F59E0B)  - Warm, personal
Resources: Cyan (#06B6D4)   - Calming, supportive
Reports:   Slate (#64748B)  - Neutral, formal
About:     Teal (#14B8A6)   - Community, identity
```

### **Typography:**

- **Headings**: Bold, tight line-height
- **Body**: Relaxed line-height (1.75)
- **Sizes**: Responsive with Tailwind classes

### **Components:**

- `SectionHeader.astro` - Consistent section headers
- `CTAButton.astro` - Reusable button styles
- `EDICard.astro` - Universal card component
- `ContentCard.astro` - Dynamic content tiles
- `FilterChips.astro` - Category filtering

---

## 🚀 Commands

| Command           | Action                               |
| ----------------- | ------------------------------------ |
| `npm install`     | Install dependencies                 |
| `npm run dev`     | Start dev server at `localhost:4321` |
| `npm run build`   | Build production site to `./dist/`   |
| `npm run preview` | Preview production build locally     |
| `npm run format`  | Format code with Prettier            |
| `npm run lint`    | Lint with ESLint                     |

---

## 📊 Content Management Workflow

### **For Content Creators (Non-Technical):**

1. **Choose where your content should appear:**
   - Team info? → Use `category: 'Home Page'`
   - Event/Workshop? → Use `category: 'Events & Workshops'`
   - Resource guide? → Use `category: 'Resources & Support'`
   - Personal story? → Use `category: 'Blogs & Stories'`

2. **Create a new `.md` file:**
   - Name it descriptively (e.g., `spring-workshop-2025.md`)
   - Place it in `src/content/blog/`

3. **Copy this template:**

```markdown
---
title: 'Your Title'
description: 'Brief summary'
pubDate: '2025-03-27'
heroImage: '../../assets/images/your-image.jpg'
category: 'Events & Workshops'
tags: ['Tag1', 'Tag2']
---

Your content here with full Markdown support!
```

4. **Save and push to GitHub:**

```bash
git add .
git commit -m "Add new content: [your title]"
git push origin main
```

5. **Done!** GitHub Pages will rebuild automatically (takes ~2-3 minutes)

---

## 🔍 Troubleshooting

### **Content doesn't appear:**

- ✅ Check category spelling (case-sensitive!)
- ✅ Ensure `draft: false` (or field not present)
- ✅ Verify file is in `src/content/blog/`
- ✅ Hard refresh browser (Ctrl+F5)

### **Image doesn't load:**

- ✅ Check path: `../../assets/images/filename.jpg`
- ✅ Verify image exists in `src/assets/images/`
- ✅ Check file extension matches exactly

### **Build errors:**

- ✅ Run `npm run build` to see detailed errors
- ✅ Check frontmatter syntax (YAML format)
- ✅ Ensure all required fields are present

---

## 🎨 Design Philosophy

The EDI McGill website is built with these principles:

1. **Inclusive Design**
   - Warm, welcoming color palette
   - Clear hierarchy and navigation
   - Low-barrier entry points

2. **Accessibility First**
   - WCAG AA compliant
   - Keyboard navigation
   - Screen reader friendly
   - High contrast ratios

3. **User-Centric**
   - Content organized by audience (Students, Staff, Faculty)
   - Multiple entry points
   - Clear calls-to-action
   - "You can explore more than one" mindset

4. **Professional & Modern**
   - Clean, consistent design
   - Subtle animations (AOS)
   - Professional icon system (Lucide)
   - Dark mode support

---

## 🤝 Contributing

### **Adding New Content:**

Follow the [How to Add Content](#-how-to-add-content) section above.

### **Reporting Issues:**

Open an issue on [GitHub Issues](https://github.com/EDIMcGill/EDIMcGill.github.io/issues)

### **Design Suggestions:**

Refer to `EDI_DESIGN_SYSTEM.md` for design guidelines and component patterns.

---

## 📚 Additional Documentation

- **`HOW_TO_ADD_CONTENT.md`**: Detailed content creation guide
- **`EDI_DESIGN_SYSTEM.md`**: Comprehensive design system documentation
- **`ICON_IMPROVEMENTS.md`**: Icon library guide (Lucide Icons)
- **`DESIGN_IMPROVEMENTS_SUMMARY.md`**: Recent design changes log

---

## 🌐 Deployment

The site is automatically deployed to **GitHub Pages** when you push to the `main` branch.

### **Deployment Process:**

1. Push changes to `main` branch
2. GitHub Actions builds the site
3. Deploys to `https://edimcgill.github.io`
4. Live in ~2-3 minutes

### **Check Deployment Status:**

Visit: [GitHub Actions](https://github.com/EDIMcGill/EDIMcGill.github.io/actions)

---

## 🎓 For Developers

### **Project Structure:**

```
├── src/
│   ├── content/          # Markdown content files
│   ├── pages/            # Astro pages (routes)
│   ├── components/       # Reusable UI components
│   ├── layouts/          # Page layouts
│   ├── styles/           # Global CSS
│   ├── data/             # Site configuration & categories
│   └── utils/            # Helper functions
├── public/               # Static assets
└── dist/                 # Build output (generated)
```

### **Key Files to Know:**

- `src/data/categories.ts`: Navigation structure & category definitions
- `src/content/config.ts`: Content schema (Zod validation)
- `src/layouts/BaseLayout.astro`: Main page template
- `src/components/Header.astro`: Navigation bar
- `src/utils/post.ts`: Content fetching utilities

### **Development Tips:**

- Use `pnpm dev` for faster performance than npm
- TypeScript types are auto-generated: `npm run sync`
- Tailwind IntelliSense extension recommended
- Check linter errors: `npm run lint`

---

## 📐 Content Schema

### **Blog Collection:**

```typescript
{
  title: string (max 80 chars)
  description: string
  pubDate: Date
  heroImage: Image
  category: 'Home Page' | 'Events & Workshops' | 'Resources & Support' | 'Blogs & Stories'
  tags: string[]
  draft?: boolean (default: false)
  pinned?: boolean (default: false)
  featured?: boolean (default: false)
}
```

### **Future Collections:**

- `events/`: Dedicated events with `eventDate` and `location`
- `stories/`: Dedicated stories with `author` and `authorRole`
- `resources/`: Dedicated resources with `resourceType` and `externalLink`
- `reports/`: Dedicated reports with `reportYear` and `pdfLink`

---

## 🎨 Design Features

- ✅ **Full-width hero** with semi-transparent text panel
- ✅ **Sticky navigation** with subtle purple inner glow
- ✅ **Emotional color coding** (warm for stories, cool for resources)
- ✅ **Professional icon system** (Lucide outline icons)
- ✅ **Smooth scroll animations** (AOS library)
- ✅ **Interactive elements** (quizzes, case studies)
- ✅ **Auto-content tiles** on each page
- ✅ **Dark mode** throughout

---

## 🔐 Security & Best Practices

- ✅ `.gitignore` excludes `node_modules`, `.pnpm-store`, build artifacts
- ✅ No sensitive data in repository
- ✅ Images optimized automatically by Astro
- ✅ Static site (no backend, no database)
- ✅ HTTPS enforced via GitHub Pages

---

## 📞 Contact & Support

**Questions about content?**

- Review `HOW_TO_ADD_CONTENT.md`
- Check this README's [How to Add Content](#-how-to-add-content) section

**Technical issues?**

- Open a [GitHub Issue](https://github.com/EDIMcGill/EDIMcGill.github.io/issues)
- Contact the EDI McGill web team

**Want to contribute?**

- Visit `/participate` on the website
- Share your story or join a committee

---

## 📄 License

© 2025 EDI McGill, McGill University. All rights reserved.

---

## 🌟 Quick Reference Card

### **I want to add...**

| Content Type  | Category to Use         | Appears On   | Badge Color |
| ------------- | ----------------------- | ------------ | ----------- |
| Team profile  | `'Home Page'`           | `/about`     | 🔷 Teal     |
| Workshop      | `'Events & Workshops'`  | `/programs`  | 🔵 Blue     |
| Support guide | `'Resources & Support'` | `/resources` | 🟢 Green    |
| Student story | `'Blogs & Stories'`     | `/stories`   | 🟠 Amber    |

### **File location:** `src/content/blog/your-file.md`

### **Image location:** `src/assets/images/your-image.jpg`

### **Test locally:** `npm run dev` → `http://localhost:4321`

### **Deploy:** Push to `main` branch → Auto-deploys to GitHub Pages

---

**Built with ❤️ by EDI McGill for an inclusive engineering community**
