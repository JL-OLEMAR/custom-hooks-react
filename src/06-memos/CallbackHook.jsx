import { useCallback, useEffect, useState } from 'react'

import { MemorizedShowIncrement } from './ShowIncrement.jsx'

export function CallbackHook() {
  const [counter, setCounter] = useState(10)

  const incrementFather = useCallback((value) => {
    setCounter((prevCounter) => prevCounter + value)
  }, [])

  useEffect(() => {
    // incrementFather();
  }, [incrementFather])

  // const incrementFather = () => {
  //     setCounter( counter + 1);
  // }

  return (
    <>
      <h1>useCallback Hook: {counter} </h1>
      <hr />

      <MemorizedShowIncrement increment={incrementFather} />
    </>
  )
}
