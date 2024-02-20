import PropTypes from 'prop-types'
import { useState } from 'react'

export const CounterApp = ({ value }) => {
  
  const [counter, setCounter ] = useState(value)

  function handleAdd() { 
    setCounter((prevCounter) => {
      return prevCounter +1
    })
  }

  function handleSubstract() {
    setCounter(counter -1)
  }

  function handleReset() {
    setCounter(value)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <h2>{counter}</h2>

      <button onClick={ (event) => handleAdd(event, 'hola')}> +1 </button>
      <button onClick={handleSubstract}> -1 </button>
      <button aria-label='btn-reset' onClick={handleReset}> Reset </button>
    </>
  )
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
}