import React from 'react'

export default function Comment(props) {
  const {comments} = props
  return(
    <div className='comment'>
     <p>{comments}</p>
     <p>#Username</p>
    </div>
  )
}