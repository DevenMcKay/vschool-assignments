import React from 'react';
import axios from "axios"
import './App.css';
import MemeImage from "./MemeImage"


class App extends React.Component {
  state = {
    memeImage: [],
    randomMeme: Math.floor(Math.random() * 99) + 1
  }
  componentDidMount = () => {
    axios.get("https://api.imgflip.com/get_memes")
      .then((result) =>
        this.setState({
          memeImage: result.data.data.memes
        })
      )
  }

  handleRandomMemeImage = (event) => {
    event.preventDefault()
    console.log("Random")
    this.setState({
      randomMeme: Math.floor(Math.random() * this.state.memeImage.length) + 1,
      // memeID: memeImage.
    })
  }




  render() {
    console.log(this.state.memeImage)
    // console.log(this.state.randomMeme)
    const memes = this.state.memeImage.slice(this.state.randomMeme - 1, this.state.randomMeme).map((item, id) =>
      <MemeImage
        key={id}
        id={id}
        item={item}
        refresh={this.handleRandomMemeImage}
        // save={this.handleSave}
        onChange={this.handleChange} />)


    return (
      <div>
        {memes}

      </div>
    )
  }
}

export default App;
