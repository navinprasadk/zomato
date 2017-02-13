import React from 'react';
import {Card, Grid, Icon, Button, Image} from 'semantic-ui-react'

import Cards from './Card.jsx';


class FavDisplay extends React.Component {
  constructor() {
    super();
  }
  updateComments(id, comments) {
    this.props.updateComments(id,comments).bind(this);
  }
  render() {
    let remove = this.props.remove;
    let updateComments = this.updateComments.bind(this);
    let res_data = this.props.obj.map(function(obj) {
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
          updateComments= {updateComments}
          fav = "fav"/>
        );
    });

    return (
        <div>
            <Card.Group>{res_data}</Card.Group>
        </div>
    );
  }
}

module.exports = FavDisplay;
