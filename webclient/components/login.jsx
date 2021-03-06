let React = require('react');
import {Input} from 'semantic-ui-react';
let {browserHistory} = require('react-router');
let Login = React.createClass({
getInitialState: function()
{
 return {username: '', password: '', isLoggedIn: ''};
},
handleUserName: function(e)
{
 this.setState({username: e.target.value});
},
handlePassword: function(e)
{
 this.setState({password: e.target.value});
},
LoginUser: function()
{
 $.ajax({
   url: 'http://localhost:8080/users/login',
   type: 'POST',
   datatype: 'JSON',
   data: this.state,
   success: function(res)
   {
     console.log(res.responseText);
     browserHistory.push('/home');
   },
   error: function(err)
   {
     alert("Invalid username or password");
    //  console.log(err.responseText);
   }
 });
},
 render: function() {
   return(
   <div className="Login">
        <h2 className="text-center">Login</h2>
        <div className="form-group">
        <Input className="form-control" onChange={this.handleUserName}
           placeholder="Enter a User Name..." type="text" />
        </div>
        <div className="form-group">
        <Input className="form-control" onChange={this.handlePassword}
           placeholder="Enter a Password..." type="password" />
        </div>
        <Input primary className="btn btn-primary btn-block" onClick={this.LoginUser}
          type="submit" value="Login" />
   </div>


   );
 }
});

module.exports = Login;
