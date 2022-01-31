import React from "react"
import ReactDOM from "react-dom"
import { ThemeContextProvider } from "./components/themeContext"
import App from "./components/App"
import index from "./index.css"

ReactDOM.render(
  <ThemeContextProvider>
  <App />
  </ThemeContextProvider>, 
  document.getElementById("root")
)
