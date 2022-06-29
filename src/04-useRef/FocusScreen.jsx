import { useRef } from 'react'

export function FocusScreen() {
  const inputRef = useRef()

  const onClick = () => {
    // document.querySelector('input').select();
    // console.log(inputRef);
    inputRef.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>
      <hr />

      <input
        ref={inputRef}
        className='form-control'
        placeholder='Type your name'
        type='text'
      />

      <button className='btn btn-primary mt-2' onClick={onClick}>
        Set focus
      </button>
    </>
  )
}
