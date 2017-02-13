// let React  =  require('react');
// let {Link}  =  require('react-router');
// let NavBar  =  React.createClass({
//
// render:function(){
//   return(
//     <div className = "container-fluid">
//     <ul className = "nav navbar-nav">
//     <li><Link to = "/">Home</Link></li>
//     <li><Link to = "/favourites">Favourites</Link></li>
//     <li><Link to = "/about">About Us</Link></li>
//     </ul>
//     </div>
//   );
// }
// });
//
// module.exports = NavBar;

import React, {Component} from 'react'
import {Menu} from 'semantic-ui-react'
 let {Link}  =  require('react-router');
class MenuExampleBasic extends Component {
    state = {}

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <Menu pointing color='orange'>
                <Link to="/">
                    <Menu.Item name='/' active={activeItem === '/'} onClick={this.handleItemClick}>
                        Home
                    </Menu.Item>
                </Link>
                <Link to="/favourites">
                    <Menu.Item name='favourites' active={activeItem === 'favourites'} onClick={this.handleItemClick}>
                        Favourites
                    </Menu.Item>
                </Link>
            </Menu>
        )
    }
}
module.exports = MenuExampleBasic;
