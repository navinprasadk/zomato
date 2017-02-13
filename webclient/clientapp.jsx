let React = require('react');
let ReactDOM = require('react-dom');
let {browserHistory, Route, Router, IndexRoute} = require('react-router');
let Favourites = require('./components/restaurant/favourites');
let NavBar = require('./components/NavBar');
let About = require('./components/About');
let Home = require('./components/clientapp.jsx');
let login = require('./components/login')

let MainComp = React.createClass({
  render:function(){
    return(
      <div>
      <NavBar/>
      <br/><br/><br/><br/>
        {this.props.children}
      </div>
    );
  }
})
// ReactDOM.render(
//   <Router history = {browserHistory}>
//                 <Route path = "/" component = {MainComp}>
//                 <IndexRoute component={Home}/>
//                 <Route path = "/about" component = {About}/>
//                 <Route path = "/favourites" component = {Favourites}/>
//               </Route>
//   </Router>,document.getElementById('mountapp'));
  ReactDOM.render(
   <Router history={browserHistory}>
     <Route path='/' component={login}/>
     <Route component={MainComp}>
         <Route path='/home' component={Home}/>
         <Route path="/favourites" component={Favourites}/>
     </Route>
   </Router>, document.getElementById('mountapp'));
