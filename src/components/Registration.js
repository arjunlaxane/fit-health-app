import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

const Registration = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('This is required'),
      last_name: Yup.string().required('This is required'),
      email: Yup.string().email().required('This is required'),
      password: Yup.string().required('This is required'),
    }),
    onSubmit: values => {
      console.log('Form submitted', values);
    },
  });

  return (
    <div>
      <Typography variant="h4" mt={6} mb={6} textAlign="center">
        Register
      </Typography>

      <h3 style={{ textAlign: 'center' }}>
        <Link to="/experts/register">Want to be a fit health expert?</Link>
      </h3>

      <div className="user-register">
        <Box component="form" onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              label="First Name"
              type="text"
              variant="outlined"
              sx={{ m: 1 }}
              name="first_name"
              onChange={formik.handleChange}
              error={
                formik.touched.first_name && Boolean(formik.errors.first_name)
              }
              onBlur={formik.handleBlur}
              helperText={formik.touched.first_name && formik.errors.first_name}
            />
          </div>
          <div>
            <TextField
              label="Last Name"
              type="text"
              variant="outlined"
              sx={{ m: 1 }}
              name="last_name"
              onChange={formik.handleChange}
              error={
                formik.touched.last_name && Boolean(formik.errors.last_name)
              }
              onBlur={formik.handleBlur}
              helperText={formik.touched.last_name && formik.errors.last_name}
            />
          </div>
          <div>
            <TextField
              label="Email ID"
              type="email"
              variant="outlined"
              sx={{ m: 1 }}
              name="email"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <TextField
              label="Password"
              type="text"
              variant="outlined"
              sx={{ m: 1 }}
              name="password"
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              onBlur={formik.handleBlur}
            />
          </div>
          <div>
            <Button
              size="large"
              variant="contained"
              type="sumbit"
              // onClick={() => navigate('/signup')}
              sx={{ m: 1 }}
            >
              Submit
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Registration;
