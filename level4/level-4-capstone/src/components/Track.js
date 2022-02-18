import React, { useContext, useEffect } from "react"
import { useParams } from "react-router-dom"
import { DataContext } from "./dataContext"
import "./Track.css"

export default function Track() {
  const { videoIndex } = useParams()
  const {
    list,
    youtube,
    setSongIndex,
    setPage } = useContext(DataContext)

  useEffect(() => {
    return (
      setSongIndex(videoIndex),
      setPage("track")
    )
  })
  return (
    // YOUTUBE-NOCOOKIE.COM PREVENTS PREOMISE ERROR
    <>
      <div className="track">
        <iframe title={list[videoIndex].name} src={`https://www.youtube-nocookie.com/embed/${youtube[videoIndex].video}`}>
        </iframe>
      </div>
    </>
  )
}