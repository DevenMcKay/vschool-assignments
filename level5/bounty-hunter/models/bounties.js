const mongoose = require("mongoose")
const Schema = mongoose.Schema

const bountySchema = new Schema({
  First_Name: String,
  Last_Name: String,
  isDead: Boolean,
  Bounty_Amount: Number,
  Type: String,
  Img: String
})

module.exports = mongoose.model("Bounties", bountySchema)