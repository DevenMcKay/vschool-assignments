import React from 'react';

class App extends React.Component {
  state = {
    name: "",
    team: ["Steve", "John", "Jill"]
  }
  // MAPS THE ARRAY OF ALL NAMES 
  listTeam = () => {
    return (this.state.team.map((member, index) => <li key={"Member " + index}>{member}</li>))
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.addMember()
    // RESETS NAME INPUT AFTER SUBMIT
    this.setState({ name: "" })
  }

  addMember = () => {
    this.setState(prevState => ({
      team: [...prevState.team, this.state.name]
    }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          value={this.state.name}
          placeholder="Add Name"
          onChange={this.handleChange}
        />
        <h1>&nbsp;{this.state.name}</h1>
        <button>Submit</button>
        <ol>
          {this.listTeam()}
        </ol>
      </form>
    )
  }
}
export default App;
