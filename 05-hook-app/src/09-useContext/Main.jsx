import { Navigate, Route, Routes, Link } from 'react-router-dom'
import { AboutPage, HomePage, LoginPage } from './'
import { Navbar } from './Navbar'
import { UserProvider } from './context/UserProvider'

export const Main = () => {
  return (
    <UserProvider>
      <h1>Main App</h1>

      <Navbar />
      <hr />

      <Routes>
        <Route path='/' element={ <HomePage /> } />
        <Route path='about' element={ <AboutPage /> } />
        <Route path='login' element={ <LoginPage /> } />

        {/* <Route path='/*' element={<LoginPage />} /> */}
        <Route path='/*' element={ <Navigate to={'/about'} /> } />
      </Routes>
    </UserProvider>
  )
}
