import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

function NavBar(props) {
  const { theme, layout } = useContext(ThemeContext)
  return (
    <div className={`${theme}-theme navBar`}>
      <ul className={`${layout}`}>
        <li><a href="#" className={`${theme}-theme`}>Home</a></li>
        <li><a href="#" className={`${theme}-theme`}>About</a></li>
        <li><a href="#" className={`${theme}-theme`}>Contact</a></li>
      </ul>
    </div>
  )
}

export default NavBar