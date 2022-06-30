import { fireEvent, render, screen } from '@testing-library/react'

import { MultipleCustomHooks } from '../../src/03-examples'
import { useCounter } from '../../src/hooks/useCounter.js'
import { useFetch } from '../../src/hooks/useFetch.js'

jest.mock('../../src/hooks/useCounter.js')
jest.mock('../../src/hooks/useFetch.js')

describe('Tests in <MultipleCustomHooks />', () => {
  const mockIncrement = jest.fn()

  useCounter.mockReturnValue({
    counter: 1,
    increment: mockIncrement
  })

  beforeEach(() => {
    jest.clearAllMocks() // clear all mocks before each test
  })

  test('should show the component by default', () => {
    useFetch.mockReturnValue({
      data: null,
      isLoading: true,
      hasError: null
    })

    render(<MultipleCustomHooks />)
    expect(screen.getByText('BreakingBad Quotes'))
    expect(screen.getByText('Loading...'))

    const nextButton = screen.getByRole('button', { name: 'Next quote' })

    expect(nextButton.disabled).toBeTruthy()
  })

  test('should show a Quote', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Author', quote: 'Hello World' }],
      isLoading: false,
      hasError: null
    })

    render(<MultipleCustomHooks />)
    expect(screen.getByText('Author')).toBeTruthy()
    expect(screen.getByText('Hello World')).toBeTruthy()

    const nextButton = screen.getByRole('button', { name: 'Next quote' })

    expect(nextButton.disabled).toBeFalsy()
  })

  test('should call the increment function', () => {
    useFetch.mockReturnValue({
      data: [{ author: 'Author', quote: 'Hello World' }],
      isLoading: false,
      hasError: null
    })

    render(<MultipleCustomHooks />)
    const nextButton = screen.getByRole('button', { name: 'Next quote' })

    fireEvent.click(nextButton)
    expect(mockIncrement).toHaveBeenCalled()
  })
})
