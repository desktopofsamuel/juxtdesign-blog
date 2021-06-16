import React from 'react';
import { useFormik } from 'formik';
import Airtable from 'airtable';
import { PageMetadata } from '@/components/common/TextStyles';
import { Button } from '@/components/Button';

const base = new Airtable({ apiKey: 'keyxjGKBYgUoSk20w' }).base(
  'appd36zHAdgtdnmRX',
);

const validate = (values) => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const pushResult = (values) => {
  base('Newsletter').create(
    [
      {
        fields: {
          Email: values.email,
          Name: values.name,
        },
      },
    ],
    (err) => {
      if (err) {
        console.error(err);
        console.log(values);
      }
    },
  );
};

const NewsletterForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      name: '',
    },
    validate,
    onSubmit: async (values) => {
      console.log('Form Submit PreCheck', formik.isSubmitting);
      setTimeout(pushResult(values), 10000);
      formik.setSubmitting(false);
      console.log('Submit Count', formik.submitCount);
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      {console.log('Form Load Check', formik.isSubmitting)}
      <label htmlFor="name">Name</label>
      <input
        id="name"
        name="name"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.name}
      />
      {formik.touched.name && formik.errors.name ? (
        <div>{formik.errors.name}</div>
      ) : null}
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <button
        color="onPrimary"
        type="submit"
        disabled={formik.isSubmitting || formik.errors}
        css={{ marginTop: '$2' }}
      >
        {formik.isSubmitting ? 'Submitting' : 'Submit'}
      </button>
    </form>
  );
};

export default NewsletterForm;
