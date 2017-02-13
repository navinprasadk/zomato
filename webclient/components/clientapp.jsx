import React from 'react';
import ReactDOM from 'react-dom';
let ChildComponent = require('./restaurant/index.jsx');

class MainComponent extends React.Component {
    constructor() {
        super();
				this.state = {result:[]};
    }

		getRestaurantCityFromZomato(city,  Cuisine)
    {
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/locations?query=" + city,
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader("user-key",  "2f03afa715b5c97179b12454e9e9f4e7");
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + JSON.stringify(data));
								// this.setState({result : data.restaurants}).bind(this);
								this.getRestaurantDataFromZomato(data.location_suggestions[0].city_id, Cuisine)
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }
    getRestaurantDataFromZomato(id,  cus)
    {
        $.ajax({
            url: "https://developers.zomato.com/api/v2.1/search?entity_id=" + id + "&entity_type=city&q=" + cus + "&count=20&apikey=2f03afa715b5c97179b12454e9e9f4e7",
            type: 'GET',
            beforeSend: function(request) {
                request.setRequestHeader("user-key",  "2f03afa715b5c97179b12454e9e9f4e7");
            },
            success: function(data) {
                console.log('Successfully got JSON from Zomato' + JSON.stringify(data));
								this.setState({result : data.restaurants}).bind(this);
            }.bind(this),
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }.bind(this)
        });
    }
		render() {
        return (
            <div>
                <ChildComponent.Child1 handle = {this.getRestaurantCityFromZomato.bind(this)}/>
								<ChildComponent.Child2 handle2 = {this.state.result}/>
            </div>
        );
    }
}
module.exports = MainComponent;
// ReactDOM.render(
//     <MainComponent/>,  document.getElementById('mountapp'));
