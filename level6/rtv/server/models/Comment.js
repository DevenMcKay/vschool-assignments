const mongoose = require('mongoose')
const Schema = mongoose.Schema

const commentSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  comment: {
    type: String
  }
})

module.exports = mongoose.model('Comment', issueSchema)