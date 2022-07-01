import { todoReducer } from '../../src/08-useReducer/todoReducer.js'

describe('Tests in the todoReducer', () => {
  const initialState = [
    {
      id: 1,
      description: 'Learn React',
      done: false
    }
  ]

  test('should return the initial state', () => {
    const newState = todoReducer(initialState, {})

    expect(newState).toBe(initialState)
  })

  test('should add a todo', () => {
    const action = {
      type: '[TODO] Add Todo',
      payload: {
        id: 2,
        description: 'New todo #2',
        done: false
      }
    }

    const newState = todoReducer(initialState, action)

    expect(newState.length).toBe(2)
    expect(newState).toContain(action.payload)
  })

  test('should delete a todo', () => {
    const action = {
      type: '[TODO] Remove Todo',
      payload: initialState[0].id
    }

    const deleteTodo = todoReducer(initialState, action)

    expect(deleteTodo.length).toBe(0)
  })

  test('should perform the toggle of the todo', () => {
    const action = {
      type: '[TODO] Toggle Todo',
      payload: initialState[0].id
    }

    const toggleTodo = todoReducer(initialState, action)

    expect(toggleTodo[0].done).toBe(true)
  })
})
