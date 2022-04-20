import React from "react"

export default function Issue(props) {
const {title, description} = props

  return(
    <div className="issue">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="vote-container">
        <div>
        <button>⬆</button><p>Up#</p>
        </div>
        <div>
        <button>⬇</button><p>Down#</p>
        </div>
      <div>
        <button>💬</button>
      </div>
      </div>
    </div>
  )
}