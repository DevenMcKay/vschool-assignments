import React from "react"
import { useContext } from "react"
import { ListContext } from "./listContext"

function Comment(props) {
  const {
    handleChangeComments,
    commentsBox,
    deleteComment,
    commentsDisable

  } = useContext(ListContext)

  const disableBtn = () => {
    while (props.commentIndex === commentsBox.length - 1) {
      return ""
    }
    return (props.itemIsDisabled)
  }

  return (
    <div className="commentSection">
      <textarea
        className="textComment"
        placeholder="Enter Comment Here"
        onChange={(event) => handleChangeComments(props.item.props.id, props.item.props.idIndex, event)}
        disabled={disableBtn()}
        name="comments"
        value={props.item.comments}
      >
      </textarea>
      <button
        className="deleteComment"
        onClick={() => deleteComment(props.item.props.idIndex)}>
        Delete Comment</button>
    </div>
  )
}
export default Comment