import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import '../App.css';
export const ExpertRegister = () => {
  const formik = useFormik({
    initialValues: {
      dezignation: '',
      email: '',
      experience: '',
      first_name: '',
      last_name: '',
      gender: '',
      image: '',
      qualification: '',
      specialization: '',
    },
    validationSchema: Yup.object({
      first_name: Yup.string().required('This is required'),
      last_name: Yup.string().required('This is required'),
      email: Yup.string().email().required('This is required'),
      experience: Yup.number().required('This is required'),
      qualification: Yup.string().required('This is required'),
      specialization: Yup.string().required('This is required'),
      dezignation: Yup.string().required('This is required'),
      gender: Yup.string().required('This is required'),
      image: Yup.string().required('This is required'),
    }),
    onSubmit: values => {
      console.log('Form submitted', values);
    },
  });

  return (
    <div className="expert-register-container">
      <Typography variant="h5 " mt={6} mb={6} textAlign="center">
        Register as fit health expert
      </Typography>

      <div className="expert-register-form">
        <Box component="form" onSubmit={formik.handleSubmit}>
          <div>
            <TextField
              label="Dezignation:Doctor/Gym instructor/Zumba instructor/Aurvedic expert/Homeopathic expert/Yoga instructor/Pathology/Dietician"
              type="text"
              variant="outlined"
              sx={{ width: '55vw', m: 1 }}
              name="dezignation"
              onChange={formik.handleChange}
              error={
                formik.touched.dezignation && Boolean(formik.errors.dezignation)
              }
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.dezignation && formik.errors.dezignation
              }
            />
          </div>
          <div>
            <TextField
              label="First Name"
              type="text"
              variant="outlined"
              sx={{ width: '20vw', m: 1 }}
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
              sx={{ width: '20vw', m: 1 }}
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
              label="Email"
              type="email"
              variant="outlined"
              sx={{ width: '20vw', m: 1 }}
              name="email"
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>
          <div>
            <TextField
              label="Experience"
              type="number"
              variant="outlined"
              sx={{ width: '20vw', m: 1 }}
              name="experience"
              onChange={formik.handleChange}
              error={
                formik.touched.experience && Boolean(formik.errors.experience)
              }
              onBlur={formik.handleBlur}
              helperText={formik.touched.experience && formik.errors.experience}
            />
          </div>
          <div>
            <TextField
              label="Gender:Male/Female/Others"
              type="text"
              variant="outlined"
              sx={{ width: '20vw', m: 1 }}
              name="gender"
              onChange={formik.handleChange}
              error={formik.touched.gender && Boolean(formik.errors.gender)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.gender && formik.errors.gender}
            />
          </div>
          <div>
            <TextField
              label="profile image link"
              type="text"
              variant="outlined"
              sx={{ width: '20vw', m: 1 }}
              name="image"
              onChange={formik.handleChange}
              error={formik.touched.image && Boolean(formik.errors.image)}
              onBlur={formik.handleBlur}
              helperText={formik.touched.image && formik.errors.image}
            />
          </div>
          <div>
            <TextField
              label="Qualification"
              type="text"
              variant="outlined"
              sx={{ width: '20vw', m: 1 }}
              name="qualification"
              onChange={formik.handleChange}
              error={
                formik.touched.qualification &&
                Boolean(formik.errors.qualification)
              }
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.qualification && formik.errors.qualification
              }
            />
          </div>
          <div>
            <TextField
              label="Specialization"
              type="text"
              variant="outlined"
              sx={{ width: '20vw', m: 1 }}
              name="specialization"
              onChange={formik.handleChange}
              error={
                formik.touched.specialization &&
                Boolean(formik.errors.specialization)
              }
              onBlur={formik.handleBlur}
              helperText={
                formik.touched.specialization && formik.errors.specialization
              }
            />
          </div>
          <div>
            <Button
              size="large"
              variant="contained"
              type="submit"
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
