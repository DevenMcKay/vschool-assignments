import React, { useState, useEffect, useContext } from "react"
import axios from "axios"
const ListContext = React.createContext()

function ListContextProvider(props) {
  const [userArray, setArray] = useState([])
  const [didSubmit, setDidSubmit] = useState(true)

  useEffect(() => {
    axios.get("https://api.vschool.io/deven/thing")
      .then(result => {
        return setArray(result.data)
      })
  }, [didSubmit])

  const handleChange = (event) => {
    const { name, value } = event.target
    setArray(prevInput =>
      ({ ...prevInput, [name]: value })
    )
  }

  const handleDelete = (id) => {
    axios.delete("https://api.vschool.io/deven/thing/" + id)
      .then(response => {
        console.log(response.data.msg)
      })
      .catch(error => { console.log(error) })
    const updatedArray = userArray.filter(item => (id !== item._id))
    return setArray(updatedArray)
  }


  return (
    console.log(didSubmit),
    <ListContext.Provider value={{
      userArray,
      handleDelete,
      didSubmit,
      setDidSubmit,
      handleChange
    }}>
      {props.children}
    </ListContext.Provider>
  )
}

export { ListContextProvider, ListContext }