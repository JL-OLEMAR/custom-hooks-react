import React from 'react'

function Child({ number, increment }) {
  console.log('Child render')

  return (
    <button className='btn btn-primary me-3' onClick={() => increment(number)}>
      {number}
    </button>
  )
}

export const MemorizedChild = React.memo(Child)
