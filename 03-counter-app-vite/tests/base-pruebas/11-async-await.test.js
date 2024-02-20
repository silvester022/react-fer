import { string } from 'prop-types'
import { getImagen } from '../../src/base-pruebas/11-async-await'

describe('Pruebas en 11-async-await', () => {

  test('getImagen debe retornar la error sin apikey', async() => {

    const resp = await getImagen()
    expect(typeof url).toBe('No se encontro la imagen')
  })
})