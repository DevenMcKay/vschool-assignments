import React, {useContext} from "react"
import {ThemeContext} from "./themeContext"

function Footer(){
  const {theme} = useContext(ThemeContext)
  return(
    <footer className={`${theme}-theme`}>
      Fabulous Footer
    </footer>
  )
}

export default Footer