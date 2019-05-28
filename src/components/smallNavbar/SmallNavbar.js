import React, { Component } from 'react';
import Link from './Link';

class SmallNavbar extends Component {
	render(){
		return (
            <nav className="navbar navbar-expand-sm bg-transparent p-0 small-nav">
                <ul className="navbar-nav">
                    <Link name="CONNECTION"/>
                    <Link name="FIND NEW CONNECTIONS"/>
                </ul>
            </nav>
		)
	}
}

export default SmallNavbar;