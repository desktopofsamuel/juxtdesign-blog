import React from 'react';
import { Formik, Field, Form } from 'formik';
import Airtable from 'airtable';
import { PageMetadata } from '@/components/common/TextStyles';
import { Button } from '@/components/Button';

const base = new Airtable({ apiKey: 'keyxjGKBYgUoSk20w' }).base(
  'appd36zHAdgtdnmRX',
);

function validateEmail(value) {
  let error;

  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }

  return error;
}
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
      name: '',
    }}
    onSubmit={async (values) => {
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

      // fetch(
      //   'https://emailoctopus.com/api/1.5/lists/50c6d144-ae86-11eb-a3d0-06b4694bee2a/contacts',
      //   {
      //     method: 'post',
      //     body: JSON.stringify(data),
      //     headers: {
      //       'Content-Type': 'application/json',
      //     },
      //     mode: 'no-cors',
      //   },
      // ).then((response) => response.json());
    }}
  >
    {({ errors, touched, isValidating, isSubmitting }) => (
      <Form>
        <PageMetadata css={{ color: '$green100' }} type="label" htmlFor="email">
          Email Address
        </PageMetadata>
        <Field validate={validateEmail} id="email" name="email" type="email" />{' '}
        {errors.email && <span>{errors.email}</span>}
        <PageMetadata css={{ color: '$green100' }} type="label" htmlFor="name">
          Name
        </PageMetadata>
        <Field id="name" name="name" type="Name" />
        <Button
          color="onPrimary"
          type="submit"
          disabled={isSubmitting}
          css={{ marginTop: '$2' }}
        >
          Submit
          {isValidating && 'Submitting'}
        </Button>
      </Form>
    )}
  </Formik>
);
export default FooterForm;
