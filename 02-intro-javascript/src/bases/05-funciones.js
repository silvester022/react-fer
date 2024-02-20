// function saludar(nombre) {
//   return `hola ${nombre}`
// }

const saludar = function (nombre) {
  return `hola ${nombre}`
}

const saludar2 = (nombre) => `hola ${nombre}`

console.log(saludar2('juan'))


const getUser = () =>
({
  uid: 'ABC123',
  username: 'ELLOCOFELIZ'
})


const user = getUser()
console.log(user)


// tarea
const getUsuarioActivo = (nombre) =>
({
  uid: 'HOLAJEJE',
  username: nombre
})


const usuarioActivo = getUsuarioActivo('Manolo')
console.log(usuarioActivo)