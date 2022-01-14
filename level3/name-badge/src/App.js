import React from "react"
import './App.css'
import Badges from "./Badges"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newBadge: []
    }
  }

  // TAKES USER INFO & MAKES NEW_BADGE ARRAY IN STATE
  handleSubmit = (event) => {
    event.preventDefault();
    const info = {
      name: `${this.state.firstName} ${this.state.lastName}`,
      email: this.state.email,
      birthPlace: this.state.birthPlace,
      phone: this.state.phone,
      favFood: this.state.favFood,
      moreInfo: this.state.moreInfo
    };
    const badge = [info];
    this.setState(prevState => ({
      newBadge: [...prevState.newBadge, badge]
    }), this.clearInputs())
  }

  clearInputs = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      birthPlace: "",
      phone: "",
      favFood: "",
      moreInfo: ""
    })
  }

  handleChange = (event) => {
    event.preventDefault()
    const { name, value } = event.target
    this.setState(prevState => ({
      ...prevState.newBadge, [name]: value
    })
    )
  }

  // PREVENTS SUBMIT IF NO CHARACTERS IN INPUTS
  isDisabled = () => {
    while (
      !this.state.firstName ||
      !this.state.lastName ||
      !this.state.email ||
      !this.state.birthPlace ||
      !this.state.phone ||
      !this.state.favFood ||
      !this.state.moreInfo
    ) {
      return "disabled"
    }
  }

  render() {
    return (
      < div >
        <div className="formContainer">
          <form className="form"
            onSubmit={this.handleSubmit}
          >
            <input className="input"
              placeholder="First Name"
              // LOGICAL OR NEEDED TO PREVENT DEFAULT OR UNCONTROLLED TO CONTROLLED WARNING
              value={this.state.firstName || ''}
              name="firstName"
              onChange={this.handleChange}
              // LOGICAL OR ALSO ALLOWS MINLENGTH
              minLength={3}
              required
            />
            <input className="input"
              placeholder="Last Name"
              value={this.state.lastName || ''}
              name="lastName"
              onChange={this.handleChange}
              minLength={3}
              required
            />
            <input className="input"
              placeholder="E-mail"
              value={this.state.email || ''}
              type="email"
              name="email"
              onChange={this.handleChange}
              minLength={3}
              required
            />
            <input className="input"
              placeholder="Place of Birth"
              value={this.state.birthPlace || ''}
              type="text"
              name="birthPlace"
              onChange={this.handleChange}
              minLength={3}
              required
            />
            <input className="input"
              placeholder="Phone (9757653323)"
              value={this.state.phone || ''}
              type="tel"
              name="phone"
              onChange={this.handleChange}
              //TITLE LABELS WARNING SHOWN WHEN PATTERN NOT MET 10 X NUMS 1-9
              title="9757653323"
              pattern="[0-9]{10}"
              minLength={3}
              required
            />
            <input className="input"
              placeholder="Favorite Food"
              value={this.state.favFood || ''}
              name="favFood"
              onChange={this.handleChange}
              minLength={3}
              required
            />
            <textarea
              placeholder="Tell us about yourself"
              value={this.state.moreInfo}
              name="moreInfo"
              onChange={this.handleChange}
              minLength={3}
              required
            >
            </textarea>
            <button disabled={this.isDisabled()}>Submit</button>
          </form>
        </div>
        {
          this.state.newBadge.map((info, index) => <Badges key={index} id={index} user={info} />)
        }
      </div >
    )
  }
}

export default App
