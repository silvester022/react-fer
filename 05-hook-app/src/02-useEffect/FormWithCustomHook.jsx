import { useForm } from '../hooks/useForm'

export const FormWithCustomHook = () => {

  const {onInputChange, onResetForm, username, email, password} = useForm({
    username: '',
    email: '',
    password: ''
  })

  // const {username, email, password} = formState

  return (
    <>
      <h1>Form with custom hook</h1>
      <hr />

      <input
        type="text"
        className='form-control'
        placeholder='user'
        name='username'
        value={username}
        onChange={onInputChange} />

      <input
        type="email"
        className='form-control mt-2'
        placeholder='email'
        name='email'
        value={email}
        onChange={onInputChange} />
      
      <input
        type="password"
        className='form-control mt-2'
        placeholder='pass'
        name='password'
        value={password}
        onChange={onInputChange} />

      
      <button 
        className='btn btn-primary mt-2'
        onClick={onResetForm}>
          Borrar
      </button>
    </>
  )
}
