export interface BlogPost {
  id: string;
  title: string;
  date: string;
  readingTime: string;
  excerpt: string;
  content: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: "designing-distributed-systems",
    title: "Designing Distributed Systems: Lessons from the Trenches",
    date: "2025-12-15",
    readingTime: "8 min read",
    excerpt: "After a decade of building backend systems, here are the hard-won lessons about distributed architecture that no textbook teaches you.",
    tags: ["Architecture", "Distributed Systems"],
    content: `
# Designing Distributed Systems: Lessons from the Trenches

After 10 years of building backend systems that serve millions of users, I've learned that the gap between theoretical distributed systems knowledge and practical implementation is enormous. Here are the lessons that shaped my engineering philosophy.

## 1. Start Monolith, Earn Your Microservices

The industry's obsession with microservices has led many teams astray. I've seen startups with 3 engineers trying to manage 15 services. The operational overhead alone killed their velocity.

**My rule**: You earn the right to split a service when you can articulate exactly which scaling bottleneck or team boundary justifies the operational complexity.

\`\`\`go
// Before: One well-structured monolith
func (s *Server) HandleOrder(ctx context.Context, req OrderRequest) error {
    // Validate, process, persist — all in one place
    // Easy to reason about, easy to debug
    return s.orderService.Process(ctx, req)
}
\`\`\`

## 2. Idempotency Is Not Optional

Every external-facing API must be idempotent. Every message handler must be idempotent. I learned this the hard way when a payment processor double-charged 200 customers due to a retry storm.

\`\`\`python
# Always use idempotency keys
@idempotent(key=lambda req: req.idempotency_key)
async def process_payment(req: PaymentRequest) -> PaymentResult:
    existing = await db.get_by_idempotency_key(req.idempotency_key)
    if existing:
        return existing.result
    # Process and store atomically
\`\`\`

## 3. Observability Over Testing

Don't get me wrong — tests are essential. But in distributed systems, the failure modes are so numerous that you can't test for all of them. Invest heavily in observability: structured logging, distributed tracing, and meaningful metrics.

## 4. The CAP Theorem Is a Spectrum

Real systems don't neatly fall into CP or AP. Most of the time, you're making nuanced trade-offs at the individual operation level. Your user profile read can be eventually consistent. Your payment processing cannot.

## Key Takeaways

- Complexity is the enemy. Fight it at every turn.
- Design for failure. Every network call will eventually fail.
- Measure everything. You can't improve what you can't see.
- Document decisions. Future you will thank present you.
    `,
  },
  {
    id: "postgres-at-scale",
    title: "PostgreSQL at Scale: Beyond the Basics",
    date: "2025-10-22",
    readingTime: "12 min read",
    excerpt: "PostgreSQL can handle far more than most engineers realize. Here's how to push it to its limits before reaching for exotic databases.",
    tags: ["PostgreSQL", "Performance", "Database"],
    content: `
# PostgreSQL at Scale: Beyond the Basics

PostgreSQL is often underestimated. I've seen teams reach for NoSQL databases or complex distributed databases when PostgreSQL, properly configured, could handle their workload with less operational overhead.

## Connection Pooling Is Step One

If you're connecting directly to PostgreSQL from your application, you're doing it wrong. PgBouncer or a built-in pool is essential.

\`\`\`yaml
# PgBouncer config for high-throughput
[pgbouncer]
pool_mode = transaction
max_client_conn = 1000
default_pool_size = 50
reserve_pool_size = 10
\`\`\`

## Partitioning for Time-Series Data

When your tables grow beyond 100M rows, partitioning becomes essential. PostgreSQL's declarative partitioning is powerful and often overlooked.

\`\`\`sql
CREATE TABLE events (
    id          BIGSERIAL,
    tenant_id   UUID NOT NULL,
    created_at  TIMESTAMPTZ NOT NULL,
    payload     JSONB
) PARTITION BY RANGE (created_at);

CREATE TABLE events_2025_q1 PARTITION OF events
    FOR VALUES FROM ('2025-01-01') TO ('2025-04-01');
\`\`\`

## Index Strategy Matters

The difference between a 50ms query and a 5ms query often comes down to proper indexing. Partial indexes and expression indexes are particularly powerful.

\`\`\`sql
-- Partial index: only index active users
CREATE INDEX idx_users_active_email 
    ON users (email) 
    WHERE status = 'active';

-- Expression index: case-insensitive search
CREATE INDEX idx_users_lower_email 
    ON users (LOWER(email));
\`\`\`

## JSONB: The Best of Both Worlds

PostgreSQL's JSONB type gives you schema flexibility where you need it while maintaining the reliability and query power of a relational database.

## Key Takeaways

- Exhaust PostgreSQL's capabilities before adding new databases
- Connection pooling and proper indexing solve most performance issues
- Partitioning and JSONB are incredibly powerful when used correctly
    `,
  },
  {
    id: "engineering-leadership-lessons",
    title: "From IC to Tech Lead: What Nobody Tells You",
    date: "2025-08-10",
    readingTime: "6 min read",
    excerpt: "The transition from individual contributor to technical lead is the hardest career shift in engineering. Here's what I wish I knew.",
    tags: ["Leadership", "Career"],
    content: `
# From IC to Tech Lead: What Nobody Tells You

Three years ago, I transitioned from a senior individual contributor to leading a team of 12 engineers. It was the hardest professional shift I've ever made. Here's the unfiltered truth about what changes.

## Your Code Output Drops (And That's OK)

As a senior IC, I was proud of my commit frequency. As a lead, my job shifted from writing code to multiplying the output of 12 engineers. If I write code that saves me 2 hours but costs a team member 4 hours of context, I've failed.

## Technical Decisions Become People Decisions

The best architectural choice is worthless if your team can't execute on it. I've learned to factor team skill, motivation, and growth goals into every technical decision.

## The 1:1 Is Your Most Important Meeting

Skip the status updates. Use 1:1s to:
- Understand career aspirations
- Surface blockers before they become crises
- Give specific, actionable feedback
- Build trust that enables hard conversations later

## Documentation Is Leadership

Writing clear RFCs, ADRs, and runbooks is a leadership multiplier. It scales your decision-making beyond the meetings you attend.

\`\`\`markdown
# ADR-042: Choosing gRPC over REST for Internal Services

## Status: Accepted
## Context: Internal service communication is 60% of our latency
## Decision: Migrate internal APIs to gRPC with protobuf
## Consequences: Steeper learning curve, but 3x throughput improvement
\`\`\`

## Key Takeaways

- Leadership is about multiplying team output, not individual output
- Invest in people and processes as much as technology
- Write things down — it scales your impact beyond your presence
    `,
  },
];
