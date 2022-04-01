import { useReducer, useEffect } from 'react'

import { todoReducer } from './todoReducer.jsx'
import { TodoList } from './TodoList.jsx'
import './styles.css'
import { TodoAdd } from './TodoAdd.jsx'

const init = () => {
  return JSON.parse(window.localStorage.getItem('todos')) || []
}

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, [], init)

  useEffect(() => {
    window.localStorage.setItem('todos', JSON.stringify(state))
  }, [state])

  const handleAddTodo = (newTodo) => {
    dispatch({ type: 'add', payload: newTodo })
  }

  const handleDelete = (todoId) => {
    const action = { type: 'delete', payload: todoId }

    dispatch(action)
  }

  const handleToggle = (todoId) => {
    dispatch({ type: 'toggle', payload: todoId })
  }

  return (
    <div>
      <h1>TodoApp ({state.length})</h1>
      <hr />

      <div className='row'>
        <div className='col-7'>
          <TodoList
            handleDelete={handleDelete}
            handleToggle={handleToggle}
            todos={state}
          />
        </div>

        <div className='col-5'>
          <TodoAdd handleAddTodo={handleAddTodo} />
        </div>
      </div>
    </div>
  )
}
