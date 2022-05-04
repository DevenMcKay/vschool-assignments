import React, { useState, useEffect } from 'react'
import axios from 'axios'

export const UserContext = React.createContext()

// DEFAULT DATA
const user = {
  title: "",
  description: "",
  imgUrl: "",
  username: "",
  user: "",
  votedUser: "",
  comments: "",
  tags: [""],
  favorite: [""]
}

const initState = {
  user: {},
  token: "",
  sounds: [],
  errMsg: ""
}

export default function UserProvider(props) {
  const [userState, setUserState] = useState(initState)

  return (
    <UserContext.Provider
      value={{
        ...userState
      }}>
      {props.children}
    </UserContext.Provider>
  )
}