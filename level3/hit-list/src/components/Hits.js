import React from "react"
import axios from "axios"
import Cards from "./Cards"

class Hits extends React.Component {
  state = {
    hits: []
  }

  componentDidMount = () => {
    axios.get("https://raw.githubusercontent.com/VSchool/vschool-api/master/static/hitlist.json")
      .then((result) => {
        this.setState({
          hits: result.data
        })
      })
  }

  render() {
    const cards = this.state.hits.map((item, index) => <Cards key={index} id={index} item={item} />)
    return (
      <div className="cardContainer">
        {cards}
      </div>
    )
  }
}

export default Hits
