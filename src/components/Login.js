import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, TextField } from '@mui/material';

const Login = () => {
  const navigate = useNavigate();
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
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <h>
        Do not have a account ? <Link to="/register">Register first</Link>
      </h>

      <div className="mobilenumber">
        <TextField
          label="Enter your Email ID"
          type="text"
          variant="outlined"
          sx={{ width: '300px', m: 1 }}
          name="firstName"
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
          onBlur={formik.handleBlur}
          helperText={formik.touched.firstName && formik.errors.firstName}
        />
      </div>
      <div className="healthproblem-container">
        <TextField
          className="healthproblem"
          label="Enter password"
          type="text"
          variant="outlined"
          sx={{ m: 1 }}
          name="message"
          onChange={formik.handleChange}
          error={formik.touched.message && Boolean(formik.errors.message)}
          helperText={formik.touched.message && formik.errors.message}
          onBlur={formik.handleBlur}
        />
        <Link to="/">Forget Password ?</Link>
      </div>
      <div className="consultbtn">
        <Button
          size="large"
          variant="contained"
          type="sumbit"
          sx={{ m: 1 }}
          // onClick={() => navigate(`/health-experts/payment/:${id}`)}
        >
          Login
        </Button>
      </div>
    </div>
  );
};

export default Login;
