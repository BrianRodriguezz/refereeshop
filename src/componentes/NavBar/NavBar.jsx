import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link to="/">
        <img src="../img/logo.png" className='imglogo' alt="Logoweb" />
        <p>Referee Shop</p>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink className="miBtn" to="/categoria/2"> Indumentaria </NavLink>
          </li>

          <li>
            <NavLink className="miBtn" to="/categoria/3"> Accesorios </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar