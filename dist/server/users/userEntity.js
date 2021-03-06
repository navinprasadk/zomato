// let mongoose = require('mongoose');
//
// let userSchema = mongoose.model('user', {
//
//     userName: {
//         type: String,
//         required : true
//     },
//     password: {
//         type: String,
//         required : true
//     }
// });
//
// module.exports = {userSchema};
var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var schema = new mongoose.Schema({
   username: {
       type: String,
       required: true,
       trim: true
   },
   password: {
       type: String,
       required: true,
       trim: true
   }
});

var User = mongoose.model('user', schema);

module.exports = User;
