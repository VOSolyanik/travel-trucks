import css from './Rating.module.css';

import { Icon } from '@components/Icon/Icon';

const Rating = ({ value }) => {
  return (
    <div className={css.rating}>
      {Array.from({ length: 5 }, (_, i) => (
        <Icon key={i} name="star" size={16} className={i < value ? css.active : css.inactive} />
      ))}
    </div>
  );
};

export default Rating;
