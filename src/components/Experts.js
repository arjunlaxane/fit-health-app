import { Button, IconButton } from '@mui/material';
import React, { useState } from 'react';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Experts = ({ healthexpert, id }) => {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      <img
        className="profile-image"
        src={healthexpert.image}
        alt={healthexpert.name}
      />
      <div className="name-rating">
        <h2 className="profile-name">
          {healthexpert.first_name} {healthexpert.last_name}
        </h2>

        <p className="rating">{healthexpert.rating}⭐</p>
      </div>

      <div className="click">
        <IconButton
          sx={{ mt: 1 }}
          className="infoicon-btn"
          color="primary"
          aria-label="movie details"
          onClick={() => navigate(`/health-experts/${id}`)}
        >
          <InfoIcon />
        </IconButton>

        <Button
          className="appointment-btn"
          variant="outlined"
          sx={{ mt: 1 }}
          onClick={() => navigate(`/health-experts/appointment/${id}`)}
        >
          Appointment
        </Button>
        <Button
          className="video-consultation-btn"
          sx={{ mt: 1 }}
          variant="outlined"
          onClick={() => navigate(`/health-experts/video-consultation/${id}`)}
        >
          Video Consult
        </Button>
      </div>
    </div>
  );
};

export default Experts;
