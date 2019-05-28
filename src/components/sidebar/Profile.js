import React, { Component } from 'react'

class Profile extends Component {
	state = {
		name: 'Devinder Kumar',
		position: 'Chief officer'
	}
	render(){
		return (
            <div className="pt-5 text-center">
				<div className="small-profile"></div>
				<h5 className="mt-3 text-white">{this.state.name}</h5>
				<p className="position">{this.state.position}</p>
				<button className="update">Update Profile</button>
			</div>
		)
	}
}

export default Profile;