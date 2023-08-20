import React, { useState, useEffect, useReducer } from 'react';
import SupportCard from '../SupportCard';

import './style.css';

const Card = () => {

  const [cards, setCards] = useState([]);
  const [active, setActive] = useState(0);

  // I am using state to save the fetched data into state
  // I am using the useEffect hook here with an empty dependency ( , [] ) so that it will only render once on DOM load
  // On DOM load the component will fetch the data from the json file, resolve the resolve promise by turning it into json data, and then setting that data to our state
  useEffect(() => {
    fetch('/data/image.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, [active]);

  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      mainImage: '../images/image-product-1.jpg',
    }
  );

  // This is now rendering each card as their own SupportCard child that will be rendered into this parent component
  // Next I need to render a single card that can change when the child element is hovered (not sure if that is possible)
  const handleClick = (e) => {
    setActive(parseInt(e.target.id))
    dispatch(
      {
        mainImage: e.target.getAttribute('src')
      })
  }

  return (
    <div id='card-images'>
      {cards.length ? (
        <img src={state.mainImage} alt='main-card' id='main-card' width='500px'/>
      ) : (
      <></>
      )}
      
      {/* This new displayCard function will render an image that has been saved to selectedImage state */}
      <ul id='image-collection'>
        {cards.length ? (
          cards.map((card, i) => 
            <SupportCard key={i} keyId={i} card={card} active={active} handleClick={handleClick}/>
        )) : (
          <></>
        )}
      </ul>
    </div>
  )
};

export default Card;
