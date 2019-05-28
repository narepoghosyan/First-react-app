import React, { Component } from 'react';
import Profile from './sidebar/Profile';
import Dashboard from './sidebar/Dashboard';

class Left extends Component {
	render(){
		return (
           <div className="col-sm-12 col-md-3 pr-0">
	          <div className="left">
	            <Profile/>
	            <div className="mt-5">
	              <Dashboard icon="fas fa-laptop dashboard-icon" name="DASHBOARD"/>
	              <Dashboard icon="far fa-newspaper dashboard-icon" name="JOBS"/>
	              <Dashboard icon="far fa-sticky-note dashboard-icon" name="SEA DOCS"/>
	              <Dashboard icon="fas fa-user-friends dashboard-icon" name="CONNECTIONS"/>
	            </div>
	          </div>
	        </div>
		)
	}
}

export default Left;