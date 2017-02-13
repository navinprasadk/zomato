import React from 'react';
import {Input} from 'semantic-ui-react'
import {Button, Segment} from 'semantic-ui-react'
import {Container, Divider, Grid} from 'semantic-ui-react'

class Child1 extends React.Component {
    constructor() {
        super();
        this.state = {
            city: '',
            Cuisine: ''
        }
    }
    changeCity(e) {
        this.setState({city: e.target.value})
    }
    changeCuisine(e) {
        this.setState({Cuisine: e.target.value})
    }
    a()
    {
        this.props.handle(this.state.city, this.state.Cuisine);
    }
    render() {
        return (
            <Container textAlign = 'center'>
              <Divider/>
              <Grid.Column>
                <div className = 'searchBox'>
                    <Input  placeholder = 'City' type = "text" ref = 'city' onChange = {this.changeCity.bind(this)} value = {this.state.city}/>
                    <Input  placeholder = 'Cuisine' type = "text" ref = 'Cuisine' onChange = {this.changeCuisine.bind(this)} value = {this.state.Cuisine}/>
                    <Button  color = 'orange' onClick = {this.a.bind(this)}>Search Restaurant</Button>

                </div>
              </Grid.Column>
                <Divider/>

            </Container>
        );
    }
}
module.exports = Child1;
