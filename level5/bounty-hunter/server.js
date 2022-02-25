const express = require("express")
const app = express()

app.use(express.json())

app.use("/bounties", require("./routes/bountiesRouter"))

app.listen(3000, () => console.log("Port 3000 Connected"))