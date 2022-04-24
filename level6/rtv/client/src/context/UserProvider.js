import React, { useState } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

// INSERTS TOKEN PRIOR TO REQUEST
const userAxios = axios.create()
userAxios.interceptors.request.use(config=> {
  const token = localStorage.getItem("token")
  config.headers.Authorization = `Bearer ${token}`
  return config
})

export default function UserProvider(props) {
  const initState = {
    user: JSON.parse(localStorage.getItem("user")) || {},
    token: localStorage.getItem('token') || "",
    issues: []
  }

  function getAllIssues() {
    userAxios.get("/api/issue")    
    .then(res=> setIssueList(res.data))
    .catch(err=> console.log(err))
  }

  const [userState, setUserState] = useState(initState)
  const [issueList, setIssueList] = useState()

  function signup(credentials) {
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
        getAllIssues()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err))
  }

  function login(credentials) {
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        localStorage.setItem("token", token)
        localStorage.setItem("user", JSON.stringify(user))
        getAllIssues()
        getUserIssues()
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err))
  }

  function logout() {
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    setUserState ({
      user: {},
      token: "",
      issues: []
    })
  }

  function getUserIssues() {
    userAxios.get("/api/issue/user")
    .then(res => {
      setUserState(prevUserState => ({
        ...prevUserState,
        issues: res.data
      }))
    })
  }

  function addIssue(newIssue) {
    userAxios.post("/api/issue", newIssue)
    .then(res => {
      setUserState(prevUserState => ({
        ...prevUserState,
        issues: [...prevUserState.issues, res.data]
      }))
// ******** ISSUES LIST NEEDS UPDATED ON ADD 
      // setIssueList(prevState => ({
      //   ...prevState,
      //   res.data
      // }))
    })
    .catch(err=> console.log(err.response.data.errMsg))
  }


  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout, 
        addIssue,
        issueList
      }}>
      {props.children}
    </UserContext.Provider>

  )
}
