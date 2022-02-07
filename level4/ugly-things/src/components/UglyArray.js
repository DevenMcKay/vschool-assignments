import React, { useContext } from "react"
import { ListContext } from "./listContext"
import Comment from "./Comment"
function UglyArray(props) {
  const {
    userArray,
    handleChange,
    handleDelete,
    handleEdit,
    commentsBox,
    addComment

  } = useContext(ListContext)

  return (
    <div className="list">
      {userArray.map(item => (
        <div key={item._id} className="listItem">
          <input
            className="textTitle"
            value={item.title}
            name="title"
            onChange={(event) => handleChange(item._id, event)}
            disabled={item.inputDisabled}
          />
          <input
            className="textDescription"
            value={item.description}
            name="description"
            onChange={(event) => handleChange(item._id, event)}
            disabled={item.inputDisabled}
          />
          <img
            src={item.imgUrl}
            alt={item.title} />
          <input
            className="textLink"
            value={item.imgUrl}
            name="imgUrl"
            onChange={(event) => handleChange(item._id, event)}
            disabled={item.inputDisabled}
          />
          {commentsBox.map((comment, index) => {
            if (item._id === comment.props.id) {
              return (
                <Comment
                  key={comment.props.id + index}
                  item={comment}
                  itemIsDisabled={item.inputDisabled}
                  commentIndex={index}
                />   
              ) 
            } 
          })}
          <div className="itemButtonContainer">
            <button
              disabled={item.editBtnDisable}
              onClick={() => handleEdit(item._id)}
            >{item.editBtnText}</button>
            <button
              onClick={() => addComment(item)}
            >Add Comment</button>
            <button
              onClick={() => handleDelete(item._id)}
            >Delete</button>
          </div>
        </div>

      ))}
    </div>
  )
}

export default UglyArray