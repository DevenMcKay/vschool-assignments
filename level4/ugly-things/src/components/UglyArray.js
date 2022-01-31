import React, { useContext } from "react"
import { ListContext } from "./listContext"



function UglyArray() {
  const { userArray, handleChange, handleDelete } = useContext(ListContext)


  return (
    <div className="list">
      {userArray.map(item => (
        <div key={item._id} className="item">
          <input
            className="textTitle"
            value={item.title}
            name="title"
            onChange={handleChange}
          />
          <input
            className="textDescription"
            value={item.description}
            name="descritpion"
            onChange={handleChange}
          />
          <img
            src={item.imgUrl}
            alt={item.title} />
          <input
            className="textLink"
            value={item.imgUrl}
            name="imgUrl"
            onChange={handleChange}
          />
          <textarea
            className="textComment"
            placeholder="Enter Comment Here"
            onChange={handleChange}
          >
          </textarea>
          <div className="buttonContainer">
            <button>Edit</button>
            <button>Comment</button>
            <button onClick={() => handleDelete(item._id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default UglyArray