import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Videoconsult = ({ expert }) => {
  const { id } = useParams();
  // console.log(useParams());
  // console.log(id);

  // const payment = expert[id];
  //payment not included in array
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
    <div className="consultation-container">
      <Typography variant="h4" mt={6} mb={6} textAlign="center">
        Consult our fit health
      </Typography>

      <Box component="form" onSubmit={formik.handleSubmit}>
        {/* <TextField
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
        /> */}
        <div className="mobilenumber">
          <TextField
            label="Enter mobile Number"
            type="number"
            variant="outlined"
            sx={{ width: '200px', m: 1 }}
            name="phone"
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="healthproblem-container">
          <TextField
            className="healthproblem"
            label="Tell us your symptom or health problem"
            type="text"
            variant="outlined"
            multiline
            rows={4}
            sx={{ m: 1 }}
            name="message"
            onChange={formik.handleChange}
            error={formik.touched.message && Boolean(formik.errors.message)}
            helperText={formik.touched.message && formik.errors.message}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="consultbtn">
          <Button
            size="large"
            variant="contained"
            type="sumbit"
            sx={{ m: 1 }}
            onClick={() => navigate(`/health-experts/payment/:${id}`)}
          >
            Submit and Pay
          </Button>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="contained"
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Videoconsult;
