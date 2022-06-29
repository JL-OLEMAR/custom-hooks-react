import React from 'react'

function ShowIncrement({ increment }) {
  console.log('ShowIncrement rendered')

  return (
    <button className='btn btn-primary' onClick={() => increment(5)}>
      Increment
    </button>
  )
}

export const MemorizedShowIncrement = React.memo(ShowIncrement)
