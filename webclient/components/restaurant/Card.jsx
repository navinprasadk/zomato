import React from 'react';
import { Card, Icon, Input, Image} from 'semantic-ui-react';
import ButtonComponent from './button.jsx';

class Cards extends React.Component {
    constructor() {
        super();
    this.state = {comments: '', status: 'delete', updateStatus: 'Update'};
    }

    addRestaurant() {
        $.ajax({
            url: 'http://localhost:8080/restaurants/addRestaurant',
            type: 'POST',
            data: {
                'name': this.props.name,
                'id': this.props.id,
                'image': this.props.image,
                'location': this.props.location,
                'cuisines': this.props.cuisines,
                'ratings': this.props.ratings
            },
            success: function(data) {
                console.log(data);
            },
            error: function(err) {
                console.log('error occurred on AJAX');
                console.log(err);
            }
        });
    }
    deleteRestaurant() {
    let id = this.props.id;

    $.ajax({
        url: `http://localhost:8080/restaurants/deleteRestaurant/${id}`,
        type: 'DELETE',
        success: function() {
            this.props.remove(id);
            // this.setState ({status : 'deleted'});
        }.bind(this)
    });
}
updateRestaurant() {
  // alert('inside updateRestaurant');
    let id = this.props.dbId;
    let comments = this.state.comments;
    $.ajax({
      url: `http://localhost:8080/restaurants/updateRestaurant/${id}`,
      type: 'PUT',
      data: {
        'comments': comments
      },
      success: function() {
        // console.log(e);
        // this.setState ({updateStatus: 'updated'});
        this.update(id, comments);
      }.bind(this)
    });
    this.setState({
      comments: ''
    });
}
update(id, comments) {
  this.props.updateComments(id, comments).bind(this);
}
updateComments(e) {
  this.setState({comments: e.target.value})
}
    render()
    {
        let fav1 = this.props.fav;
        let updateClick1 = this.updateRestaurant.bind(this);
        let but = '';
        if (this.props.fav === 'fav') {
          but= <Input fluid type = 'text' placeholder = {this.props.comments}
             onChange = {this.updateComments.bind(this)} value = {this.state.comments} />
        }
        return (
            <div className = 'cardStyle'>
                <div className = 'ui center aligned grid'>
                    <Card>
                            <Image className = 'imgStyle' src = {this.props.image}/>
                        <Card.Content>
                            <Card.Header className = 'headStyle'>{this.props.name}</Card.Header>
                            <Card.Meta className = 'metaStyle'>{this.props.cuisines}</Card.Meta>
                            <Card.Description className = 'descriptionStyle'>{this.props.location}
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra className = 'extraStyle'>
                            <a>
                              <Icon name = 'star' color = 'orange'/> {this.props.ratings}
                            </a>
                        </Card.Content>
                        <Card.Content extra>
                            {but}
                        </Card.Content>

                        <ButtonComponent fav={fav1} updateClick = {updateClick1}
                          updateStatus={this.state.updateStatus || 'Update'}
                           deleteClick={this.deleteRestaurant.bind(this)}
                          deleteStatus={this.state.status || 'Delete'}
                          updateComments={this.updateComments.bind(this)}
                          comments={this.props.comments}
                          addRestaurant={this.addRestaurant.bind(this)}
                        />

                    </Card>
                </div>
            </div>
        );
    }
}
module.exports = Cards;
