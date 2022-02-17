import { identity } from './identity'

describe('Testing identity', () => {
  it('should be able to return a string value passed in the parameter', () => {
    expect(identity('identity')).toBe('identity')
  })

  it('should be able to return a number value passed in the parameter', () => {
    expect(identity(1)).toBe(1)
  })

  it('should be able to return a object value passed in the parameter', () => {
    const obj = {}

    expect(identity(obj)).toBe(obj)
  })
})
