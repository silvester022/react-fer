// function funcion() {
//   return 123
// }

// const newMessage = {
//   message: 'hola mundo', 
//   title: 'titulo'
// }

import PropTypes from 'prop-types'

export const FirstApp = ({title, subtitle, name}) => {
  // console.log(props)

  // if(!title) throw new Error('El title no existe')

  return (
    <>
      {/* <code>{JSON.stringify(newMessage)}</code> */}
      {/* <h1>{funcion()}</h1> */}
      <h1 data-testid="test-title">{title}</h1>
      <p>{subtitle}</p>
      <p>{subtitle}</p>
      <p>{name}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}

FirstApp.defaultProps = {
  // title: 'no hay titulo',
  subtitle: 'no hay subtitulo',
  name: 'hola'
}