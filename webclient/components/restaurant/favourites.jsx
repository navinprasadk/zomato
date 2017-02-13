import React from 'react';
import FavDisplay from './favdisplay.jsx';

class Favourites extends React.Component {
  constructor() {
    super();
    this.state = { obj : [] };
    this.getRestaurants();
  }

  getRestaurants() {
    $.ajax({
        url: "http://localhost:8080/restaurants/viewRestaurant",
        type: 'GET',
        success: function(data) {
            this.setState({obj:data}).bind(this);
        }.bind(this),
        error: function(err) {
            console.log('error occurred on AJAX');
            console.log(err);
        }.bind(this)
    });
  }
  remove(id){
    var json1=this.state.obj;
    var arr=[];
    for(var item of json1) {
      if(item.id!=id) {
        arr.push(item);
      }
    }
    this.setState({obj:arr});
  }



  render() {
    return (
      <FavDisplay obj={this.state.obj} remove={this.remove.bind(this)}/>
    );
  }
}

module.exports = Favourites;
