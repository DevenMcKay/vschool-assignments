import React, {useState} from "react"

export default function Sound(props) {

  const [toggle, setToggle] = useState(false) 

  const {
    imgUrl,
    title,
    description,
    user,
    tags,
    username
  } = props

  const mapTags =
    tags ? tags.map((tag, index) => {
      return <a key={index} href='#'>{` #${tag} `}<span>|</span></a>
    }) : null


  return (
    <section className="sound">
      <div className="soundImage">
        <img src={imgUrl} alt="title">
        </img>
          <button onClick={()=>setToggle(prev=> !prev)}>{toggle? "Pause":"Play"}</button>
      </div>
      <div className="soundInfo">
        <h2>{title}</h2>
        <p>{username}</p>
        <p className="description">{description}</p>
        <p>{username}</p>
        <div className="tags">
          {mapTags}
        </div>
        <button>Download</button>
      </div>
    </section>
  )
}