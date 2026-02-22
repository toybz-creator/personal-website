import customPubsubContent from "@/content/blog/custom-pubsub-nestjs-monorepo.md?raw";
import eventDrivenSystemsContent from "@/content/blog/event-driven-systems-nestjs-monorepo.md?raw";
import scalableBackendsContent from "@/content/blog/building-scalable-reliable-observable-backends-2026.md?raw";
import angularSignalsContent from "@/content/blog/angular-v21-signals-deep-dive.md?raw";
import ormsMatterContent from "@/content/blog/why-orms-like-typeorm-still-matter.md?raw";
import everythingCodeContent from "@/content/blog/everything-should-be-code.md?raw";

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "custom-pubsub-nestjs-monorepo",
    title: "Custom PubSub in NestJS Monorepo Microservices",
    date: "2026-02-18",
    excerpt:
      "How to build a lightweight internal PubSub layer in a NestJS monorepo for event-driven communication without premature infrastructure complexity.",
    tags: ["NestJS", "Microservices", "Architecture"],
    content: customPubsubContent,
  },
  {
    id: "event-driven-systems-nestjs-monorepo",
    title: "Event-Driven Systems in a NestJS Monorepo",
    date: "2026-02-10",
    excerpt:
      "Designing scalable event-driven backends in a monorepo with queues, contracts, observability, and idempotent processing.",
    tags: ["Architecture", "NestJS", "Backend"],
    content: eventDrivenSystemsContent,
  },
  {
    id: "building-scalable-reliable-observable-backends-2026",
    title: "Building Scalable, Reliable, Observable Backends in 2026",
    date: "2026-02-02",
    excerpt:
      "A practical guide to modern backend architecture patterns that work in production: managed infrastructure, contracts, and observability-first design.",
    tags: ["Backend", "Architecture", "Scaling"],
    content: scalableBackendsContent,
  },
  {
    id: "angular-v21-signals-deep-dive",
    title: "Angular v21 Signals Deep Dive",
    date: "2026-01-25",
    excerpt:
      "How signals reshape Angular state management with fine-grained reactivity, better performance, and a simpler mental model.",
    tags: ["Angular", "Frontend"],
    content: angularSignalsContent,
  },
  {
    id: "why-orms-like-typeorm-still-matter",
    title: "Why ORMs Like TypeORM Still Matter",
    date: "2026-01-17",
    excerpt:
      "Why ORMs remain valuable for production teams: type safety, migrations, relational modeling, and development velocity.",
    tags: ["Database", "Backend"],
    content: ormsMatterContent,
  },
  {
    id: "everything-should-be-code",
    title: "Everything Should Be Code",
    date: "2026-01-09",
    excerpt:
      "Why schemas, contracts, infrastructure, and delivery pipelines should all live in your repository as a single source of truth.",
    tags: ["Architecture", "DevOps"],
    content: everythingCodeContent,
  },
];
