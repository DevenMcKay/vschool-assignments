const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    // ENSURES INPUT AS LOWERCASE IS SAVED 
    lowercase: true,
    // ENSURES UNIQUE INPUT / ONLY ONE
    unique: true,
  },
  password: {
    type: String,
    required: true
  }, 
  memberSince: {
    type: Date, 
    default: Date.now
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
})

module.exports = mongoose.model("User", userSchema)