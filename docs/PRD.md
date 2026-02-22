# PRD: Personal Website (Hiring-Focused Personal Brand)

## 1. Product Overview

### Vision
Build a personal website that presents a Senior Backend Engineer profile with strong microservices, scale, and cloud credibility, while maintaining a calm and approachable personal brand.

### Problem Statement
Current professional profiles (resume/LinkedIn alone) do not fully demonstrate architecture depth, engineering leadership context, and personal style in a structured, high-signal format for hiring decisions.

### Success Outcome
Visitors can evaluate technical credibility and reach out within two minutes, with clear proof of backend impact through projects and blog content.

## 2. Goals and KPIs

### Business Goals
- Increase hiring visibility and recruiter confidence.
- Convert profile visits into direct professional outreach.
- Establish an owned technical content channel.

### KPIs (Initial 60-Day Targets After MVP1 Launch)
- Recruiter conversion proxy: at least 8% of unique sessions trigger the email CTA (`mailto` click).
- Content depth at launch: at least 3 published blog posts and 5 project entries.
- Mobile usability: 100% core pages usable at 360px width without horizontal scrolling.
- Performance baseline:
  - Largest Contentful Paint (LCP) <= 2.5s on mobile.
  - Cumulative Layout Shift (CLS) <= 0.1.
  - Interaction to Next Paint (INP) <= 200ms on key routes.

## 3. Personas and Core User Journeys

### Persona A: Recruiter
- Needs quick signal of seniority, stack, and communication clarity.
- Journey:
  1. Lands on Home.
  2. Scans headline, impact highlights, and stack summary.
  3. Opens one project and one blog post.
  4. Uses email CTA.

### Persona B: Hiring Manager
- Needs confidence in architecture decision-making and delivery ownership.
- Journey:
  1. Starts on Projects.
  2. Reviews architecture + impact metrics.
  3. Confirms cloud and leadership signals.
  4. Proceeds to contact channel.

### Persona C: Senior Engineer / Tech Lead
- Needs practical technical depth and thought process.
- Journey:
  1. Reads architecture-focused blog content.
  2. Cross-checks project details and tradeoffs.
  3. Follows professional links for deeper context.

## 4. Functional Requirements

### Home Module
- Clear positioning statement with backend/cloud specialization.
- Credibility highlights: years of experience, key strengths, selected outcomes.
- Email-first CTA and social links.

### Projects Module
- Projects list view with summaries.
- Project detail view with:
  - problem statement,
  - architecture approach,
  - technology stack,
  - measurable impact.

### Blog Module
- Blog list generated from markdown metadata.
- Blog detail page generated from markdown content.
- Unknown slug route resolves to a friendly 404 page.

### Gallery Module
- Centralized photo gallery with captions/notes.
- Supports placeholder and AI-generated assets in MVP1.
- Maintains grayscale-compatible presentation.

### Interests Module
- Curated topics and personal interests that reinforce brand personality.

### Contact and Social Module
- Primary CTA is email-only in MVP1.
- Social links include professional channels (e.g., LinkedIn, GitHub, X if used).

## 5. Non-Functional Requirements
- Mobile-first responsive behavior across all core pages.
- Accessibility baseline:
  - semantic headings,
  - keyboard-navigable links/buttons,
  - alt text for non-decorative images.
- SEO baseline:
  - per-page titles and descriptions,
  - canonical URLs,
  - Open Graph metadata.
- Reliability and performance baseline aligned with KPI targets.

## 6. MVP Scope Partition (3 Phases)

## MVP1: Foundation Launch
### In Scope
- Home, Projects, Blog, Gallery, Interests, Contact/Social routes.
- Markdown-based content pipeline.
- Email CTA and social links.
- Backend skeleton deployment with `GET /health`.
- Launch content target: 3+ blog posts and 5 projects.

### Out of Scope
- Public read APIs for content.
- CMS/admin editor.
- Authenticated areas.
- Advanced analytics dashboards.

## MVP2: Credibility Depth
### In Scope
- Deeper project case studies (architecture diagrams/tradeoffs).
- Additional architecture-focused blog content.
- Gallery quality upgrades and improved caption context.
- Optional enablement of read-only APIs for content delivery.

### Out of Scope
- Paid productization features.
- Authenticated collaboration workflows.

## MVP3: Scale and Optimization
### In Scope
- Performance tuning and SEO hardening.
- Expanded observability and reliability controls.
- Content operations improvements for sustained publishing cadence.

### Out of Scope
- Platform pivot away from selected stack unless blocked by constraints.

## 7. Risks and Mitigations

### Risk: Media Readiness
- Description: final personal images may not be ready at launch.
- Mitigation: use curated placeholders/AI assets with planned replacement backlog.

### Risk: Content Bottleneck
- Description: high-quality blog/project narratives can delay launch.
- Mitigation: enforce launch minimum (3 blogs/5 projects), then publish iteratively.

### Risk: Backend Hosting Compatibility
- Description: Firebase App Hosting constraints could limit NestJS deployment behavior.
- Mitigation: preserve explicit fallback path to Cloud Run and validate early in MVP1.

## 8. Acceptance Criteria and Release Gates

## MVP1 Release Gate
- All core pages accessible and responsive.
- At least 3 blog posts and 5 projects published.
- Email CTA verified.
- `GET /health` returns successful response in deployed backend.
- Smoke test passes for frontend and backend URLs.

## MVP2 Release Gate
- Case study depth added to top projects.
- Additional architecture content published.
- Gallery quality improvements deployed.
- Optional content APIs pass integration tests if enabled.

## MVP3 Release Gate
- Performance and SEO targets measured and met.
- Observability coverage in place (logs + uptime checks).
- Deployment and rollback runbooks validated.

## 9. Assumptions and Defaults
- Primary objective is hiring visibility and personal brand credibility.
- Markdown in repo is the source of truth for content during MVP phases.
- MVP1 experience does not depend on public backend business APIs.
- Privacy is professional-first; sensitive personal naming is excluded.
- Gallery starts with placeholders/AI assets and transitions to final media.
- Backend target is Firebase App Hosting with Cloud Run fallback.
- CTA remains email-only in MVP1.
- Roadmap is exactly 3 MVP phases.
