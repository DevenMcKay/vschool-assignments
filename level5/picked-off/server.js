const express = require("express")
const app = express()

app.use(express.json())

app.get("/", require("./middleware"))

app.listen(3000, () => {
  console.log("Port 3000 Connected")
})