const mongoose = require('mongoose')
const Schema = mongoose.Schema

const issueSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  imgUrl: {
    type: String
  }, 
  username: {
    type: String,
    required: true
  },
  votes: {
    type: Number, 
    default: 0
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  votedUsers: {
    type: [String]
  },
  comments: {
    type: [Object]
  }
})

module.exports = mongoose.model('Issue', issueSchema)