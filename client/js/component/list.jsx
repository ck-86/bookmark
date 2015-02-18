/** @jsx React.DOM */

var React = require('react');


var Item = React.createClass({
	render: function(){
		return(
			<div>
				Item
			</div>
		);
	}
});

var List = React.createClass({
	componentWillUpdate: function(nextProps, nextState){
		console.log('List Props', nextProps.data);
	},

	render : function(){

		var urlNodes = this.props.data.map(function(url){
			console.log(url.get('url'));
			return <Item/>
		});

		return (
			<div>
				<p>List</p>
				{urlNodes}
			</div>
		);
	}
});

module.exports = List;