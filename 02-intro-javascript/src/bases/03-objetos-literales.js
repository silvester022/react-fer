const persona = {
  nombre: 'ana',
  apellido: 'lopez',
  edad: 90,
  direccion: {
    ciudad: 'Ciudad jeje',
    zip: 909090,
    lat: 1.000000,
    lon: 9.888888
  }
}

console.log( persona );


const persona2 = { ...persona };
persona2.edad = 8

console.log(persona2);
console.log(persona);