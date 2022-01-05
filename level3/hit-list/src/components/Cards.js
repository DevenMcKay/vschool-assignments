import React from "react";

function Cards(props) {

  return (
    <div class="imageContainer">
      <img src={props.item.image} alt={"hit pic" + props.id.index} />
      <p className="nameText">{props.item.name}</p>
      <div class='cover'></div>
    </div>
  )
}
export default Cards