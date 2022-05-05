import React, {useContext, useEffect} from "react"
import { UserContext } from "../../context/UserProvider"
import SoundList from "../sounds/SoundList"

export default function Public() {
  const {
    user: {
      username
    }
  } = useContext(UserContext)

  return (
    <main className="public">
      <h1>Sounds</h1>
      {/* <SoundList/> */}
    </main>
  )
}