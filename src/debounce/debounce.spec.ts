import { debounceTime } from './debounce'

jest.useFakeTimers()
jest.spyOn(global, 'setTimeout')
jest.spyOn(global, 'clearTimeout')

describe('Testing takeUntil', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should be able to call debounce function after 300ms', () => {
    const fn = jest.fn()
    const debounce = debounceTime(300, fn)

    debounce()
    debounce()
    debounce()
    debounce()
    debounce()

    expect(setTimeout).toHaveBeenCalledTimes(5)
    expect(clearTimeout).toHaveBeenCalledTimes(5)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300)
    expect(fn).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(301)
    expect(fn).toHaveBeenCalledTimes(1)
  })

  it('should not be able to call debounce function after 200ms', () => {
    const fn = jest.fn()
    const debounce = debounceTime(300, fn)

    debounce()
    debounce()
    debounce()

    expect(setTimeout).toHaveBeenCalledTimes(3)
    expect(clearTimeout).toHaveBeenCalledTimes(3)
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 300)
    expect(fn).toHaveBeenCalledTimes(0)

    jest.advanceTimersByTime(200)
    expect(fn).toHaveBeenCalledTimes(0)
  })
})

