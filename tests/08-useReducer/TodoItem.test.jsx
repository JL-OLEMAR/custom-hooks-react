import { fireEvent, render, screen } from '@testing-library/react'

import { TodoItem } from '../../src/08-useReducer/TodoItem.jsx'

describe('Tests in <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Soul stones',
    done: false
  }
  const onDeleteTodoMock = jest.fn()
  const onToggleTodoMock = jest.fn()

  // Reset all mocks before each test
  beforeEach(() => jest.clearAllMocks())

  test('should show the todo pending by completion', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )
    const liElement = screen.getByRole('listitem')

    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    )

    // When there is an aria-label, look for getByLabelText
    const spanElement = screen.getByLabelText('span')

    // Because there is a blank space in the className, we need to use contains
    expect(spanElement.className).toContain('align-self-center')
    expect(spanElement.className).not.toContain('text-decoration-line-through')
  })

  test('should show the completed todo', () => {
    todo.done = true // Set the todo to done

    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    // When there is an aria-label, look for getByLabelText
    const spanElement = screen.getByLabelText('span')

    // Because there is a blank space in the className, we need to use contains
    expect(spanElement.className).toContain('text-decoration-line-through')
  })

  test('should call onToggleTodo when the span is clicked', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const spanElement = screen.getByLabelText('span')

    fireEvent.click(spanElement)
    expect(spanElement.className).toContain('text-decoration-line-through')
    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id)
  })

  test('should call onDeleteTodo when the button is clicked', () => {
    render(
      <TodoItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    )

    const buttonElement = screen.getByRole('button')

    fireEvent.click(buttonElement)
    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id)
  })
})
