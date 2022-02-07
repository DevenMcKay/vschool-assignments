import React, { useState, useContext } from "react"
import axios from "axios"
import { ListContext } from "./listContext"
const FormContext = React.createContext()

// PROPS NEEDED FOR {PROPS.CHILDREN} BELOW
// useCONTEXT TRIGGERS LISTCONTEXT OF SUBMIT CLICK
function FormContextProvider(props) {
  const [userInput, setInput] = useState({})
  const { didSubmit, setDidSubmit } = useContext(ListContext)

  const onChange = (event) => {
    const { name, value } = event.target
    setInput(prevInput =>
      ({ ...prevInput, [name]: value })
    )
  }

  const onSubmit = (event) => {
    event.preventDefault()
    axios.post("https://api.vschool.io/deven/thing", userInput)
      .then(function (response) {
        console.log(`Add Success ${JSON.stringify(response.data)}`)
        setDidSubmit(!didSubmit)
      }).catch(error => {
        console.log(error)
      })
  }

  return (
    <FormContext.Provider value={{ onSubmit, onChange }}>
      {props.children}
    </FormContext.Provider>
  )
}

export { FormContextProvider, FormContext }