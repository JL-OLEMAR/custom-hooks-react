import { useEffect, useState } from 'react'

import { Message } from './Message'

export function SimpleForm() {
  const [formState, setFormState] = useState({
    username: 'strider',
    email: 'test1@test.com'
  })
  const { username, email } = formState

  const onInputChange = ({ target }) => {
    setFormState({
      ...formState,
      [target.name]: target.value
    })
  }

  useEffect(() => {
    // console.log('useEffect called!');
  }, [])

  useEffect(() => {
    // console.log('formState changed!');
  }, [formState])

  useEffect(() => {
    // console.log('email changed!');
  }, [email])

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <small>Type in the first input: strider2</small>
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

      {username === 'strider2' && <Message />}
    </>
  )
}
