import React from 'react'

export default function NavItem(props) {
  return (
    <li style={{listStyle: 'none'}}>
        <a href={props.route}>
          {props.link}
        </a>
    </li>
  )
}
