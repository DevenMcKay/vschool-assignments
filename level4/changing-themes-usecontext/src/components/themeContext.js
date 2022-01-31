import React, { useState } from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
  const [theme, setTheme] = useState("red")
  const [layout, setLayout] = useState("desktop")

  const toggleTheme = () => {
    if (theme === "red") { return setTheme("blue") }
    else if (theme === "blue") { return setTheme("white") }
    else if (theme === "white") { return setTheme("red") }
  }

  const selectTheme = (value) => {
    if (value === "red") { return setTheme("red") }
    else if (value === "blue") { return setTheme("blue") }
    else if (value === "white") { return setTheme("white") }
  }

  const toggleLayout = () => {
    console.log("click")
    if (layout === "desktop") { return setLayout("mobile") }
    else if (layout === "mobile") { return setLayout("desktop") }
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, selectTheme, layout, toggleLayout }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export { ThemeContextProvider, ThemeContext }