import { Navigate, Route, Routes } from 'react-router-dom'

import { UserProvider } from './context'
import { HomePage } from './HomePage'
import { AboutPage } from './AboutPage'
import { LoginPage } from './LoginPage'
import { Navbar } from './Navbar'

export function MainApp() {
  return (
    <UserProvider>
      <Navbar />
      <hr />

      <Routes>
        <Route element={<HomePage />} path='/' />
        <Route element={<AboutPage />} path='about' />
        <Route element={<LoginPage />} path='login' />
        <Route element={<Navigate to='/about' />} path='/*' />
      </Routes>
    </UserProvider>
  )
}
