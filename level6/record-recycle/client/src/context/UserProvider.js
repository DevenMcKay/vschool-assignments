import React, { useState } from 'react'
import axios from 'axios'
// import {staticSound, staticUser} from '../component/staticData/staticData'
import FileDownload from "js-file-download"

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
      .catch(err => handleAuthErr(err.response.data.errMsg))
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
      .catch(err => handleAuthErr(err.response.data.errMsg))
  }

  function handleAuthErr(errMsg) {
    setUserState(prevUserState => ({
      ...prevUserState,
      errMsg
    }))
  }

  function resetAuthErr() {
    setUserState(prevState => ({
      ...prevState,
      errMsg: ""
    }))
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
        setSounds(prevState => [...prevState, res.data])
      })
      .catch(err => console.log(err))
  }

  function deleteSound(soundId) {
    userAxios.delete(`/api/sound/${soundId}`)
      .then(res => {
        const filteredArr = sounds.filter(sound => {
          if (soundId !== sound._id) {
            return sound
          } else return null
        })
        setSounds(filteredArr)
      })
      .catch(err => console.log(err))
  }
  
  function downloadSound(title, fileName) {
    userAxios.get(`/api/sound/download/${fileName}`,
    // RETURNS BLOB OBJECT
      { responseType: 'blob' }
    ).then(res => FileDownload(res.data, `${title}.mp3`))
      .catch(err => (console.log(err)))
  }

  function playSound(fileName) {
    userAxios.post(`/api/sound/play/${fileName}`)
      .then(console.log("Play"))
      .catch(err => console.log(err))
  }

  function pauseSound(fileName) {
    userAxios.post(`/api/sound/pause/${fileName}`)
      .then(console.log("Pause"))
      .catch(err => console.log(err))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        sounds,
        logout,
        signup,
        login,
        addSound,
        deleteSound,
        playSound,
        pauseSound,
        downloadSound,
        resetAuthErr
      }}>
      {props.children}
    </UserContext.Provider>
  )
}
