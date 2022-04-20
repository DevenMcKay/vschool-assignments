import React from "react"

export default function Issue(props) {

  return(
    <div className="issue">
      <h2>Title</h2>
      <p>Description</p>
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