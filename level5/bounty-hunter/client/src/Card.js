import React, { useState } from "react"
import "./Card.css"

function Card(props) {
  const { First_Name, Last_Name, isDead, Bounty_Amount, Type, Img, _id, deleteBounty, editBounty } = props
  const [updatedBounty, setUpdatedBounty] = useState(props)
  const [editToggle, setEditToggle] = useState(false)

  const theme = () => {
    if (Type === "Jedi") {
      return "blue"
    } else if (Type === "Sith") {
      return "red"
    }
  }

  const cover = () => {
    if (isDead === true) {
      return "cover"
    } else if (isDead === false) {
      return ""
    }
  }

  const onSubmit = (e) => {
    e.preventDefault()
    editBounty(updatedBounty, _id)
    setEditToggle(false)
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target
    type === "checkbox" ? setUpdatedBounty(prevInput => ({ ...prevInput, [name]: checked })) : setUpdatedBounty(prevInput => ({ ...prevInput, [name]: value }))
  }

  return (
    console.log(Img),
    <>
      {!editToggle ?
        <>
          <div className={`card theme-${theme()}`} >
            <div className="cardHeader">
              <div>
                <input
                  name="isDead"
                  type="checkbox"
                  className="isDeadCheck"
                  id="Dead"
                  checked={updatedBounty.isDead}
                  onChange={handleChange}
                  disabled
                ></input>
                <label
                  htmlFor="Dead">HIT
                </label>
              </div>
              <h1>{Bounty_Amount}</h1>
            </div>
            <div className="ImgContainer">
              <img
                src={Img}
                // FILLS IMAGE IF LINK ERROR
                onError={({ currentTarget }) => {
                  currentTarget.onerror = null;
                  currentTarget.src = "https://live.staticflickr.com/5604/15364471327_12e86bf4c3_z.jpg"
                }}
                alt={First_Name} />
              <div className={cover()}></div>
            </div>
            <div className="nameContainer">
              <h1>{First_Name}</h1>
              <h1>{Last_Name}</h1>
            </div>
            <h2 className="type">{Type}</h2>
            <div className="buttonContainer">
              <button className="edit" onClick={() => setEditToggle(!editToggle)
              }>Edit</button>
              <button className="delete" onClick={() => deleteBounty(_id)}>Delete</button>
            </div>
          </div>
        </>
        :
        <>
          <form
            className="card"
            onSubmit={onSubmit}
          >
            <div className="cardHeader">
              <div>
                <input
                  name="isDead"
                  type="checkbox"
                  className="isDeadCheck"
                  id="Dead"
                  checked={updatedBounty.isDead}
                  onChange={handleChange}
                ></input>
                <label
                  htmlFor="Dead">HIT</label>
              </div>
              <input
                name="Bounty_Amount"
                placeholder="Bounty"
                className="bountyAmount"
                type="number"
                value={updatedBounty.Bounty_Amount}
                min={0}
                onChange={handleChange}
              ></input>
            </div>
            <div className="ImgContainer">
              <img src={Img} alt={`${First_Name} ${Last_Name}`} />
            </div>
            <input
              name="Img"
              placeholder="Image Url"
              value={updatedBounty.Img}
              onChange={handleChange}
            ></input>
            <input
              name="First_Name"
              placeholder="First Name"
              value={updatedBounty.First_Name}
              onChange={handleChange}
            ></input>
            <input
              name="Last_Name"
              placeholder="Last Name"
              value={updatedBounty.Last_Name}
              onChange={handleChange}
            ></input>
            <select
              name="Type"
              value={updatedBounty.Type}
              onChange={handleChange}
            >
              <option
                value="Jedi"
              >Jedi</option>
              <option
                value="Sith"
              >Sith</option>
            </select>
            <button className="edit"
            >Save</button>
          </form>
        </>}
    </>
  )
}

export default Card