import DatePicker, { registerLocale } from 'react-datepicker';

import enGB from 'date-fns/locale/en-GB';
import { useField, useFormikContext } from 'formik';

import 'react-datepicker/dist/react-datepicker.css';
import './DatePickerField.css';

registerLocale('en-GB', enGB);

const DatePickerField = ({ ...props }) => {
  const { setFieldValue } = useFormikContext();
  const [field] = useField(props);
  return (
    <DatePicker
      {...field}
      {...props}
      selected={(field.value && new Date(field.value)) || null}
      onChange={val => {
        setFieldValue(field.name, val);
      }}
    />
  );
};

export default DatePickerField;
