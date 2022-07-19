import { Button } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Expertinfo = ({ expert }) => {
  const { id } = useParams();
  // console.log(useParams());
  // console.log(id);

  const expertdetails = expert[id];
  // console.log(expertInfo);
  // console.log(expertInfo.image);
  const navigate = useNavigate();
  return (
    <>
      <div className="expertinfo">
        <img
          src={expertdetails.image}
          alt={expertdetails.first_name}
          className="info-image"
        />

        <div className="intro-info">
          <h3>
            Name: {expertdetails.dezignation} {expertdetails.first_name}{' '}
            {expertdetails.last_name}
          </h3>
          <h3>Qualification: {expertdetails.qualification}</h3>
          <h3>Specialization: {expertdetails.specialization}</h3>
          <h3>Email ID: {expertdetails.email}</h3>
          <h3>Experience: {expertdetails.experience}</h3>
          <h3>Gender: {expertdetails.gender}</h3>
          <h3>Rating: {expertdetails.rating}⭐</h3>
        </div>
      </div>
      <div className="backbtn">
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
    </>
  );
};

export default Expertinfo;
