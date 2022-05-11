import React, { useState, useContext } from 'react'
import { UserContext } from "../../context/UserProvider"

export default function SoundForm(props) {

  const { user: { username, _id }, addSound } = useContext(UserContext)

  const initInputs = {
    title: "",
    description: "",
    imgUrl: "",
  }

  const [inputs, setInputs] = useState(initInputs)
  const [warningSize, setWarningSize] = useState("white")
  const [warningType, setWarningType] = useState("white")
  const { title, description, imgUrl, files } = inputs

  function enableSaveButon() {
    if (title !== "" && description !== "" && imgUrl !== "" &&
      files && files !== File && files !== "") {
      return <button>Save</button>
    } else return <button disabled>Save</button>
  }

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(prevInput => ({
      ...prevInput,
      [name]: value
    }))
  }

  function handleFile(e) {
    // LARGE NON-MP3 FILE
    if (e.target.files[0].type !== "audio/mpeg" && e.target.files[0].size > 2000000) {
      return (setInputs(prevInput => ({
        ...prevInput,
        files: ""
      })), setWarningType("red"), setWarningSize("red"))

      // NON-MP3 
    } if (e.target.files[0].type !== "audio/mpeg") {
      return (setInputs(prevInput => ({
        ...prevInput,
        files: ""
      })), setWarningType("red"), setWarningSize("white"))

      // LARGE FILE
    } if (e.target.files[0].size > 2000000) {
      return (setInputs(prevInput => ({
        ...prevInput,
        files: ""
      })), setWarningSize("white"), setWarningSize("red"))

      // GOOD FILE
    } else if (e.target.files[0].size < 2000000 && e.target.files[0].type === "audio/mpeg") {
      return (setInputs(prevInput => ({
        ...prevInput,
        files: e.target.files[0]
      })), setWarningSize("white"), setWarningType("white"))
    }
  }

  function handleSubmit(e) {
    e.preventDefault()
    // DECLARES FORM OBJECT FOR SUBMIT
    let formData = new FormData(newForm);
    addSound(formData)
    // RESETS INPUTS
    setInputs(initInputs)
    // RESETS FILE INPUT
    document.getElementById("fileInput").value = "";
  }

  let newForm = document.getElementById('soundForm');


  return (
    <form className="soundForm" onSubmit={handleSubmit} id="soundForm">
      <input
        name="username"
        value={username}
        onChange={handleChange}
        type="hidden"
      >
      </input>
      <input
        name="title"
        placeholder="Title (Sound Name)"
        value={title}
        onChange={handleChange}
        type="text"
      >
      </input>
      <p className='warning'>
        <span style={{ "color": warningSize }}> 2MB MAX</span> /
        <span style={{ "color": warningType }}> MP3 ONLY</span></p>
      <input
        name="file"
        onChange={handleFile}
        type="file"
        id="fileInput"
      >
      </input>
      <input
        name="imgUrl"
        placeholder="Image URL"
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
      {enableSaveButon()}
    </form>
  )
}