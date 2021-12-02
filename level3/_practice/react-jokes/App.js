import React from "react"
import Joke from "./Joke"
import Head from "./Head"

function App() {
  return (
    <div className="con">
        <Head />
       <Joke 
       question="Why did the soccer player take so long to eat dinner?"
       answer="He thought he couldn’t use his hands!"
       />
       <Joke 
       question="What’s a cat’s favourite dessert?"
       answer="Mice-cream!"
       />
       <Joke 
       question="What do you call a guy who’s really loud?"
       answer="Mike!"
       />
       <Joke 
       question="What do you call two bananas on the floor?"
       answer="Slippers!"
       />
       <Joke 
       question="What goes up and down but doesn’t move?"
       answer="Stairs!"
       />
       <Joke 
       answer="It’s hard to explain puns to kleptomaniacs because they always take things literally."
       />
       
    </div>
  )
}

export default App