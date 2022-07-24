import React from 'react';
import '../App.css';

const Home = () => {
  const services = [
    {
      designation: 'Doctors',
      image:
        'https://pikwizard.com/photos/portrait-of-male-doctor-sitting-at-desk--a3d68e40ac7238a3f52ecb2c4ab27995-l.jpg',
      msg: 'doctor',
    },
    {
      designation: ' Gym Instructors',
      image:
        'http://ww1.prweb.com/prfiles/2020/03/19/16993821/Personal%20Trainer%20instructs%20online.jpg',
      msg: 'gym',
    },
    {
      designation: 'Yoga Instructors',
      image:
        'https://tse1.mm.bing.net/th?id=OIP.p4Z9qB4geB-g0BiwkgGKfAHaE7&pid=Api&P=0',
      msg: 'yoga',
    },
    {
      designation: 'Meditation Experts',
      image:
        'https://storage.googleapis.com/um-editorial-shared-content/1/2017/07/@blkmenUSA-2.jpg',
      msg: 'meditation',
    },
    {
      designation: 'Pathologies',
      image:
        'http://scientificpathology.weebly.com/uploads/6/2/5/0/62508165/pathology-lab3_orig.jpg',
      msg: 'pathology',
    },
    {
      designation: 'Zumba Instructors',
      image:
        'https://i.huffpost.com/gen/1362307/thumbs/o-ZUMBA-INSTRUCTOR-facebook.jpg',
      msg: 'zumba',
    },
    {
      designation: 'Homeopathy',
      image:
        'https://tse1.mm.bing.net/th?id=OIP.zAPTwwihs3FHQUNtL6Kt0QHaEn&pid=Api&P=0',
      msg: 'homeopathy',
    },
    {
      designation: 'Ayurveda',
      image:
        'https://i1.wp.com/medesol.com/wp-content/uploads/2020/02/ayur.png?resize=719%2C400&ssl=1',
      msg: 'ayurveda',
    },
    {
      designation: 'Dietician',
      image:
        'https://tse3.mm.bing.net/th?id=OIP.dlGsoWFIzvhbnuUFBJVEagHaE8&pid=Api&P=0',
      msg: 'doctoer',
    },
  ];

  return (
    <div className="services">
      <h1 className="service-heading">Our Services</h1>

      <div className="service-container">
        {services.map(service => (
          <div className="container">
            <img
              className="services-image"
              src={service.image}
              alt="fithealth-services-image"
            />
            <div className="service-heading">
              <h3 className="designation">{service.designation}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
