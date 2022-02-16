import { partialize } from './partialize'

describe('Testing partialize', () => {
  it('should be able create a partialized function that receive one argument', () => {
    const fn = (num1: number, num2: number) => num1 + num2

    const partialized = partialize<number>(fn, 2)

    expect(partialized(2)).toBe(4)
  })

  it('should be able to create a partialized function that receive two arguments', () => {
    const fn = (s1: string, s2: string, s3: string) => `${s1} - ${s2} - ${s3}`

    const partialized = partialize<string>(fn, 'hi', 'raul')

    expect(partialized('zera')).toBe('hi - raul - zera')
  })

  it('should be able to create a partialized function with different types', () => {
    const fn = (s1: string, n1: number, n2: number) => `${s1} - ${n1} - ${n2}`

    const partialized = partialize<string>(fn, 'hi')

    expect(partialized(1, 2)).toBe('hi - 1 - 2')
  })
})
