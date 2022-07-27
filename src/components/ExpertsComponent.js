import { useSelector } from 'react-redux';
import { Button, IconButton } from '@mui/material';
import React from 'react';
import InfoIcon from '@mui/icons-material/Info';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export const ExpertsComponent = () => {
  const navigate = useNavigate();
  const experts = useSelector(state => state.allexperts.expert);
  console.log(experts);
  // const { email } = experts[0];

  const renderList = experts.map(expert => {
    const { id, first_name, image, last_name, rating } = expert;

    return (
      <div className="profile-container" key={id}>
        <Link to={`/health-experts/${id}`}>
          <img
            className="profile-image"
            src={image}
            alt={first_name + ' ' + last_name}
          />
        </Link>
        <div className="name-rating">
          <h2 className="profile-name">{first_name + ' ' + last_name}</h2>

          <p className="rating">{rating}⭐</p>
        </div>

        {/* <div className="click">
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
        </div> */}
      </div>
    );
  });

  return <>{renderList}</>;
};
