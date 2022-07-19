import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('This is required'),
      lastName: Yup.string().required('This is required'),
      phone: Yup.number().required('This is required'),
      message: Yup.string().required('This is required'),
    }),
    onSubmit: values => {
      console.log('Form submitted', values);
    },
  });

  return (
    <div>
      <Typography variant="h4" mt={6} mb={6}>
        Registration Form
      </Typography>
      <Box component="form" onSubmit={formik.handleSubmit}>
        <TextField
          label="First Name"
          type="text"
          variant="outlined"
          sx={{ width: '300px', m: 1 }}
          name="firstName"
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
        <TextField
          label="Last Name"
          type="text"
          variant="outlined"
          sx={{ width: '300px', m: 1 }}
          name="lastName"
          onChange={formik.handleChange}
          error={formik.touched.lastName && Boolean(formik.errors.lastName)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.lastName && formik.errors.lastName}
        />
        <TextField
          label="Phone Number"
          type="number"
          variant="outlined"
          sx={{ width: '300px', m: 1 }}
          name="phone"
          onChange={formik.handleChange}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={formik.touched.phone && formik.errors.phone}
          onBlur={formik.handleBlur}
        />
        <TextField
          label="Message"
          type="text"
          variant="outlined"
          multiline
          rows={4}
          fullWidth
          sx={{ m: 1 }}
          name="message"
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          onBlur={formik.handleBlur}
        />
        <Button size="large" variant="contained" type="sumbit" sx={{ m: 1 }}>
          Submit
        </Button>
      </Box>
    </div>
  );
};

export default Registration;
