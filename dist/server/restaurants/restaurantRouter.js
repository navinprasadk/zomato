'use strict';
const router = require('express').Router();
const restaurant = require('./restaurantEntity');
const restaurantController = require('./restaurantController');

   router.post('/addRestaurant', restaurantController.add);
   router.delete('/deleteRestaurant/:id', restaurantController.delete);
   router.post('/updateRestaurant/:id', restaurantController.update);
   router.get('/viewRestaurant', restaurantController.view);
module.exports = router;
