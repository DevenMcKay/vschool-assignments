import React from "react";

function Die(props) {
  // keep() {
  //   return{ {props.num=props.num }}
  // }
  return (
    <div>
      <button className="die">{props.num}</button>
    </div>
  )
}

export default Die