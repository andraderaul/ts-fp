import { pipe } from './pipe'

describe('Testing pipe', () => {
  it('should be able create a composed function that multiply numbers', () => {
    const fn = (num: number) => num * 2
    const composed = pipe<number, number>(fn, fn, fn)
    expect(composed(10)).toBe(80)
  })

  it('should be able to create a composed function that reverse a string', () => {
    const fn1 = (x: string) => x.split('')
    const fn2 = (x: Array<string>) => x.reverse()
    const fn3 = (x: Array<string>) => x.join('')

    const composed = pipe<string, string>(fn1, fn2, fn3)

    expect(composed('luar')).toBe('raul')
  })

  it('should be able to create a composed function that sum of an array', () => {
    type Products = Array<{ id: string; num: number }>

    const product: Products = [
      { id: '1', num: 200 },
      { id: '2', num: 300 },
      { id: '3', num: 500 }
    ]

    const fn1 = (x: Products) => x.map((y) => y.num)
    const fn2 = (x: Array<number>) => x.reduce((acc, curr) => acc + curr, 0)

    const composed = pipe<Products, number>(fn1, fn2)

    expect(composed(product)).toBe(1000)
  })
})
