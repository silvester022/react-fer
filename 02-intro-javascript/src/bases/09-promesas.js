import { getHeroById } from './bases/08-imp-exp'

// const promesa = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const heroe = getHeroById(3)
//     resolve( heroe );

//     reject('No se encontro el heroe')
//   }, 2000)
// })

const getHeroeByIdAsync = (id) => {

  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const hero = getHeroById(id)

      !hero ? reject('No se encontro el heroe') : resolve(hero)
    }, 2000)
  })
}

getHeroeByIdAsync(99)
  .then(console.log)
  .catch(console.log)