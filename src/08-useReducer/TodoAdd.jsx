import { useForm } from '../hooks'

export function TodoAdd({ onNewTodo }) {
  const { formState, onInputChange, onResetForm } = useForm({
    description: ''
  })

  const { description } = formState

  const onFormSubmit = (evt) => {
    evt.preventDefault()
    if (description.trim().length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      description,
      done: false
    }

    onNewTodo(newTodo)
    onResetForm()
  }

  return (
    <form onSubmit={onFormSubmit}>
      <input
        className='form-control'
        name='description'
        placeholder='What is there to do?'
        type='text'
        value={description}
        onChange={onInputChange}
      />

      <button className='btn btn-outline-primary mt-1' type='submit'>
        Add
      </button>
    </form>
  )
}
