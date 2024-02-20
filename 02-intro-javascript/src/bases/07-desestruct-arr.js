// const personajes = ['a', 'b', 'c']
// const [, , p3] = personajes
// console.log(p3)


// const retornaArreglo = () => {
//   return ['abc', 123]
// }
// const [letras, numeros] = retornaArreglo()
// console.log(letras, numeros)


// tarea
const useState = (valor) => {
  return [valor, () => { console.log('hola mundo') }]
}
const [nombre, setNombre] = useState('hola')
console.log(nombre);
setNombre()
