import { useMemo } from 'react';

import clsx from 'clsx';

import css from './CamperBadges.module.css';

import Badge from '@components/Badge/Badge';
import { Icon } from '@components/Icon/Icon';

import { FEATURE_ICONS_MAP } from '@constants/features';

import { getCamperFeatures } from '@utils/camper';

const CamperBadges = ({ camper, className }) => {
  const availableFeatures = useMemo(() => getCamperFeatures(camper), [camper]);

  if (!camper) return null;

  return (
    <div className={clsx(css.features, className)}>
      {availableFeatures.map(feature => (
        <Badge key={feature}>
          <Icon name={FEATURE_ICONS_MAP[feature.toLowerCase()]} size={24} />
          <span>{feature}</span>
        </Badge>
      ))}
    </div>
  );
};

export default CamperBadges;
