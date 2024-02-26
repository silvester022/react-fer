import { useLayoutEffect, useRef, useState } from 'react'

export const PokemonCard = ({ id, name, sprites = [] }) => {

  const h2Ref = useRef()

  const [boxSize, setBoxSize] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const { width, height } = h2Ref.current.getBoundingClientRect()
    setBoxSize({ width, height })

  }, [])

  return (
    <section
      style={{ height: 200 }}>

      <h2
        ref={h2Ref}
        className='text-capitalize'
        style={{ display: 'flex' }} >#{id} - {name}</h2>

      {/* imagenes */}
      <div>
        {
          sprites.map(sprite => (
            <img key={sprite} src={sprite} alt={name} />
          )
          )
        }
      </div>

      <code>{JSON.stringify(boxSize)}</code>
    </section>
  )
}
