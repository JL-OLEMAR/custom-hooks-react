import { useCounter } from '../../hooks/useCounter.jsx'

export const CounterWithCustomHook = () => {
  const { counter, increment, decrement, reset } = useCounter(100)

  return (
    <div>
      <h1>Counter With Hook: {counter}</h1>
      <hr />

      <button className='btn btn-primary' onClick={() => increment(2)}>
        +1
      </button>

      <button
        className='btn btn-danger'
        style={{ marginLeft: '5px', marginRight: '5px' }}
        onClick={reset}
      >
        Reset
      </button>

      <button className='btn btn-primary' onClick={() => decrement(2)}>
        -1
      </button>
    </div>
  )
}
