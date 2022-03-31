import { useMemo, useState } from 'react'

import { useCounter } from '../../hooks/useCounter.jsx'
import { heavyProcess } from '../../helpers/heavyProcess.jsx'

export const MemoHook = () => {
  const { counter, increment } = useCounter(50)
  const [show, setShow] = useState(true)

  const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter])

  return (
    <div>
      <h1>MemoHook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />

      <p>{memoHeavyProcess}</p>

      <button className='btn btn-primary' onClick={increment}>
        +1
      </button>
      <button
        className='btn btn-outline-secondary ml-3'
        onClick={() => setShow(!show)}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  )
}
