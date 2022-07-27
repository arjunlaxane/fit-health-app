import { Label } from '@mui/icons-material';
import { TextField, Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-container">
      <h3 style={{ textAlign: 'center' }}>
        Enter your credit card/Debit card/ATM card information
      </h3>

      <div className="payment-option">
        <TextField
          label="Name on card"
          type="text"
          variant="outlined"
          sx={{ width: '250px', m: 2 }}
        />
        <TextField
          label="Card Number"
          type="number"
          variant="outlined"
          sx={{ width: '250px', m: 2 }}
        />

        <h4 textAlign="center">Expiry date</h4>

        <div className="expiry-date">
          <TextField
            label="Month"
            type="number"
            variant="outlined"
            sx={{ width: '100px', m: 2 }}
          />

          <TextField
            label="Year"
            type="number"
            variant="outlined"
            sx={{ width: '100px' }}
          />
        </div>
        <div>
          <Button size="large" variant="contained" type="sumbit" sx={{ m: 4 }}>
            Pay
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Payment;
