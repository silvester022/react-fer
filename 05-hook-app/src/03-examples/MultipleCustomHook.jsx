import { useCounter, useFetch } from '../hooks'
import { LoadingMessage } from './LoadingMessage'
import { PokemonCard } from './PokemonCard'

export const MultipleCustomHook = () => {

  const { counter, decrement, increment } = useCounter(1)
  const { data, hasError, isLoading } = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`)

  return (
    <>
      <h1>informacion de pokemon</h1>
      <hr />

      {
        isLoading
          ? <LoadingMessage />
          : (
            <PokemonCard
              id={counter}
              name={data.name}
              sprites={[
                data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
              ]} />
          )
      }

      {/* <h2>{data?.name}</h2> */}

      <button
        className='btn btn-primary'
        onClick={() => counter > 1 && decrement()}>
        Anterior
      </button>

      <button
        className='btn btn-primary'
        onClick={() => increment()}>
        Siguiente
      </button>
    </>
  )
}