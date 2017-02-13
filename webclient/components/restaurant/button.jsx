import React from 'react'
import {Icon, Button} from 'semantic-ui-react'
class ButtonComponent extends React.Component{
  constructor() {
      super();
  }
  render(){
    let but = "";
    if (this.props.fav === "fav") {
        but = (
          <div>

                <Button.Group fluid>
                    <Button color ='orange' floated ='right' className ='buttonStyle'
                      onClick = {this.props.updateClick} >{this.props.updateStatus}</Button>
                    <Button inverted color ='orange' floated ='left' className ='buttonStyle'
                      onClick = {this.props.deleteClick} >{this.props.deleteStatus}</Button>
                </Button.Group>
            </div>
        );
    } else {
        but = (

                <Button fluid color ='orange' floated ='right' className ='buttonStyle'
                  onClick = {this.props.addRestaurant}>
                    save
                    <Icon name = 'right heart'/>
                </Button>

        );
    }

    return(
      <div>
        {but}
      </div>
    )
  }
}
module.exports=ButtonComponent;
