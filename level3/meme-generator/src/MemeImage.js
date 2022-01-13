import React from 'react';
import axios from "axios"
import './App.css';
import MemeBuilder from "./MemeBuilder"
import uniqid from 'uniqid'

class MemeImage extends React.Component {
  // SELECTS AND CHANGES IMAGE
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

  handleRefresh = (event) => {
    event.preventDefault()
    this.setState({
      randomMeme: Math.floor(Math.random() * this.state.memeImage.length) + 1,
    })
  }
  render() {

    return (
      <div>
        {this.state.memeImage.slice(this.state.randomMeme - 1, this.state.randomMeme).map((item, id) =>
          <MemeBuilder
            key={id}
            // UNIQUE ID NPM ALLOWS DUPLICATE MEMES TO EXIST 
            id={uniqid()}
            url={item.url}
            name={item.name}
            refresh={this.handleRefresh} />)}
      </div>
    )
  }
}

export default MemeImage;
