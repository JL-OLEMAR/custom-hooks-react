import { useRef, useState, useEffect } from 'react'

export const useFetch = (url) => {
  const isMounted = useRef(true)
  const [state, setState] = useState({ data: null, loading: true, error: null })

  useEffect(() => {
    return () => {
      isMounted.current = false
    }
  }, [])

  useEffect(() => {
    setState({ data: null, loading: true, error: null })

    window.fetch(url)
      .then(res => res.json())
      .then(data => (
        isMounted.current && setState({ data, loading: false, error: null })
      ))
      .catch(() => {
        setState({ data: null, loading: false, error: 'The info could no be loaded' })
      })
  }, [url])

  return state
}
