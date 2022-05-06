import React, { useState, useContext } from 'react'
import { UserContext } from "../../context/UserProvider"

export default function SoundForm(props) {

  const { user:{username, _id}, addSound } = useContext(UserContext)

  const initInputs = {
    title: "",
    description: "",
    imgUrl: "",
    username: username,
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
    addSound(inputs)
  }

  const { title, description, imgUrl } = inputs

  return (
    <form className="soundForm" onSubmit={handleSubmit}>
      <input
        name="title"
        placeholder="Title"
        value={title}
        onChange={handleChange}
        type="text"
      >
      </input>
      <input
        name="imgUrl"
        placeholder="imgUrl"
        value={imgUrl}
        onChange={handleChange}
        type="text"
      >
      </input>
      <textarea
        name="description"
        placeholder="Description"
        value={description}
        onChange={handleChange}
        type="text"
      >
      </textarea>
      <button>Save</button>
    </form>
  )
}