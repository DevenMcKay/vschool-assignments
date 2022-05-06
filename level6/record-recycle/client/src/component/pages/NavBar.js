import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const {logout,token} = props

  const disableBtn = 
    token? <button onClick={()=>logout()}>Logout</button>:
    <button onClick={()=>logout()} disabled>Logout</button>
  
  return(
    <nav>
      <Link to="/about">About</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      {disableBtn}
    </nav>
  )
}