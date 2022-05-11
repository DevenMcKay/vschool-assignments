const express = require('express')
const todoRouter = express.Router()
const Todo = require('../models/todo.js')
const multer = require("multer")
const fs = require("fs")
const path = require("path")


    const storage = multer.diskStorage({
        destination: 'uploads/',
          filename: function (req, file, cb) {
            cb(null, Date.now() + file.originalname)
            console.log('✅', file)
          }
    });

    const upload = multer({storage:storage}).single('image');
    
    // Add new Todo
    todoRouter.post("/upload", upload, (req, res, next) => {

    var img = fs.readFileSync(req.file.path);
    var encode_img = img.toString('base64');
    var final_img = {
        contentType:req.file.mimetype,
        image: Buffer(encode_img)
    };

      req.body.image = final_img
      req.body.user = req.user._id
      const newTodo = new Todo(req.body)
      newTodo.save((err, savedTodo) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(savedTodo)
      })
    })

    // Get All Todos
todoRouter.get("/", (req, res, next) => {
  Todo.find((err, todos) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})

// Get todos by user id
todoRouter.get("/user", (req, res, next) => {
  Todo.find({ user: req.user._id }, (err, todos) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(todos)
  })
})


// Delete Todo
todoRouter.delete("/:todoId", (req, res, next) => {
  Todo.findOneAndDelete(
    { _id: req.params.todoId, user: req.user._id },
    (err, deletedTodo) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted todo: ${deletedTodo.title}`)
    }
  )
})

// Update Todo
todoRouter.put("/:todoId", (req, res, next) => {
  Todo.findOneAndUpdate(
    { _id: req.params.todoId, user: req.user._id },
    req.body,
    { new: true },
    (err, updatedTodo) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedTodo)
    }
  )
})

module.exports = todoRouter