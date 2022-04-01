/* eslint-disable no-useless-return */
import { useForm } from '../../hooks/useForm.jsx'

export const TodoAdd = ({ handleAddTodo }) => {
  const [{ description }, handleInputChange, reset] = useForm({
    description: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    if (description.trim().length <= 1) return

    const newTodo = {
      id: new Date().getTime(),
      desc: description,
      done: false
    }

    handleAddTodo(newTodo)
    reset()
  }

  return (
    <>
      <h4>Add TODO</h4>
      <hr />

      <form onSubmit={handleSubmit}>
        <input
          autoComplete='off'
          className='form-control'
          name='description'
          placeholder='Learn...'
          type='text'
          value={description}
          onChange={handleInputChange}
        />

        <button
          className='btn btn-outline-primary btn-settings'
          type='submit'
        >
          Add
        </button>
      </form>
    </>
  )
}
