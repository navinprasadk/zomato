// 'use strict';
// const logger = require('./../../applogger');
// const router = require('express').Router();
// //const userCtrl = require('./userController');
//
// router.post('/add', function(req, res) {
//     logger.debug("Inside user post");
//     let user = req.body;
//     res.send('Hello '+user);
// });
//
// // Get details of all user in the system
// router.get('/', function(req, res) {
//   console.log('Inside get');
//   res.send('response from user GET route check');
// });
//
// module.exports = router;

// 'use strict';
// const logger = require('./../../applogger');
// const router = require('express').Router();
// const userModel = require('./userEntity').userModel;
// const userController = require('./userController');
//
// router.post('/add', userController.add);
//
// router.post('/find', userController.find);
//
// router.post('/update', userController.update);
//
// 	// router.delete('/delete', function(req, res){
// 	// 	logger.debug("Inside user post");
// 	// 	let db= new user(req.body);
// 	// 	db.delete();
// 	// 	db.send("Added successfully");
// 	// 	})
// 	// logger.debug("Received request"+JSON.stringify(req.body));
//   // if(req.body)
//   // {
//   //   let user = new userModel(req.body);
//   //   user.save(function(err){
//   //   if(err){
//   //     res.send(err);
//   //   }
//   //   else{
//   //      res.json({message:'User saved successfully'});
//   //   }
//   //   });
//   // }
//
//
// // Get details of all users in the system
// router.get('/', function(req, res) {
//
//   res.send('response from user GET route check');
// });
//
// module.exports = router;
'use strict';
const logger = require('./../../applogger');
const router = require('express').Router();
const mongoose = require('mongoose');
const User = require('./userEntity');
const userController = require('./userController');
const passport = require('passport');
const Strategy = require('passport-local').Strategy;

router.post('/add', userController.addUser);

router.get('/', userController.getUser);

router.delete('/delete/:id', userController.deleteUser);

router.put('/update/:id', userController.updateUser);

router.post('/login',passport.authenticate('local', {
      failureFlash: 'Invalid Username and Password',
      successFlash: "Welcome to foodie App"
   }),userController.login);

router.get('/logout', userController.logout);

module.exports = router;
