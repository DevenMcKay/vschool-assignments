import './App.css';
import React, { useEffect, useState } from 'react';
import Track from "./components/Track"
import About from "./components/About"
import Error from "./components/Error"

import Nav from "./components/Nav"
import {Home}  from "./components/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom"
// import { AlbumTiles } from './components/AlbumTiles';


export default function App() {


  return (
    <BrowserRouter>
        <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="track:videoIndex" element={<Track />} />
        <Route path="about:videoIndex" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>

  )
}


