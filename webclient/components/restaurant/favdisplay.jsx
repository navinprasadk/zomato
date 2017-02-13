import React from 'react';
import {Card, Grid, Icon, Button, Image} from 'semantic-ui-react'

import Cards from './Card.jsx';


class FavDisplay extends React.Component {
  constructor() {
    super();
  }

  render() {
    var remove = this.props.remove;
    var res_data = this.props.obj.map(function(obj) {
        return (
          <Cards
          dbId={obj._id}
          name = {obj.name}
          id = {obj.id}
          image = {obj.image}
          location = {obj.location}
          cuisines = {obj.cuisines}
          ratings = {obj.ratings}
          comments = {obj.comments}
          remove = {remove}
          fav = "fav"/>
        );
    });

    return (
        <div>
            <Card.Group >{res_data}  </Card.Group>
        </div>
    );
  }
}

module.exports = FavDisplay;
