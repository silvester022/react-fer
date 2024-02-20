const nombre = 'juan'
const apellido = 'lopez'

// const nombreCompleto = nombre + ' ' + apellido
const nombreCompleto = `${nombre} ${apellido} ${ 5*5 }`
console.log(nombreCompleto)


function getSaludo(nombre) {
  return `hola ${nombre}`
}
console.log(`${ getSaludo(nombreCompleto) }`);