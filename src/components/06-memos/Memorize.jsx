import { useState } from 'react'

import { useCounter } from '../../hooks/useCounter.jsx'

import { MemozedSmall } from './Small.jsx'

export const Memorize = () => {
  const { counter, increment } = useCounter(10)
  const [show, setShow] = useState(true)

  return (
    <div>
      <h1>
        Counter: <MemozedSmall value={counter} />
      </h1>
      <hr />

      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>

      <button
        className='btn btn-outline-secondary ml-3'
        onClick={() => {
          setShow(!show)
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
