import React from 'react'

const ShowIncrement = ({ increment }) => {
  console.log('ShowIncrement rendered')

  return (
    <button className='btn btn-primary' onClick={() => increment(5)}>
      Increment
    </button>
  )
}

export const MemozedShowIncrement = React.memo(ShowIncrement)
