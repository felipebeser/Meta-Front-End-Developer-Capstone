import React from 'react'
import Hero from '../components/Hero'
import Specials from '.././components/Specials'
import Testimonials from '.././components/Testimonials'
import Aboutme from '.././components/Aboutme'

export default function Home() {
  return (
    <>
      <Hero />
      <Specials />
      <Testimonials/>
      <Aboutme/>
    </>
  )
}
