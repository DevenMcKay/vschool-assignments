import React, {useState}from 'react'
import axios from 'axios'

export const UserContext = React.createContext() 

export default function UserProvider(props){
  const initState = {
    user: {},
    tokem: "",
    issues: []
  }

  function signup(credentials) {
    axios.post("/auth/signup", credentials)
    .then(res=> console.log(res.data))
    .catch(err=>console.log(err))
  }

  function login(credentials) {
    axios.post("/auth/login", credentials)
    .then(res=>console.log(res.data))
    .catch(err => console.log(err))
  }

  const [userState, setUserState] = useState(initState)
  return(
    <UserContext.Provider
    value={{
      ...userState,
      signup,
      login}}>
      {props.children}
    </UserContext.Provider>
  
  )
}
