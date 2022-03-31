import { useState, useCallback } from 'react'

import { MemozedShowIncrement } from './ShowIncrement.jsx'

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10)

  const increment = useCallback((num) => {
    setCounter((c) => c + num)
  }, [])

  // useEffect(() => {
  //   // ???
  // }, [increment])

  return (
    <div>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <MemozedShowIncrement increment={increment} />
    </div>
  )
}
