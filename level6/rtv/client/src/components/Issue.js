import React from "react"

export default function Issue(props) {
  const { title, description, votes, upVote, downVote, _id, username } = props

  return (
    <div className="issue">
      <h2>{title}</h2>
      <p>{username}</p>
      <p>{description}</p>
      <div className="vote-container">
        <div>
          <button onClick={()=>upVote(_id)}>⬆</button>
          <p>{votes}</p>
          <button onClick={()=>downVote(_id)}>⬇</button>
        </div>
        <div>
          <button>💬</button>
        </div>
      </div>
    </div>
  )
}