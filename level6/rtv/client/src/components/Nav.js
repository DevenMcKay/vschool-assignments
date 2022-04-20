import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {

  return (
    <nav>
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      <button onClick={props.logout}>Logout</button>
    </nav>
  )
}