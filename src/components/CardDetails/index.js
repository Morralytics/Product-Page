import React from 'react';
import './style.css';

import Counter from '../Counter';
import AddToCart from '../AddToCart';

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
          <td id='original-price'>$250.00</td>
        </tr>
      </table>
      <section id='add-to-cart-items'>
        <Counter />
        <AddToCart />
      </section>
    </section>
  )
};

export default CardDetails;
