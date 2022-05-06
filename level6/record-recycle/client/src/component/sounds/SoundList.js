import React from "react";
import Sound from "./Sound"

export default function SoundList(props) {

  const { sounds } = props

  const mappedSounds =
    sounds ? sounds.map((sound, index) =>
      <Sound
        key={ index}
        {...sound}
      />) : null

  return (
    <section className="soundList">
      {mappedSounds}
    </section>
  )
}