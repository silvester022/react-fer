// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes';
import heroes from '../data/heroes'

export const getHeroById = (id) => heroes.find(hero => hero.id === id)
// console.log(getHeroById(3))


export const getHeroeByOwner = (owner) => heroes.filter(heroe => heroe.owner === owner)
// console.log(getHeroeByOwner('Marvel'))