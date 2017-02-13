import React from 'react';
import FavDisplay from './favdisplay.jsx';

class Favourites extends React.Component {
  constructor() {
    super();
    this.state = { obj: [] };
    this.getRestaurants();
  }

  getRestaurants() {
    $.ajax({
        url: 'http://localhost:8080/restaurants/viewRestaurant',
        type: 'GET',
        success: function(data) {
            this.setState({obj: data});
        }.bind(this),
        error: function(err) {
            console.log('error occurred on AJAX');
            console.log(err);
        }
    });
  }
  remove(id) {
    let json1 = this.state.obj;
    let arr = [];
    for(let item of json1) {
      if(item.id !== id) {
        arr.push(item);
      }
    }
    this.setState({obj: arr});
  }
  updateComments(id, comments) {
    let json1 = this.state.obj;
    for(let item of json1) {
      if(item._id === id) {
        item.comments = comments;
      }
    }
    this.setState({obj: json1});
  }
  render() {
    return (
      <FavDisplay obj = {this.state.obj}
        remove={this.remove.bind(this)}
         updateComments={this.updateComments.bind(this)}/>
    );
  }
}
module.exports = Favourites;
