import React from "react";

function Die(props) {
  // keep() {
  //   return{ {props.num=props.num }}
  // }
  console.log(props.num)
  return (
    <div>
      <button className="die" onClick={props.onClick}>{props.nums}</button>
    </div>
  )
}

export default Die