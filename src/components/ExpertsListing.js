import axios from 'axios';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setExperts } from '../redux/actions/expertActions';
import { ExpertsComponent } from './ExpertsComponent';

const ExpertsListing = () => {
  const dispatch = useDispatch();

  const fetchExperts = async () => {
    const response = await axios
      .get('https://62a97468ec36bf40bdb7b7fa.mockapi.io/fitness')
      .catch(err => {
        console.log('err', err);
      });
    // console.log(response.data);
    dispatch(setExperts(response.data));
  };

  useEffect(() => {
    fetchExperts();
  }, []);

  return (
    <div className="healthexperts-list">
      <ExpertsComponent />
    </div>
  );
};

export default ExpertsListing;
