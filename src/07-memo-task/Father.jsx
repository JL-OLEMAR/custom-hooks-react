import { useState, useCallback } from 'react'

import { MemorizedChild } from './Child.jsx'

export function Father() {
  const numbers = [2, 4, 6, 8, 10]
  const [valor, setValor] = useState(0)

  const increment = useCallback((num) => {
    setValor((preValue) => preValue + num)
  }, [])

  return (
    <div>
      <h1>Father</h1>
      <p>Total: {valor}</p>
      <hr />

      {numbers.map((n) => (
        <MemorizedChild key={n} increment={increment} number={n} />
      ))}
    </div>
  )
}
