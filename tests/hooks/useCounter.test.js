import { act, renderHook } from '@testing-library/react'

import { useCounter } from '../../src/hooks/useCounter.js'

describe('Tests in the useCounter Hook', () => {
  test('should return values for default', () => {
    const { result } = renderHook(() => useCounter())

    const { counter, decrement, increment, reset } = result.current

    expect(counter).toBe(10)
    expect(decrement).toEqual(expect.any(Function))
    expect(increment).toEqual(expect.any(Function))
    expect(reset).toEqual(expect.any(Function))
  })

  test('should generate the counter with the value of 100', () => {
    const { result } = renderHook(() => useCounter(100))

    expect(result.current.counter).toBe(100)
  })

  test('should increment the counter', () => {
    const { result } = renderHook(() => useCounter(100))
    const { increment } = result.current

    // Wait for the counter to be updated
    act(() => {
      increment()
      increment(2)
    })

    expect(result.current.counter).toBe(103)
  })

  test('should decrement the counter', () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement } = result.current

    act(() => {
      decrement()
      decrement(2)
    })

    expect(result.current.counter).toBe(97)
  })

  test('should reset the counter', () => {
    const { result } = renderHook(() => useCounter(100))
    const { decrement, reset } = result.current

    act(() => {
      decrement()
      reset()
    })

    expect(result.current.counter).toBe(100)
  })
})
