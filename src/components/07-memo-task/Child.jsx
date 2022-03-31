import React from 'react'

const Child = ({ number, increment }) => {
  console.log('Child render')

  return (
    <button
      className='btn btn-primary me-3'
      onClick={() => increment(number)}
    >
      {number}
    </button>
  )
}

export const MemozedChild = React.memo(Child)
