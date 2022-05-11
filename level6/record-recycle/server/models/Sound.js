const mongoose = require('mongoose')
const Schema = mongoose.Schema

const soundSchema = new Schema({
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
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  tags: {
    type: [String]
  },
  comments: {
    type: [String]
  },
  fileName: {
    type: String,
    required: true
  },
  filePath: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Sound', soundSchema)