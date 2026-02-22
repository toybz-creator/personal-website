# Execution Tasks: Start-to-Deploy Roadmap

## Roadmap Summary
- Structure: 3 MVP phases.
- Primary objective: hiring visibility and personal brand credibility.
- Content source: markdown in repo.
- MVP1 backend role: deployed service + health endpoint, no required public business APIs.

## Dependency Ordering (Cross-MVP)
1. Finalize content and information architecture.
2. Establish frontend routing, theme, and markdown pipeline.
3. Deploy backend skeleton with health verification.
4. Complete QA gates and publish MVP1.
5. Expand depth (MVP2), then optimize/scale (MVP3).

## MVP1 - Foundation Launch
- Effort Estimate: 40-55 hours.
- Core Dependencies: finalized copy, initial markdown content, Firebase project setup.

### Planning
- [ ] Confirm final sitemap and route naming.
- [ ] Confirm MVP1 acceptance criteria and launch gate checklist.
- [ ] Define repository structure for frontend, backend, and content folders.
- [ ] Lock grayscale design tokens and typography direction.
- [ ] Document environment variables for FE/BE deployment targets.

### Content
- [ ] Write homepage narrative and professional summary copy.
- [ ] Prepare at least 3 publish-ready blog posts in markdown.
- [ ] Prepare at least 5 project entries with problem/architecture/impact details.
- [ ] Create gallery captions and notes for placeholder/AI media.
- [ ] Curate interests section content aligned to professional-first privacy boundary.
- [ ] Validate that no private-person naming appears in public copy.

### Frontend
- [ ] Scaffold React app with routing and shared layout.
- [ ] Implement pages: Home, Projects, Project Detail, Blog, Blog Detail, Gallery, Interests, Contact, 404.
- [ ] Implement responsive layout behavior for mobile-first breakpoints.
- [ ] Implement markdown ingestion and rendering pipeline.
- [ ] Add SEO metadata handling for all public routes.
- [ ] Implement email-only CTA and social links.
- [ ] Apply grayscale design tokens and baseline interaction styles.

### Backend
- [ ] Scaffold NestJS app with production build config.
- [ ] Implement `GET /health` endpoint response contract.
- [ ] Add basic structured logging.
- [ ] Configure runtime/env settings for Firebase App Hosting.
- [ ] Prepare deployment scripts and health check command.

### QA
- [ ] Verify responsive behavior across target viewport sizes.
- [ ] Verify blog listing/detail and project listing/detail render correctly from markdown.
- [ ] Verify unknown content slugs route to friendly 404.
- [ ] Verify gallery loads placeholders without major layout shifts.
- [ ] Verify email CTA launches the correct `mailto` target.
- [ ] Verify social links are valid.
- [ ] Verify privacy boundary checks pass in content review.
- [ ] Run FE and BE build validation.

### Deployment
- [ ] Configure Firebase Hosting for frontend deployment.
- [ ] Configure Firebase App Hosting for backend deployment target.
- [ ] Connect CI pipeline to run lint/test/build before deploy.
- [ ] Deploy frontend and backend to production targets.
- [ ] Execute deployment runbook steps and store release notes.
- [ ] Prepare fallback deployment procedure to Cloud Run for backend compatibility issues.

### Post-deploy validation
- [ ] Smoke test frontend URL and core routes.
- [ ] Smoke test backend `GET /health` endpoint.
- [ ] Validate metadata rendering in page source.
- [ ] Validate no broken links or image references.
- [ ] Confirm rollback checklist is complete and executable.

## MVP2 - Credibility Depth
- Effort Estimate: 30-45 hours.
- Core Dependencies: MVP1 in production, baseline traffic and feedback data.

### Planning
- [ ] Prioritize top project case studies for deeper technical storytelling.
- [ ] Decide if optional read APIs are needed for content delivery in MVP2.
- [ ] Define acceptance criteria for credibility-depth improvements.

### Content
- [ ] Expand project narratives with architecture tradeoffs and constraints.
- [ ] Publish additional architecture-focused blog posts.
- [ ] Improve gallery captions/context quality and replace high-priority placeholders.
- [ ] Refresh interests content with stronger backend/cloud linkage.

### Frontend
- [ ] Add richer project detail components (timelines, architecture callouts, impact blocks).
- [ ] Improve blog discoverability (tag filters/search if needed).
- [ ] Improve gallery UX for better caption readability and load behavior.
- [ ] Refine typography rhythm and spacing for long-form content.

### Backend
- [ ] If enabled, implement read-only APIs:
- [ ] `GET /api/v1/posts`
- [ ] `GET /api/v1/posts/:slug`
- [ ] `GET /api/v1/projects`
- [ ] `GET /api/v1/gallery`
- [ ] Add validation and error response conventions for content endpoints.
- [ ] Add baseline rate limiting/CORS policy for public APIs.

### QA
- [ ] Verify expanded content renders correctly across devices.
- [ ] Verify API contract tests (if APIs enabled).
- [ ] Verify frontend fallback behavior when API/content is unavailable.
- [ ] Verify accessibility regressions are not introduced.

### Deployment
- [ ] Deploy frontend content and UI upgrades.
- [ ] Deploy optional backend API updates.
- [ ] Update runbook with new checks for API-enabled routes.
- [ ] Record release metrics and known limitations.

### Post-deploy validation
- [ ] Re-run smoke tests for all core routes.
- [ ] Validate API endpoint responses in production (if enabled).
- [ ] Validate analytics/engagement trend changes post-release.
- [ ] Validate rollback instructions for API and frontend independently.

## MVP3 - Scale and Optimization
- Effort Estimate: 25-40 hours.
- Core Dependencies: stable MVP2 baseline and measured performance bottlenecks.

### Planning
- [ ] Prioritize optimization backlog using measured performance and engagement data.
- [ ] Define performance and SEO target thresholds for MVP3 closure.
- [ ] Define observability maturity goals (logs, uptime, error tracking).

### Content
- [ ] Standardize editorial checklist for future blog/project publishing.
- [ ] Refresh aging posts/projects with updated metrics or outcomes.
- [ ] Replace remaining placeholders with final curated media where available.

### Frontend
- [ ] Optimize bundle size and route-level loading behavior.
- [ ] Improve Core Web Vitals through asset optimization and caching strategy.
- [ ] Harden SEO metadata consistency and structured data coverage.
- [ ] Improve resilience for media/content loading edge cases.

### Backend
- [ ] Improve health and runtime diagnostics.
- [ ] Add richer structured logging fields for debugging and release tracing.
- [ ] Tune deployment scaling/runtime settings for reliability and cost balance.
- [ ] Validate Cloud Run fallback parity if fallback path is activated.

### QA
- [ ] Run performance audits and compare against KPI thresholds.
- [ ] Run regression tests for core user journeys.
- [ ] Validate uptime monitoring and alert triggers.
- [ ] Confirm privacy and content policy compliance after optimization changes.

### Deployment
- [ ] Roll out optimization release in controlled sequence.
- [ ] Execute full deployment runbook with performance checkpoints.
- [ ] Capture pre/post metrics and publish release summary.
- [ ] Validate rollback path for frontend-only and backend-only incidents.

### Post-deploy validation
- [ ] Confirm performance targets are met in production telemetry.
- [ ] Confirm SEO metadata/canonical behavior remains correct.
- [ ] Confirm uptime checks and alerting are functioning.
- [ ] Confirm long-term maintenance task cadence is documented.

## Deployment Runbook Tasks (Global)
- [ ] Pre-deploy: verify clean CI pipeline status and env var completeness.
- [ ] Pre-deploy: verify version/release notes prepared.
- [ ] Deploy frontend first, then backend unless backend changes are prerequisite.
- [ ] Run smoke tests immediately after each deployment stage.
- [ ] Announce release with known issues and rollback owner.

## Rollback Checks (Global)
- [ ] Keep previous stable frontend artifact/version reference.
- [ ] Keep previous stable backend artifact/version reference.
- [ ] Confirm rollback command/process is tested at least once per MVP.
- [ ] Confirm health endpoint and core route checks pass after rollback.
- [ ] Log incident context and remediation tasks after rollback events.
