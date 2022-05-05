import React, {useContext, useEffect} from "react"
import { UserContext } from "../../context/UserProvider"
import SoundForm from "../sounds/SoundForm"
import SoundList from "../sounds/SoundList"

export default function Profile() {
  const {
    user: {
      username
    }
  } = useContext(UserContext)

  return (
    <main className="profile">
      <h1>Welcome {username}! </h1>
      <SoundForm/>
      <h2>Your Sounds</h2>
      <SoundList/>
    </main>
  )
}