import React, { useContext } from "react";
import { FormContext } from "./formContext"

// TOP PAGE USER INPUT FORM SECTION

function Form() {
  const {
    onChange,
    onSubmit
  } = useContext(FormContext)

  return (
    <>
      <h1
        className="titleText"
      >Ugly Thangs</h1>
      <form
        className="userInput"
        onSubmit={onSubmit}>
        <input
          name="title"
          placeholder="Title"
          type="text"
          onChange={onChange}></input>
        <input
          name="imgUrl"
          placeholder="Img Url"
          type="text"
          onChange={onChange}></input>
        <input
          name="description"
          placeholder="Description"
          type="text"
          onChange={onChange}></input>
        <div
          className="submitBtnContainer">
          <button
          >Submit</button>
        </div>
      </form>
    </>
  )
}

export default Form