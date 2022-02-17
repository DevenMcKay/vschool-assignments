import React from "react"
import "./Track.css"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import { DataContext } from "./dataContext"

export default function Track() {

  const { videoIndex } = useParams()
  const { list, youtube, setParams } = useContext(DataContext)
  // console.log(list)
  setParams(videoIndex)
  return (
    <div className="track">
      <iframe title={list[videoIndex].name} src={`https://www.youtube.com/embed/${youtube[videoIndex].video}`}></iframe>
    </div>
  )
}