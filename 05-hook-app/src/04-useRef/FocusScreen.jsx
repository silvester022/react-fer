import { useRef } from 'react'

export const FocusScreen = () => {

  const inputRef = useRef()
  // console.log(ref)

  const onClick = () => {
    // console.log(inputRef)
    inputRef.current.select()
  }

  return (
    <>
      <h1>Focus Screen</h1>

      <input 
        ref={inputRef}
        type="text" 
        placeholder="Ingresa algo"
        className='form-control' />

      <button 
        className='btn btn-primary mt-2'
        onClick={onClick} >
        Set focus
      </button>
    </>
  )
}