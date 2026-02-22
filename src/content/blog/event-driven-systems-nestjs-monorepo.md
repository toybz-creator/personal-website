# Event-Driven Systems in a NestJS Monorepo

## Summary
How to design a scalable event-driven backend inside a monorepo using queues, events, and strong contracts.

## Categories
Architecture, NestJS, Backend

---

## Core Principles

1. Events are contracts
2. Services do not call each other directly
3. Everything observable
4. Idempotency everywhere

---

## Example Flow

User signs up → emit event →
Billing service listens →
Email service listens →
Analytics listens

---

## Queue Example

```ts
@Processor("email")
export class EmailProcessor {
  @Process("sendWelcome")
  async handle(job: Job) {
    // send email
  }
}
```

---

## Observability

Use:

- OpenTelemetry
- structured logs
- tracing
- metrics

---

## Final Thoughts

Event-driven systems are not about queues.
They are about **clear contracts and loose coupling**.
