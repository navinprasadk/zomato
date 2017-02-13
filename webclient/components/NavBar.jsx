import React, {Component} from 'react';
import {Menu} from 'semantic-ui-react';
 let {Link} = require('react-router');
class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state;
        return (
            <Menu fixed pointing color='orange'>
                <Link to="/home">
                    <Menu.Item name='/home' active={activeItem === '/home'}
                    onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>
                </Link>
                <Link to="/favourites">
                    <Menu.Item name='favourites' active={activeItem === 'favourites'}
                      onClick={this.handleItemClick}>
                        Favourites
                    </Menu.Item>
                </Link>
                <Link to="/about">
                    <Menu.Item name='/about' active={activeItem === '/about'}
                    onClick={this.handleItemClick}>
                        About
                    </Menu.Item>
                </Link>
            </Menu>
        );
    }
}
module.exports = MenuExampleBasic;
