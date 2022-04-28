import React, { useState, useContext } from "react"
import { UserContext } from "../context/UserProvider"


export default function IssueFrom(props) {
  const { addIssue } = props
  const { user } = useContext(UserContext)

  const initInputs = {
    title: "",
    description: "",
    imgUrl: "",
    username: user.username
  }

  const [inputs, setInputs] = useState(initInputs)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const { title, description, imgUrl } = inputs

  return (
    <form className="issueForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="imgUrl"
        placeholder="Image URL"
        value={imgUrl}
        onChange={handleChange}
      ></input>
      <textarea
        type="text"
        name="description"
        placeholder="Description"
        value={description}
        onChange={handleChange}
      ></textarea>
      <button>Add Issue</button>
    </form>
  )
}