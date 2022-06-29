import React from 'react'

function Small({ value }) {
  console.log('Called me back')

  return <small>{value}</small>
}

export const MemorizedSmall = React.memo(Small)
