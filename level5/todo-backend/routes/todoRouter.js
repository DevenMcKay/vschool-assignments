const express = require("express")
const todoRouter = express.Router()
const { v4: uuidv4 } = require("uuid")


const todoList =
  [{
    "name": "Do",
    "description": "I must do",
    "imageUrl": "http://www.myimage.com",
    "completed": false,
    _id: uuidv4()
  },
  {
    "name": "Done",
    "description": "I have done",
    "imageUrl": "http://www.myimage.com",
    "completed": true,
    _id: uuidv4()
  }]

todoRouter
  .get("/", (req, res) => {
    res.send(todoList)
  })
  .get("/completed", (req, res) => {
    const completed = todoList.filter(item => item.completed === true)
    res.send(completed)
  })
  .post("/",(req, res) => {
    const newItem = req.body
    newItem._id = uuidv4()
    todoList.push(newItem)
    res.send(`${newItem.name} added!`)
  })

todoRouter.route("/:todoId")
  .put((req, res) => {
    const todoId = req.params.todoId
    const listIndex = todoList.findIndex(item => item._id === todoId)
    const updatedList = Object.assign(todoList[listIndex], req.body)
    res.send(updatedList)
  })
  .delete((req, res) => {
    const todoId = req.params.todoId
    const listIndex = todoList.findIndex(item => item._id === todoId.toString())
    todoList.splice(listIndex, 1)
    res.send("Item Deleted")
  })
  .get((req, res) => {
    const todoId = req.params.todoId
    const filteredItem = todoList.filter(item => item._id === todoId)
    res.send(filteredItem)
  })


module.exports = todoRouter