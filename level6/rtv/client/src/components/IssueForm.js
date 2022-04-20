import React, {useState} from "react"

const initInputs = {
  title: "", 
  description: ""
}

export default function IssueFrom(props) {
  const {addIssue} = props
  const [inputs,setInputs] = useState(initInputs)

  function handleChange(e) {
    const {name, value} = e.target
    setInputs(prevInput=>({
      ...prevInput,
      [name]:value}))
  }

  function handleSubmit(e) {
    e.preventDefault()
    addIssue(inputs)
    setInputs(initInputs)
  }

  const {title, description} = inputs
  
  return (
    <form className="issueForm" onSubmit={handleSubmit}>
      <input
      type="text"
      name="title"
      placeholder="Title"
      value={title}
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