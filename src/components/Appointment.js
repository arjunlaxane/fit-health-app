import { Box, Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useNavigate, useParams } from 'react-router-dom';

const Appointment = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      phone: '',
      date: '',
      issue: '',
    },
    validationSchema: Yup.object({
      phone: Yup.string().required('This is required'),
      issue: Yup.string().required('This is required'),
      date: Yup.date().required('This is required'),
    }),
    onSubmit: values => {
      console.log('Form submitted', values);
    },
  });

  return (
    <div>
      <Typography variant="h5" mt={6} mb={6} textAlign="center">
        Take Appointment
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
            label=""
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
            // onClick={() => navigate(`/health-experts/payment/:${id}`)}
            type="submit"
            sx={{ m: 1 }}
          >
            Pay and get appointment
          </Button>
          <Button
            onClick={() => {
              navigate(-1);
            }}
            variant="outlined"
            startIcon={<ArrowBackIosIcon />}
          >
            Back
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Appointment;
