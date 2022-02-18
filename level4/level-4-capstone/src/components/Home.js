import React, { useContext, useEffect } from "react";
import { DataContext } from "./dataContext";
import { Link } from "react-router-dom"
import "./Home.css"

export function Home() {
  const { images, setPage } = useContext(DataContext)
  useEffect(() =>
    setPage("home")
  )
  return (
    <div className="imageContainer">
      <div className="imageDiv">
        {images.map((item, index) => (
          <Link
            key={index}
            to={`/track${index}`}>
            <img
              src={item.images}
              alt={item}
              index={index}>
            </img>
          </Link>
        ))}
      </div>
    </div>
  )
}