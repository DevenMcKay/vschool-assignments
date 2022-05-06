const express = require('express')
const soundRouter = express.Router()
const Sound = require('../models/Sound')

// GET ALL SOUNDS
soundRouter.get("/", (req, res, next) => {
  Sound.find((err, sounds) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(200).send(sounds)
  })
})

// ADD SOUND
soundRouter.post("/", (req, res, next) => {
  req.body.userId = req.auth._id
  const newSound = new Sound(req.body)
  newSound.save((err, savedSound) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedSound)
  })
})

// DELETE SOUND
soundRouter.delete("/:soundId", (req, res, next) => {
  Sound.findOneAndDelete(
    { _id: req.params.soundId },
    (err, deletedSound) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted sound: ${deletedSound.title}`)
    }
  )
})

// UPDATE SOUND
soundRouter.put("/:soundId", (req, res, next) => {
  Sound.findOneAndUpdate(
    { _id: req.params.soundId },
    (err, updatedSound) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedSound)
    }
  )
})

module.exports = soundRouter