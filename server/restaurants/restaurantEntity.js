let mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Defines the schema
let mdb = new mongoose.Schema( {
  name:String,
  id:Number,
  location:{type:String,unique:true},
  cuisines:String,
  ratings:Number,
  image:String,
  comments:{type:String}
});
let restaur = mongoose.model('restaurant',mdb)
module.exports = restaur;
