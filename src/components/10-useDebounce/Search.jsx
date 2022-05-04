import { useRef } from 'react'
import './styles.css'

export function Search() {
  const debounceRef = useRef()

  const onQueryChanged = (e) => {
    // If the debounce is not set, set it
    if (debounceRef.current) clearTimeout(debounceRef.current)

    debounceRef.current = setTimeout(() => {
      console.log('Searching for:', e.target.value)
    }, 350) // Then search for the query after 350ms
  }

  return (
    <>
      <div className='search-container'>
        <h3>Open the console</h3>
        <input
          className='form-control'
          placeholder='Search place...'
          type='text'
          onChange={onQueryChanged}
        />
      </div>
    </>
  )
}
