import React from 'react';
import '../../assets/styles/nav.css';
import '../../assets/styles/custom-styles.css';
import Logo from '../../assets/images/website-logo.png';

function Nav() {
    return (
        <header>
            <nav class="nav-bar">
                <div class="square logo">
                    <a href="/">
                        <img
                            src={Logo}
                            alt="This is the website logo."
                            class="lav-border"
                        />
                    </a>
                </div>
                <a href="/about" class="nav-btn">
                    01. About
                </a>
                <a href="/projects" class="nav-btn">
                    02. Projects
                </a>
                <a href="/contact" class="nav-btn">
                    03. Contact
                </a>
                <a href="/resume" class="nav-btn">
                    04. Resume
                </a>
            </nav>
        </header>
    );
}

export default Nav;
