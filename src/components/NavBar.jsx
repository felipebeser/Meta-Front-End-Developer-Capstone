import React from 'react'
import './NavBar.css'
import NavItem from './NavItem'


const links = [
  {link: "Home", url: "/"},
  {link: "About", url: "/#aboutme"},
  {link: "Menu", url: "/under-construction"},
  {link: "Reservations", url: "/reservations"},
  {link: "Order Online", url: "/under-construction"},
  {link: "Login", url: "/under-construction"},
]
export default function NavBar() {
  return (
    <nav>
      <ul>
        {links.map((item) =>  (
          <NavItem key={item.link} link={item.link} url={item.url}/>
        ))}
      </ul>
    </nav>
  )
}
