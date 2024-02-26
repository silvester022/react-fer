import { useMemo, useState } from 'react'
import { useCounter } from '../hooks/useCounter'

function heavyStuff(iterationNumber = 100) {
  for(let i = 0; i < iterationNumber; i++) {
    console.log('dentro del ciclo for')
  }

  return `${ iterationNumber } iteration number`
}

export const MemoHook = () => {

  const {counter, increment} = useCounter(0)
  const [show, setShow] = useState(true)

  const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

  return (
    <>
      <h1>Counter: <small>{counter}</small></h1>
      <hr />

      <h4>{ memorizedValue }</h4>

      <button
        className='btn btn-primary'
        onClick={() => increment()} >
        +1
      </button>

      <button
        className='btn btn-outline-primary'
        onClick={ () => setShow(!show) } >
        Show/hide {JSON.stringify(show)}
      </button>
    </>
  )
}