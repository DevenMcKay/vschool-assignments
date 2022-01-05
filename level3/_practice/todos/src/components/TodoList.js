import React from "react"
import TodoComponent from "./TodoComponent"
import axios from "axios"

class TodoList extends React.Component {
  state = {
    todos: []
  }
  componentDidMount() {
    axios.get("https://api.vschool.io/deven/todo/")
      .then(result => {
        this.setState({ todos: result.data })
        console.log(result.data)
      })
  }

  render() {
    const TodoComponents = this.state.todos.map((item, index) => <TodoComponent key={index} item={item} />)
    return (
      <div>
        {TodoComponents}
      </div>
    )
  }
}

export default TodoList