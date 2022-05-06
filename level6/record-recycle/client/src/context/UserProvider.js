import React, { useState } from 'react'
import axios from 'axios'
// import {staticSound, staticUser} from '../component/staticData/staticData'

export const UserContext = React.createContext()


const userAxios = axios.create()
userAxios.interceptors.request.use(config => {
  const token = localStorage.getItem('token')
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props) {

  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem("token") || "",
    errMsg: ""
  }

  const [userState, setUserState] = useState(initState)
  const [sounds, setSounds] = useState([])

  function logout() {
    localStorage.clear()
    setUserState({
      user: {},
      token: "",
      errMsg: ""
    })
  }

  function signup(cred) {
    axios.post("/auth/signup", cred)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        getAllSounds()
        setUserState(prevState => ({
          ...prevState,
          token,
          user
        }))
      })
      .catch(err => console.log(err))
  }

  function login(cred) {
    axios.post("/auth/login", cred)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getAllSounds()
        setUserState(prevState => ({
          ...prevState,
          token,
          user
        }))
      })
      .catch(err => console.log(err))
  }

  function getAllSounds() {
    userAxios.get("/api/sound")
      .then(res =>
        setSounds(res.data))
      .catch(err => console.log(err))
  }

  function addSound(newSound) {
    userAxios.post("/api/sound", newSound)
      .then(res => {
        setSounds(prevState=>[...prevState, res.data])
      })
      .catch(err => console.log(err))
  }



  return (
    <UserContext.Provider
      value={{
        ...userState,
        logout,
        signup,
        login,
        addSound,
        sounds
      }}>
      {props.children}
    </UserContext.Provider>
  )
}
