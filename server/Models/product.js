// we need a model that allowes us to work with the specific entity of the database

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const productSchema = new Schema({
  id: Number,
  name: String,
  description: String,
  days: String,
  price: Number,
  attractions: String,
  rating: Number,
  img: String,
  img1: String,
  img2: String,
  img3: String,
  img4: String,
  img5: String,
  img6: String,
  region: String,
  keywords: String,
});

module.exports = mongoose.model("products", productSchema);
