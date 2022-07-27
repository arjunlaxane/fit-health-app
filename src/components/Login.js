import React from 'react';
import { useFormik } from 'formik';
import { Link, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { Button, Box, TextField } from '@mui/material';
import '../App.css';
const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      password: Yup.string().required('This is required'),
      email: Yup.string().email().required('This is required'),
    }),
    onSubmit: values => {
      console.log('Form submitted', values);
    },
  });

  return (
    <div className="login-container">
      <h2 className="login-heading">Login</h2>
      <h4 className="register-link">
        Do not have an account ? <Link to="/register">Register first</Link>
      </h4>

      <div className="form-container">
        <Box component="form" onSubmit={formik.handleSubmit}>
          <div className="textfield-login div">
            <div>
              <TextField
                className="login-textfield"
                label="Enter your Email ID"
                type="email"
                variant="outlined"
                name="email"
                onChange={formik.handleChange}
                sx={{ mb: 1 }}
                error={formik.touched.email && Boolean(formik.errors.email)}
                onBlur={formik.handleBlur}
                helperText={formik.touched.email && formik.errors.email}
              />
            </div>
            <div>
              <TextField
                className="login-textfield"
                label="Enter password"
                type="text"
                variant="outlined"
                sx={{ mt: 1, mb: 1 }}
                name="password"
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
                onBlur={formik.handleBlur}
              />
            </div>
          </div>
          <div>
            <Link to="/">Forget Password ?</Link>
          </div>
          <div className="consultbtn">
            <Button
              size="large"
              variant="contained"
              type="sumbit"
              sx={{ m: 3 }}
              // onClick={() => navigate(`/`)}
            >
              Login
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
