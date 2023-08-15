import React from 'react';
import './style.css'
// Imports that will need to transition to public folder on deployment
// import cartIcon from '../../../public/images/icon-cart.svg'
import cartIcon from '../../assets/images/icon-cart.svg';
import profilePic from '../../assets/images/image-avatar.png';

const Header = () => {
  return (
    <header id='header'>
        <nav id='nav-bar'>
            <ul id='collections-list' class='nav-items'>
                <li id='brand-title'>sneakers</li>
                <li id='collections'>Collections</li>
                <li id='men'>Men</li>
                <li id='women'>Women</li>
                <li id='about'>About</li>
                <li id='contact'>Contact</li>
            </ul>
            <ul id='user-items' class='nav-items'>
                <li id='cart'>
                    <img src={cartIcon} alt='cart-icon'></img>
                </li>
                <li id='profile'>
                <img src={profilePic} alt='cart-icon' width='32'></img>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default Header;
