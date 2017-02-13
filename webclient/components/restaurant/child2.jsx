import React from 'react'
import ReactDOM from 'react-dom';
import Cards from './Card.jsx';
import {Card, Icon, Image} from 'semantic-ui-react'
class DisplayComponent extends React.Component {
    constructor() {
        super();
    }
    render()
    {
        var res_data = this.props.handle2.map(function(objs) {
            return(
              <Cards name = {objs.restaurant.name}
                id = {objs.restaurant.id}
                image = {objs.restaurant.featured_image}
                location = {objs.restaurant.location.address}
                cuisines = {objs.restaurant.cuisines}
                ratings = {objs.restaurant.user_rating.aggregate_rating}/>)

        });
        return (
            <div>
                <Card.Group>{res_data}</Card.Group>
            </div>
        );
    }

}
module.exports = DisplayComponent;
