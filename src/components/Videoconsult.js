import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import '../App.css';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Videoconsult = ({ expert }) => {
  const { id } = useParams();

  //payment not included in array
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      phone: '',
      issue: '',
      date: '',
    },
    validationSchema: Yup.object({
      date: Yup.date().required('This is required'),
      phone: Yup.number().required('This is required'),
      issue: Yup.string().required('This is required'),
    }),
    onSubmit: values => {
      console.log('Form submitted', values);
    },
  });

  return (
    <div className="consultation-container">
      <Typography variant="h5" mt={6} mb={6} textAlign="center">
        Consult our fit health expert
      </Typography>

      <Box component="form" onSubmit={formik.handleSubmit}>
        <div className="mobilenumber">
          <TextField
            label="Enter mobile Number"
            type="number"
            variant="outlined"
            sx={{ width: '250px', m: 1 }}
            name="phone"
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="healthproblem-container">
          <p sx={{ textAlign: 'center' }}>Choose Appointment date</p>
          <TextField
            type="date"
            variant="outlined"
            sx={{ width: '250px', m: 1 }}
            name="date"
            onChange={formik.handleChange}
            error={formik.touched.date && Boolean(formik.errors.date)}
            helperText={formik.touched.date && formik.errors.date}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="healthproblem-container">
          <TextField
            className="healthproblem"
            label="Type your issue"
            type="text"
            variant="outlined"
            multiline
            rows={2}
            sx={{ width: '250px', m: 1 }}
            name="issue"
            onChange={formik.handleChange}
            error={formik.touched.issue && Boolean(formik.errors.issue)}
            helperText={formik.touched.issue && formik.errors.issue}
            onBlur={formik.handleBlur}
          />
        </div>
        <div className="consultbtn">
          <Button
            size="large"
            variant="contained"
            type="submit"
            sx={{ m: 1 }}
            // onClick={() => navigate(`/health-experts/payment/:${id}`)}
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
