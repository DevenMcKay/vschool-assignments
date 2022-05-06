import React from "react"
import proposal from "../images/fullstackProjectProp.jpg"
import layout from "../images/fullstackProjectLayout.jpg"
export default function About() {

  return (
    <main className="about">
      <h1>App Idea Board</h1>
      <img src={proposal} alt="Project Proposal"></img>
      <img src={layout} alt="Project Layout"></img>
      
    </main>
  )
}