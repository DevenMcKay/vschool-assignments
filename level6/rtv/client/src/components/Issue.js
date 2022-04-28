import React, { useState } from "react"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"

export default function Issue(props) {
  const {
    title,
    description,
    votes,
    imgUrl,
    upVote,
    downVote,
    _id,
    username,
    comments,
    deleteComment,
    deleteIssue,
    page,
    userErr,
    setUserErr } = props

  const [addComment, setAddComment] = useState(false)
  const [isError, setIsError] = useState(false)

  function deleteButton() {
    if (page === "profile") {
      return <button className="deleteIssueBtn" onClick={() => deleteIssue(_id)}>Delete</button>
    } else { return null }
  }

  function displayError(id) {
    if (id === _id) {
      setIsError(!isError)
      setTimeout(()=>{ return (setIsError(false))}, 2000)
    } else { return null }
  }

  return (
    <div className="issue">
      <div >
        <div className="issueTitle">
          <h2>{title}</h2>
          {deleteButton()}
        </div>
        <img src={imgUrl} alt={title}></img>
        <div className="userDescription">
          <p>{description}</p>
          <p className="username">- {username}</p>
        </div>
        <div className="vote-container">
          <div>
            <button onClick={() => { return (upVote(_id), displayError(_id)) }}>⬆</button>
            <p>{votes}</p>
            <button onClick={() => { return (downVote(_id), displayError(_id)) }}>⬇</button>
          </div>
          <div>
            <button onClick={() => { setAddComment(!addComment) }}>✚ 💬</button>
          </div>
        </div>
        {isError && userErr}
      </div>
      <CommentList
        comments={comments}
        _id={_id}
        page={page}
        deleteComment={deleteComment} />
      {addComment && <CommentForm _id={_id} setAddComment={setAddComment} />}
    </div>
  )
}