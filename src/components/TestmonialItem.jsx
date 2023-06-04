import React from 'react'
import './Testimonials.css'
export default function TestmonialItem(props) {
  return (
    <div className='testimonials-item-container'>
      <p>{props.rating}</p>
      <div className='flex profile'>
        <img src={props.image} alt={props.name}/>
        <h3>{props.name}</h3>
      </div>
      <p>"{props.review}"</p>
    </div>
  )
}
