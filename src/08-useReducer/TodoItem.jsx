export function TodoItem({ todo, onDeleteTodo, onToggleTodo }) {
  return (
    <li className='list-group-item d-flex justify-content-between'>
      <span
        aria-label='span'
        className={`align-self-center ${
          todo.done ? 'text-decoration-line-through' : ''
        }`}
        onClick={() => onToggleTodo(todo.id)}
      >
        {todo.description}
      </span>
      <button
        className='btn btn-danger'
        type='button'
        onClick={() => onDeleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  )
}
