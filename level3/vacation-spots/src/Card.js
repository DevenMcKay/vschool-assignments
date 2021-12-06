import React from "react"

function Card(props) {
  let cardColor
  // CHANGES CARD COLOR BASED ON SEASON 
  if (props.spot.timeToGo === "Spring") {
    cardColor = "lightgreen"
  } else if (props.spot.timeToGo === "Summer") {
    cardColor = "#E66666"
  } else if (props.spot.timeToGo === "Fall") {
    cardColor = "#FFC270"
  } else if (props.spot.timeToGo === "Winter") {
    cardColor = "lightblue"
  }

  let dollar
  // CHANGES DOLLAR SIGNS BASED ON PRICE 
  if (props.spot.price <= 500) {
    dollar = "$"
  } else if (props.spot.price > 500 && props.spot.price <= 1000) {
    dollar = "$$"
  } else if (props.spot.price > 500) {
    dollar = "$$$"
  }

  // console.log(props.spot.timeToGo)

  return (
    <div className="card" style={{ backgroundColor: cardColor, opacity: 0.8 }}>
      <img src={props.spot.img} alt={props.spot.place} />
      <h1>{props.spot.place}</h1>
      <h2>{dollar} {props.spot.price}</h2>
      <h3 className="time">Time To Go: {props.spot.timeToGo}</h3>
    </div>
  )

}

export default Card

