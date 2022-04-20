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
  vote: {
    type: Number
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  // $inc:
  //   { upvote: 1, downvote: -1 }
})

module.exports = mongoose.model('Issue', issueSchema)