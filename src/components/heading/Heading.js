import React, { Component } from 'react';

class Heading extends Component {
	render(){
		return (
			<div>
            	<h4 className="text-dark mb-0">{this.props.heading}</h4>
            	<p className="text-secondary">{this.props.description}</p>
            </div>
		)
	}
}

export default Heading;