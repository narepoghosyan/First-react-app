import React, { Component } from 'react';
import People from './People';

class ForPeople extends Component {
    people = [
            {
                name: 'Capt. Prakash Negi',
                position: 'Captain'
            },
            {
                name: 'Srivalsan D. Naidu',
                position: 'First officer'
            },
            {
                name: 'Master Chemical tanker',
                position: 'Cadet'
            },
            {
                name: 'Capt. Prakash Negi',
                position: 'Captain'
            }

        ]
	render(){
		return (
			<div className="row mt-5 mb-3">
                <div className="col-lg-6 col-xl-3">
                    <People 
                        name={this.people[0].name}
                        position = {this.people[0].position}
                        />   
                </div> 
                <div className="col-lg-6 col-xl-3">
                    <People 
                        name={this.people[1].name}
                        position = {this.people[1].position}
                        />   
                </div>
                <div className="col-lg-6 col-xl-3">
                    <People
                        name={this.people[2].name}
                        position = {this.people[2].position}
                    />   
                </div>
                <div className="col-lg-6 col-xl-3">
                    <People
                        name={this.people[3].name}
                        position = {this.people[3].position}
                    />   
                </div>      
            </div>
		)
	}
}

export default ForPeople;