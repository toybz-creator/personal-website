# Angular v21 Signals Deep Dive

## Summary
Signals fundamentally change Angular state management.

## Categories
Angular, Frontend

---

## Signals Introduced

- signal()
- computed()
- effect()
- linkedSignal()
- inputSignal()

---

## Example

```ts
count = signal(0);

double = computed(() => this.count() * 2);
```

---

## Benefits

- Fine-grained reactivity
- Less RxJS boilerplate
- Better performance
- Simpler mental model

---

## When to still use RxJS?

- streams
- websockets
- async pipelines

---

## Final Thoughts

Signals simplify UI architecture and reduce complexity.
