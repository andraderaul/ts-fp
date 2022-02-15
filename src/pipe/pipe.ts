type Pipe = <T = unknown, V = unknown>(
  ...args: readonly [(value: T) => any, ...Array<any>, (value: any) => V]
) => (value: T) => V

export const pipe: Pipe =
  (...args) =>
  (value) =>
    args.reduce((previousValue, fn) => fn(previousValue), value)

