const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
require("dotenv").config()

app.use(express.json())
app.use(morgan('dev'))

app.use("/bounties", require("./routes/bountiesRouter"))

mongoose.connect(process.env.MONGODB_URI || MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Mongoose Connected to DB"))

app.use((err, req, res, next) => {
  res.send(err.message)
})

app.listen(process.env.PORT || 3080, () => console.log("Port 3080 Connected"))