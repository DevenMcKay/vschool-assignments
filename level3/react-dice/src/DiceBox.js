import React from "react";
import Die from './Die'

class DiceBox extends React.Component {
  state = {
    roll: 0,
    btnText: "Click",
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

  roll = () => {
    this.setState(prevState => ({ roll: prevState.roll + 1 }))
    const updatedNum = this.state.nums.map(item => {
      if (this.state.roll === 3) {
        return (
          item.num = 0,
          item.onHold = false,

          this.setState(() => ({ roll: 0 })))
      }
      else if (item.onHold === false) {
        item.num = Math.floor((Math.random() * 6) + 1)
      }
    })
    return this.setState(() => ({ num: updatedNum }))
  }

  // SAVES DIE NUMBER
  dieClick = (id) => {
    const updatedNum = this.state.nums.map(item => {
      if (item.id === id && item.onHold === false) {
        item.onHold = true
      } else if (item.id === id && item.onHold === true) {
        item.onHold = false
      }
      return item
    })
    this.setState({ nums: updatedNum })
  }

  render() {
    const die = this.state.nums.map((item, index) => <Die id={index} key={index} num={item} onClick={this.dieClick} />)
    console.log(this.state)
    return (
      <div>
        <div className="dieContainer">
          {die}
        </div >
        <div className="btnContainer">
          <button onClick={this.roll}>{this.state.btnText}</button>
        </div>
      </div>
    )
  }
}

export default DiceBox