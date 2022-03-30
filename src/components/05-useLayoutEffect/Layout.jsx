import { useRef, useState, useLayoutEffect } from 'react'

import { useCounter } from '../../hooks/useCounter.jsx'
import { useFetch } from '../../hooks/useFetch.jsx'

export const Layout = () => {
  const { counter, increment } = useCounter(1)
  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )

  /* !!data === (double negation) === false
                    ó
    if (data){it shows} else {undefined == not shown} */
  const { quote } = !!data && data[0]
  const pTag = useRef()
  const [boxSize, setBoxSize] = useState({})

  useLayoutEffect(() => {
    setBoxSize(pTag.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

      <blockquote className='blockquote text-custom'>
        <p ref={pTag}>{quote}</p>
      </blockquote>

      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button className='btn btn-primary' onClick={increment}>
        Next quote
      </button>
    </div>
  )
}
