import { NavLink, Outlet } from 'react-router-dom';
import s from './Navigation.module.css'

const Navigation = () => (
  <div>
    <nav className={s.nav__container}>
      <NavLink
        to="/"
        className={s.link}
      >
        Home
      </NavLink>
  
      <NavLink
        to="/movies"
        className={s.link}
      >
        Movies
      </NavLink>
    </nav>
    <Outlet />
  </div>
  );
  
  export default Navigation;