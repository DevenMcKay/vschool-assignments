const mongoose = require("mongoose")
const Schema = mongoose.Schema

const shoeSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  quantity: Number,
  releaseYear: Number,
  color: {
    type: String,
    enum: ["black", "white", "grey", "red"]
  }
})

module.exports = mongoose.model("Shoes", shoeSchema)