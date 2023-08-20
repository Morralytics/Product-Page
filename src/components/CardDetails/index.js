import React from 'react';
import './style.css';

const CardDetails = () => {
  return (
    <section id='card-details'>
      <p id='company-header'>SNEAKER COMPANY</p>
      <h1 id='card-details-header'>Fall Limited Edition Sneakers</h1>
      <p id='card-details-description'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
      <table id='card-price-info'>
        <tr>
          <td id='current-price'>$125.00</td>
          <td id='discount-amount'>50%</td>
        </tr>
        <tr>
          <p id='original-price'>$250.00</p>
        </tr>
      </table>
    </section>
  )
};

export default CardDetails;
