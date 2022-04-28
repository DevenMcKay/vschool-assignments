import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
  const { token, logout } = props
  return (
    <nav>
      <Link to="/profile">Profile</Link>
      <Link to="/public">Public</Link>
      {token ? <button onClick={logout}>Logout</button>: <button disabled onClick={logout}>Logout</button>}
    </nav>
  )
}