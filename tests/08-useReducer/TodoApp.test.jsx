import { render, screen } from '@testing-library/react'

import { useTodos } from '../../src/hooks/useTodos.js'
import { TodoApp } from '../../src/08-useReducer/TodoApp.jsx'

jest.mock('../../src/hooks/useTodos.js')

describe('Tests in <TodoApp />', () => {
  useTodos.mockReturnValue({
    todos: [
      { id: 1, description: 'Todo #1', done: false },
      { id: 2, description: 'Todo #2', done: true }
    ],
    todosCount: 2,
    pendingTodosCount: 1,
    handleDeleteTodo: jest.fn(),
    handleToggleTodo: jest.fn(),
    handleNewTodo: jest.fn()
  })

  test('TodoApp show the component correctly', () => {
    render(<TodoApp />)
    expect(screen.getByText('Todo #1')).toBeTruthy()
    expect(screen.getByText('Todo #2')).toBeTruthy()
    expect(screen.getByRole('textbox').name).toBe('description') // input of the form
  })
})
