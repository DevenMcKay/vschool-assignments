const express = require("express")
const bountiesRouter = express.Router()
const { v4: uuidv4 } = require("uuid")

const bounties = [
  {
    "First Name": "Luke",
    "Last Name": "Skywalker",
    "Living": true,
    "Bounty Amount": 77,
    "Type": "Jedi",
    _id: uuidv4()
  },
  {
    "First Name": "Darth",
    "Last Name": "Vader",
    "Living": true,
    "Bounty Amount": 136,
    "Type": "Sith",
    _id: uuidv4()
  },
  {
    "First Name": "Obi-Wan",
    "Last Name": "Kenobi",
    "Living": true,
    "Bounty Amount": 182,
    "Type": "Jedi",
    _id: uuidv4()
  }
]

bountiesRouter.route("/")
  .get((req, res) => {
    res.send(bounties)
  })
  .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    bounties.push(newBounty)
    res.send(`${newBounty["First Name"]} ${newBounty["Last Name"]} Successfully Added!`)
  })

module.exports = bountiesRouter