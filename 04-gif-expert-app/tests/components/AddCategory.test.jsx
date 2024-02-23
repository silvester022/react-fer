import { fireEvent, render, screen } from '@testing-library/react'
import { AddCategory } from '../../src/components/AddCategory'

describe('Pruebas en <AddCategory />', () => {

  const text = 'hola'

  test('debe de cambiar el valor de la caja de texto', () => {

    render(<AddCategory onNewCategory={() => { }} />)

    const input = screen.getByRole('textbox')

    fireEvent.input(input, { target: { value: text } })
    // screen.debug()

    expect(input.value).toBe(text)
  })

  test('debe de llamar onNewCategory si el input tiene un valor', () => {

    const onNewCategory = jest.fn()

    render(<AddCategory onNewCategory={onNewCategory} />)

    const input = screen.getByRole('textbox')
    const form = screen.getByRole('form')

    fireEvent.input(input, { target: { value: text } })
    fireEvent.submit(form)
    // screen.debug()

    expect(input.value).toBe('')
    expect(onNewCategory).toHaveBeenCalled()
    expect(onNewCategory).toHaveBeenCalledTimes(1)
    expect(onNewCategory).toHaveBeenCalledWith(text)
  })
  
  test('no debe llamar el onNewCategory si el input está vacio', () => {

    const onNewCategory = jest.fn()
    render(<AddCategory onNewCategory={onNewCategory} />)

    const form = screen.getByRole('form')
    fireEvent.submit(form)
    // screen.debug()

    // expect(onNewCategory).toHaveBeenCalledTimes(0)
    expect(onNewCategory).not.toHaveBeenCalled()
  })
})