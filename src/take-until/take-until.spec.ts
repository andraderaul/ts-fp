import { takeUntil } from './take-until'

describe('Testing takeUntil', () => {
  it('should be able create a takeUntil function', () => {
    const fn = jest.fn()
    const take = takeUntil(3, fn)

    take()
    take()
    take()
    take()
    take()

    expect(fn).toHaveBeenCalledTimes(3)
  })

  it('should be able create a takeUntil function that sum two numbers', () => {
    const fn = (n1: number, n2: number) => n1 + n2
    const sum = takeUntil(4, fn)

    expect(sum(1, 1)).toBe(2)
    expect(sum(2, 1)).toBe(3)
    expect(sum(2, 2)).toBe(4)
    expect(sum(3, 2)).toBe(5)

    expect(sum(5, 5)).toBe(false)
  })
})
