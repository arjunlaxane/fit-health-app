import { Button, IconButton } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import InfoIcon from '@mui/icons-material/Info';
import '../App.css';
const Pathology = ({ lab, id }) => {
  const navigate = useNavigate();
  return (
    <div className="profile-container">
      <img className="profile-image" src={lab.image} alt={lab.name} />
      <div className="name-rating">
        <h2 className="profile-name">
          {lab.first_name} {lab.last_name}
        </h2>

        <p className="rating">{lab.rating}⭐</p>
      </div>

      <div className="click">
        <IconButton
          color="primary"
          aria-label="movie details"
          onClick={() => navigate(`/lab-tests/${id}`)}
        >
          <InfoIcon />
        </IconButton>

        <Button>Appointment</Button>
        <Button>Video Consult</Button>
      </div>
    </div>
  );
};

export default Pathology;
