const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var mdb = new mongoose.Schema( {
  name:String,
  address:String,
  cuisines:String,
  ratings:Number,
  image:String

});
 var restaur = mongoose.model('restaurant',mdb)
module.exports = restaur;
