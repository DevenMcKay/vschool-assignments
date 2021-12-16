import React from "react"
import './index.css';
import DiceBox from "./DiceBox";

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0
    }
  }
  
  render() {
    return (
      <DiceBox />
    )
  }
}

export default App