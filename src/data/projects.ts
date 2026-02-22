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
    id: "distributed-task-engine",
    title: "Distributed Task Engine",
    description: "High-throughput distributed task processing system handling millions of jobs daily with fault tolerance and automatic retry mechanisms.",
    techStack: ["Go", "Redis", "PostgreSQL", "gRPC", "Kubernetes"],
    category: "Infrastructure",
    fullDescription: "A horizontally scalable task processing engine designed to handle millions of background jobs per day. Built with Go for performance-critical workers, Redis for queue management, and PostgreSQL for persistent state. Features automatic retry with exponential backoff, dead letter queues, and real-time monitoring dashboards.",
    architecture: "The system uses a producer-consumer pattern with Redis Streams for ordered message delivery. Workers are deployed as Kubernetes pods with HPA based on queue depth. A coordinator service handles task routing, priority scheduling, and failure recovery. State is persisted in PostgreSQL with optimistic locking for concurrent updates.",
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
    id: "real-time-analytics-pipeline",
    title: "Real-Time Analytics Pipeline",
    description: "Event streaming pipeline processing 500K+ events per minute with sub-second latency for real-time dashboards and alerting.",
    techStack: ["Python", "Apache Kafka", "ClickHouse", "Docker"],
    category: "Data Engineering",
    fullDescription: "An end-to-end analytics pipeline that ingests, transforms, and serves real-time data for business intelligence dashboards. Kafka handles event streaming with exactly-once semantics. ClickHouse provides sub-second analytical queries over billions of rows. Custom Python consumers handle data enrichment and anomaly detection.",
    architecture: "Events flow through Kafka topics partitioned by tenant ID. Python consumers in a consumer group process events in parallel, enriching with dimensional data from Redis. Processed events are batch-inserted into ClickHouse using async inserts for optimal throughput. A materialized view layer provides pre-aggregated metrics for dashboard queries.",
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
    id: "api-gateway-framework",
    title: "API Gateway Framework",
    description: "Custom API gateway with rate limiting, authentication, request transformation, and comprehensive observability built for microservices.",
    techStack: ["Node.js", "TypeScript", "Redis", "OpenTelemetry"],
    category: "Backend",
    fullDescription: "A lightweight yet powerful API gateway designed for microservice architectures. Features include JWT/OAuth2 authentication, sliding window rate limiting, request/response transformation, circuit breaker patterns, and distributed tracing with OpenTelemetry. Handles 10K+ RPS on a single instance.",
    architecture: "The gateway uses a middleware pipeline pattern where each request passes through configurable stages: auth, rate limiting, transformation, routing, and response mapping. Redis stores rate limit counters and cached responses. OpenTelemetry provides end-to-end distributed tracing across all downstream services.",
    links: [
      { label: "GitHub", url: "#" },
      { label: "npm Package", url: "#" },
    ],
    images: [
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    ],
  },
  {
    id: "multi-tenant-saas-platform",
    title: "Multi-Tenant SaaS Platform",
    description: "Secure multi-tenant backend with tenant isolation, role-based access control, and automated provisioning workflows.",
    techStack: ["Python", "Django", "PostgreSQL", "Celery", "AWS"],
    category: "Backend",
    fullDescription: "A complete multi-tenant SaaS backend supporting schema-per-tenant isolation in PostgreSQL. Features include granular RBAC, SSO integration, automated tenant onboarding workflows, usage metering, and billing integration. Serves 200+ enterprise tenants with strict data isolation guarantees.",
    architecture: "Each tenant gets a dedicated PostgreSQL schema, managed by a custom Django middleware that routes queries based on the authenticated tenant context. Celery handles async workflows like tenant provisioning, data exports, and scheduled reports. AWS services (SQS, S3, CloudWatch) provide the infrastructure backbone.",
    links: [
      { label: "GitHub", url: "#" },
    ],
    images: [
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    ],
  },
  {
    id: "infrastructure-as-code-toolkit",
    title: "Infrastructure-as-Code Toolkit",
    description: "CLI toolkit for provisioning and managing cloud infrastructure with declarative YAML configs and drift detection.",
    techStack: ["Go", "Terraform", "AWS", "Docker", "GitHub Actions"],
    category: "DevOps",
    fullDescription: "A developer-friendly CLI that wraps Terraform with opinionated defaults, drift detection, and cost estimation. Teams define infrastructure in simple YAML files which are compiled to Terraform HCL. Features include plan previews, automatic state locking, and Slack notifications for infrastructure changes.",
    architecture: "The CLI is built in Go for fast execution and cross-platform distribution. YAML configs are parsed and validated against JSON schemas, then compiled to Terraform modules. A state comparison engine detects configuration drift by comparing desired state with actual cloud resources via provider APIs.",
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
