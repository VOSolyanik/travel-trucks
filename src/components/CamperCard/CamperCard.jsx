import { useMemo } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import clsx from 'clsx';

import css from './CamperCard.module.css';

import { addToFavorites, removeFromFavorites } from '@redux/slices/favoritesSlice';

import CamperBadges from '@components/CamperBadges/CamperBadges';
import { Icon } from '@components/Icon/Icon';

import btnCss from '../Button/Button.module.css';

const CamperCard = ({ camper }) => {
  const dispatch = useDispatch();
  const { ids: favoriteIds } = useSelector(state => state.favorites);

  const formattedPrice = camper.price.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const mainImage = camper.gallery[0].original;
  const reviewsCount = camper.reviews.length;

  const isFavorite = useMemo(() =>
    favoriteIds.includes(camper.id)
  , [favoriteIds, camper.id]);

  const handleFavoriteClick = id => {
    if (favoriteIds.includes(id)) {
      dispatch(removeFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img src={mainImage} alt={camper.name} className={css.image} />
      </div>

      <div className={css.content}>
        <div className={css.header}>
          <h2 className={css.title}>{camper.name}</h2>
          <div className={css.priceWrapper}>
            <p className={css.price}>€{formattedPrice}</p>
            <button type="button" className={css.favoriteButton} onClick={() => handleFavoriteClick(camper.id)}>
              <Icon name="heart" className={isFavorite ? css.favoriteActive : css.favorite} />
            </button>
          </div>
        </div>

        <div className={css.info}>
          <Link to={`/catalog/${camper.id}/reviews`} target="_blank" className={css.rating}>
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

        <p className={css.description}>{camper.description}</p>

        <CamperBadges camper={camper} className={css.features} />

        <Link
          to={`/catalog/${camper.id}`}
          target="_blank"
          className={clsx(btnCss.button, btnCss.primary, css.showMoreBtn)}
        >
          Show more
        </Link>
      </div>
    </div>
  );
};

export default CamperCard;
