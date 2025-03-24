import { useSelector } from 'react-redux';

import css from './CamperReviews.module.css';

import Rating from '@components/Rating/Rating';

const CamperReviews = () => {
  const { selectedCamper: camper } = useSelector(state => state.campers);

  return (
    <div className={css.container}>
      <ul className={css.reviewsList}>
        {camper.reviews.map(review => (
          <li key={review.comment} className={css.reviewItem}>
            <div className={css.reviewHeader}>
              <div className={css.reviewerAvatar}>
                <span>{review.reviewer_name[0]}</span>
              </div>
              <div className={css.review}>
                <p>{review.reviewer_name}</p>
                <Rating value={review.reviewer_rating} />
              </div>
            </div>
            <p className={css.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CamperReviews;
