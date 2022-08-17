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
    youTubeSearch(initialList)
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
  // COMMENT OUT STATIC DATA, REPLACE API YT KEY IN .ENV 
  // https://console.developers.google.com/


  // useEffect(() =>
  //   function youTubeSearch(initialList) {
  //     setYoutube(
  //       [
  //         {
  //           "index": 0,
  //           "artistName": "DDG",
  //           "name": "Elon Musk",
  //           "id": "alb.646825033",
  //           "upc": "886449904150",
  //           "video": "Un2gSPpjqFo",
  //           "image": "https://i.ytimg.com/vi/Un2gSPpjqFo/mqdefault.jpg"
  //         },
  //         {
  //           "index": 1,
  //           "artistName": "Rex Orange County",
  //           "name": "AMAZING",
  //           "id": "alb.645280629",
  //           "upc": "886449809387",
  //           "video": "nr2CsEtXxmI",
  //           "image": "https://i.ytimg.com/vi/nr2CsEtXxmI/mqdefault.jpg"
  //         },
  //         {
  //           "index": 2,
  //           "artistName": "J Balvin",
  //           "name": "Niño Soñador",
  //           "id": "alb.647162784",
  //           "upc": "00602445606856",
  //           "video": "iGSaK4ii6BY",
  //           "image": "https://i.ytimg.com/vi/iGSaK4ii6BY/mqdefault.jpg"
  //         },
  //         {
  //           "index": 3,
  //           "artistName": "Kid Cudi",
  //           "name": "Want It Bad",
  //           "id": "alb.647551262",
  //           "upc": "00602445540464",
  //           "video": "SASgYFiwTQw",
  //           "image": "https://i.ytimg.com/vi/SASgYFiwTQw/mqdefault.jpg"
  //         },
  //         {
  //           "index": 4,
  //           "artistName": "Troye Sivan",
  //           "name": "Trouble (feat. Jay Som)",
  //           "id": "alb.646769481",
  //           "upc": "00602445506606",
  //           "video": "7aFGaSdTJGU",
  //           "image": "https://i.ytimg.com/vi/7aFGaSdTJGU/mqdefault.jpg"
  //         },
  //         {
  //           "index": 5,
  //           "artistName": "Ozuna",
  //           "name": "Deprimida",
  //           "id": "alb.645145808",
  //           "upc": "196626393531",
  //           "video": "-AQ2PyxwZ6k",
  //           "image": "https://i.ytimg.com/vi/-AQ2PyxwZ6k/mqdefault.jpg"
  //         },
  //         {
  //           "index": 6,
  //           "artistName": "Clean Bandit",
  //           "name": "Everything But You (feat. A7S)",
  //           "id": "alb.646595257",
  //           "upc": "190296238475",
  //           "video": "DA_wP7hD88U",
  //           "image": "https://i.ytimg.com/vi/DA_wP7hD88U/mqdefault.jpg"
  //         },
  //         {
  //           "index": 7,
  //           "artistName": "Ed Sheeran",
  //           "name": "Bad Habits (feat. Bring Me The Horizon)",
  //           "id": "alb.646612229",
  //           "upc": "190296216657",
  //           "video": "IxcxyGDD38E",
  //           "image": "https://i.ytimg.com/vi/IxcxyGDD38E/mqdefault.jpg"
  //         },
  //         {
  //           "index": 8,
  //           "artistName": "Jack Harlow",
  //           "name": "Nail Tech",
  //           "id": "alb.647581932",
  //           "upc": "075679758927",
  //           "video": "e2AeKIzfQus",
  //           "image": "https://i.ytimg.com/vi/e2AeKIzfQus/mqdefault.jpg"
  //         }
  //       ].sort(function (a, b) { return a.index - b.index }))
  //   }, [albums])

    function youTubeSearch(initialList) {
    initialList.map((item) => {
      axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${initialList[item.index].artistName}${initialList[item.index].name}&key=${process.env.REACT_APP_YOUTUBE}`)
        .then(result => {
          setYoutube(prev => (prev.concat({
            ...item,
            item: result.data,
            video: result.data.items[0].id.videoId,
            image: result.data.items[0].snippet.thumbnails.medium.url,
          }).sort(function (a, b) { return a.index - b.index })))
        }).catch(err => console.log(err))
    })
  }

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
