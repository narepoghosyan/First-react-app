import React, { Component } from 'react';
import Navbar from './navbar/Navbar';
import Heading from './heading/Heading';
import SmallNavbar from './smallNavbar/SmallNavbar';
import ForPeople from './forPeople/ForPeople';
import Dots from './forPeople/Dots';

class Right extends Component {
	state = {
		heading: 'Connections',
		description: 'Meet your colleagues, make new connections'
	}
    
	render(){
		return (
          <div className="col-sm-12 col-md-9 p-0">
	          <Navbar/>
	          <div className="main">
                <Heading 
                    heading={this.state.heading}
                    description={this.state.description}
                />
                <SmallNavbar/>
                <ForPeople/>
                <ForPeople/>
                <Dots/>
	          </div>
          </div>
		)
	}
}

export default Right;