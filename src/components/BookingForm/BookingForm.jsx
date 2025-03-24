import { useState } from 'react';

import { toast } from 'react-hot-toast';

import { Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import css from './BookingForm.module.css';

import Button from '@components/Button/Button';
import DatePickerField from '@components/DatePickerField/DatePickerField';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name is too short')
    .max(30, 'Name is too long')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Email is required'),
  date: Yup.date()
    .min(new Date(), 'Date cannot be in the past')
    .required('Date is required'),
  comment: Yup.string()
    .max(500, 'Comment is too long'),
});

const initialValues = {
  name: '',
  email: '',
  date: '',
  comment: '',
};

const BookingForm = ({ camper }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      console.log('Booking submitted:', {
        camperId: camper.id,
        ...values,
      });

      toast.success('Booking submitted successfully!');
      resetForm();
    } catch {
      toast.error('Failed to submit booking. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={css.container}>
      <h3 className={css.title}>Book your campervan now</h3>
      <p className={css.subTitle}>
        Stay connected! We are always ready to help you.
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.fieldGroup}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.input}
              />
              {errors.name && touched.name && (
                <div className={css.error}>{errors.name}</div>
              )}
            </div>

            <div className={css.fieldGroup}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.input}
              />
              {errors.email && touched.email && (
                <div className={css.error}>{errors.email}</div>
              )}
            </div>

            <div className={css.fieldGroup}>
              <DatePickerField
                name="date"
                className={css.input}
                placeholderText="Booking date*"
                locale="en-GB"
              />
              {errors.date && touched.date && (
                <div className={css.error}>{errors.date}</div>
              )}
            </div>

            <div className={css.fieldGroup}>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.textarea}
              />
              {errors.comment && touched.comment && (
                <div className={css.error}>{errors.comment}</div>
              )}
            </div>

            <Button
              type="submit"
              variant="primary"
              disabled={isSubmitting}
              className={css.submitButton}
            >
              {isSubmitting ? 'Booking...' : 'Send'}
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
