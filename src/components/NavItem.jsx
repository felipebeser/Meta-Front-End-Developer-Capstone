import './NavItem.css'

export default function NavItem(props) {
  return (
    <li style={{listStyle: 'none'}}>
        <a href={props.url}>
          {props.link}
        </a>
    </li>
  )
}
