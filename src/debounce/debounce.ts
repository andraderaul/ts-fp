type DebounceTime = <T, V>(
  times: number,
  fn: (...args: T[]) => V
) => (...args: T[]) => void

export const debounceTime: DebounceTime = (milliseconds, fn) => {
  let timer = 0 as unknown as NodeJS.Timeout
  return () => {
    clearTimeout(timer)
    timer = setTimeout(fn, milliseconds)
  }
}

