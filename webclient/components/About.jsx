let React = require('react');
let About = React.createClass({

render: function()
{
  return(
    <div className = "container-fluid">
    <div className = "row">
    <div className = "col-md-12">
		<div className = "jumbotron">
		<h2>About Us</h2>
    <p>	This is Foodie site.</p>
    <p><a className = "btn btn-primary btn-large" href = "#">Learn more</a></p>
    </div>
    </div>
  </div>
    </div>
  );
}
});

module.exports = About;
