import React from "react"

export default function IssueFrom(props) {
  const {title, description} = props
  return (
    <div className="issue-form">
      <input
        placeholder="Title"
        value={title}
      ></input>
      <input
        placeholder="Description"
        value={description}
      ></input>
    </div>
  )
}