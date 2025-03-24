import { capitalizeFirst } from './case';
import { FEATURE_NAMES } from '../constants/features';

export const getCamperFeatures = camper => {
  const features = FEATURE_NAMES.filter(key => camper[key]);

  return [
    camper.transmission,
    camper.engine,
    ...features,
  ].map(f => capitalizeFirst(f));
};
