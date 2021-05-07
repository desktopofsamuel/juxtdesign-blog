import React from 'react';
import { Formik, Field, Form } from 'formik';
import fetch from 'node-fetch';

const FooterForm = () => (
  // Pass the useFormik() hook initial form values and a submit function that will

  // be called when the form is submitted

  // fetch(
  //   'https://emailoctopus.com/api/1.5/lists/50c6d144-ae86-11eb-a3d0-06b4694bee2a/contacts',
  //   {
  //     method: 'post',
  //     body: JSON.stringify(data),
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   },
  // );

  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //   },

  //   onSubmit{ async (values) => {

  //   },
  // });

  <Formik
    initialValues={{
      email: '',
    }}
    onSubmit={async (values) => {
      const data = {
        api_key: '69dbb0df-2884-4aa8-aa8b-801c483963dc',
        email_address: values.email,
      };

      fetch(
        'https://emailoctopus.com/api/1.5/lists/50c6d144-ae86-11eb-a3d0-06b4694bee2a/contacts',
        {
          method: 'post',
          body: JSON.stringify(data),
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'no-cors',
        },
      ).then((response) => response.json());

      alert(JSON.stringify(data, null, 2));
      alert(JSON.stringify(response, null, 2));
    }}
  >
    {({ isSubmitting }) => (
      <Form>
        <label htmlFor="email">Email Address</label>
        <Field id="email" name="email" type="email" />

        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
      </Form>
    )}
  </Formik>
);
export default FooterForm;
