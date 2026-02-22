export interface Experience {
  id: string;
  role: string;
  company: string;
  duration: string;
  period: string;
  achievements: string[];
}

export const experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Technical Lead, Full-Stack",
    company: "Thelix Holdings",
    duration: "Current",
    period: "Jan 2026 — Present",
    achievements: [
      "Led architecture and development across multiple microservice products including AI-assisted job discovery and credit platforms",
      "Built automated job discovery and CV tailoring microservice that scaled to 200× paying users within a month",
      "Introduced event-driven backend architecture using Redis queues and BullMQ to improve reliability and response times",
      "Led monorepo migration for microservices to improve transparency, onboarding, and AI-assisted development workflows",
      "Designed scalable backend infrastructure with messaging, queues, and observability foundations",
    ],
  },
  {
    id: "exp-2",
    role: "Freelance & Consultancy — Full-Stack Engineer",
    company: "Independent",
    duration: "Current",
    period: "May 2023 — Present",
    achievements: [
      "Architected and shipped MVPs and production systems for startups across fintech, SaaS, and internal tools",
      "Led CI/CD setup, architecture decisions, and developer onboarding across multiple teams",
      "Built Habit Zen, a cross-platform habit platform with AI-assisted motivation and community challenges",
      "Delivered production apps from concept to deployment, helping founders validate ideas and acquire early users",
    ],
  },
  {
    id: "exp-3",
    role: "Senior Frontend Consultant",
    company: "Aubay",
    duration: "1 yr 9 mos",
    period: "Jan 2023 — Sept 2024",
    achievements: [
      "Built enterprise Angular/React platforms for analytics and operations",
      "Improved architecture and delivery workflows across multiple teams",
      "Contributed to TDD practices and scalable UI architecture",
    ],
  },
  {
    id: "exp-4",
    role: "Developer Experience Engineer",
    company: "Flutterwave",
    duration: "2 yrs 9 mos",
    period: "Sept 2020 — May 2023",
    achievements: [
      "Built and maintained SDKs used by merchants globally",
      "Developed API health monitoring dashboards for internal teams",
      "Improved documentation systems and onboarding experience for developers",
    ],
  },
  {
    id: "exp-5",
    role: "Lead Web Developer",
    company: "Moore Advice",
    duration: "4 yrs",
    period: "2015 — 2019",
    achievements: [
      "Led development of web/mobile apps for corporate clients",
      "Built digital signage platform and POS systems",
      "Managed engineering delivery and architecture decisions",
    ],
  },
];
