import React from 'react'
import NavItem from './NavItem'

const links = [
  {link: "Home", url: "/index"},
  {link: "About", url: "/index"},
  {link: "Menu", url: "/index"},
  {link: "Reservations", url: "/index"},
  {link: "Order Online", url: "/index"},
  {link: "Login", url: "/index"},
]
export default function NavBar() {
  return (
    <nav>
      <ul>
        {links.map((item) =>  (
          <NavItem link={item.link} url={item.url}/>
        ))}
      </ul>
    </nav>
  )
}
