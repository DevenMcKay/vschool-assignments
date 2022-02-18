import React, { useEffect, useState } from 'react';
import axios from "axios"
const DataContext = React.createContext()

function DataContextProvider(props) {
  const [albums, setAlbums] = useState([])    // NAPSTER LIST DATA
  const [images, setImages] = useState([])    // NAPSTER PHOTOS 
  const [list, setList] = useState([])        // CONDENSED NAPSTER LIST
  const [lastFm, setLastFm] = useState([])    // LAST FM ARTIST BIO
  const [apple, setApple] = useState([])      // APPLE ARTIST PAGE
  const [youtube, setYoutube] = useState([])  // YOUTUBE VIDEO DATA
  const [songIndex, setSongIndex] = useState(0) // SONG INDEX SELECT BETWEEN PAGES
  const [page, setPage] = useState("home")    // CURRENT PAGE STATE FOR NAV ARROWS 

  // FETCHES NAPSTER API LIST
  useEffect(() => {
    axios.get(`https://api.napster.com/v2.2/albums/new?apikey=${process.env.REACT_APP_NAPSTER}&limit=9`)
      .then(result => {
        setAlbums(result.data.albums.sort(function (b, a) { return a.upc - b.upc }))
        mapImageUrl(result.data.albums.sort(function (b, a) { return a.upc - b.upc }))
      })
      .catch(err => console.log(err))
  }, [])

  // ACCESSES NAPSTER IMAGES
  function mapImageUrl(initialData) {
    initialData.map(item => {
      axios.get(`${item.links.images.href}?apikey=${process.env.REACT_APP_NAPSTER}`)
        .then(results => {
          let data = results.data
          setImages(prev => { return prev.concat({ ...item, images: data.images[4].url }).sort(function (b, a) { return a.upc - b.upc }) })
        })
        .catch(err => console.log(err))
    })
  }

  // CONSTRUCT CONDENSED LIST
  useEffect(() => {
    const initialList = albums.map((item, index) => {
      return (
        {
          index: index,
          artistName: item.artistName,
          name: item.name,
          id: item.id,
          upc: item.upc,
        })
    })
    setList(initialList)
    lastFmSearch(initialList)
    iTunesSearch(initialList)
    // youTubeSearch(initialList)
  }, [albums])

  // LAST FM ARTIST BIO & ****** ARRAY READY FOR POPUP INFO ****** 
  function lastFmSearch(initialList) {
    initialList.map((item) => {
      axios.get(
        `http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=${item.artistName}&api_key=${process.env.REACT_APP_LASTFM}&format=json`)
        .then(result =>
          setLastFm(prev => (prev.concat({
            ...item,
            artistBio: result.data.artist.bio.content.substring(0, result.data.artist.bio.content.indexOf('<a href')).substring(0, result.data.artist.bio.content.indexOf('http')),
            artistBioArray: result.data.artist.bio.content.substring(0, result.data.artist.bio.content.indexOf('<a href')).substring(0, result.data.artist.bio.content.indexOf('http')).split(/[.!]/),
            artistPic: result.data,
            artistUrl: result.data.artist.url
          }).sort(function (a, b) { return a.index - b.index })
          ))).catch(err => console.log(err))
    })
  }

  // ITUNES ARTIST LINK
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
        }).catch(err => console.log(err))
    })
  }

  // YOUTUBE VIDEOS (STATIC LINKS PREVENT QUOTA ISSUE)
  // MAKE NEW API GOOGLE DEV CREDS, UNCOMMENT PULL BELOW AND YOUTUBE CALL ABOVE
  useEffect(() =>
    function youTubeSearch(initialList) {
      setYoutube([
        {
          "index": 8,
          "artistName": "Saweetie",
          "name": "Closer (feat. H.E.R.)",
          "video": "ALO5efsHHQA",
          "image": "https://i.ytimg.com/vi/ALO5efsHHQA/mqdefault.jpg"
        },
        {
          "index": 0,
          "artistName": "Becky G",
          "name": "MAMIII",
          "video": "XNA3CqHdejk",
          "image": "https://i.ytimg.com/vi/XNA3CqHdejk/mqdefault.jpg"
        },
        {
          "index": 4,
          "artistName": "Diplo",
          "name": "Don't Forget My Love",
          "video": "tfwu-Ts8JEE",
          "image": "https://i.ytimg.com/vi/tfwu-Ts8JEE/mqdefault.jpg"
        },
        {
          "index": 2,
          "artistName": "Future",
          "name": "Worst Day",
          "video": "o8Y9GMhIZLQ",
          "image": "https://i.ytimg.com/vi/o8Y9GMhIZLQ/mqdefault.jpg"
        },
        {
          "index": 1,
          "artistName": "Maren Morris",
          "name": "Background Music",
          "video": "Jk5kiAURAeU",
          "image": "https://i.ytimg.com/vi/Jk5kiAURAeU/mqdefault.jpg"
        },
        {
          "index": 3,
          "artistName": "Internet Money",
          "name": "Options",
          "video": "uNzZ6TsBFPI",
          "image": "https://i.ytimg.com/vi/uNzZ6TsBFPI/mqdefault.jpg"
        },
        {
          "index": 6,
          "artistName": "Luis Fonsi",
          "name": "Ley De Gravedad",
          "video": "MZcMUYPdLeI",
          "image": "https://i.ytimg.com/vi/MZcMUYPdLeI/mqdefault.jpg"
        },
        {
          "index": 7,
          "artistName": "Kodak Black",
          "name": "Grinding All Season",
          "video": "8thpVH-K4S0",
          "image": "https://i.ytimg.com/vi/8thpVH-K4S0/mqdefault.jpg"
        },
        {
          "index": 5,
          "artistName": "Nicki Minaj",
          "name": "Bussin",
          "video": "O-M1ITkiptg",
          "image": "https://i.ytimg.com/vi/O-M1ITkiptg/mqdefault.jpg"
        }
      ].sort(function (a, b) { return a.index - b.index }))
    }, [albums])

  //   function youTubeSearch(initialList) {
  //   initialList.map((item) => {
  //     axios.get(
  //       `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${initialList[item.index].artistName}${initialList[item.index].name}&key=${process.env.REACT_APP_YOUTUBE}`)
  //       .then(result => {
  //         setYoutube(prev => (prev.concat({
  //           ...item,
  //           video: result.data.items[0].id.videoId,
  //           image: result.data.items[0].snippet.thumbnails.medium.url,
  //           artistUrl: result.data
  //         }).sort(function (a, b) { return a.index - b.index })))
  //       }).catch(err => console.log(err))
  //   })
  // }

  return (
    // console.log(images),
    // console.log("albums", albums),
    // console.log(apple),
    // console.log(youtube),
    // console.log("list",list),
    // console.log(lastFm),
    // console.log(songIndex),
    <DataContext.Provider value={{
      albums,
      images,
      list,
      lastFm,
      apple,
      youtube,
      setAlbums,
      setList,
      songIndex,
      setSongIndex,
      page,
      setPage
    }}>
      {props.children}
    </DataContext.Provider>
  )
}

export { DataContextProvider, DataContext }
