import React from "react";

function Pet(props){

  return (
    <div className="pets">
      <h3>{props.pet.name}</h3>
      <h5>&nbsp; - {props.pet.breed}</h5>
    </div>
  )
}

export default Pet