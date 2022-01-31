import React from "react";

function Cards(props) {

  return (
    <div className="imageContainer">
      <img src={props.item.image} alt={"hit pic" + props.id.index} />
      <p className="nameText">{props.item.name}</p>
      <div className='cover'></div>
    </div>
  )
}
export default Cards