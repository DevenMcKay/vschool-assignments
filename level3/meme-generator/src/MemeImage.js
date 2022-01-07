import React from "react";
import SavedMemes from './SavedMemes';

class MemeImage extends React.Component {
  state = {
    newMeme: [],
    savedMeme: []
  }

  handleSave = (event) => {
    event.preventDefault()
    console.log("Save")
    this.setState(prevState => ({
      savedMeme: [{...prevState.newMeme }]
    }))
  }

  handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState(prevState => ({
      newMeme: { ...prevState.newMeme, [name]: value, memeID: this.props.item.id, url: this.props.item.url, name: this.props.item.name }
    }))
  }
  clearInputs = () => {
    this.setState({
      newMeme: {
        bottomText: "",
        topText: "",
        memeID: ""
      }
    })
  }

  render() {
    const { url, name } = this.props.item
    console.log(this.state.newMeme)
    const SavedMeme = this.state.savedMeme.map((item, id) => <SavedMemes
      key={id}
      id={id}
      item={item} />)

    return (
      <div>
        <form >
          <textarea
            placeholder="Place Text Here"
            className="topText"
            name="topText"
            onChange={this.handleChange}
            value={this.state.topText} />
          <img
            src={url}
            alt={name}
          />
          <textarea
            placeholder="Place Text Here"
            className="bottomText"
            name="bottomText"
            onChange={this.handleChange}
            value={this.state.bottomText} />
          <button
            className="refreshBtn"
            onClick={this.props.refresh}>Refresh Image</button>
          <button
            className="saveBtn"
            onClick={this.handleSave}>Save Meme</button>
        </form>
        {SavedMeme}
      </div>
    )
  }
}

export default MemeImage