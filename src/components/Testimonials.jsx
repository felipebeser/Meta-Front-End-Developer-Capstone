import React, { useEffect, useState } from 'react'
import TestmonialItem from './TestmonialItem'
import './Testimonials.css'

const defaultReview = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

export default function Testimonials() {

  const [clients, setClients] = useState([])
  const [fetching, setFetching] = useState(true)

  useEffect(() => {
    const fetchClients = async () => {
      const response = await fetch('https://randomuser.me/api/?results=4');
      const data = await response.json()
      setClients(data.results)
      setFetching(false)
    }

    fetchClients();
  },[])

  return (
    <div className='green-container testimonials-container'>
      <h1>What people say about us!</h1>
      <div className='flex testimonials-container-info'>
        {!fetching && clients.map( client => (
          <TestmonialItem
            key={client.login.uuid}
            rating = {5}
            name = {client.name.first + ' ' +  client.name.last}
            image = {client.picture.medium}
            review = {defaultReview}
          />
        )

        )}
      </div>
    </div>
  )
}
