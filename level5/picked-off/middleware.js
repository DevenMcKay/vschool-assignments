const express = require("express")
const midRouter = express.Router()

const data = {
  name: "Bugz Bunny",
  image: "http://static.dnaindia.com/sites/default/files/2015/07/27/359539-clip-art-bugs-bunny-397350.jpg",
  age: 100
}

midRouter.use((req, res, next) => {
  req.body = {...data, location : "Mars", food: "carrots"}
  next()
})

midRouter.use((req,res)=>{
  res.send(req.body)
})

module.exports = midRouter