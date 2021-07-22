import React from 'react';
import "../../assets/styles/nav.css";
import "../../assets/styles/custom-styles.css";


function Nav() {
    return (
        <header >
            <nav class="nav-bar">
                <a href="/" class="nav-btn">Home</a>
                <a href="/about" class="nav-btn">About</a>
                <a href="/portfolio" class="nav-btn">Portfolio</a>
                <a href="/contact" class="nav-btn">Contact</a>
                <a href="/resume" class="nav-btn">Resume</a>
            </nav>
        </header>
    )
}

export default Nav;