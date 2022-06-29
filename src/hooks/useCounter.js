import { useState } from 'react'

export function useCounter(initialState = 10) {
  const [counter, setCounter] = useState(initialState)

  const increment = (value = 1) => {
    setCounter((preCounter) => preCounter + value)
  }

  const decrement = (value = 1) => {
    // if ( counter === 0 ) return;
    setCounter((preCounter) => preCounter - value)
  }

  const reset = () => {
    setCounter(initialState)
  }

  return {
    counter,
    increment,
    decrement,
    reset
  }
}
