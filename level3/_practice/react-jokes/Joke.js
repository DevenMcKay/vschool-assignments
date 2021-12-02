import React from "react"

function Joke(props){
    function noDisplay(props) {
        if (props.question === undefined) {
           return <div><h2>{props.answer}</h2></div>
        } else {
            return <div><h3>Question: {props.question}</h3>
                    <h2>Answer: {props.answer}</h2></div>
        }
    }
    return (
        <div>
           {noDisplay(props)}
        </div>
    )
}


export default Joke