import './App.css'
import {Routes, Route, Redirect, useContext } from 'react-router-dom'
import Nav from './components/Nav'
import Profile from './components/Profile'
import Public from './components/Public'
import Auth from './components/Auth'
import {UserContext} from './context/UserProvider'


function App() {

  return (
    <div className="App">
      <Nav />
        <Routes>
          <Route 
            exact path="/"
            element={<Auth/>}
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
