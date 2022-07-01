import { render, screen } from '@testing-library/react'

import { useForm } from '../../src/hooks/useForm.js'
import { TodoAdd } from '../../src/08-useReducer/TodoAdd.jsx'

jest.mock('../../src/hooks/useForm.js')

describe('Tests in <TodoAdd />', () => {
  const onNewTodoMock = jest.fn()

  useForm.mockReturnValue({
    formState: { description: 'Todo #1' },
    onInputChange: jest.fn(),
    onResetForm: jest.fn()
  })

  beforeEach(() => jest.clearAllMocks())

  test('TodoAdd show the component correctly', () => {
    render(<TodoAdd onNewTodo={onNewTodoMock} />)
    const { name, placeholder } = screen.getByRole('textbox') // input of the form

    expect(name).toBe('description')
    expect(placeholder).toBe('What is there to do?')
  })
})
