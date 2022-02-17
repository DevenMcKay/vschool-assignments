import React, { useEffect, useState } from 'react';
import axios from "axios"
const DataContext = React.createContext()

function DataContextProvider(props) {
  const [albums, setAlbums] = useState([])
  const [images, setImages] = useState([])
  const [list, setList] = useState([])
  const [lastFm, setLastFm] = useState([])
  const [apple, setApple] = useState([])
  const [youtube, setYoutube] = useState([])
  const [params, setParams] = useState(0)

  // FETCHES NAPSTER API LIST
  useEffect(() => {
    axios.get("https://api.napster.com/v2.2/albums/new?apikey=MGUwYjE4YzktZTk3MS00YjlmLTg5NmMtNmYwYjE2ZDljMTEw&limit=9")
      .then(result => {
        setAlbums(result.data.albums)
        mapImageUrl(result.data.albums)
      })
      .catch(err => console.log(err))
  }, [])

  // ACCESSES IMAGES
  function mapImageUrl(data) {
    const updatedImages = data.map(item => {
      axios.get(item.links.images.href + "?apikey=MGUwYjE4YzktZTk3MS00YjlmLTg5NmMtNmYwYjE2ZDljMTEw")
        .then(results => {
          let data = results.data.images[4].url
          setImages(prev => { return prev.concat(data) })
        })
        .catch(err => console.log(err))
    })
    // console.log(updatedImages)
    // newList(data)
  }

  // CONSTRUCT LIST
  useEffect(() => {
    const initialList = albums.map((item, index) => {
      return (
        {
          index: index,
          artistName: item.artistName,
          name: item.name,
          // id: item.id,
          // upc: item.upc,
        })
    })
    setList(initialList)
    lastFmSearch(initialList)
    youTubeSearch(initialList)
    iTunesSearch(initialList)
  }, [albums])

  function lastFmSearch(initialList) {
    initialList.map((item) => {
      axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${item.artistName}&api_key=98bfc400ddb91cf42da8d8c94a0b4386&format=json`)
        .then(result =>
          setLastFm(prev => (prev.concat({
            ...item,
            artistBio: result.data.artist.bio.content.substring(0, result.data.artist.bio.content.indexOf('<a href')).substring(0, result.data.artist.bio.content.indexOf('http')),
            artistBioArray:  result.data.artist.bio.content.substring(0, result.data.artist.bio.content.indexOf('<a href')).substring(0, result.data.artist.bio.content.indexOf('http')).split(/[.!]/),
            artistPic: result.data,
            artistUrl: result.data.artist.url
          }).sort(function (a, b) { return a.index - b.index })
          )))
    })
  }


  function iTunesSearch(initialList) {
    initialList.map((item) => {
      axios.get(
        `https://itunes.apple.com/search?term=${initialList[item.index].artistName}&limit=1&sort=recent&entity=album`)
        .then(page => {
          setApple(prev => (prev.concat({
            ...item,
            appleUrl: page.data.results[0].collectionViewUrl,
            appleImg: page.data.results,
          }).sort(function (a, b) { return a.index - b.index })
          ))
        })
    })
  }


  function youTubeSearch(initialList) {
    setYoutube([
      
    {
      "index": 7,
      "artistName": "Saweetie",
      "name": "Closer (feat. H.E.R.)",
      "video": "ALO5efsHHQA",
      "image": "https://i.ytimg.com/vi/ALO5efsHHQA/mqdefault.jpg"
  },
  {
      "index": 5,
      "artistName": "Becky G",
      "name": "MAMIII",
      "video": "XNA3CqHdejk",
      "image": "https://i.ytimg.com/vi/XNA3CqHdejk/mqdefault.jpg"
  },
  {
      "index": 1,
      "artistName": "Diplo",
      "name": "Don't Forget My Love",
      "video": "tfwu-Ts8JEE",
      "image": "https://i.ytimg.com/vi/tfwu-Ts8JEE/mqdefault.jpg"
  },
  {
      "index": 0,
      "artistName": "Future",
      "name": "Worst Day",
      "video": "o8Y9GMhIZLQ",
      "image": "https://i.ytimg.com/vi/o8Y9GMhIZLQ/mqdefault.jpg"
  },
  {
      "index": 6,
      "artistName": "Maren Morris",
      "name": "Background Music",
      "video": "Jk5kiAURAeU",
      "image": "https://i.ytimg.com/vi/Jk5kiAURAeU/mqdefault.jpg"
  },
  {
      "index": 4,
      "artistName": "Internet Money",
      "name": "Options",
      "video": "uNzZ6TsBFPI",
      "image": "https://i.ytimg.com/vi/uNzZ6TsBFPI/mqdefault.jpg"
  },
  {
      "index": 8,
      "artistName": "Luis Fonsi",
      "name": "Ley De Gravedad",
      "video": "MZcMUYPdLeI",
      "image": "https://i.ytimg.com/vi/MZcMUYPdLeI/mqdefault.jpg"
  },
  {
      "index": 3,
      "artistName": "Kodak Black",
      "name": "Grinding All Season",
      "video": "8thpVH-K4S0",
      "image": "https://i.ytimg.com/vi/8thpVH-K4S0/mqdefault.jpg"
  },
  {
      "index": 2,
      "artistName": "Nicki Minaj",
      "name": "Bussin",
      "video": "O-M1ITkiptg",
      "image": "https://i.ytimg.com/vi/O-M1ITkiptg/mqdefault.jpg"
  }
].sort(function (a, b) { return a.index - b.index }))}


  //   initialList.map((item) => {
  //     axios.get(
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${initialList[item.index].artistName}${initialList[item.index].name}&key=AIzaSyBpv-vUdjwIhF9CE8QqCiibb27Y0sTN0OA`)
  //       .then(result => {
  //         setYoutube(prev => (prev.concat({
  //           ...item,
  //           video: `${result.data.items[0].id.videoId}`,
  //           image: result.data.items[0].snippet.thumbnails.medium.url,
  //           artistUrl: result.data
  //         })))
  //       })
  //     setList(list)
  //   })
  // }

  return (
    // console.log(images),
    console.log(albums),
    // console.log(apple),
    // console.log(youtube),
    // console.log( list),
    // console.log(lastFm),
    // console.log(params),
    <DataContext.Provider value={{
      albums,
      images,
      list,
      lastFm,
      apple,
      youtube,
      setAlbums,
      setList,
      params,
      setParams
    }}>
      {props.children}
    </DataContext.Provider>
  )

}

export { DataContextProvider, DataContext }
