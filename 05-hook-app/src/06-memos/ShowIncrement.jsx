import { memo } from 'react'

export const ShowIncrement = memo(({increment}) => {

  console.log('me volvi a generar')

  return (
    <>
      <button
        className='btn btn-primary'
        onClick={() => {
          increment()
        }} >
        Incrementar
      </button>
    </>
  )
})
