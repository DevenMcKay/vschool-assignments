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
    "Bounty Amossunt": 136,
    "Type": "Sith",
    // STATIC ID FOR TESTING
    _id: "e6c561a0-5e4b-4d7c-8d05-14ea5d9d053e"
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

bountiesRouter.route("/:bountyId")
  .put((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bounties[bountyIndex], req.body)
    res.send(updatedBounty)
  })
  .delete((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bounties.findIndex(bounty => bounty._id === bountyId)
    bounties.splice(bountyIndex, 1)
    res.send("Bounty Removed")
  })

module.exports = bountiesRouter