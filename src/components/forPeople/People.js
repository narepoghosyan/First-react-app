import React, { Component } from 'react';
import Icon from './Icon';

class People extends Component {
	
	render(){
		return (
			<div className="rect">
                <div className="small-avatar"></div>
                <p className="blue font-weight-bold mb-0">{this.props.name}</p>
                <p className="text-secondary font-weight-bold">{this.props.position}</p>
                <div className="mt-4 mb-4 for-icons">
                    <Icon icon='far fa-id-badge'/>
                    <Icon icon='fas fa-anchor'/>
                    <Icon icon='far fa-id-card'/>
                    <Icon icon='fas fa-ship'/>
                </div>
                <div className="text-center">
                    <button className="green-button mr-1">message</button>
                    <button className="blue-button mr-1">unfriend</button>
                </div>
            </div>
		)
	}
}

export default People;