import React from 'react'
import './SpecialsCard.css'

export default function SpecialsCard(props) {
  return (
    <div className='specials-card-container'>
      <img src={props.image} alt={props.name}/>
      <div className='flex specials-card-header'>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
      </div>

      <p>{props.description}</p>
      <div className='specials-card-delivery'>
        <p>Order a delivery</p>
      </div>
    </div>
  )
}
