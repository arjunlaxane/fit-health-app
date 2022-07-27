import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import axios from 'axios';
import {
  removeSelectedExpert,
  selectedExpert,
} from '../redux/actions/expertActions';
import { Button } from '@mui/material';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../App.css';
import CircularProgress from '@mui/material/CircularProgress';

export const ExpertDetail = () => {
  const navigate = useNavigate();
  const expert = useSelector(state => state.expert);
  console.log(expert);
  console.log(Object.keys(expert));
  const {
    id,
    image,
    price,
    designation,
    email,
    experience,
    first_name,
    last_name,
    qualification,
    rating,
    specialization,
  } = expert;

  const { expertId } = useParams();
  const dispatch = useDispatch();
  console.log(expertId);

  const fetchExpertDetail = async () => {
    const response = await axios
      .get(`https://62a97468ec36bf40bdb7b7fa.mockapi.io/fitness/${expertId}`)
      .catch(err => {
        console.log('err', err);
      });
    console.log(response.data);
    dispatch(selectedExpert(response.data));
  };

  useEffect(() => {
    if (expertId && expertId !== '') {
      fetchExpertDetail();
    }
    return () => {
      dispatch(removeSelectedExpert());
    };
  }, [expertId]);

  return (
    <>
      {Object.keys(expert).length === 0 ? (
        <div className="loader">
          <CircularProgress color="info" size={55} />
        </div>
      ) : (
        <div>
          <div className="expertinfo">
            <img
              src={image}
              alt={first_name + ' ' + last_name}
              id="info-image"
            />

            <div className="intro-info">
              <h3>Name: {designation + ' ' + first_name + ' ' + last_name}</h3>
              <h3>Qualification: {qualification}</h3>
              <h3>Specialization: {specialization}</h3>
              <h3>Email ID: {email}</h3>
              <h3>Experience(year): {experience}</h3>
              <h3>Rating: {rating}⭐</h3>
            </div>
          </div>
          <div className="all-btn">
            <div>
              <Button
                onClick={() => navigate(`/health-experts/appointment/${id}`)}
                variant="outlined"
                sx={{ m: 1 }}
                startIcon={<BookOnlineIcon />}
              >
                Appointment
              </Button>
            </div>
            <div>
              <Button
                onClick={() =>
                  navigate(`/health-experts/video-consultation/${id}`)
                }
                variant="outlined"
                sx={{ m: 1 }}
                startIcon={<PersonalVideoIcon />}
              >
                Video Consult
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                variant="outlined"
                sx={{ m: 1 }}
                startIcon={<ShoppingCartIcon />}
              >
                Add to wishlist
              </Button>
            </div>
            <div>
              <Button
                onClick={() => {
                  navigate(-1);
                }}
                variant="outlined"
                sx={{ m: 1 }}
                startIcon={<ArrowBackIosIcon />}
              >
                Back
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
