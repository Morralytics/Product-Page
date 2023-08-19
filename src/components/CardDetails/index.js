import React from 'react';
import './style.css';

const CardDetails = () => {
  return (
    <section id='card-details'>
      <p id='company-header'>SNEAKER COMPANY</p>
      <h1 id='card-details-header'>Fall Limited Edition Sneakers</h1>
      <p id='card-details-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <aside id='card-price-info'>
        <h2 id='current-price'>$125.00</h2>
        <p id='discount-amount'>50%</p>
        <p id='original-price'>$250.00</p>
      </aside>
    </section>
  )
};

export default CardDetails;
