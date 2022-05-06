import './App.css';
import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./component/pages/Navbar"
import Auth from "./component/pages/Auth"
import Profile from "./component/pages/Profile"
import Public from "./component/pages/Public"
import About from "./component/pages/About"
import {UserContext} from "./context/UserProvider"

export default function App() {

  const {token, logout} = useContext(UserContext)

  return (
    <div className="app">
      <Navbar token={token} logout={logout} />
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate replace to="/profile"/>: <Auth />}
        />
        <Route
          path="/profile"
          element={token ? <Profile /> : <Navigate replace to="/"/>}
        />
        <Route
          path="/public"
          element={token ? <Public /> : <Navigate replace to="/"/>}
        />
        <Route
          path="/about"
          element={<About />}
        />
      </Routes>
    </div>
  )
}
