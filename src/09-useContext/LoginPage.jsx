import { useContext } from 'react'

import { UserContext } from './context'

export function LoginPage() {
  const { user, setUser } = useContext(UserContext)

  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre aria-label='pre'>{JSON.stringify(user, null, 3)}</pre>

      <button
        className='btn btn-primary'
        type='button'
        onClick={() =>
          setUser({ id: 123, name: 'Juan', email: 'juan@google.com' })
        }
      >
        Set user
      </button>
    </>
  )
}
