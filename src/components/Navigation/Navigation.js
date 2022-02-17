import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css'

const Navigation = () => (
  <div>
    <nav className={s.nav__container}>
      <NavLink
        to="/"
        className={s.link}
        style={({ isActive }) => ({
          borderBottom:  isActive ? '3px solid rgb(106, 106, 236)' : 'none',
        })}
      >
        Home
      </NavLink>
  
      <NavLink
        to="/movies"
        className={s.link}
        style={({ isActive }) => ({
          borderBottom:  isActive ? '3px solid rgb(106, 106, 236)' : 'none',
        })}
      >
        Movies
      </NavLink>
    </nav>
    <Outlet />
  </div>
  );
  
  export default Navigation;