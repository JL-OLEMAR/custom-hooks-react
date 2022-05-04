import { NavLink, Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link className='navbar-brand' to='/'>
          useContext
        </Link>

        <div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div className='navbar-nav'>
            <NavLink exact activeClassName='active' className='nav-link' to='/'>
              Home
            </NavLink>

            <NavLink
              exact
              activeClassName='active'
              className='nav-link'
              to='/about'
            >
              About
            </NavLink>

            <NavLink
              exact
              activeClassName='active'
              className='nav-link'
              to='/login'
            >
              Login
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  )
}
