import { TodoListItem } from './TodoListItem.jsx'

export const TodoList = ({ handleDelete, handleToggle, todos }) => {
  return (
    <ul className='list-group list-group-flush'>
      {todos.map((todo, i) => (
        <TodoListItem
          key={todo.id}
          handleDelete={handleDelete}
          handleToggle={handleToggle}
          index={i}
          todo={todo}
        />
      ))}
    </ul>
  )
}
