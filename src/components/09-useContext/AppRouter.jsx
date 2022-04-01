import {
  Route,
  Switch,
  BrowserRouter as Router,
  Redirect
} from 'react-router-dom'

import { HomeScreen } from './HomeScreen.jsx'
import { AboutScreen } from './AboutScreen.jsx'
import { LoginScreen } from './LoginScreen.jsx'
import { Navbar } from './Navbar.jsx'

export const AppRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />

        <div className='container'>
          <Switch>
            <Route exact component={HomeScreen} path='/' />
            <Route exact component={AboutScreen} path='/about' />
            <Route exact component={LoginScreen} path='/login' />
            <Redirect to='/' />
          </Switch>
        </div>
      </div>
    </Router>
  )
}
