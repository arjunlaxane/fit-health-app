import React from 'react';
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate();

  return (
    <div className="payment-container">
      <div className="payment-option">
        <h2>Select a payment method </h2>
        <h4>Debit card/Credit card/ATM Card</h4>
        <h4>UPI</h4>
        <h4>Net Banking</h4>
        <h4>Scan QR Code</h4>
      </div>
    </div>
  );
};

export default Payment;
