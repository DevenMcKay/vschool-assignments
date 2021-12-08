import React from "react";
import "./App.css"

function Buttons(props) {
  console.log(props)

  function smallDJ() {
    this.setState((props) => {
      // props.items = "blue"
      console.log("Clicked!")
    })
  }
  return (
    <div className="buttonContainer">
      <button onClick={smallDJ}>Small DJ</button>
      <button >Party DJ</button>
      <button >Left DJ</button>
      <button >Right DJ</button>
      <button >Big DJ 1</button>
      <button >Big DJ 2</button>
      <button >Big DJ 3</button>
      <button >Big DJ 4</button>
      <button >Make Some Noise</button>
    </div>
  )
}

export default Buttons