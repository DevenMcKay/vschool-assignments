import React, { useContext } from "react";
import "./Nav.css"
import { Link, useParams } from "react-router-dom"
import { DataContext } from "./dataContext";

export default function Nav() {
  const {page, songIndex, setSongIndex} = useContext(DataContext)
  const randNum =
    Math.floor(Math.random() * 8) + 1

  const arrows = () => {
    if (page === "home") {
      return <></>
    }  
    if (page === "track") {
      return (
        <>
          <Link
            to="/"
            id="leftArrow" ><span>List</span><span>⬅︎</span>
          </Link>
          <Link
            to={`about${songIndex}`}
            id="rightArrow" ><span>➡︎</span><span>About</span>
          </Link>
        </>)
    } 
    if (page === "about") {
      return (<>
        <Link
          to={`track${songIndex}`}
          id="leftArrow" ><span>Track</span><span>⬅︎</span>
        </Link>
        <Link
          to="/"
          id="rightArrow" ><span>➡︎</span><span>List</span>
        </Link>
      </>)
    }
  }

    const { videoIndex } = useParams()
    return (
      <>
        <nav>
          <Link
            to={`track${randNum}`}>
            <p className="randomSong"
              onClick={() => setSongIndex(randNum)}>RANDOM SONG</p>
          </Link>
          <Link
            to="/">
            <h1 className="title">NEW MUSIC LIST</h1>
          </Link>
          <Link
            to={`about${songIndex}`}><p>ABOUT</p>
          </Link>
        </nav>
        <div id="mySidenav" className="sidenav">
        {arrows()}
        </div>
      </>
    )
  }