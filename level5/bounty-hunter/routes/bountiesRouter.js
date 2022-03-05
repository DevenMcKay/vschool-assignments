const express = require("express")
const bountiesRouter = express.Router()
const { v4: uuidv4 } = require("uuid")
const bountyData = require("../bountyData")

bountiesRouter.route("/")
  .get((req, res) => {
    res.send(bountyData)
  })
  .post((req, res) => {
    const newBounty = req.body
    newBounty._id = uuidv4()
    if (newBounty.Img === "" || newBounty.Img === undefined) {
      newBounty.Img = "https://live.staticflickr.com/5604/15364471327_12e86bf4c3_z.jpg"
    }
    if (newBounty.Type === "" || newBounty.Type === undefined) {
      newBounty.Type = "Jedi"
    }
    if (!newBounty.Bounty_Amount) {
      newBounty.Bounty_Amount = 0
    }
    if (!newBounty.First_Name) {
      newBounty.First_Name = "?"
    }
    if (!newBounty.Last_Name) {
      newBounty.Last_Name = "?"
    }
    bountyData.push(newBounty)
    res.send(newBounty)
  })

bountiesRouter.route("/:bountyId")
  .put((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bountyData.findIndex(bounty => bounty._id === bountyId)
    const updatedBounty = Object.assign(bountyData[bountyIndex], req.body)
    res.send(updatedBounty)
  })
  .delete((req, res) => {
    const bountyId = req.params.bountyId
    const bountyIndex = bountyData.findIndex(bounty => bounty._id === bountyId)
    bountyData.splice(bountyIndex, 1)
    res.send("Bounty Removed")
  })

module.exports = bountiesRouter