// we need a model that allowes us to work with the specific entity of the database

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const blogSchema = new Schema(
    {
      id:Number,
      img:String, 
      headline:String,
      preview:Number,
      content:String
    }  
);

module.exports = mongoose.model('blogs', blogSchema);