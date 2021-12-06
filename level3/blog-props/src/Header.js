import React from "react"
import Navbar from "./Navbar"

function Header() {
  return (
    <header className="backgroundImg">
      <Navbar />
      <h1 className="headerLabel">Clean Blog</h1>
      <h2 className="headerSub">A Blog Theme by Start Bootstrap</h2>
    </header>
  )
}

export default Header 