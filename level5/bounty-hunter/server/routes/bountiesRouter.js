const express = require("express")
const bountiesRouter = express.Router()
// const { v4: uuidv4 } = require("uuid")
const bountyData = require("../bountyData")
const Bounties = require("../models/bounties")

bountiesRouter.route("/")
  .get((req, res, next) => {
    Bounties.find((err, bounty) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(bounty)
    })
  })
  .post((req, res) => {
    const newBounty = new Bounties(req.body)
    // newBounty._id = uuidv4()
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
    newBounty.save((err, savedBounty) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedBounty)
    })
    // bountyData.push(newBounty)
    // res.send(newBounty)
  })

bountiesRouter.route("/:bountyId")
  .put((req, res, next) => {
    Bounties.findOneAndUpdate({ _id: req.params.bountyId },
      req.body,
      { new: true },
      (err, updatedBounty) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedBounty)
      })
    // const bountyId = req.params.bountyId
    // const bountyIndex = bountyData.findIndex(bounty => bounty._id === bountyId)
    // const updatedBounty = Object.assign(bountyData[bountyIndex], req.body)
    // res.send(updatedBounty)
  })
  .delete((req, res, next) => {
    Bounties.findOneAndDelete(
      { _id: req.params.bountyId },
      (err, deletedBounty) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(deletedBounty)
      })
    // const bountyId = req.params.bountyId
    // const bountyIndex = bountyData.findIndex(bounty => bounty._id === bountyId)
    // bountyData.splice(bountyIndex, 1)
    // res.send("Bounty Removed")
  })

module.exports = bountiesRouter