import React, { Component } from 'react';

class Link extends Component {
	render(){
		return (
            <li className="nav-item">
                <a className="nav-link" href="#">{this.props.name}</a>
            </li>
		)
	}
}

export default Link;