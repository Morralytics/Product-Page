import React, { useState, useEffect, useReducer } from 'react';
import SupportCard from '../SupportCard';

import './style.css';

const Card = () => {

  const [cards, setCards] = useState([]);
  const [selectedImage, setSelectedImage] = useState([])

  // I am using state to save the fetched data into state
  // I am using the useEffect hook here with an empty dependency ( , [] ) so that it will only render once on DOM load
  // On DOM load the component will fetch the data from the json file, resolve the resolve promise by turning it into json data, and then setting that data to our state
  useEffect(() => {
    fetch('/data/image.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, []);

  const [state, dispatch] = useReducer(
    (state, action) => ({
      ...state,
      ...action,
    }),
    {
      mainImage: ''
    }
  );
  // This is now rendering each card as their own SupportCard child that will be rendered into this parent component
  // Next I need to render a single card that can change when the child element is hovered (not sure if that is possible)
  const card = cards.map((card, i) => {
    return <SupportCard key={i} keyId={i} card={card}/>
  });
  
  return (
    <div>
      {/* {cards.length ? (
        displayCard()
      ) : (
      <></>
      )} */}
      
      {/* This new displayCard function will render an image that has been saved to selectedImage state */}
      <ul id='image-collection'>
        {card}
      </ul>
    </div>
  )
};

export default Card;
