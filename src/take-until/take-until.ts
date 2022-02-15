type TakeUntil = <T, V>(
  times: number,
  fn: (...args: T[]) => V
) => (...args: T[]) => V | false

export const takeUntil: TakeUntil =
  (times, fn) =>
  (...args) =>
    times-- > 0 && fn(...args)

