const mongoose = require('mongoose')
const Schema = mongoose.Schema
const bcrypt = require('bcrypt')

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true
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

// PRE-SAVED HOOK TO ENCRYPT USER PASSWORD ON SIGNUP
userSchema.pre('save', function (next) {
  const user = this
  if (!user.isModified("password")) return next()
  bcrypt.hash(user.password, 10, (err, hash) => {
    if (err) return next(err)
    user.password = hash
    next()
  })
})

// METHOD TO CHECK ENCRYPT PASSWORD ON LOGIN 
userSchema.methods.checkPassword = function (passwordAttempt, callback) {
  bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
    if (err) return callback(err)
    return callback(null, isMatch)
  })
}

module.exports = mongoose.model('User', userSchema)