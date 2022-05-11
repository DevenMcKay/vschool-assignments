import React from "react";
import Sound from "./Sound"

export default function SoundList(props) {

  const { 
    sounds,
    deleteSound,
    playSound,
    pauseSound,
    downloadSound,
   } = props

  const mappedSounds =
    sounds ? sounds.map((sound, index) =>
      <Sound
        key={ index}
        {...sound}
        playSound={playSound}
        pauseSound={pauseSound}
        deleteSound={deleteSound}
        downloadSound={downloadSound}
      />) : null

  return (
    <section className="soundList">
      {mappedSounds}
    </section>
  )
}