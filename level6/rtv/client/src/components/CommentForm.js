import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserProvider"

export default function CommentForm({_id, setAddComment}) {
  const {user, addComment} = useContext(UserContext)
 const [input, setInput] = useState({comment:"", username: user.username})

 function handleChange(e) {
   const {name,value} = e.target
   setInput(prevComment=> ({
     ...prevComment,
     [name]: value
   }))
 }

 function handleSubmit(e) {
   e.preventDefault()
   setAddComment(false)
  addComment(input, _id)
 }
  return(
    <form className="commentForm" onSubmit={handleSubmit}>
        <textarea
        type="text"
        name="comment"
        value={input.comment}
        onChange={handleChange}
        placeholder="Add Comment"
        >
        </textarea>
        <button>Save</button>
    </form>
  )
}