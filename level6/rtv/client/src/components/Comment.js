import React from 'react'

export default function Comment(props) {
  const { comment, username } = props
  return (
    <div className='comment'>
      <p>{username} :</p>
      <p>&nbsp;{comment}</p>
    </div>
  )
}