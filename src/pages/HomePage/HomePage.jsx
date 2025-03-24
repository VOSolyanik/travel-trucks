import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import css from './HomePage.module.css';

import btnCss from '@components/Button/Button.module.css';

import { BASE_TITLE } from '@constants/pages';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>{BASE_TITLE} - Camper Van Rentals</title>
      </Helmet>
      <section className={css.hero}>
        <div className={clsx('container', css.container)}>
          <h1 className={css.title}>Campers of your dreams</h1>
          <p className={css.description}>
            You can find everything you want in our catalog
          </p>
          <Link to="/catalog" className={clsx(btnCss.button, btnCss.primary)}>
            View Now
          </Link>
        </div>
      </section>
    </>
  );
};

export default HomePage;
