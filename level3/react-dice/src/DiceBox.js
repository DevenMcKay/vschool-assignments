import React from "react";
import Die from './Die'

class DiceBox extends React.Component {
  constructor() {
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0
    }
    this.roll = this.roll.bind(this)
  }

  roll() {
    this.setState(() => {
      return {
        num1: Math.floor((Math.random() * 6) + 1),
        num2: Math.floor((Math.random() * 6) + 1),
        num3: Math.floor((Math.random() * 6) + 1),
        num4: Math.floor((Math.random() * 6) + 1),
        num5: Math.floor((Math.random() * 6) + 1)
      }
    })
  }

  render() {
    return (
      <div>
        <div className="dieContainer">
          <Die num={this.state.num1}/>
          <Die num={this.state.num2}/>
          <Die num={this.state.num3}/>
          <Die num={this.state.num4}/>
          <Die num={this.state.num5}/>
        </div >
        <div className="btnContainer">
          <button onClick={this.roll}>Click</button>
        </div>
      </div>
    )
  }
}

export default DiceBox