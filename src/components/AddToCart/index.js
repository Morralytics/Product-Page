import React from 'react';
import cartIcon from '../../assets/images/icon-cart-button.svg';

import './style.css';

const AddToCart = () => {
  return (
    <button id='add-to-cart-btn'>
      <img src={cartIcon} alt='cart-icon'></img>
      Add to cart
    </button>
  )
};

export default AddToCart;
