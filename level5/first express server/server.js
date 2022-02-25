const express = require("express")
const app = express()

const users = [
  { name: "joe", age: 23 },
  { name: "jill", age: 43 },
  { name: "james", age: 45 },
  { name: "jon", age: 65 },
  { name: "jack", age: 25 }
]

app.get("/users", (request, response) => {
  response.send(users)
})

app.listen(9000, () => { console.log("The port is running on port 9000") })