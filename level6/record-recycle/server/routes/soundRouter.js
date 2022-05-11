const express = require('express')
const multer = require('multer')
const soundRouter = express.Router()
const Sound = require('../models/Sound')
const fs = require('fs');
const path = require('path');
const player = require('play-sound')(opts = {});


// ADD SOUND
soundRouter.post("/", (req, res, next) => {
  const _fileName = Date.now() + req.files.file.name
  const filePath =
    "/Users/devendechianti/Desktop/VSchool/Assignments/level6/record-recycle/server/uploads/" + _fileName
  req.body.fileName = _fileName
  req.body.filePath = filePath
  req.body.userId = req.auth._id
  const newSound = new Sound(req.body)
  // console.log('✅ ', req)
  newSound.save((err, savedSound) => {
    if (err) {
      res.status(500)
      return next(err)
    }
    req.files.file.mv(filePath)
    return res.status(201).send(savedSound)
  })
})

soundRouter.get("/download/:fileName", (req, res) => {
  res.download(`./uploads/${req.params.fileName}`)
})

soundRouter.post("/play/:fileName", (req, res, next) => {
  var soundFile = `/Users/devendechianti/Desktop/VSchool/Assignments/level6/record-recycle/server/uploads/${req.params.fileName}`;
  player.play(soundFile, function (err) {
    if (err) throw err
  });
  res.send(201)
})


soundRouter.post("/pause/:fileName", (req, res, next) => {
  var soundFile = `/Users/devendechianti/Desktop/VSchool/Assignments/level6/record-recycle/server/uploads/${req.params.fileName}`;
  player.play(soundFile, function (err) {
    if (err) throw err
  });
  res.send(201)
})

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

// DELETE SOUND
soundRouter.delete("/:soundId", (req, res, next) => {
  Sound.findOneAndDelete(
    { _id: req.params.soundId },
    (err, deletedSound) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      // DELETES STORED FILE
      fs.rm(deletedSound.filePath, (err) => {
        if (err) {
          console.log(err)
        }
      })
      return res.status(200).send(`Successfully deleted sound: ${deletedSound.title}`)
    })
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