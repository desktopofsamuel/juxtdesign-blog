import React from 'react';
import { useFormik } from 'formik';
import fetch from 'node-fetch';

const FooterForm = () => {
  // Pass the useFormik() hook initial form values and a submit function that will

  // be called when the form is submitted

  const formik = useFormik({
    initialValues: {
      email: '',
    },

    onSubmit: (values) => {
      const body = {
        api_key: '69dbb0df-2884-4aa8-aa8b-801c483963dc',
        email_address: values.email,
      };
      fetch(
        'https://emailoctopus.com/api/1.5/lists/50c6d144-ae86-11eb-a3d0-06b4694bee2a/contacts',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        },
      ).then((response) => response.json());
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <button type="submit">Submit</button>
    </form>
  );
};

export default FooterForm;
