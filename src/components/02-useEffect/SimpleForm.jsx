import { useState, useEffect } from 'react'

import { Message } from './Message.jsx'

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: ''
  })

  const { name, email } = formState

  useEffect(() => {
    // console.log("hey")
  }, [])

  useEffect(() => {
    // console.log("formState change")
  }, [formState])

  useEffect(() => {
    // console.log("email change")
  }, [email])

  const handleInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  return (
    <>
      <h1>useEffect</h1>
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

        <input
          autoComplete='off'
          className='form-control'
          name='email'
          placeholder='Type your email...'
          style={{ marginTop: '10px', marginBottom: '20px' }}
          type='email'
          value={email}
          onChange={handleInputChange}
        />
      </div>

      {name === '123' && <Message />}
    </>
  )
}
