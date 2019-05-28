import React, { Component } from 'react';

class RightLink extends Component {
	render(){
		return (
            <li className="nav-item">
                <a href="#" className="nav-link icon">
                    <i className={this.props.icon}></i>
                </a>
            </li>
		)
	}
}

export default RightLink;