import React, { Component } from 'react';
import Link from './Link';
import RightLink from './RightLink';


class Navbar extends Component {
	render(){
		return (
            <nav className="navbar navbar-expand-lg navbar-light bg-white p-0 pr-4 pl-4">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item search">
                            <a className="nav-link pb-4 pt-4"href="#">
                        		<i className="fas fa-search"></i>
                        	</a>
                        </li>
                        <Link name="Blog"/>
                        <Link name="Questions"/>
                        <Link name="Companies"/>
                        <Link name="Contact" />
                    </ul>
                    <ul className="nav navbar-nav ml-auto">
                        <RightLink icon="fas fa-cog"/>
                        <li className="nav-item position-relative">
                            <a href="#" className="nav-link icon">
                            	<i className="far fa-envelope-open"></i>
                            </a>
                            <div className="quantity">4</div>
                        </li>
                        <RightLink icon="fas fa-sign-out-alt"/>
                    </ul>
                </div>
            </nav>
		)
	}
}

export default Navbar;