import React from 'react'
import Comment from './Comment'

export default function CommentList(props) {
  const { comments, _id, page, deleteComment } = props
  return(
    <div className='commentList'>
      {comments.length>=1 && <h2>Comments</h2>}
      {comments.map((comment, index) => 
      <Comment 
      key={_id+index} 
      {...comment} 
      _id={_id}
      commetId={_id+index} 
      page={page}
      deleteComment={deleteComment}
      />)}
    </div>
  )
}