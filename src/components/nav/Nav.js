import React from 'react';
import "../../assets/styles/nav.css";
import "../../assets/styles/custom-styles.css";


function Nav() {
    return (
        <section class="navbar">
            <a href="/about" class="nav-btn">About</a>
            <a href="/portfolio" class="nav-btn">Portfolio</a>
            <a href="/contact" class="nav-btn">Contact</a>
            <a href="/resume" class="nav-btn">Resume</a>
        </section>
    )
}

export default Nav;