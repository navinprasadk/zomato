'use strict';
let router = require('express').Router();
let restaurant = require('./restaurantEntity');
let restaurantController = require('./restaurantController');
// Routing the operation
   router.post('/addRestaurant', restaurantController.add);
   router.delete('/deleteRestaurant/:id', restaurantController.delete);
   router.put('/updateRestaurant/:id', restaurantController.update);
   router.get('/viewRestaurant', restaurantController.view);
module.exports = router;
