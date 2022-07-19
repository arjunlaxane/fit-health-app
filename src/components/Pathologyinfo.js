import { Button } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const Pathologyinfo = ({ lab }) => {
  const { id } = useParams();
  console.log(id);
  console.log(useParams());

  const LabInfo = lab[id];

  console.log(LabInfo);
  const navigate = useNavigate();

  return (
    <>
      <div className="expertinfo">
        <img
          src={LabInfo.image}
          alt={LabInfo.first_name}
          className="info-image"
        />

        <div className="intro-info">
          <h3>
            Name: {LabInfo.dezignation} {LabInfo.first_name} {LabInfo.last_name}
          </h3>
          <h3>Qualification: {LabInfo.qualification}</h3>
          <h3>Specialization: {LabInfo.specialization}</h3>
          <h3>Email ID: {LabInfo.email}</h3>
          <h3>Experience: {LabInfo.experience}</h3>
          <h3>Gender: {LabInfo.gender}</h3>
          <h3>Rating: {LabInfo.rating}⭐</h3>
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

export default Pathologyinfo;
