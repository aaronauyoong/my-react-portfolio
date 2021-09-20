import React from 'react';
// import Nav from './nav/Nav';
import Navigation from './nav/Navigation';
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
        // <header className="border-b p-3 flex justify-between items-center">
        //     <span className="font-bold">
        //         AppName
        //     </span>
        //     <Navigation />
        // </header>
    );
}

export default Header;
