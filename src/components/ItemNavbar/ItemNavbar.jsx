import { NavLink } from "react-router-dom"

export const ItemNavbar = ({myStyles, content, NavLinkStyle , route}) => {
  return (
    <>
      <li className={myStyles}>
        <NavLink className="" to={route}>{content}</NavLink>
      </li>
    </>
  )
}



