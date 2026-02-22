# Custom PubSub in NestJS Monorepo Microservices

## Summary
How to build a lightweight internal PubSub layer inside a NestJS monorepo to enable event-driven communication across services without introducing unnecessary infrastructure too early.

## Categories
NestJS, Microservices, Architecture

---

## Why build a custom PubSub?

In many monorepo microservice systems, teams jump straight into Kafka or RabbitMQ.
However, for many systems, especially early-stage or mid-scale products, a lightweight internal PubSub layer is enough.

Benefits:
- Faster development
- Easier local testing
- Shared contracts
- Reduced infrastructure cost
- Easier observability

---

## Architecture

Monorepo services communicate via:

- Redis streams
- In-memory bus for local dev
- Shared event contracts

---

## Event Contract Example

```ts
export interface UserCreatedEvent {
  type: "user.created";
  payload: {
    userId: string;
    email: string;
  };
}
```

---

## Publisher

```ts
@Injectable()
export class EventBus {
  constructor(private redis: Redis) {}

  async publish(event: BaseEvent) {
    await this.redis.publish(event.type, JSON.stringify(event));
  }
}
```

---

## Subscriber

```ts
@Injectable()
export class UserCreatedListener {
  @OnEvent("user.created")
  handle(event: UserCreatedEvent) {
    console.log("User created:", event.payload.userId);
  }
}
```

---

## When to scale to Kafka?

Move to Kafka when:

- Multiple services across repos
- High throughput
- Event replay requirements
- Cross-team boundaries

---

## Final Advice

Start simple.
Use contracts.
Make events observable.
Scale infra only when needed.
