import React, { useState } from "react"
import Square from "./Square"
import "./App.css"
import Sweep from "./sweep.m4a"
import Honk from "./honk.mp3"


function App() {
  const [colors, setColors] = useState(["white", "white", "white", "white"])
  const [isNoise, setHonk] = useState(false)

  // FUNCTIONS INSIDE HAVE TO BE EXPRESSIONS OR DECLARED FUNCTIONS (NOT METHODS)
  const smallDJ = () => {
    // honk()
    if (colors[0] !== "white") {
      setColors(
        ["white", "white", "white", "white"]
      )
    }
    else {
      setColors(
        ["black", "black", "black", "black"]
      )
    }
  }

  function partyDJ() {
    honk()
    setColors(prevState =>
      ["purple", "purple", prevState[2], prevState[3]])
  }

  const leftDJ = () => {
    honk()
    setColors(prevState =>
      [prevState[0], prevState[1], "blue", prevState[3]])
  }

  function rightDJ() {
    honk()
    setColors(prevState =>
      [prevState[0], prevState[1], prevState[2], "blue"])
  }

  function bigDJ1() {
    honk()
    setColors(prevState =>
      ["green", prevState[1], prevState[2], prevState[3]])
  }

  function bigDJ2() {
    honk()
    setColors(prevState =>
      [prevState[0], "yellow", prevState[2], prevState[3]])
  }

  function bigDJ3() {
    honk()
    setColors(prevState =>
      [prevState[0], prevState[1], "pink", prevState[3]])
  }

  function bigDJ4() {
    honk()
    setColors(prevState =>
      [prevState[0], prevState[1], prevState[2], "orange"])
  }

  function noise() {
    new Audio(Sweep).play()
    if (isNoise === true) {
      setHonk(false)
    } else if (isNoise === false) {
      setHonk(true)
    }
  }

  function honk() {
    if (isNoise === true) {
      new Audio(Honk).play()
    }
  }

  const squares = colors.map((item, index) => <Square key={index} color={item} />)

  return (
    <div>
      <h1>DJ React</h1>
      <div className="container">
        {squares}
        <div className="buttonContainer">
          <button onClick={smallDJ}>Small DJ</button>
          <button onClick={partyDJ}>Party DJ</button>
          <button onClick={leftDJ}>Left DJ</button>
          <button onClick={rightDJ}>Right DJ</button>
          <button onClick={bigDJ1}>Big DJ 1</button>
          <button onClick={bigDJ2}>Big DJ 2</button>
          <button onClick={bigDJ3}>Big DJ 3</button>
          <button onClick={bigDJ4}>Big DJ 4</button>
          <button onClick={noise}>Noise Toggle</button>
        </div>
      </div>
    </div>
  )
}

export default App


// class App extends React.Component {
//   constructor() {
//     super()
//     this.state = {
//       colors: ["white", "white", "white", "white"]
//     }
//     // EXAMPLE OF BINDING
//     // this.smallDJ = this.smallDJ.bind(this)
//   }
//   // BUTTON FUNCTIONS
//   smallDJ = () => {
//     this.honk()
//     if (this.state.colors[1] !== "white")
//       this.setState({
//         colors: ["white", "white", "white", "white"]
//       })
//     else {
//       this.setState({
//         colors: ["black", "black", "black", "black"]
//       })
//     }
//     // console.log(this.state.colors[1])
//   }
//   partyDJ = () => {
//     this.honk()
//     this.setState(prevState => {
//       return {
//         colors: ["purple", "purple", prevState, prevState]
//       }
//     })
//   }
//   leftDJ = () => {
//     this.honk()
//     this.setState(prevState => {
//       return {
//         colors: [prevState, prevState, "blue", prevState]
//       }
//     })
//   }
//   rightDJ = () => {
//     this.honk()
//     this.setState(prevState => {
//       return {
//         colors: [prevState, prevState, prevState, "blue"]
//       }
//     })
//   }
//   bigDJ1 = () => {
//     this.honk()
//     this.setState(prevState => {
//       return {
//         colors: ["green", prevState, prevState, prevState]
//       }
//     })
//   }
//   bigDJ2 = () => {
//     this.honk()
//     this.setState(prevState => {
//       return {
//         colors: [prevState, "yellow", prevState, prevState]
//       }
//     })
//   }
//   bigDJ3 = () => {
//     this.honk()
//     this.setState(prevState => {
//       return {
//         colors: [prevState, prevState, "pink", prevState]
//       }
//     })
//   }
//   bigDJ4 = () => {
//     this.honk()
//     this.setState(prevState => {
//       return {
//         colors: [prevState, prevState, prevState, "orange"]
//       }
//     })
//   }

//   isNoise = false

//   noise = () => {
//     new Audio(Sweep).play()
//     if (this.isNoise === true) {
//       this.isNoise = false
//     } else if (this.isNoise === false) {
//       this.isNoise = true
//     }
//   }
//   honk = () => {
//     if (this.isNoise === true) {
//       new Audio(Honk).play()
//     }
//   }

//   render = () => {
//     const squares = this.state.colors.map((item, index) => <Square key={index} color={item} />)
//     return (
//       <div>
//         <h1>DJ React</h1>
//         <div className="container">
//           {squares}
//           <div className="buttonContainer">
//             <button onClick={this.smallDJ}>Small DJ</button>
//             <button onClick={this.partyDJ}>Party DJ</button>
//             <button onClick={this.leftDJ}>Left DJ</button>
//             <button onClick={this.rightDJ}>Right DJ</button>
//             <button onClick={this.bigDJ1}>Big DJ 1</button>
//             <button onClick={this.bigDJ2}>Big DJ 2</button>
//             <button onClick={this.bigDJ3}>Big DJ 3</button>
//             <button onClick={this.bigDJ4}>Big DJ 4</button>
//             <button onClick={this.noise}>Noise Toggle</button>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// export default App