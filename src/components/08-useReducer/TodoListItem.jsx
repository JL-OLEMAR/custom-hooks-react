export const TodoListItem = ({ handleDelete, handleToggle, index, todo }) => {
  return (
    <li key={todo.id} className='list-group-item'>
      <p
        className={`${todo.done && 'completed'}`}
        onClick={() => handleToggle(todo.id)}
      >
        {index + 1} · {todo.desc}
      </p>
      <button
        className='btn btn-danger btn-sm'
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </li>
  )
}
