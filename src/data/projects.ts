export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  category: string;
  fullDescription: string;
  architecture: string;
  links: { label: string; url: string }[];
  images?: string[];
}

export const projects: Project[] = [
  {
    id: "api-workflow-testing-engine",
    title: "API Workflow Testing Engine",
    description:
      "A developer tool for testing API workflows end-to-end instead of isolated endpoints.",
    techStack: ["NestJS", "PostgreSQL", "Redis", "TypeScript", "OpenAPI"],
    category: "Developer Tools",
    fullDescription:
      "A workflow-first testing platform for teams that need to validate complete API journeys, not just single endpoints. It supports multi-step test flows, expected-outcome branching, automatic test-data generation, contract validation, CI-ready execution, and scenario replay.",
    architecture:
      "Built on NestJS with PostgreSQL for scenario persistence and run history, Redis for queue-backed execution orchestration, and OpenAPI-driven contract checks. The engine models scenarios as directed steps with deterministic replay and branch-aware assertions for robust end-to-end validation.",
    links: [
      { label: "GitHub", url: "#" },
      { label: "Case Study", url: "#" },
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    ],
  },
  {
    id: "habit-zen",
    title: "Habit Zen",
    description:
      "Cross-platform habit and growth platform with streaks, community challenges, and AI-assisted motivation.",
    techStack: ["Angular", "Ionic", "NestJS", "PostgreSQL"],
    category: "Productivity",
    fullDescription:
      "Habit Zen is a cross-platform habit and growth product focused on consistency, accountability, and motivation. Users track streaks, join community challenges, and receive AI-assisted nudges designed to keep momentum high over long-term behavior change.",
    architecture:
      "The system combines an Angular + Ionic client stack with a NestJS backend and PostgreSQL data model for habit logs, challenge participation, and motivational context. Service boundaries prioritize rapid iteration while preserving maintainable domain logic and production readiness.",
    links: [
      { label: "GitHub", url: "#" },
      { label: "Documentation", url: "#" },
    ],
    images: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    ],
  },
  {
    id: "job-discovery-auto-apply-engine",
    title: "Job Discovery & Auto-Apply Engine",
    description:
      "Microservice system that discovers job listings, tailors CVs, and automates applications.",
    techStack: ["Node.js", "Redis queues", "Event-driven microservices"],
    category: "Automation",
    fullDescription:
      "A microservice-based system built to continuously discover relevant opportunities, tailor CVs to role context, and automate application workflows. The platform drove 200× paying user growth within one month after launch.",
    architecture:
      "Event-driven services coordinate discovery, matching, CV transformation, and apply pipelines through Redis-backed queues. Decoupled workers and asynchronous job orchestration provide resilience, throughput, and operational clarity across high-volume processing windows.",
    links: [
      { label: "GitHub", url: "#" },
      { label: "npm Package", url: "#" },
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    ],
  },
  {
    id: "api-health-monitoring-dashboard",
    title: "API Health Monitoring Dashboard",
    description:
      "Internal tool for monitoring API uptime, errors, and performance across services.",
    techStack: [],
    category: "Observability",
    fullDescription:
      "An internal observability dashboard built at Flutterwave to give teams a real-time view of service health. It centralized uptime, error-rate, and performance signals so engineering and product teams could identify issues quickly and reduce incident response time.",
    architecture:
      "The dashboard aggregates operational signals across APIs into a single monitoring interface optimized for internal workflows. It emphasizes fast anomaly detection, trend visibility, and actionable service-level insights for engineering operations.",
    links: [{ label: "GitHub", url: "#" }],
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    ],
  },
  {
    id: "digital-signage-platform",
    title: "Digital Signage Platform",
    description:
      "Remote multimedia scheduling system deployed across retail environments.",
    techStack: [],
    category: "Enterprise Platforms",
    fullDescription:
      "A digital signage platform for remote scheduling and distribution of multimedia content across retail screens. The product enabled centralized campaign control and reliable rollout of time-sensitive content across multiple locations.",
    architecture:
      "The platform uses a centralized scheduling and content-management layer with remote client synchronization for distributed display endpoints. Operational design prioritized reliable sync cycles, predictable publishing, and maintainable media delivery workflows.",
    links: [
      { label: "GitHub", url: "#" },
      { label: "Documentation", url: "#" },
    ],
    images: [
      "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800&q=80",
    ],
  },
];

export const categories = [...new Set(projects.map((p) => p.category))];
