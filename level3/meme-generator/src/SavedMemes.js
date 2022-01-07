import React from "react";

function SavedMemes(props) {
  console.log(props)
  return (
    <form>
      <img src={props.item.url} alt={props.item.name}/>
      <button>Edit</button>
      <button>Save</button>
      <button>Delete</button>
    </form>
  )
}

export default SavedMemes


