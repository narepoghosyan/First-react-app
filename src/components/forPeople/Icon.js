import React, { Component } from 'react';

class Icon extends Component {
	
	render(){
		return (
		    <div className="icon-div">
                <a href="#"><i className={this.props.icon}></i></a>
            </div>
		)
	}
}

export default Icon;