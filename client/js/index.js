/** @jsx React.DOM */

var React = require('react');
var Router 				= require('react-router');
var RouteHandler 	= Router.RouteHandler;
var Routes 				= Router.Routes;
var Route 				= Router.Route;
var DefaultRoute 	= Router.DefaultRoute;

// App Component
var App = require('./component/app.jsx');

// Routes
var routes = (
	<Route name="app" path="/" handler={App}>
	</Route>
);


Router.run(routes, function(Handler, state){
	React.render(<Handler params={state.params} query={state.query}/>, document.body);
});
