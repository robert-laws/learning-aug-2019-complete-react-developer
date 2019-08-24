import React from 'react';

import './card.styles.scss';

export const Card = props => {
  return (
    <div className='card-container'>
      <img alt="character" src={`https://robohash.org/${props.character.id}?set=set1`} />
      <h1>{props.character.name}</h1>
      <p>{props.character.email}</p>
    </div>
  )
}