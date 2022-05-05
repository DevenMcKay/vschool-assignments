import './App.css';
import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from "./component/pages/Navbar"
import Auth from "./component/pages/Auth"
import Profile from "./component/pages/Profile"
import Public from "./component/pages/Public"
import {UserContext} from "./context/UserProvider"

export default function App() {

  const {sounds, user} = useContext(UserContext)

  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<Auth />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
        <Route
          path="/public"
          element={<Public />}
        />
      </Routes>
    </div>
  )
}
