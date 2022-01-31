import React, { useContext } from "react";
import { FormContext } from "./formContext"

function Form(props) {
  const { userInput, onChange, onSubmit } = useContext(FormContext)

  return (
    <form className="userInput" onSubmit={onSubmit}>
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={onChange}></input>
      <input
        type="text"
        name="imgUrl"
        placeholder="Img Url"
        onChange={onChange}></input>
      <input
        type="text"
        name="description"
        placeholder="Description"
        onChange={onChange}></input>
      <div className="submitBtnContainer">
        <button>Submit</button>
      </div>
    </form>
  )
}

export default Form