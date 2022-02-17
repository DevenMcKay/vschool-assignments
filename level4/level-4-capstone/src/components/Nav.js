import React from "react";
import "./Nav.css"
import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"

export default function Nav() {
  const randNum = Math.floor(Math.random()*8)+1
  const { videoIndex } = useParams()
  return (
    <nav>
      <Link  to={`track${randNum}`}><p className="randomSong">RANDOM SONG</p></Link>
      <Link to="/"><h1 className="title">NEW MUSIC LIST</h1></Link>
      <Link to={`about${videoIndex}`}><p>
        ABOUT</p></Link>
    </nav>
  )
}