const persona = {
  nombre: 'ana',
  edad: 50,
  clave: 'estaesmiclave'
}

// const { clave: clave2, edad, nombre } = persona

// console.log( clave2 )
// console.log( edad )
// console.log( nombre )


const useContext = ({ nombre, edad, clave, rango = 9 }) => {
  // console.log(nombre, rango)

  return {
    nombreClave: clave,
    anios: edad,
    latlon: {
      lat: 9.123,
      lon: 8.123
    }
  }
}

const { nombreClave, anios, latlon: { lat, lon } } = useContext(persona)
console.log(nombreClave, anios)
console.log(lat, lon)