import React from "react"
import './App.css';
import axios from "axios"

 class App extends React.Component {
 state ={
   color: ""
 }

 componentDidMount = () =>{
  axios.get("https://www.colr.org/json/color/random?timestamp=${new Date().getTime()}")
  .then((result) => 
  this.setState({
    color: result.data.new_color
  })  
  )
 }

 render(){
   return (
       <div style={{backgroundColor:`#${this.state.color}`, width: "100vh", height: "100vh"}}/>  
   )
 }
}

export default App;
