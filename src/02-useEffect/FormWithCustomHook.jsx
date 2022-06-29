import { useForm } from '../hooks'

export function FormWithCustomHook() {
  const { formState, onInputChange, onResetForm } = useForm({
    username: '',
    email: '',
    password: ''
  })

  const { username, email, password } = formState

  return (
    <>
      <h1>Form with custom Hook</h1>
      <hr />

      <input
        className='form-control'
        name='username'
        placeholder='Username'
        type='text'
        value={username}
        onChange={onInputChange}
      />

      <input
        className='form-control mt-2'
        name='email'
        placeholder='Email'
        type='email'
        value={email}
        onChange={onInputChange}
      />

      <input
        className='form-control mt-2'
        name='password'
        placeholder='Password'
        type='password'
        value={password}
        onChange={onInputChange}
      />

      <button className='btn btn-primary mt-2' onClick={onResetForm}>
        Delete
      </button>
    </>
  )
}
