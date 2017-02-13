let restaurant = require('./restaurantEntity');
let RestaurantController = {
  // Add the data
    add: function(req, res) {
        let newRes = new restaurant({
            "name": req.body.name,
            "id": req.body.id,
            "location": req.body.location,
            "cuisines": req.body.cuisines,
            "ratings": req.body.ratings,
            "image": req.body.image,
            "comments":req.body.comments || 'Add Comments'

        });
        newRes.save().then((doc) => {
            res.send(doc);
        }, (e) => {
            res.send(e);
        });
    },
    // Updates the value
    update: function(req, res) {
        let id = req.params.id;
        restaurant.findByIdAndUpdate(id, {
            $set: {
                comments: req.body.comments
            }
        }, {new: true}).then((doc) => {
            res.send(doc);
        }, (err) => {
            res.send(err);
        });
    },
    // Deletes the value
    delete: function(req, res) {
        let id = req.params.id;
        console.log(id);
        restaurant.remove({id:id}).then((doc) => {
            res.send(doc);
        }, (err) => {
            res.send('hello error');
        });
    },
    // Views the saved values
    view: function(req, res) {
        restaurant.find().then((doc) => {
            res.send(doc);
        }, (err) => {
            res.send('Error');
        });
    }
};
module.exports = RestaurantController;
