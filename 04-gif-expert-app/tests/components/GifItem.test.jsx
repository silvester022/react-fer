import { render } from '@testing-library/react'
import { GifItem } from '../../src/components/GifItem'

describe('Pruebas en <GifItem />', () => {

  const title = 'Hombre lobo'
  const url = 'https://www.google.com'

  test('debe de hacer match con el snapshot', () => {

    const { container } = render(<GifItem title={title} url={url} />)
    expect(container).toMatchSnapshot()
  })
})