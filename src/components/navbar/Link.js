import React, { Component } from 'react';

class Link extends Component {
	render(){
		return (
            <li className="nav-item">
                <a className="nav-link link pb-4 pt-4 mr-4" href="#">{this.props.name}</a>
            </li>
		)
	}
}

export default Link;