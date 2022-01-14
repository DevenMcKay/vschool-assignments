import React from "react";

class Die extends React.Component {

  onClick = (event) => {
    event.preventDefault()
    this.props.onClick(this.props.num.id)
  }

  render() {
    return (
      <div>
        <button className="die" onClick={this.onClick}>{this.props.num.num}</button>
      </div>
    )
  }

}

export default Die