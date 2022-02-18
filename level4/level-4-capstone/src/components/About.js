import React, { useEffect } from "react"
import "./About.css"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./dataContext"

export default function About() {
  const { videoIndex } = useParams()
  const {
    list,
    lastFm,
    apple,
    youtube,
    songIndex,
    setSongIndex,
    setPage } = useContext(DataContext)

  useEffect(() =>
    setPage("about")
  )
  return (
    <div className="about">
      <img src={youtube[songIndex].image} className="bioImage"></img>
      <h1 className="bioArtistName">{lastFm[songIndex].artistName.toUpperCase()}</h1>
      <p className="bio" >{lastFm[songIndex].artistBio}</p>
      <footer>
        <div className="linkContainer">
          <div className="logo-link"><p><a href={apple[songIndex].appleUrl}>
            <img src={require("./images/apple.png")} />Apple</a></p>
          </div>
          <div className="logo-link"> <p><a href={lastFm[songIndex].artistUrl}>
            <img src={require("./images/lastfm.png")} />LastFm</a></p>
          </div>
          <div className="logo-link"><p><a href={`https://www.youtube.com/watch?v=${youtube[songIndex].video}`}>
            <img src={require("./images/youtube.png")} />Youtube</a></p>
          </div>
          <div className="logo-link"><p><a href={`https://app.napster.com/new-releases/featured`}>
            <img src={require("./images/napster.png")} />Napster</a></p>
          </div>
        </div>
        <p className="bottomP">⬆ APIs used to build this website linked above ⬆</p>
      </footer>
    </div>
  )
}