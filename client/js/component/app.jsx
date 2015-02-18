/** @jsx React.DOM */

var React = require('react');
var Built = require('../built-app.js');

//Components
var List = require('./list.jsx'); 

var App = React.createClass({

	getInitialState: function(){
		return {list:[]};
	},

	componentWillMount: function(){
		var self = this;

		var query = Built.app.Class('urlClass').Query();
				query.exec()
					.then(function (data){
						self.setState({list:data});
					}, function (error){
						console.log(error);
					});
	},

	componentWillUpdate: function(nextProps, nextState){
		console.log('Props', nextState);
	},

	render:function(){
		return (
			<div>
				<List data={this.state.list}/>
			</div>
		);
	}
});

module.exports = App;