const express = require('express')
const issueRouter = express.Router()
const Issue = require('../models/Issue.js')

// GET ALL ISSUES
issueRouter.get("/", (req,res,next)=> {
  Issue.find((err,issues)=> {
    if (err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(issues)
  })
})

// ADD ISSUE
issueRouter.post("/", (req,res,next) => {
  req.body.user = req.user._id
  const newIssue = new Issue(req.body)
  newIssue.save((err, savedIssue)=>{
    if(err) {
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedIssue)
  })
})

// DELETE ISSUE
issueRouter.delete("/:issueId", (req,res, next)=> {
  Issue.findOneAndDelete(
    {_id: req.params.issueId},
    (err, deletedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(200).send(`Successfully deleted issue: ${deletedIssue.title}`)
    }
  )
})

// UPDATE ISSUE
issueRouter.put("/:issueId", (req,res,next) => {
  Issue.findOneAndUpdate(
    {_id: req.params.issueId},
    (err, updatedIssue) => {
      if (err) {
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedIssue)
    }
  )
})

module.exports = issueRouter