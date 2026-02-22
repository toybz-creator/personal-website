# FRD: Functional and Technical Requirements

## 1. Architecture Overview

### Stack
- Frontend: React (latest stable at implementation time).
- Backend: NestJS (latest stable at implementation time).
- Database: MongoDB.
- Hosting:
  - Frontend on Firebase Hosting.
  - Backend target on Firebase App Hosting.
  - Fallback backend deployment on Google Cloud Run if App Hosting constraints block NestJS runtime needs.

### System Components
- `web` (React): renders all public pages and content views.
- `api` (NestJS): health endpoint in MVP1, future content read APIs in MVP2+.
- `content` (markdown files): source of truth for blog and project content in repository.
- `db` (MongoDB): reserved for future dynamic content/storage needs.

## 2. Deployment Model

### Frontend Deployment
- Build static frontend bundle.
- Deploy to Firebase Hosting.
- Configure rewrites for SPA/deep links.

### Backend Deployment
- Build NestJS app for production.
- Deploy to Firebase App Hosting target.
- Health verification through `GET /health`.

### Fallback Path (If Needed)
- If Firebase App Hosting cannot satisfy NestJS runtime/network needs, redeploy backend container to Cloud Run with identical environment contract.

## 3. Frontend Technical Specification

## Routes
- `/` -> Home
- `/projects` -> Projects list
- `/projects/:slug` -> Project detail
- `/blog` -> Blog list
- `/blog/:slug` -> Blog detail
- `/gallery` -> Gallery
- `/interests` -> Interests
- `/contact` -> Contact/Social
- `*` -> Friendly 404

## Page-Level Component Expectations
- Home: hero, positioning, core skills, highlights, CTA block.
- Projects list: card/grid with filters optional in MVP2+.
- Project detail: problem, architecture, stack, impact metrics, optional links.
- Blog list/detail: markdown-rendered content with frontmatter metadata.
- Gallery: image grid with captions and notes.
- Interests: curated cards/list.
- Contact: email CTA and social link group.

## Content Loading Strategy
- Parse markdown files at build time for MVP1.
- Generate typed content manifest consumed by frontend routes.
- Handle missing/invalid frontmatter with build-time validation errors.

## SEO Metadata Strategy
- Define title, description, and Open Graph tags per route.
- Generate canonical URLs.
- Include structured metadata where useful (e.g., article/project schema in MVP2+).

## 4. Backend Technical Specification

## MVP1 Backend Scope
- Backend exists and is deployed but does not power core page data yet.
- Required endpoint:
  - `GET /health`

## `GET /health` Contract
- Purpose: operational health + deployment verification.
- Response (200):
  - `status`: `"ok"`
  - `service`: service identifier string
  - `version`: release/version string
  - `timestamp`: ISO timestamp

## MVP2+ Backend Expansion (Planned)
- Introduce read-only content APIs if needed for dynamic delivery.
- Preserve backward-compatible response shapes.

## 5. Data Model Contracts

## `Post`
- `slug` (string, required)
- `title` (string, required)
- `summary` (string, required)
- `publishedAt` (ISO date string, required)
- `tags` (string[], required)
- `readTime` (string, required)
- `contentPath` (string, required)

## `Project`
- `slug` (string, required)
- `name` (string, required)
- `problem` (string, required)
- `architecture` (string, required)
- `stack` (string[], required)
- `impactMetrics` (string[], required)
- `repoUrl` (string, optional)
- `demoUrl` (string, optional)

## `GalleryItem`
- `id` (string, required)
- `imageUrl` (string, required)
- `caption` (string, required)
- `contextTag` (string, required)
- `isPlaceholder` (boolean, required)

## `SocialLink`
- `id` (string, required)
- `platform` (string, required)
- `url` (string, required)
- `label` (string, required)

## `ProfileSummary`
- `headline` (string, required)
- `bio` (string, required)
- `skills` (string[], required)
- `cloudPlatforms` (string[], required)
- `socialLinks` (`SocialLink[]`, required)

## 6. Content Contract (Markdown Frontmatter)

## Blog Frontmatter Schema
```yaml
slug: string
title: string
summary: string
publishedAt: YYYY-MM-DD
tags:
  - string
readTime: string
```

## Project Frontmatter Schema
```yaml
slug: string
name: string
problem: string
architecture: string
stack:
  - string
impactMetrics:
  - string
repoUrl: string # optional
demoUrl: string # optional
```

## Validation Rules
- `slug` must be unique within its content type.
- Required fields missing -> build fails.
- Dates must be ISO-compatible and parseable.

## 7. API and Interface Plan

## MVP1
- `GET /health`

## MVP2+ Planned Read APIs
- `GET /api/v1/posts`
- `GET /api/v1/posts/:slug`
- `GET /api/v1/projects`
- `GET /api/v1/gallery`

## Compatibility Requirements
- Version API under `/api/v1`.
- Keep additive changes backward-compatible.
- Document any breaking changes before rollout.

## 8. Security and Privacy Constraints
- Sanitize markdown output before rendering.
- Do not include sensitive private-person naming in public content.
- Apply baseline CORS and rate limiting once public APIs are enabled.
- Ensure outbound links use safe attributes where relevant.

## 9. Observability Requirements
- Structured logs in backend (JSON format recommended).
- Uptime monitor against backend health endpoint.
- Error tracking coverage for frontend route failures and backend exceptions (minimal MVP baseline).

## 10. CI/CD Requirements
- Pull request checks:
  - lint
  - unit tests
  - build (frontend + backend)
- Deployment requires successful checks and environment variables present.
- Environment variable contract must be documented for frontend and backend targets.

## 11. Definition of Done (Engineering)
- Feature meets functional requirements and acceptance criteria.
- Responsive behavior verified on defined mobile and desktop breakpoints.
- Accessibility baseline checks pass.
- Content schema validation passes at build time.
- Health endpoint verified after deployment.
- Smoke tests executed and recorded.
- Rollback instructions verified.

## 12. Test Cases and Scenarios
1. Home page renders core narrative and credibility sections on mobile and desktop breakpoints.
2. Blog listing renders all launch posts from markdown with correct metadata.
3. Blog detail resolves by slug and handles unknown slug with a friendly 404.
4. Projects listing shows 5 launch projects with consistent schema fields.
5. Gallery displays placeholder/AI assets and captions without layout shifts.
6. Email CTA opens the correct email target.
7. Social links are valid and open correctly.
8. No private-person naming appears in public content where restricted.
9. Backend health endpoint responds successfully in deployed environment.
10. End-to-end deploy smoke test passes for frontend and backend URLs.
