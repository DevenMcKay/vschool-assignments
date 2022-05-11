import React, { useContext, useEffect } from "react"
import { UserContext } from "../../context/UserProvider"
import SoundForm from "../sounds/SoundForm"
import SoundList from "../sounds/SoundList"

export default function Profile() {
  const {
    user: {
      username,
      _id
    },
    sounds,
    deleteSound,
    playSound, 
    pauseSound,
    downloadSound,
  } = useContext(UserContext)

  const filteredSounds =
    sounds.filter(sound => {
      if (sound.userId === _id) {
        return sound
      }
    })

  return (
    <main className="profile">
      <h1>Welcome {username}! </h1>
      <SoundForm />
      <h2>Your Sounds</h2>
      <SoundList 
      sounds={filteredSounds} 
      deleteSound={deleteSound}
      playSound={playSound}
      pauseSound={pauseSound}
      downloadSound={downloadSound}
      />
    </main>
  )
}