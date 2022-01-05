import React from "react";

function TodoComponent(props) {
  return (
    <div>
      <h1>{props.item.title}</h1>
      <h2>{props.item.description}</h2>
      <p>{props.item.price}</p>
    </div>
  )
}

export default TodoComponent
