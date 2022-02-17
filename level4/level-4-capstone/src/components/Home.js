import React, { useContext, useEffect } from "react";
import { DataContext } from "./dataContext";
import "./Home.css"
import { Link } from "react-router-dom"

export function Home() {
  const { albums, setAlbums, images, setParams } = useContext(DataContext)

  const handleClick = () => {

  }

  return (
    <div className="imageContainer">
      <div className="imageDiv">
        {images.map((item, index) => (
          <Link
            key={index}
            to={`/track${index}`}>
            <img
              // onClick={ }
              src={item}
              alt=""
              index={index}
            >
            </img>
          </Link>


        ))}
      </div>
    </div>
  )
}