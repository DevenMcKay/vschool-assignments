import React from "react"
import "./About.css"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./dataContext"

export default function About() {
  const { videoIndex } = useParams()
  const { list, lastFm, apple, youtube, params } = useContext(DataContext)
  return (
    <div className="about">
      <img src={youtube[params].image} className="bioImage"></img>
      <h1 className="bioArtistName">{lastFm[params].artistName.toUpperCase()}</h1>
      <p className="bio" >{lastFm[params].artistBio}</p>
      <div className="linkContainer">
        <div className="logo-link"><p><a href={apple[params].appleUrl}>
          <img src={require("./images/apple.png")} />Apple</a></p>
        </div>
        <div className="logo-link"> <p><a href={lastFm[params].artistUrl}>
          <img src={require("./images/lastfm.png")} />LastFm</a></p>
        </div>
        <div className="logo-link"><p><a href={`https://www.youtube.com/watch?v=${youtube[params].video}`}>
          <img src={require("./images/youtube.png")} />Youtube</a></p>
        </div>
        <div className="logo-link"><p><a href={`https://app.napster.com/new-releases/featured`}>
          <img src={require("./images/napster.png")} />Napster</a></p>
        </div>
      </div>
      <p>⬆ APIs used to build website linked above ⬆</p>
    </div>
  )
}