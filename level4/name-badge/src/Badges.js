import React from "react"

function Badges(props) {
  function colorChange(props) {
    if (props.id % 2 === 0) {
      return "red"
    } else {
      return "blue"
    }
  }
  return (
    <div className="badgeContainer">
      <h2 style={{ backgroundColor: colorChange(props) }}>Badge: </h2>
      <div className="form badge">
        <p className="input">Name: {props.user[0].name} </p>
        <p className="input">Phone: {props.user[0].phone}</p>
        <p className="input">Place of Birth: {props.user[0].birthPlace}</p>
        <p className="input">Favorite Food: {props.user[0].favFood}</p>
        <p className="input">Email: {props.user[0].email}</p>
        <p className="input moreInfo">More Info: {props.user[0].moreInfo}</p>
      </div>
    </div>
  )
}
export default Badges