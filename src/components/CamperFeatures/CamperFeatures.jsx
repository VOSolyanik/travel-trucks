import { useSelector } from 'react-redux';

import css from './CamperFeatures.module.css';

import { camelToTitleCase } from '@utils/case';

import CamperBadges from '../CamperBadges/CamperBadges';

const CamperFeatures = () => {
  const { selectedCamper: camper } = useSelector(state => state.campers);

  if (!camper) return null;

  return (
    <div className={css.container}>
      <div className={css.section}>
        <CamperBadges camper={camper} />
      </div>

      <div className={css.section}>
        <h3 className={css.sectionTitle}>Vehicle Details</h3>
        <ul className={css.details}>
          <li className={css.detailItem}>
            <span>Form</span>
            <span>{camelToTitleCase(camper.form)}</span>
          </li>
          <li className={css.detailItem}>
            <span>Length</span>
            <span>{camper.length}</span>
          </li>
          <li className={css.detailItem}>
            <span>Width</span>
            <span>{camper.width}</span>
          </li>
          <li className={css.detailItem}>
            <span>Height</span>
            <span>{camper.height}</span>
          </li>
          <li className={css.detailItem}>
            <span>Tank</span>
            <span>{camper.tank}</span>
          </li>
          <li className={css.detailItem}>
            <span>Consumption</span>
            <span>{camper.consumption}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CamperFeatures;
