const express = require("express")
const shoeRouter = express.Router()
const Shoes = require("../models/shoes.js")


shoeRouter.route("/")
  .get((req, res, next) => {
    Shoes.find((err, shoes) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(shoes)
    })
  })
  .post((req, res, next) => {
    const newShoe = new Shoes(req.body)
    newShoe.save((err, savedShoe) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(savedShoe)
    })
  })

shoeRouter.route("/:shoeId")
  .get((req, res, next) => {
    Shoes.find({ _id: req.params.shoeId }, (err, shoes) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(shoes)
    })
  })
  .put((req, res, next) => {
    Shoes.findOneAndUpdate(
      { _id: req.params.shoeId },
      req.body,
      { new: true },
      (err, updatedShoe) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(updatedShoe)
      })
  })
  .delete((req, res, next) => {
    Shoes.findOneAndDelete(
      { _id: req.params.shoeId },
      (err, deletedShoe) => {
        if (err) {
          res.status(500)
          return next(err)
        }
        return res.status(201).send(deletedShoe)
      })
  })

module.exports = shoeRouter