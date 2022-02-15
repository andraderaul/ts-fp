type Compose = <T = unknown, V = unknown>(
  ...args: readonly [(value: any) => V, ...Array<any>, (value: T) => any]
) => (value: T) => V

export const compose: Compose =
  (...args) =>
  (value) =>
    args.reduceRight((previousValue, fn) => fn(previousValue), value)

