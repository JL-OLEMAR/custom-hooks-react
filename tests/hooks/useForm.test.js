import { act, renderHook } from '@testing-library/react'

import { useForm } from '../../src/hooks/useForm.js'

describe('Tests in the useForm Hook', () => {
  const initialForm = {
    userName: 'Test 1',
    email: 'test1@test.com'
  }

  test('should return values for default', () => {
    const { result } = renderHook(() => useForm(initialForm))

    expect(result.current).toEqual({
      formState: initialForm,
      onInputChange: expect.any(Function),
      onResetForm: expect.any(Function)
    })
  })

  test('should change the name of the form', () => {
    const newUserName = 'Test 2'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange } = result.current

    act(() => {
      // Simulate the input change; where the name is 'userName' and the value is 'Test 2'
      onInputChange({ target: { name: 'userName', value: newUserName } })
    })

    expect(result.current.formState.userName).toBe(newUserName)
  })

  test('should reset the form', () => {
    const newUserName = 'Test 2'
    const { result } = renderHook(() => useForm(initialForm))
    const { onInputChange, onResetForm } = result.current

    act(() => {
      onInputChange({ target: { name: 'userName', value: newUserName } })
      onResetForm()
    })

    expect(result.current.formState.userName).toEqual(initialForm.userName)
  })
})
