import './App.css'
import React, {useContext} from 'react'
import {Routes, Route, Navigate} from 'react-router-dom'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Public from './components/Public'
import Auth from './components/Auth'
import {UserContext} from './context/UserProvider'


function App() {
  const {token, logout} = useContext(UserContext)
  return (
    <div className="App">
      <Nav logout={logout}/>
        <Routes>
          <Route 
            exact path="/"
            element={token ? <Navigate replace to="/profile"/>:<Auth/>}
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

export default App;
