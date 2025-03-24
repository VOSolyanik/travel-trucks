import React from 'react';

import { Link } from 'react-router-dom';

import clsx from 'clsx';

import css from './Header.module.css';

import Navigation from '@components/Navigation/Navigation';

import logoSvg from '@assets/images/Logo.svg';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={clsx('container', css.container)}>
        <Link to="/" className={css.logo}>
          <img src={logoSvg} alt="Travel Trucks" />
        </Link>
        <Navigation />
      </div>
    </header>
  );
};

export default Header;
