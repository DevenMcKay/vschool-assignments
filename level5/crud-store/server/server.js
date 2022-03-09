const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")

app.use(express.json())
app.use(morgan("dev"))

app.use("/shoes", require("./routes/shoeRouter"))

mongoose.connect("mongodb://localhost:27017/shoesdb", () => console.log("Mongoose Connected to DB"))

app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(3080, () => {
  console.log("Port 3080 connected")
})