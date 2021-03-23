// we need a model that allowes us to work with the specific entity of the database

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const itemSchema = new Schema(
    {
      id:Number,
      name:String, 
      description:String,
      price:Number,
      avaliability:String,
      img:String,
      category:String ,
      categoryB:String 
    }  
);

module.exports = mongoose.model('items', itemSchema);