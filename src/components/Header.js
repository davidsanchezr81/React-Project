import React, { Component } from 'react';

class Header extends Component {

    render() {

        return (
            <header id="header">
                <div className="center">
                    <div id="logo">
                        <img src="./assets/images/anemone.jpg" className="app-logo" alt="" />
                        <span id="brand">
                            <strong>The Reef Business</strong>
                        </span>
                    </div>

                    <nav id="menu">
                        <ul>
                            <li>
                                <a href="index.html" >Home</a>
                            </li>

                            <li>
                                <a href="aboutUs.html" >About Us</a>
                            </li>

                            <li>
                                <a href="registrationForm.html" >Registration Form</a>
                            </li>
                        </ul>
                    </nav>
                    <div className="clearfix"></div>
                </div>
            </header>
        )
    }
}

export default Header;