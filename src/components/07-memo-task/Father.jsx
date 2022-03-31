import { useState, useCallback } from 'react'

import { MemozedChild } from './Child.jsx'

export const Father = () => {
  const numbers = [2, 4, 6, 8, 10]
  const [valor, setValor] = useState(0)

  const increment = useCallback((num) => {
    setValor((valor) => valor + num)
  }, [])

  return (
    <div>
      <h1>Father</h1>
      <p>Total: {valor}</p>
      <hr />

      {numbers.map((n) => (
        <MemozedChild key={n} increment={increment} number={n} />
      ))}
    </div>
  )
}
