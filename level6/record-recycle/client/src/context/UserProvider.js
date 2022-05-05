import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {staticSound, staticUser} from '../component/staticData/staticData'

export const UserContext = React.createContext()

const initState = {
  user: staticUser || {},
  token: "",
  sounds: staticSound || [],
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