import css from './CamperList.module.css';

import CamperCard from '@components/CamperCard/CamperCard';
import ErrorMessage from '@components/ErrorMessage/ErrorMessage';

const CamperList = ({ campers, isLoading, error }) => {
  if (!isLoading && error) {
    return <ErrorMessage message={error} />;
  }

  if (!isLoading && !campers.length) {
    return <div className={css.emptyState}>No campers found</div>;
  }

  return (
    <ul className={css.list}>
      {campers.map(camper => (
        <li key={camper.id}>
          <CamperCard camper={camper} />
        </li>
      ))}
    </ul>
  );
};

export default CamperList;
