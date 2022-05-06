import React, {useContext, useEffect} from "react"
import { UserContext } from "../../context/UserProvider"
import SoundList from "../sounds/SoundList"

export default function Public() {
  const {
    user: {
      username
    },
    sounds
  } = useContext(UserContext)

  return (
    // console.log(sounds),
    <main className="public">
      <h1>Sounds</h1>
      <SoundList sounds={sounds}/>
    </main>
  )
}