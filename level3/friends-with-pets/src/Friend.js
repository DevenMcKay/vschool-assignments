import React from "react";
import Pet from "./Pet"

function Friend(props) {
  const petsCard = props.friend.pets.map(item => <Pet key={item.index} pet={item} />)
  // console.log(petsCard)
  return (
    <div className="container">
      <div className="cardLeft">
        <h1>{props.friend.name}</h1>
        <h2 className="age">Age {props.friend.age}</h2>
        <img src={props.friend.img} />
      </div>
      <div className="cardRight">
        <h2 className="petsTitle">Pets</h2>
        {petsCard}
      </div>
      
    </div>
  )
}

export default Friend