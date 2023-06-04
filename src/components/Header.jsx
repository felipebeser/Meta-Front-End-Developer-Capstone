import React from 'react'
import NavBar from './NavBar'
import Logo from '.././assets/Logo.svg'
export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" width={210}/>
      <NavBar />
    </header>
  )
}
