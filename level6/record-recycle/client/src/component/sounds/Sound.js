import React, { useState } from "react"
// useLocation GIVES PATHNAME 
import { useLocation } from 'react-router-dom'
export default function Sound(props) {
  const location = useLocation()

  const [toggle, setToggle] = useState(false)

  const {
    imgUrl,
    title,
    description,
    user,
    tags,
    username,
    deleteSound,
    playSound,
    pauseSound,
    downloadSound,
    fileName,
    _id: soundId,
  } = props

  const mapTags =
    tags ? tags.map((tag, index) => {
      return <a key={index} href='#'>{`#${tag}`}<span>|</span></a>
    }) : null

  function soundDeleteBtn() {
    if (location.pathname === '/profile')
      return <button onClick={() => deleteSound(soundId)}>Delete</button>
    else return null
  }
  function controlSound() {
    if (toggle) {
      return pauseSound(fileName)
    }
    if (!toggle) {
      return playSound(fileName)
    }
  }
  // PLAY BUTTON DISABLE
  function toggleTimer() {
    setTimeout(function () {
      setToggle(prev => !prev)
    }, 3000)
  }

  return (
    <section className="sound">
      <div className="soundImage">
        <img src={imgUrl} alt="title">
        </img>
        {toggle ? <button disabled>Play</button> : <button onClick={() => { return (toggleTimer(), controlSound(), setToggle(prev => !prev)) }}>Play</button>}
      </div>
      <div className="soundInfo">
        <div className="titleContainer">
          <h2>{title}</h2>
          {soundDeleteBtn()}
        </div>
        <p className="description">{description}</p>
        <p>Patron: {username}</p>
        <div className="tags">
          {mapTags}
        </div>
        <button onClick={() => downloadSound(title, fileName)}>Download</button>
      </div>
    </section>
  )
}