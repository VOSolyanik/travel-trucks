import { useMemo, useRef } from 'react';

import clsx from 'clsx';
import { Field, Form, Formik } from 'formik';

import css from './CatalogFilters.module.css';

import Button from '@components/Button/Button';
import { Icon } from '@components/Icon/Icon';

import {
  filtersToFormValues,
  formValuesToFilters,
  VEHICLE_EQUIPMENT,
  VEHICLE_TYPES,
} from './utils';

const CatalogFilters = ({ filters, onSubmit }) => {
  const ref = useRef();
  const initialValues = useMemo(() => filtersToFormValues(filters), [filters]);

  const handleFormSubmit = values => {
    const filters = formValuesToFilters(values);
    onSubmit(filters);
  };

  const handleFormReset = () => {
    ref.current.resetForm({ values: filtersToFormValues({}) });
    onSubmit({});
  };

  return (
    <Formik
      innerRef={ref}
      initialValues={initialValues}
      values={filters}
      onSubmit={handleFormSubmit}
    >
      {({ values }) => (
        <Form className={css.form}>
          <div className={css.section}>
            <label htmlFor="location" className={css.label}>
              Location
            </label>
            <div className={css.inputWrapper}>
              <Icon name="map" className={css.locationIcon} />
              <Field
                type="text"
                name="location"
                id="location"
                placeholder="City"
                className={css.input}
              />
            </div>
          </div>

          <div className={css.section}>
            <h2 className={css.sectionTitle}>Filters</h2>
            <fieldset className={css.fieldset}>
              <legend>Vehicle equipment</legend>
              <div
                className={css.equipmentGrid}
                role="group"
                aria-label="Vehicle equipment options"
              >
                {VEHICLE_EQUIPMENT.map(({ id, label }) => (
                  <label
                    key={id}
                    className={clsx(css.equipmentItem, {
                      [css.active]: values.equipment.includes(id),
                    })}
                  >
                    <Field
                      type="checkbox"
                      name="equipment"
                      value={id}
                      className={css.checkbox}
                      id={`equipment-${id}`}
                    />
                    <Icon
                      name={id.toLowerCase()}
                      size={32}
                      className={css.equipmentIcon}
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <fieldset className={css.fieldset}>
              <legend>Vehicle type</legend>
              <div
                className={css.typeGrid}
                role="radiogroup"
                aria-label="Vehicle type options"
              >
                {VEHICLE_TYPES.map(({ id, label }) => (
                  <label
                    key={id}
                    className={clsx(css.typeItem, {
                      [css.active]: values.vehicleType === id,
                    })}
                  >
                    <Field
                      type="radio"
                      name="vehicleType"
                      value={id}
                      className={css.radio}
                      id={`vehicleType-${id}`}
                    />
                    <Icon
                      name={id.toLowerCase()}
                      size={32}
                      className={css.typeIcon}
                      aria-hidden="true"
                    />
                    <span>{label}</span>
                  </label>
                ))}
              </div>
            </fieldset>
          </div>
          <div className={css.formActions}>
            <Button type="submit">Search</Button>
            {(values.location ||
              values.vehicleType ||
              !!values.equipment.length) && (
              <Button
                type="reset"
                variant="secondary"
                onClick={handleFormReset}
              >
                Reset
              </Button>
            )}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CatalogFilters;
