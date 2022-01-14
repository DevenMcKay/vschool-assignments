import React from "react";
import './App.css';
import SavedMemes from './SavedMemes';
class MemeBuilder extends React.Component {
  state = {
    newMeme: [],
    savedMeme: []
  }

  // CREATES NEW MEME IN ARRAY
  handleSave = (event) => {
    event.preventDefault()
    this.setState(prevState => ({
      savedMeme: [{
        ...prevState.newMeme,
        btnTextChange: "Edit",
        textDisabled: "disabled"
      }, ...prevState.savedMeme]
    }))
    this.clearInputs()
  }

  // CLEARS BUILDER MEME TEMPLATE AFTER SAVE 
  clearInputs = () => {
    this.setState({
      newMeme: {
        bottomText: "",
        topText: ""
      }
    })
  }

  // 1. CREATES & UPDATES MEME BEING BUILT
  handleBuildChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState((prevState) => ({
      newMeme:
      {
        ...prevState.newMeme,
        [name]: value,
        name: this.props.name,
        url: this.props.url,
        id: this.props.id
      }
    }))
  }

  // DISABLES MEME SAVE BTN
  isSaveDisabled = () => {
    while (
      (!this.state.newMeme.topText) &&
      (!this.state.newMeme.bottomText)) {
      return "disabled"
    }
  }
  // CHANGE EDIT BTN TO SAVE
  handleBtnEdit = (id) => {
    const updatedMemes = this.state.savedMeme.map(item => {
      if (item.id === id && item.btnTextChange === "Edit") {
        item.btnTextChange = "Save"
        item.textDisabled = ""
      } else if (item.id === id && item.btnTextChange === "Save") {
        item.btnTextChange = "Edit"
        item.textDisabled = "disabled"
      }
      return item
    })
    this.setState({ savedMeme: updatedMemes })
  }
  // DELETE BTN
  handleBtnDelete = (id) => {
    const updatedMemes = this.state.savedMeme.filter(item => item.id !== id)
    this.setState({ savedMeme: updatedMemes })
  } // NO NEED event.preventDefault() DUE TO METHOD CALL FROM CHILD 

  // TEXTAREA CHANGES
  handleTextEditTop = (id, updatedTopText) => {
    const updatedMemes = this.state.savedMeme.map(item => {
      if (item.id === id) {
        item.topText = updatedTopText
      }
      return item
    })
    this.setState(() => ({ savedMeme: updatedMemes }))
  }

  handleTextEditBottom = (id, updatedBottomText) => {
    const updatedMemes = this.state.savedMeme.map(item => {
      if (item.id === id) {
        item.bottomText = updatedBottomText
      }
      return item
    })
    this.setState(() => ({ savedMeme: updatedMemes }))
  }

  // GENERATES UNIQUE KEY FOR SAVED MEMES
  generateKey = (id) => {
    return `${id}_${Math.floor(Math.random())}`;
  }

  render() {
    return (
      // MEME-BUILDER / SELECTS PIC AND ALLOWS INPUT
      <div>
        <form>
          <textarea
            placeholder="Place Text Here"
            className="topText"
            name="topText"
            onChange={this.handleBuildChange}
            value={this.state.newMeme.topText} />
          <img
            src={this.props.url}
            alt={this.props.name}
          />
          <textarea
            placeholder="Place Text Here"
            className="bottomText"
            name="bottomText"
            onChange={this.handleBuildChange}
            value={this.state.newMeme.bottomText} />
          <button
            name="refresh"
            value="true"
            className="refreshBtn"
            onMouseUp={this.props.refresh}
            onClick={this.handleBuildChange}
          >Refresh Image</button>
          <button
            className="saveBtn"
            onClick={this.handleSave}
            onMouseUp={this.props.refresh}
            disabled={this.isSaveDisabled()}>Save Meme
          </button>
        </form>
        <div className="savedSection">
          {this.state.savedMeme.map((item, id) =>
            <SavedMemes
              key={this.generateKey(id)}
              id={id}
              item={item}
              textEditTop={this.handleTextEditTop}
              textEditBottom={this.handleTextEditBottom}
              btnEdit={this.handleBtnEdit}
              btnDelete={this.handleBtnDelete} />)}
        </div>
      </div>
    )
  }
}
export default MemeBuilder