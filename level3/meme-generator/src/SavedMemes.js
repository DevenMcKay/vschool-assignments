import React from "react";

class SavedMemes extends React.Component {

  btnDelete = (event) => {
    event.preventDefault()
    this.props.btnDelete(this.props.item.id)
  }

  btnEdit = (event) => {
    event.preventDefault()
    this.props.btnEdit(this.props.item.id)
  }
  // Updates TextAreas
  textEditTop = (event) => {
    event.preventDefault()
    this.props.textEditTop(
      this.props.item.id,
      event.target.value)
  }

  textEditBottom = (event) => {
    event.preventDefault()
    this.props.textEditBottom(
      this.props.item.id,
      event.target.value)
  }

  render() {
    return (
      <form className="savedMemes">
        <textarea
          name="topText"
          type="text"
          disabled={this.props.item.textDisabled}
          onChange={this.textEditTop}
          value={this.props.item.topText}
        />
        <img
          src={this.props.item.url}
          alt={this.props.item.name} />
        <textarea
          name="bottomText"
          type="text"
          disabled={this.props.item.textDisabled}
          onChange={this.textEditBottom}
          value={this.props.item.bottomText}
        />
        <div className="savedMemesBtn">
          <button
            onClick={this.btnEdit}>
            {this.props.item.btnTextChange}</button>
          <button
            onClick={this.btnDelete}>
            Delete
          </button>
        </div>
      </form>
    )
  }
}




export default SavedMemes


