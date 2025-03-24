import { NavLink } from 'react-router-dom';

import clsx from 'clsx';

import css from './Navigation.module.css';

const Navigation = () => {
  return (
    <nav className={css.navigation}>
      <ul className={css.navMenu}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(css.navLink, isActive ? css.navLinkActive : '')
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/catalog"
            className={({ isActive }) =>
              clsx(css.navLink, isActive ? css.navLinkActive : '')
            }
          >
            Catalog
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
