import { min } from './min'

describe('Testing min', () => {
  it('should be return min number', () => {
    expect(min(10, 2)).toBe(2)
  })

  it('should be return min string', () => {
    expect(min('luar', 'raul')).toBe('luar')
  })

  it('should be return min array', () => {
    expect(min([1, 2], [1, 2, 3])).toEqual([1, 2])
  })
})
