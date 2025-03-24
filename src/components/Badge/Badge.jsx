import clsx from 'clsx';

import css from './Badge.module.css';

const Badge = ({ children }) => {
  return <span className={clsx(css.badge)}>{children}</span>;
};

export default Badge;
