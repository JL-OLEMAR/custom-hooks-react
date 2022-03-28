import { useEffect } from 'react'

import { useForm } from '../../hooks/useForm.jsx'

export const FormWithCustomHook = () => {
  const [formValues, handleInputChange] = useForm({
    name: '',
    email: '',
    password: ''
  })

  const { name, email, password } = formValues

  useEffect(() => {
    console.log('change email')
  }, [email])

  const handleSubmit = e => {
    e.preventDefault()

    console.log(formValues)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>FormWithCustomHook</h1>
      <hr />

      <div className='form-group'>
        <input
          autoComplete='off'
          className='form-control'
          name='name'
          placeholder='Type your name...'
          style={{ marginBottom: '10px' }}
          type='text'
          value={name}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          autoComplete='off'
          className='form-control'
          name='email'
          placeholder='Type your email...'
          style={{ marginBottom: '10px', marginTop: '10px' }}
          type='email'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className='form-group'>
        <input
          className='form-control'
          name='password'
          placeholder='*****'
          style={{ marginBottom: '10px', marginTop: '10px' }}
          type='password'
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <button className='btn btn-primary' type='submit'>
        Save
      </button>
    </form>
  )
}
