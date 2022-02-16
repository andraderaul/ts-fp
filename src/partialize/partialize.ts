/* eslint-disable @typescript-eslint/no-explicit-any */
type Partialize = <T = unknown>(
  fn: (...args: Array<any>) => any,
  ...params: Array<any>
) => (...params: Array<any>) => T

export const partialize: Partialize = (fn, ...params) =>
  fn.bind(null, ...params)
