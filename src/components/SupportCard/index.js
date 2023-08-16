import React from 'react'

const SupportCard = ({key, card}) => {
  console.log(card)
  // Currently rendering the list of photos again
  // Considering having the supporting images be a list and the main card being the main image that changes based on onClick event
  return (
      <li key={key}><img src={card.img} alt={'card' + key} id={'card' + key}/></li>
  )
};

export default SupportCard;
