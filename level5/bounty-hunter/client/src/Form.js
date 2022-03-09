import React, { useState } from "react"
import "./Form.css"
import Unlockable from "./Unlockable.jpg"

function Form(props) {
  const initInputs = { First_Name: "", Last_Name: "", isDead: false, Bounty_Amount: 0, Type: "", Img: "" }
  const [newBounty, setNewBounty] = useState(initInputs)
  const { First_Name, Last_Name, isDead, Bounty_Amount, Type, Img, addBounty } = props

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    type === "checkbox" ? setNewBounty(prevInput => ({ ...prevInput, [name]: checked })) : setNewBounty(prevInput => ({ ...prevInput, [name]: value }))
  }

  function onSubmit(e) {
    e.preventDefault()
    addBounty(newBounty)
    setNewBounty(initInputs)
  }

  return (
    <>
      <form
        className="newForm card"
        onSubmit={onSubmit}
      >
        <div className="cardHeader">
          <div>
            <input
              name="isDead"
              checked={newBounty.isDead}
              type="checkbox"
              className="isDeadCheck"
              id="Dead"
              onChange={handleChange}
            ></input>
            <label
              htmlFor="Dead">HIT</label>
          </div>
          <input
            name="Bounty_Amount"
            value={newBounty.Bounty_Amount}
            className="bountyAmount"
            type="number"
            placeholder="Bounty"
            min={0}
            onChange={handleChange}
          ></input>
        </div>
        <div className="ImgContainer">
          <img src={Unlockable} alt={`${First_Name} ${Last_Name}`} />
        </div>
        <input
          name="Img"
          value={newBounty.Img}
          onChange={handleChange}
          placeholder="Image Url"
        ></input>
        <input
          name="First_Name"
          value={newBounty.First_Name}
          placeholder="First Name"
          onChange={handleChange}
        ></input>
        <input
          name="Last_Name"
          value={newBounty.Last_Name}
          placeholder="Last Name"
          onChange={handleChange}
        ></input>
        <select
          name="Type"
          value={newBounty.Type}
          onChange={handleChange}
        >
          <option
            value="Jedi"
          >Jedi</option>
          <option
            value="Sith"
          >Sith</option>
        </select>
        <button>Submit</button>
      </form>
    </>
  )
}


export default Form
