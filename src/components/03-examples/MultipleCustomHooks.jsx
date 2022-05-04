import { useCounter } from '../../hooks/useCounter.jsx'
import { useFetch } from '../../hooks/useFetch.jsx'

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1)
  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  )

  /* !!data === (double negation) === false
                    ó
    if (data){it shows} else {undefined == not shown} */
  const { author, quote } = !!data && data[0]

  return (
    <div>
      <h1>BreakingBad Quotes</h1>
      <hr />

      {loading ? (
        <div className='alert alert-info text-center'>Loading...</div>
      ) : (
        <blockquote className='blockquote text-custom'>
          <p>{quote}</p>
          <footer className='blockquote-footer'>{author}</footer>
        </blockquote>
      )}

      <button className='btn btn-primary' onClick={increment}>
        Next quote
      </button>
    </div>
  )
}
