import { useState } from 'react'

import { AppRouter } from './AppRouter.jsx'
import { UserContext } from './UserContext.jsx'
import './styles.css'

export const MainApp = () => {
  const [user, setUser] = useState({})

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <AppRouter />
    </UserContext.Provider>
  )
}
