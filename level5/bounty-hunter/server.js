const express = require("express")
const app = express()
const morgan = require("morgan")

app.use(express.json())
app.use(morgan('dev'))

app.use("/bounties", require("./routes/bountiesRouter"))

app.listen(3080, () => console.log("Port 3080 Connected"))