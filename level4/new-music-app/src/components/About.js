import React, { useEffect } from "react"
import "./About.css"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./dataContext"

export default function About() {
  const { videoIndex } = useParams()
  const {
    lastFm,
    apple,
    youtube,
    songIndex,
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
          <div className="logo-link"><p><a href={apple[songIndex].appleUrl} target="_blank" rel="noreferrer" >
            <img src={require("./images/apple.png")} alt={lastFm[songIndex].artistName} />Apple</a></p>
          </div>
          <div className="logo-link"> <p><a href={lastFm[songIndex].artistUrl} target="_blank" rel="noreferrer" >
            <img src={require("./images/lastfm.png")} alt={lastFm[songIndex].artistName} />LastFm</a></p>
          </div>
          <div className="logo-link"><p><a href={`https://www.youtube.com/watch?v=${youtube[songIndex].video}`} target="_blank" rel="noreferrer" >
            <img src={require("./images/youtube.png")} alt={lastFm[songIndex].artistName} />Youtube</a></p>
          </div>
          <div className="logo-link"><p><a href={`https://app.napster.com/new-releases/featured`} target="_blank" rel="noreferrer" >
            <img src={require("./images/napster.png")} alt={lastFm[songIndex].artistName} />Napster</a></p>
          </div>
        </div>
        <p className="bottomP">⬆ APIs used to build this website linked above ⬆</p>
      </footer>
    </div>
  )
}