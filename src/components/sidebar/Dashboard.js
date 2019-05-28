import React, { Component } from 'react'

class Dashboard extends Component {
	render(){
		return (
            <div className="dashboard text-center">
				<i className={this.props.icon}></i>
				<p className="dash-link mt-3 mb-0">{this.props.name}</p>
			</div>
		)
	}
}

export default Dashboard;