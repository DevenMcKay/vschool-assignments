import React, { useContext } from "react"
import { ThemeContext } from "./themeContext"

function Main() {
  const { theme, toggleTheme, selectTheme, toggleLayout } = useContext(ThemeContext)
  return (
    <main className={`main-${theme}-theme`}>
      <h1>{theme.substring(0, 1).toUpperCase() + theme.substring(1)} Theme Unlocked!</h1>
      <div>
        <button onClick={toggleTheme} className={`${theme}-theme`}>Toggle Theme</button>
        <button onClick={toggleLayout} className={`${theme}-theme`}>Toggle Layout</button>
      </div>
      <select onChange={(event) => selectTheme(event.target.value)}>
        <option value="red">Red</option>
        <option value="white">White</option>
        <option value="blue">Blue</option>
      </select>
    </main>

  )
}

export default Main