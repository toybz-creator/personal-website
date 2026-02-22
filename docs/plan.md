

# Toyeeb Abdulrahmon — Senior Lead Backend Engineer Portfolio

## Design System
- **Theme**: Pure black and white grayscale with transparent card backgrounds and sharp geometric edges
- **Typography**: Clean sans-serif (Space Grotesk for headings, Inter for body)
- **Animations**: Liquid/gelly transitions on section reveals, hover states, and page elements — smooth, fluid motion throughout
- **Mouse Effect**: Bold liquid metaball trail that follows the cursor with visible trails, with a toggle button to disable it
- **Cards/Containers**: Transparent backgrounds with crisp, sharp borders — no rounded corners, glass-like feel

## Pages & Sections (Single Long Scroll)

### 1. Hero / Homepage Narrative
- Bold name "Toyeeb Abdulrahmon" with animated liquid text reveal
- Title: "Senior Lead Backend Engineer · 10 Years"
- Short credibility tagline (e.g., systems at scale, distributed architectures)
- Primary CTA: "Get in Touch" (email link) — always visible/sticky
- Social links row (GitHub, LinkedIn, Twitter/X, etc.)

### 2. About / Experience
- Brief narrative paragraph about your engineering philosophy
- 5 company cards (placeholder data) in a timeline or stacked layout showing role, company, duration, and key achievements
- Designed so a recruiter can scan credibility in under 2 minutes

### 3. Projects Section (5 projects at launch)
- Grid/list of project cards with title, tech stack tags, short description
- Each card links to a detail view (separate route) with full write-up, architecture notes, and links
- Filterable by tech/category

### 4. Blog Section (3+ posts at launch)
- Markdown files stored in the project (e.g., `src/content/blog/`)
- Blog list with title, date, reading time, excerpt
- Detail page renders markdown content with syntax highlighting
- Placeholder posts included at launch

### 5. Gallery
- Image grid with captions and notes
- Lightbox view on click
- Placeholder images at launch

### 6. Interests
- Visual section showcasing personal interests (tech, hobbies, etc.)
- Icon/card based layout

### 7. Footer / Contact
- Email CTA button (mailto link — tracks as recruiter conversion proxy)
- Social links repeated
- Minimal footer with copyright

## Key Features
- **Mobile responsive**: All sections adapt cleanly to mobile with touch-friendly navigation
- **Accessibility**: Semantic HTML, keyboard navigation, proper contrast ratios (easy with grayscale), ARIA labels
- **SEO**: Meta tags, Open Graph tags, structured page titles, semantic headings
- **Performance**: Lazy loading images, minimal bundle, fast initial load
- **Liquid cursor toggle**: Floating button to enable/disable the bold liquid trail effect
- **Smooth scroll navigation**: Fixed top nav with section links, smooth scroll behavior

## No Backend Needed
- All content (blog posts, projects, gallery) stored as static data/markdown within the project
- Email CTA uses mailto links
- No authentication or database required

