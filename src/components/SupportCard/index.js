import React from 'react'

const SupportCard = ({keyId, card}) => {
  console.log(keyId)
  // Currently rendering the list of photos again
  // Considering having the supporting images be a list and the main card being the main image that changes based on onClick event
  return (
      <li><img src={card.img} alt={'card' + keyId} id={'card' + keyId}/></li>
  )
};

export default SupportCard;
