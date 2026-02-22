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
    role: "Senior Lead Backend Engineer",
    company: "TechScale Inc.",
    duration: "3 years",
    period: "2022 — Present",
    achievements: [
      "Led a team of 12 engineers building distributed microservices processing 2M+ requests/day",
      "Architected event-driven system reducing latency by 40%",
      "Established engineering standards adopted across 5 product teams",
    ],
  },
  {
    id: "exp-2",
    role: "Senior Backend Engineer",
    company: "CloudForge Systems",
    duration: "2.5 years",
    period: "2019 — 2022",
    achievements: [
      "Designed and built real-time data pipeline handling 500K events/minute",
      "Migrated monolith to microservices with zero downtime",
      "Mentored 6 junior engineers to mid-level promotions",
    ],
  },
  {
    id: "exp-3",
    role: "Backend Engineer",
    company: "DataPulse Analytics",
    duration: "2 years",
    period: "2017 — 2019",
    achievements: [
      "Built RESTful APIs serving 50+ enterprise clients",
      "Implemented caching layer reducing database load by 60%",
      "Introduced CI/CD pipelines cutting deployment time from hours to minutes",
    ],
  },
  {
    id: "exp-4",
    role: "Software Engineer",
    company: "NexaCore Solutions",
    duration: "1.5 years",
    period: "2016 — 2017",
    achievements: [
      "Developed payment processing system handling $2M+ monthly transactions",
      "Built automated testing suite with 90%+ code coverage",
      "Optimized SQL queries improving report generation speed by 3x",
    ],
  },
  {
    id: "exp-5",
    role: "Junior Software Engineer",
    company: "ByteWorks Studio",
    duration: "1 year",
    period: "2015 — 2016",
    achievements: [
      "Built internal tools automating manual processes for 30+ staff",
      "Contributed to core API used by 10K+ users",
      "Learned and applied TDD practices across the team",
    ],
  },
];
