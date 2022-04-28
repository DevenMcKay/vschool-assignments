import React from 'react'

export default function Comment(props) {
  const { comment, username, page, deleteComment, _id } = props

  function deleteButton() {
    if (page === "profile") {
      return <button onClick={() => deleteComment({ username, comment }, _id)}>Delete</button>
    } else { return null }
  }

  return (
    <div className='comment'>
      <div className='commentInput'>
        <p>{username} :</p>
        <p>&nbsp;{comment}</p>
      </div>
      {deleteButton()}
    </div>
  )
}