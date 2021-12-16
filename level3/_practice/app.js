class NameForm extends React.Component {
  //here is a pretty standard constructor
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  //handleChange does not need to be complicated. We are only mirroring what's in the input box (event.target.value) to the state.
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
  //we need the event in the handle submit so we can prevent the submission from refreshing the page with .preventDefault()
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }