import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios"

function App() {
  const [albums, setAlbums] = useState([])
  const [images, setImages] = useState([])

  const url = "https://api.napster.com/v2.2/"
  const config = "apikey=MGUwYjE4YzktZTk3MS00YjlmLTg5NmMtNmYwYjE2ZDljMTEw"
  const limit = "&limit=10"
  const newAlbums = "albums/new?"

  useEffect(() => {
    axios.get(url + newAlbums + config + limit)
      .then(result => {
        return (setAlbums(result.data.albums),
          mapImages(result.data.albums))
      })
      // .then(result=> console.log(result))
      .catch(err => console.log(err))
  }, [])

  function mapImages(data) {
    const updatedImages = data.map(item => {
      return (item.links.images.href)
    })
    getImages(updatedImages)
  }

  function getImages(updatedImages) {
    const arr = []
    const resultArr = updatedImages.map(item => {
      axios.get(item + "?" + config)
        .then(result => arr.push(result.data.images))
    })
    arr.push(resultArr)
    setImages(arr)

  }

  return (
    console.log(images),
    <div className="App">
      {albums.map(item =>
        <h1 key={item.upc}> {item.name}</h1>

      )}
      {/* {images.map(item =>
        <p>{item}</p>
        
      )} */}
    </div>
  )
}

export default App
