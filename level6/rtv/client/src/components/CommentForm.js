import React from "react"

export default function CommentForm() {
  return(
    <div className="CommentForm">
        <textarea
        placeholder="Comment">
        </textarea>
        <p>userName</p>
        <button>Save</button>
    </div>
  )
}