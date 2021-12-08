import React from "react"
import Square from "./Square"
import "./App.css"
// import Buttons from "./Buttons"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colors: ["white", "white", "white", "white"]
    }
    this.smallDJ = this.smallDJ.bind(this)
    this.partyDJ = this.partyDJ.bind(this)
  }
    
  smallDJ() { 
    if (this.state.colors[1] !== "white")
    this.setState({
      colors: ["white", "white", "white", "white"]
    })
    else {
      this.setState({
        colors: ["black", "black", "black", "black"]
      })
    }
    // console.log(this.state.colors[1])
  }
  partyDJ() {
    this.setState(prevState => {
     return { 
       colors: ["purple", "purple", prevState, prevState]
      }
    })
  }

  render() {
    const squares = this.state.colors.map((item, index) => <Square key={index} color={item}/>)
    // const buttons = this.state.colors.map((item, index) => <Buttons id={index} item={item}/>)
    return (
    <div className="container">
      {squares}
      <div className="buttonContainer">
        <button onClick={this.smallDJ}>Small DJ</button>
        <button onClick={this.partyDJ}>Party DJ</button>
        <button >Left DJ</button>
        <button >Right DJ</button>
        <button >Big DJ 1</button>
        <button >Big DJ 2</button>
        <button >Big DJ 3</button>
        <button >Big DJ 4</button>
        <button >Make Some Noise</button>
      </div>
      {/* {buttons} */}
    </div>
    )}
  }

  export default App