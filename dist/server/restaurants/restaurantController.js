var restaurant =  require('./restaurantEntity');
var RestaurantController = {
  add:function(req, res) {
    console.log("Inside post");
      let newRes=new restaurant({
      "name":req.body.name,
      "address":req.body.address,
      "cuisines":req.body.cuisines,
      "ratings":req.body.ratings,
      "image":req.body.image
    });
      console.log("model created"+newRes);
          newRes.save().then((doc) =>{
            console.log("Saved +"+doc);
        res.send("Saved");
      }, (e)=>{
          console.log("Error");
        res.send(e);
      });
    },


    update:function(req, res) {
      let id = req.params.id;
       users.findByIdAndUpdate(id,{$set:{resLoc:req.body.resLoc}},{new:true}).then((doc)=>{
      res.send(doc);
    },(err)=>{

      res.send('Error');
    });
  },
  delete:(req, res) => {
  var id = req.params.id;
  Todo.findByIdAndRemove(id).then((doc) => {
    res.send(doc);
  },(err)=>{

    res.send('Error');
  });
},
view:function(req,res) {

  //  console.log('Inside get');
   restaurant.find().then((doc)=>{

   res.send(doc);
   },(err)=>{
   console.log(err);
   res.send('Error');
   });

}
};
module.exports = RestaurantController;
