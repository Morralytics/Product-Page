import React, { useState, useEffect } from 'react'

const Card = () => {

  const [cards, setCards] = useState([]);

  // I am using state to save the fetched data into state
  // I am using the useEffect hook here with an empty dependency ( , [] ) so that it will only render once on DOM load
  // On DOM load the component will fetch the data from the json file, resolve the resolve promise by turning it into json data, and then setting that data to our state
  useEffect(() => {
    fetch('/data/image.json')
      .then((response) => response.json())
      .then((data) => setCards(data))
  }, []);

  const card = cards.map((card, i) => <li key={i}><img src={card.img} alt={'card' + i} /></li>);
  return (
    <div>
      <ul>
        {card}
      </ul>
    </div>
  )
};

export default Card;
