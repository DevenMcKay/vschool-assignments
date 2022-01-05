import React from "react"
import Square from "./Square"
import "./App.css"
import Sweep from "./sweep.m4a"
import Honk from "./honk.mp3"
// import Buttons from "./Buttons"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      colors: ["white", "white", "white", "white"]
    }
    // EXAMPLE OF BINDING
    // this.smallDJ = this.smallDJ.bind(this)
  }
  // BUTTON FUNCTIONS
  smallDJ = () => {
    this.honk()
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
  partyDJ = () => {
    this.honk()
    this.setState(prevState => {
      return {
        colors: ["purple", "purple", prevState, prevState]
      }
    })
  }
  leftDJ = () => {
    this.honk()
    this.setState(prevState => {
      return {
        colors: [prevState, prevState, "blue", prevState]
      }
    })
  }
  rightDJ = () => {
    this.honk()
    this.setState(prevState => {
      return {
        colors: [prevState, prevState, prevState, "blue"]
      }
    })
  }
  bigDJ1 = () => {
    this.honk()
    this.setState(prevState => {
      return {
        colors: ["green", prevState, prevState, prevState]
      }
    })
  }
  bigDJ2 = () => {
    this.honk()
    this.setState(prevState => {
      return {
        colors: [prevState, "yellow", prevState, prevState]
      }
    })
  }
  bigDJ3 = () => {
    this.honk()
    this.setState(prevState => {
      return {
        colors: [prevState, prevState, "pink", prevState]
      }
    })
  }
  bigDJ4 = () => {
    this.honk()
    this.setState(prevState => {
      return {
        colors: [prevState, prevState, prevState, "orange"]
      }
    })
  }

  isNoise = false

  noise = () => {
    new Audio(Sweep).play()
    if (this.isNoise === true) {
      this.isNoise = false
    } else if (this.isNoise === false) {
      this.isNoise = true
    }
  }
  honk = () => {
    if (this.isNoise === true) {
      new Audio(Honk).play()
    }
  }

  render = () => {
    const squares = this.state.colors.map((item, index) => <Square key={index} color={item} />)
    return (
      <div>
        <h1>DJ React</h1>
        <div className="container">
          {squares}
          <div className="buttonContainer">
            <button onClick={this.smallDJ}>Small DJ</button>
            <button onClick={this.partyDJ}>Party DJ</button>
            <button onClick={this.leftDJ}>Left DJ</button>
            <button onClick={this.rightDJ}>Right DJ</button>
            <button onClick={this.bigDJ1}>Big DJ 1</button>
            <button onClick={this.bigDJ2}>Big DJ 2</button>
            <button onClick={this.bigDJ3}>Big DJ 3</button>
            <button onClick={this.bigDJ4}>Big DJ 4</button>
            <button onClick={this.noise}>Noise Toggle</button>
          </div>
        </div>
      </div>
    )
  }
}

export default App