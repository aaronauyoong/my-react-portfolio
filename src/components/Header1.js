import React from 'react';
import Navigation from './nav/Navigation1';
import Logo from '../assets/images/website-logo.png';

function Header() {
    return (
        <header className="nav-bar">
            <div className="square logo">
                <a href="/">
                    <img
                        src={Logo}
                        alt="This is the website logo."
                        className="lav-border"
                    />
                </a>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;
