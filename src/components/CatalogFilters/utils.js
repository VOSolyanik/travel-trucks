
export const VEHICLE_EQUIPMENT = [
  { id: 'AC', label: 'AC' },
  { id: 'automatic', label: 'Automatic' },
  { id: 'kitchen', label: 'Kitchen' },
  { id: 'TV', label: 'TV' },
  { id: 'bathroom', label: 'Bathroom' },
];

export const VEHICLE_TYPES = [
  { id: 'panelTruck', label: 'Van' },
  { id: 'fullyIntegrated', label: 'Fully Integrated' },
  { id: 'alcove', label: 'Alcove' },
];

export const filtersToFormValues = (filters) => ({
  location: filters.location ?? '',
  vehicleType: filters.form ?? '',
  equipment: VEHICLE_EQUIPMENT.reduce((acc, { id }) => {
    if (id === 'automatic' && filters.transmission === 'automatic') {
      acc.push(id);
    } else if (filters[id]) {
      acc.push(id);
    }
    return acc;
  }
  , []),
});

export const formValuesToFilters = (values) => {
  return {
    location: values.location,
    form: values.vehicleType,
    ...values.equipment.reduce((acc, id) => {
      if (id === 'automatic') {
        return { ...acc, transmission: 'automatic' };
      }
      return { ...acc, [id]: true };
    }, {}),
  };;
};
