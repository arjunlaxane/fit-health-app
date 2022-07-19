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
          color="primary"
          aria-label="movie details"
          onClick={() => navigate(`/health-experts/${id}`)}
        >
          <InfoIcon />
        </IconButton>

        <Button>Appointment</Button>
        <Button>Video Consult</Button>
      </div>
    </div>
  );
};

export default Experts;
