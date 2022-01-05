import React from "react";
import Die from './Die'

class DiceBox extends React.Component {
  constructor() {
    super()
    this.state = {
      nums: [
        {
          id: 1,
          num: 0,
          onHold: false
        },
        {
          id: 2,
          num: 0,
          onHold: false
        },
        {
          id: 3,
          num: 0,
          onHold: false
        },
        {
          id: 4,
          num: 0,
          onHold: false
        },
        {
          id: 5,
          num: 0,
          onHold: false
        }
      ]
    }
  }

  roll = () => {
    const randomNum = () => Math.floor((Math.random() * 6) + 1)
    this.setState({
      nums: this.state.nums.map(e => ({ ...e, num: randomNum() })
        // num1: Math.floor((Math.random() * 6) + 1),
        // num2: Math.floor((Math.random() * 6) + 1),
        // num3: Math.floor((Math.random() * 6) + 1),
        // num4: Math.floor((Math.random() * 6) + 1),
        // num5: Math.floor((Math.random() * 6) + 1)
      )
    })
  }

  dieClick = () => {
    console.log("Here")
  }

  // onHold = () => {
  //   return onHold ? false : true
  // }

  render() {
    const die = this.state.nums.map((item, index) => <Die id={index} key={index} num={item} onClick={this.dieClick} />)
    return (
      console.log(this.state),
      <div>
        <div className="dieContainer">
          {die}
          {/* <Die num={this.state.num1}/>
          <Die num={this.state.num2}/>
          <Die num={this.state.num3}/>
          <Die num={this.state.num4}/>
          <Die num={this.state.num5}/> */}
        </div >
        <div className="btnContainer">
          <button onClick={this.roll}>Click</button>
        </div>
      </div>
    )
  }
}

export default DiceBox