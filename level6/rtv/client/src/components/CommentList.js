import React from 'react'
import Comment from './Comment'

export default function CommentList(props) {
  const { comments, id } = props
  return(
    <div className='commentList'>
      {comments.map((comment, index) => <Comment key={id+index} {...comment} index={id+index}/>)}
    </div>
  )
}