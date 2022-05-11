import React, {useContext, useEffect} from "react"
import { UserContext } from "../../context/UserProvider"
import SoundList from "../sounds/SoundList"

export default function Public() {
  const {
    user: {
      username
    },
    sounds,
    playSound,
    pauseSound,
    downloadSound,
  } = useContext(UserContext)

  return (
    <main className="public">
      <h1>Sounds</h1>
      <SoundList
      sounds={sounds}
      playSound={playSound}
      pauseSound={pauseSound}
      downloadSound={downloadSound}
      />
    </main>
  )
}