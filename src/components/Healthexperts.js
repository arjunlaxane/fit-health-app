import React, { useState } from 'react';
import Experts from './Experts';
const Healthexperts = ({ expert, setExpert }) => {
  const [dezignation, setDezignation] = useState('');
  const [email, setEmail] = useState('');
  const [experience, setExperience] = useState('');
  const [first_name, setFirst_Name] = useState('');
  const [gender, setGender] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
  const [qualification, setQualification] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [specialization, setSpecialization] = useState('');

  const AddExperts = () => {
    const newExperts = {
      dezignation: dezignation,
      email: email,
      experience: experience,
      first_name: first_name,
      gender: gender,
      image: image,
      last_name: last_name,
      qualification: qualification,
      rating: rating,
      specialization: specialization,
    };

    setExpert([...expert, newExperts]);
  };
  console.log(expert);
  return (
    <>
      <div className="add-expert-form">
        <input
          onChange={event => {
            setQualification(event.target.value);
          }}
          placeholder="Qualification"
        />
        <input
          onChange={event => {
            setSpecialization(event.target.value);
          }}
          placeholder="Specialization"
        />
        <input
          onChange={event => {
            setImage(event.target.value);
          }}
          placeholder="Image"
        />
        <input
          onChange={event => {
            setGender(event.target.value);
          }}
          placeholder="Gender"
        />
        <input
          onChange={event => {
            setDezignation(event.target.value);
          }}
          placeholder="Designation"
        />

        <input
          onChange={event => {
            setEmail(event.target.value);
          }}
          placeholder="Email"
        />
        <input
          onChange={event => {
            setFirst_Name(event.target.value);
          }}
          placeholder="First Name"
        />
        <input
          onChange={event => {
            setLast_Name(event.target.value);
          }}
          placeholder="Last Name"
        />
        <input
          onChange={event => {
            setExperience(event.target.value);
          }}
          placeholder="Experience"
        />
        <input
          onChange={event => {
            setRating(event.target.value);
          }}
          placeholder="Rating"
        />
        <button onClick={AddExperts}>Add Movie</button>
      </div>

      <div className="healthexperts-list">
        {expert.map((healthexpert, index) => (
          <Experts healthexpert={healthexpert} key={index} id={index} />
        ))}
      </div>
    </>
  );
};

export default Healthexperts;
