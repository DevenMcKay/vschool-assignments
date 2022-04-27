import React, {useState}from "react"
import CommentList from "./CommentList"
import CommentForm from "./CommentForm"

export default function Issue(props) {
  const { title, description, votes, upVote, downVote, _id, username, comments, deleteIssue } = props
  const [addComment, setAddComment] = useState(false)
  return (
  <div>
    <div className="issue">
      <h2>{title}</h2>
     <button onClick={()=>deleteIssue(_id)}>Delete</button>
      <p>{username}</p>
      <p>{description}</p>
      <div className="vote-container">
        <div>
          <button onClick={()=>upVote(_id)}>⬆</button>
          <p>{votes}</p>
          <button onClick={()=>downVote(_id)}>⬇</button>
        </div>
        <div>
          <button onClick={()=>{setAddComment(!addComment)}}>✚ 💬</button>
        </div>
      </div>
    </div>
    <CommentList comments={comments} id={_id}/>
    {addComment && <CommentForm _id={_id} setAddComment={setAddComment}/>}
  </div>
  )
}