import React, { useState } from 'react';
import Experts from './Experts';
const Healthexperts = () => {
  let Initial_Health_Experts = [
    {
      dezignation: 'Doctor',
      first_name: 'Suresh',
      last_name: 'Kumar',
      email: 'suresh@gmail.com',
      gender: 'Male',
      specialization: 'General physician',
      qualification: 'MBBS Medicine',
      experience: '4 Years',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
      rating: 5,
    },
    {
      dezignation: 'Doctor',
      first_name: 'Harmanprit',
      last_name: 'Kaur',
      email: 'harman@gmail.com',
      gender: 'Female',
      specialization: 'General physician',
      qualification: 'MBBS Medicine',
      experience: '6 Years',
      rating: 5,

      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
    },
    {
      dezignation: 'Doctor',
      first_name: 'Raju',
      last_name: 'Seth',
      email: 'raju@gmail.com',
      gender: 'Male',
      specialization: 'Gynecologist',
      qualification: 'MD Gynecology',
      experience: '2 Years',
      rating: 5,
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
    },
    {
      dezignation: 'Doctor',
      first_name: 'Priyal',
      last_name: 'Pofali',
      email: 'priyal@gmail.com',
      gender: 'Female',
      specialization: 'Gynecologist',
      qualification: 'MD Gynecology',
      experience: '2 Years',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
      rating: 5,
    },
    {
      rating: 5,
      dezignation: 'Doctor',
      first_name: 'Gopal',
      last_name: 'Kishan',
      email: 'gopal@gmail.com',
      gender: 'Male',
      specialization: 'Pediatrician',
      qualification: 'DM Pediatrician',
      experience: '4 Years',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
    },
    {
      dezignation: 'Doctor',
      first_name: 'Anushka',
      last_name: 'Sharma',
      email: 'anushka@gmail.com',
      gender: 'Female',
      specialization: 'Pediatrician',
      rating: 5,

      qualification: 'DM Pediatrician',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',

      experience: '5 Years',
    },
  ];

  const [healthexperts, setHealthExperts] = useState(Initial_Health_Experts);

  return (
    <div className="healthexperts-list">
      {healthexperts.map((healthexpert, index) => (
        <Experts healthexpert={healthexpert} key={index} id={index} />
      ))}
    </div>
  );
};

export default Healthexperts;
