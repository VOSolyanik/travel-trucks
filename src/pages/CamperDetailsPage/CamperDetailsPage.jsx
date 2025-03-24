import { useEffect, Suspense } from 'react';

import { Helmet } from 'react-helmet-async';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { NavLink, Outlet, useParams } from 'react-router-dom';

import clsx from 'clsx';

import css from './CamperDetailsPage.module.css';

import { fetchCamperById } from '@redux/slices/campersSlice';

import BookingForm from '@components/BookingForm/BookingForm';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';
import { Icon } from '@components/Icon/Icon';
import Loader from '@components/Loader/Loader';

import { BASE_TITLE } from '@constants/pages';

const CamperDetailsPage = () => {
  const { camperId } = useParams();
  const dispatch = useDispatch();
  const location = useLocation();
  const backLinkHref = location.state?.from || '/catalog';

  const {
    selectedCamper: camper,
    isLoading,
    error,
  } = useSelector(state => state.campers);

  useEffect(() => {
    if (camperId) {
      dispatch(fetchCamperById(camperId));
    }
  }, [dispatch, camperId]);

  if (isLoading) return <Loader />;

  if (error) return <ErrorMessage message={error} />;

  if (!camper) return null;

  const reviewsCount = camper.reviews.length;
  const formattedPrice = camper.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <>
      <Helmet>
        <title>
          {BASE_TITLE} - {camper.name}
        </title>
      </Helmet>
      <div className="container">
        <main className={css.mainContent}>
          {/* Main camper details section */}
          <h1 className={css.title}>{camper.name}</h1>
          <div className={css.info}>
            <Link to={`/catalog/${camper.id}/reviews`} className={css.rating}>
              <Icon name="star" size={20} className={css.star} />
              <span>
                {camper.rating}({reviewsCount} Reviews)
              </span>
            </Link>
            <div className={css.location}>
              <Icon name="map" size={20} />
              <span>{camper.location}</span>
            </div>
          </div>
          <p className={css.price}>€{formattedPrice}</p>

          <ul className={css.gallery}>
            {camper.gallery.map((image, index) => (
              <li key={index}>
                <img src={image.original} alt={`${camper.name} view ${index + 1}`} className={css.galleryImage} />
              </li>
            ))}
          </ul>
          <p className={css.description}>{camper.description}</p>
        </main>
        <nav className={css.subNav}>
          <NavLink
            to="features"
            state={{ from: backLinkHref }}
            className={({ isActive }) => clsx(
              css.subNavLink, isActive && css.subNavLinkActive,
            )}
          >
            Features
          </NavLink>
          <NavLink
            to="reviews"
            state={{ from: backLinkHref }}
            className={({ isActive }) => clsx(
              css.subNavLink, isActive && css.subNavLinkActive,
            )}
          >
            Reviews
          </NavLink>
        </nav>
        <div className={css.detailsContent}>
          <div className={css.subPageContent}>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
          <BookingForm camper={camper} />
        </div>
      </div>
    </>
  );
};

export default CamperDetailsPage;
